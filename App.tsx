import React, { useState, useEffect, useMemo, useRef } from 'react';
import { 
  BookOpen, Search, Beaker, Zap, Globe, Leaf, 
  ArrowLeft, ArrowRight, Brain, Target, MessageSquare, X, 
  ChevronRight, CheckCircle, Info, Sparkles, ChevronDown, ChevronUp,
  Droplets, Calculator, Lightbulb, Play, RotateCcw,
  Atom, Layers, Grid, ShieldAlert, FlaskConical, Triangle, HelpCircle,
  Skull, Flame, Bomb, Biohazard, AlertCircle, Monitor, PanelLeft, Heart,
  User, LogOut, Home, BarChart3, GraduationCap, Layout,
  FileText, ClipboardCheck, ListChecks, Lock, Download, ExternalLink,
  ClipboardList, Eye, EyeOff, Sun, CloudRain, Wind, Mountain,
  Trees, Dog, Fish, Bird, Bug, MoveRight,
  Battery, Lightbulb as Bulb, ToggleLeft, ToggleRight, Activity, Plus, Minus,
  MousePointerClick, RefreshCcw, Radio, Recycle, Droplet, Scale, Ruler
} from 'lucide-react';
import { STUDY_LIBRARY, PRACTICE_QUIZZES, FLASHCARDS } from './constants';
import { Subject, StudySection, StudyNote, Flashcard as FlashcardType, QuizQuestion } from './types';
import { getAITutorResponse } from './services/gemini';

// --- Diagram Components ---

const DensityVisual = () => {
  const [mass, setMass] = useState(50); // grams
  const [volume, setVolume] = useState(50); // mL
  const density = (mass / volume).toFixed(2);
  const dVal = parseFloat(density);
  const isFloating = dVal < 1.0;
  
  const size = Math.min(Math.max(volume * 1.5, 40), 100); 
  
  return (
    <div className="flex flex-col gap-6 w-full max-w-lg p-6 bg-white rounded-3xl border border-slate-200 shadow-sm">
      <div className="flex justify-between items-end h-64 border-b-4 border-blue-200 relative bg-sky-50 rounded-xl overflow-hidden">
        <div className="absolute bottom-0 w-full h-2/3 bg-blue-500/20 backdrop-blur-sm border-t border-blue-300 flex items-start justify-center pt-2">
          <span className="text-blue-600 text-xs font-bold bg-white/60 px-2 py-1 rounded-full">Water (1.0 g/mL)</span>
        </div>
        <div 
          className="absolute left-1/2 -translate-x-1/2 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] flex items-center justify-center text-white font-bold text-xs shadow-xl border-2 border-white/30 z-10"
          style={{ 
            width: `${size}px`, 
            height: `${size}px`,
            borderRadius: '20%',
            backgroundColor: isFloating ? '#3b82f6' : '#ef4444', 
            bottom: isFloating ? '60%' : '10%',
            transform: isFloating ? 'translate(-50%, 0) rotate(-5deg)' : 'translate(-50%, 0) rotate(0deg)'
          }}
        >
          {density}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-2">
          <div className="flex justify-between text-xs font-bold text-slate-500">
            <span className="flex items-center gap-1"><Scale className="w-3 h-3" /> Mass</span>
            <span>{mass} g</span>
          </div>
          <input 
            type="range" min="10" max="200" value={mass} 
            onChange={(e) => setMass(Number(e.target.value))}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600 hover:accent-indigo-500"
          />
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-xs font-bold text-slate-500">
            <span className="flex items-center gap-1"><Ruler className="w-3 h-3" /> Volume</span>
            <span>{volume} mL</span>
          </div>
          <input 
            type="range" min="10" max="200" value={volume} 
            onChange={(e) => setVolume(Number(e.target.value))}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-500 hover:accent-emerald-400"
          />
        </div>
      </div>

      <div className="bg-slate-100 p-4 rounded-2xl flex items-center justify-between text-sm shadow-inner">
        <div className="font-mono text-slate-600 font-medium">
          D = <span className="text-indigo-600 font-bold">{mass}</span> / <span className="text-emerald-600 font-bold">{volume}</span>
        </div>
        <div className="font-black text-xl text-slate-800">
          = {density} <span className="text-xs text-slate-400 font-bold uppercase">g/mL</span>
        </div>
      </div>
    </div>
  );
};

const OhmsLawTriangle = () => {
  const [solveFor, setSolveFor] = useState<'V' | 'I' | 'R'>('V');
  const [v, setV] = useState(12);
  const [i, setI] = useState(2);
  const [r, setR] = useState(6);

  const calculate = () => {
    switch(solveFor) {
      case 'V': return (i * r).toFixed(1);
      case 'I': return r === 0 ? '0' : (v / r).toFixed(2);
      case 'R': return i === 0 ? '0' : (v / i).toFixed(2);
    }
  };

  return (
    <div className="flex flex-col items-center gap-8 w-full max-w-md">
      <div className="relative w-48 h-40 drop-shadow-xl cursor-pointer group select-none">
        <div className="absolute inset-0 flex flex-col">
          <div onClick={() => setSolveFor('V')} className={`h-1/2 w-full bg-indigo-600 rounded-t-full flex items-center justify-center text-white font-black text-2xl border-b-2 border-white transition-all ${solveFor === 'V' ? 'bg-indigo-700 scale-105 shadow-lg' : 'hover:bg-indigo-500'}`}>V</div>
          <div className="h-1/2 w-full flex">
            <div onClick={() => setSolveFor('I')} className={`w-1/2 bg-indigo-500 rounded-bl-full flex items-center justify-center text-white font-black text-2xl border-r border-white transition-all ${solveFor === 'I' ? 'bg-indigo-700 scale-105 shadow-lg' : 'hover:bg-indigo-400'}`}>I</div>
            <div onClick={() => setSolveFor('R')} className={`w-1/2 bg-indigo-500 rounded-br-full flex items-center justify-center text-white font-black text-2xl border-l border-white transition-all ${solveFor === 'R' ? 'bg-indigo-700 scale-105 shadow-lg' : 'hover:bg-indigo-400'}`}>R</div>
          </div>
        </div>
      </div>

      <div className="w-full bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-6">
        <div className="flex justify-between items-center border-b border-slate-100 pb-4">
           <span className="text-xs font-black uppercase text-indigo-600 tracking-widest bg-indigo-50 px-3 py-1 rounded-full">Solving for {solveFor === 'V' ? 'Voltage' : solveFor === 'I' ? 'Current' : 'Resistance'}</span>
        </div>
        
        <div className="space-y-4">
          {solveFor !== 'V' && (
             <div className="flex items-center gap-4 animate-in slide-in-from-left-2">
               <label className="w-8 font-black text-indigo-600 text-lg">V</label>
               <input type="number" value={v} onChange={e => setV(Number(e.target.value))} className="flex-1 p-3 bg-slate-50 rounded-xl border border-slate-200 font-bold text-slate-700 outline-none focus:ring-2 focus:ring-indigo-500 transition-all" />
               <span className="text-xs font-bold text-slate-400 w-12 text-right">Volts</span>
             </div>
          )}
          {solveFor !== 'I' && (
             <div className="flex items-center gap-4 animate-in slide-in-from-left-2">
               <label className="w-8 font-black text-indigo-500 text-lg">I</label>
               <input type="number" value={i} onChange={e => setI(Number(e.target.value))} className="flex-1 p-3 bg-slate-50 rounded-xl border border-slate-200 font-bold text-slate-700 outline-none focus:ring-2 focus:ring-indigo-500 transition-all" />
               <span className="text-xs font-bold text-slate-400 w-12 text-right">Amps</span>
             </div>
          )}
          {solveFor !== 'R' && (
             <div className="flex items-center gap-4 animate-in slide-in-from-left-2">
               <label className="w-8 font-black text-indigo-400 text-lg">R</label>
               <input type="number" value={r} onChange={e => setR(Number(e.target.value))} className="flex-1 p-3 bg-slate-50 rounded-xl border border-slate-200 font-bold text-slate-700 outline-none focus:ring-2 focus:ring-indigo-500 transition-all" />
               <span className="text-xs font-bold text-slate-400 w-12 text-right">Ohms</span>
             </div>
          )}
        </div>

        <div className="pt-4 border-t border-slate-100 flex justify-between items-center bg-slate-50 p-4 rounded-xl">
           <span className="font-mono text-sm text-slate-500 font-medium">
             {solveFor === 'V' ? `V = ${i} × ${r}` : solveFor === 'I' ? `I = ${v} ÷ ${r}` : `R = ${v} ÷ ${i}`}
           </span>
           <span className="text-3xl font-black text-slate-800">{calculate()} <span className="text-sm font-bold text-slate-400">{solveFor === 'V' ? 'V' : solveFor === 'I' ? 'A' : 'Ω'}</span></span>
        </div>
      </div>
    </div>
  )
};

const PowerTriangle = () => {
  const [solveFor, setSolveFor] = useState<'P' | 'V' | 'I'>('P');
  const [p, setP] = useState(60);
  const [v, setV] = useState(120);
  const [i, setI] = useState(0.5);

  const calculate = () => {
    switch(solveFor) {
      case 'P': return (v * i).toFixed(1);
      case 'V': return i === 0 ? '0' : (p / i).toFixed(1);
      case 'I': return v === 0 ? '0' : (p / v).toFixed(2);
    }
  };

  return (
    <div className="flex flex-col items-center gap-8 w-full max-w-md">
      <div className="relative w-48 h-40 drop-shadow-xl cursor-pointer group select-none">
        <div className="absolute inset-0 flex flex-col">
          <div onClick={() => setSolveFor('P')} className={`h-1/2 w-full bg-amber-500 rounded-t-full flex items-center justify-center text-white font-black text-2xl border-b-2 border-white transition-all ${solveFor === 'P' ? 'bg-amber-600 scale-105 shadow-lg' : 'hover:bg-amber-400'}`}>P</div>
          <div className="h-1/2 w-full flex">
            <div onClick={() => setSolveFor('V')} className={`w-1/2 bg-amber-400 rounded-bl-full flex items-center justify-center text-white font-black text-2xl border-r border-white transition-all ${solveFor === 'V' ? 'bg-amber-600 scale-105 shadow-lg' : 'hover:bg-amber-300'}`}>V</div>
            <div onClick={() => setSolveFor('I')} className={`w-1/2 bg-amber-400 rounded-br-full flex items-center justify-center text-white font-black text-2xl border-l border-white transition-all ${solveFor === 'I' ? 'bg-amber-600 scale-105 shadow-lg' : 'hover:bg-amber-300'}`}>I</div>
          </div>
        </div>
      </div>

      <div className="w-full bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-6">
        <div className="flex justify-between items-center border-b border-slate-100 pb-4">
           <span className="text-xs font-black uppercase text-amber-600 tracking-widest bg-amber-50 px-3 py-1 rounded-full">Solving for {solveFor === 'P' ? 'Power' : solveFor === 'V' ? 'Voltage' : 'Current'}</span>
        </div>
        
        <div className="space-y-4">
          {solveFor !== 'P' && (
             <div className="flex items-center gap-4 animate-in slide-in-from-left-2">
               <label className="w-8 font-black text-amber-600 text-lg">P</label>
               <input type="number" value={p} onChange={e => setP(Number(e.target.value))} className="flex-1 p-3 bg-slate-50 rounded-xl border border-slate-200 font-bold text-slate-700 outline-none focus:ring-2 focus:ring-amber-500 transition-all" />
               <span className="text-xs font-bold text-slate-400 w-12 text-right">Watts</span>
             </div>
          )}
          {solveFor !== 'V' && (
             <div className="flex items-center gap-4 animate-in slide-in-from-left-2">
               <label className="w-8 font-black text-amber-500 text-lg">V</label>
               <input type="number" value={v} onChange={e => setV(Number(e.target.value))} className="flex-1 p-3 bg-slate-50 rounded-xl border border-slate-200 font-bold text-slate-700 outline-none focus:ring-2 focus:ring-amber-500 transition-all" />
               <span className="text-xs font-bold text-slate-400 w-12 text-right">Volts</span>
             </div>
          )}
          {solveFor !== 'I' && (
             <div className="flex items-center gap-4 animate-in slide-in-from-left-2">
               <label className="w-8 font-black text-amber-400 text-lg">I</label>
               <input type="number" value={i} onChange={e => setI(Number(e.target.value))} className="flex-1 p-3 bg-slate-50 rounded-xl border border-slate-200 font-bold text-slate-700 outline-none focus:ring-2 focus:ring-amber-500 transition-all" />
               <span className="text-xs font-bold text-slate-400 w-12 text-right">Amps</span>
             </div>
          )}
        </div>

        <div className="pt-4 border-t border-slate-100 flex justify-between items-center bg-slate-50 p-4 rounded-xl">
           <span className="font-mono text-sm text-slate-500 font-medium">
             {solveFor === 'P' ? `P = ${v} × ${i}` : solveFor === 'V' ? `V = ${p} ÷ ${i}` : `I = ${p} ÷ ${v}`}
           </span>
           <span className="text-3xl font-black text-slate-800">{calculate()} <span className="text-sm font-bold text-slate-400">{solveFor === 'P' ? 'W' : solveFor === 'V' ? 'V' : 'A'}</span></span>
        </div>
      </div>
    </div>
  )
};

const BohrModel = () => {
  const [atomicNumber, setAtomicNumber] = useState(6);
  const elements: Record<number, string> = {
    1: 'Hydrogen', 2: 'Helium', 3: 'Lithium', 4: 'Beryllium', 5: 'Boron',
    6: 'Carbon', 7: 'Nitrogen', 8: 'Oxygen', 9: 'Fluorine', 10: 'Neon',
    11: 'Sodium', 12: 'Magnesium', 13: 'Aluminum', 14: 'Silicon', 15: 'Phosphorus',
    16: 'Sulfur', 17: 'Chlorine', 18: 'Argon'
  };
  
  const shells = atomicNumber <= 2 ? [atomicNumber] 
    : atomicNumber <= 10 ? [2, atomicNumber - 2] 
    : [2, 8, Math.min(8, atomicNumber - 10)];

  const valence = shells[shells.length - 1];

  return (
    <div className="bg-slate-900 rounded-[2.5rem] p-8 flex flex-col items-center gap-8 shadow-2xl w-full max-w-md border border-slate-800">
       <div className="text-center space-y-2">
         <h4 className="text-white text-3xl font-black tracking-tight">{elements[atomicNumber] || 'Element'}</h4>
         <div className="flex gap-2 justify-center">
            <span className="text-indigo-400 text-[10px] font-black uppercase tracking-widest bg-indigo-900/50 px-3 py-1 rounded-full border border-indigo-500/30">Atomic #: {atomicNumber}</span>
            <span className="text-emerald-400 text-[10px] font-black uppercase tracking-widest bg-emerald-900/50 px-3 py-1 rounded-full border border-emerald-500/30">Valence: {valence}</span>
         </div>
       </div>
       
       <div className="relative w-64 h-64 flex items-center justify-center my-4">
          <div className="absolute w-16 h-16 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex flex-col items-center justify-center font-black border-4 border-slate-900/50 shadow-[0_0_30px_rgba(239,68,68,0.4)] text-white z-20">
             <span className="text-xs leading-none">{atomicNumber}p</span>
             <span className="text-[10px] opacity-70 leading-none mt-0.5">{Math.round(atomicNumber * 2)}n</span>
          </div>
          
          {shells.map((count, index) => {
             const size = (index + 1) * 60 + 60; 
             return (
               <div key={index} className="absolute rounded-full border-2 border-slate-700/50" style={{width: size, height: size}}>
                  {Array.from({length: count}).map((_, eIdx) => {
                     const angle = (eIdx / count) * 2 * Math.PI - Math.PI / 2;
                     const r = size / 2;
                     return (
                       <div 
                         key={eIdx} 
                         className="absolute w-4 h-4 bg-yellow-400 rounded-full shadow-[0_0_15px_rgba(250,204,21,0.8)] flex items-center justify-center text-[8px] font-black text-yellow-900"
                         style={{ 
                           left: '50%', 
                           top: '50%', 
                           transform: `translate(${r * Math.cos(angle) - 8}px, ${r * Math.sin(angle) - 8}px)` 
                         }} 
                       >e-</div>
                     )
                  })}
               </div>
             )
          })}
       </div>

       <div className="w-full space-y-4">
         <div className="flex justify-between text-xs font-bold text-slate-500 uppercase tracking-widest px-1">
            <span>Hydrogen (1)</span>
            <span>Argon (18)</span>
         </div>
         <input 
           type="range" min="1" max="18" value={atomicNumber} 
           onChange={(e) => setAtomicNumber(Number(e.target.value))} 
           className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500 hover:accent-indigo-400" 
         />
         <div className="text-center font-mono text-xs text-slate-400">
            Configuration: <span className="text-yellow-400 font-bold">{shells.join(' - ')}</span>
         </div>
       </div>
    </div>
  )
}

const CircuitVisual = ({ type }: { type: 'simple' | 'series' | 'parallel' }) => {
  const [on, setOn] = useState(false);
  
  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <div className={`w-full max-w-xs h-48 border-4 ${on ? 'border-yellow-400 shadow-[0_0_30px_rgba(250,204,21,0.2)]' : 'border-slate-800'} rounded-[2rem] relative flex items-center justify-center bg-white transition-all duration-500`}>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white p-2 z-10">
          <Battery className={`w-12 h-12 ${on ? 'text-green-500 fill-green-500 animate-pulse' : 'text-slate-800'}`} />
        </div>
        
        <div onClick={() => setOn(!on)} className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white p-3 cursor-pointer hover:scale-110 transition-transform rounded-full shadow-md border border-slate-100 z-10 group">
          {on ? <ToggleRight className="w-12 h-12 text-green-500 fill-green-100" /> : <ToggleLeft className="w-12 h-12 text-red-500 group-hover:text-red-600" />}
        </div>
        
        <div className={`absolute inset-0 m-4 border-2 rounded-xl transition-colors duration-500 ${on ? 'border-yellow-200' : 'border-slate-100'}`} />

        {type === 'simple' && (
           <Bulb className={`w-16 h-16 transition-all duration-300 relative z-0 ${on ? 'text-yellow-400 fill-yellow-400 drop-shadow-[0_0_25px_rgba(250,204,21,0.8)] scale-110' : 'text-slate-200'}`} />
        )}
        
        {type === 'series' && (
          <div className="flex gap-8 relative z-0">
            <Bulb className={`w-10 h-10 transition-all duration-300 ${on ? 'text-yellow-400 fill-yellow-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.6)]' : 'text-slate-200'}`} />
            <Bulb className={`w-10 h-10 transition-all duration-300 ${on ? 'text-yellow-400 fill-yellow-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.6)]' : 'text-slate-200'}`} />
          </div>
        )}
        
        {type === 'parallel' && (
          <div className="flex flex-col gap-8 w-full px-16 relative z-0">
             <div className="border-b-4 border-slate-800 h-0 relative flex justify-center">
               <Bulb className={`w-10 h-10 absolute -top-5 bg-white px-1 transition-all duration-300 ${on ? 'text-yellow-400 fill-yellow-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.8)]' : 'text-slate-200'}`} />
             </div>
             <div className="border-b-4 border-slate-800 h-0 relative flex justify-center">
               <Bulb className={`w-10 h-10 absolute -top-5 bg-white px-1 transition-all duration-300 ${on ? 'text-yellow-400 fill-yellow-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.8)]' : 'text-slate-200'}`} />
             </div>
          </div>
        )}
      </div>
      
      <div className={`px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-colors ${on ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-500'}`}>
        {on ? 'Current Flowing' : 'Circuit Open'}
      </div>
    </div>
  );
};

const MatterTree = () => {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({'matter': true});
  const toggle = (key: string) => setExpanded(prev => ({...prev, [key]: !prev[key]}));

  return (
    <div className="flex flex-col items-center w-full max-w-lg transition-all animate-in fade-in zoom-in-95">
      <button onClick={() => toggle('matter')} className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold text-sm shadow-lg hover:bg-indigo-500 transition-all active:scale-95">Matter</button>
      {expanded['matter'] && (
        <>
          <div className="h-6 w-0.5 bg-slate-300"></div>
          <div className="w-full h-0.5 bg-slate-300 relative mb-4">
            <div className="absolute left-[25%] -top-0 h-4 w-0.5 bg-slate-300"></div>
            <div className="absolute right-[25%] -top-0 h-4 w-0.5 bg-slate-300"></div>
          </div>
          <div className="flex justify-between w-full gap-4">
            <div className="flex flex-col items-center flex-1">
              <button onClick={() => toggle('pure')} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg font-bold text-xs border border-blue-200 hover:bg-blue-200 transition-colors w-full">Pure Substances</button>
              {expanded['pure'] && (
                <div className="mt-2 flex flex-col items-center gap-2 w-full animate-in slide-in-from-top-2">
                   <div className="bg-white border border-slate-200 px-3 py-2 rounded-lg text-[10px] font-bold text-slate-600 w-full text-center shadow-sm">Elements (Gold)</div>
                   <div className="bg-white border border-slate-200 px-3 py-2 rounded-lg text-[10px] font-bold text-slate-600 w-full text-center shadow-sm">Compounds (H₂O)</div>
                </div>
              )}
            </div>
            <div className="flex flex-col items-center flex-1">
              <button onClick={() => toggle('mix')} className="bg-emerald-100 text-emerald-800 px-4 py-2 rounded-lg font-bold text-xs border border-emerald-200 hover:bg-emerald-200 transition-colors w-full">Mixtures</button>
              {expanded['mix'] && (
                <div className="mt-2 flex flex-col items-center gap-2 w-full animate-in slide-in-from-top-2">
                   <div className="bg-white border border-slate-200 px-3 py-2 rounded-lg text-[10px] font-bold text-slate-600 w-full text-center shadow-sm">Homogeneous (Salt water)</div>
                   <div className="bg-white border border-slate-200 px-3 py-2 rounded-lg text-[10px] font-bold text-slate-600 w-full text-center shadow-sm">Heterogeneous (Pizza)</div>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const BioticAbioticVisual = () => (
  <div className="grid grid-cols-2 gap-4 w-full max-w-md group">
    <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-3xl flex flex-col items-center gap-3 transition-all hover:bg-emerald-100 hover:scale-105 duration-300 cursor-help">
      <Leaf className="w-10 h-10 text-emerald-600" />
      <h5 className="font-black text-emerald-900 text-sm">BIOTIC (Living)</h5>
      <div className="text-[10px] text-emerald-700 text-center font-medium space-y-1 opacity-60 group-hover:opacity-100 transition-opacity">
        <p>Plants • Animals</p>
        <p>Bacteria • Fungi</p>
        <p>Dead Organisms</p>
      </div>
    </div>
    <div className="bg-sky-50 border border-sky-100 p-6 rounded-3xl flex flex-col items-center gap-3 transition-all hover:bg-sky-100 hover:scale-105 duration-300 cursor-help">
      <Sun className="w-10 h-10 text-sky-600" />
      <h5 className="font-black text-sky-900 text-sm">ABIOTIC (Non-living)</h5>
      <div className="text-[10px] text-sky-700 text-center font-medium space-y-1 opacity-60 group-hover:opacity-100 transition-opacity">
        <p>Sunlight • Water</p>
        <p>Temperature • Soil</p>
        <p>Air • Rocks</p>
      </div>
    </div>
  </div>
);

const FoodChainVisual = ({ type }: { type: 'terrestrial' | 'aquatic' }) => (
  <div className="flex flex-col md:flex-row items-center gap-2 p-4 w-full overflow-x-auto snap-x">
    {type === 'terrestrial' ? (
      <>
        <ChainNode icon={Trees} label="Grass" color="green" role="Producer" />
        <MoveRight className="text-slate-300 w-4 h-4 shrink-0 animate-pulse" />
        <ChainNode icon={Bug} label="Grasshopper" color="emerald" role="Primary" />
        <MoveRight className="text-slate-300 w-4 h-4 shrink-0 animate-pulse" />
        <ChainNode icon={Dog} label="Mouse" color="amber" role="Secondary" />
        <MoveRight className="text-slate-300 w-4 h-4 shrink-0 animate-pulse" />
        <ChainNode icon={CloudRain} label="Snake" color="red" role="Tertiary" />
      </>
    ) : (
      <>
        <ChainNode icon={Leaf} label="Phytoplankton" color="green" role="Producer" />
        <MoveRight className="text-slate-300 w-4 h-4 shrink-0 animate-pulse" />
        <ChainNode icon={Fish} label="Small Fish" color="cyan" role="Primary" />
        <MoveRight className="text-slate-300 w-4 h-4 shrink-0 animate-pulse" />
        <ChainNode icon={Fish} label="Medium Fish" color="blue" role="Secondary" />
        <MoveRight className="text-slate-300 w-4 h-4 shrink-0 animate-pulse" />
        <ChainNode icon={Activity} label="Shark" color="indigo" role="Top Predator" />
      </>
    )}
  </div>
);

const ChainNode = ({ icon: Icon, label, color, role }: any) => (
  <div className={`flex flex-col items-center p-4 bg-${color}-50 border-2 border-${color}-100 rounded-2xl min-w-[100px] hover:scale-110 transition-transform cursor-pointer snap-center shadow-sm`}>
    <Icon className={`w-6 h-6 text-${color}-600 mb-2`} />
    <span className={`text-xs font-black text-${color}-900`}>{label}</span>
    <span className={`text-[8px] font-bold text-${color}-400 uppercase tracking-widest mt-1`}>{role}</span>
  </div>
);

const EnergyPyramidVisual = () => {
  const [level, setLevel] = useState<number | null>(null);
  return (
    <div className="flex flex-col items-center gap-1 w-full max-w-xs relative py-4">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-4 text-[10px] font-bold text-slate-400">
        <span className={level === 3 ? 'text-red-500 scale-110' : ''}>0.1% Energy</span>
        <span className={level === 2 ? 'text-amber-500 scale-110' : ''}>1% Energy</span>
        <span className={level === 1 ? 'text-emerald-500 scale-110' : ''}>10% Energy</span>
        <span className={level === 0 ? 'text-green-600 scale-110' : ''}>100% Energy</span>
      </div>
      <div onClick={() => setLevel(3)} className="w-20 h-10 bg-red-500 rounded-t-xl flex items-center justify-center text-[10px] font-black text-white shadow-md z-30 cursor-pointer hover:bg-red-400 transition-colors">Tertiary</div>
      <div onClick={() => setLevel(2)} className="w-40 h-12 bg-amber-500 flex items-center justify-center text-[10px] font-black text-white shadow-md z-20 cursor-pointer hover:bg-amber-400 transition-colors">Secondary Consumer</div>
      <div onClick={() => setLevel(1)} className="w-56 h-14 bg-emerald-500 flex items-center justify-center text-[10px] font-black text-white shadow-md z-10 cursor-pointer hover:bg-emerald-400 transition-colors">Primary Consumer</div>
      <div onClick={() => setLevel(0)} className="w-72 h-16 bg-green-600 rounded-b-xl flex items-center justify-center text-[10px] font-black text-white shadow-md cursor-pointer hover:bg-green-500 transition-colors">Producer</div>
    </div>
  );
};

const CycleVisual = ({ type }: { type: 'carbon' | 'nitrogen' }) => (
  <div className="relative w-72 h-72 flex items-center justify-center group">
    <div className="absolute inset-0 border-4 border-dashed border-slate-200 rounded-full animate-[spin_20s_linear_infinite] group-hover:border-slate-300"></div>
    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-xs font-black shadow-lg border border-blue-200 hover:scale-110 transition-transform">Atmosphere</div>
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-xs font-black shadow-lg border border-amber-200 hover:scale-110 transition-transform">Soil / Lithosphere</div>
    <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-xs font-black shadow-lg border border-emerald-200 hover:scale-110 transition-transform">Biosphere</div>
    <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 bg-cyan-100 text-cyan-800 px-4 py-2 rounded-full text-xs font-black shadow-lg border border-cyan-200 hover:scale-110 transition-transform">Hydrosphere</div>
    <RotateCcw className="w-32 h-32 text-slate-200 absolute group-hover:text-slate-300 transition-colors" />
    <div className="bg-white p-4 rounded-2xl shadow-xl z-10 font-black text-sm flex flex-col items-center border border-slate-100">
      <Recycle className={`w-6 h-6 mb-2 ${type === 'carbon' ? 'text-slate-600' : 'text-blue-600'}`} />
      {type === 'carbon' ? 'Carbon Cycle' : 'Nitrogen Cycle'}
    </div>
  </div>
);

const WhmisGrid = () => {
  const [flipped, setFlipped] = useState<number | null>(null);
  const symbols = [
    { icon: Flame, label: 'Flammable', desc: 'Catches fire easily' },
    { icon: Skull, label: 'Poison', desc: 'Fatal if swallowed' },
    { icon: Bomb, label: 'Explosive', desc: 'Explosion hazard' },
    { icon: Biohazard, label: 'Biohazard', desc: 'Infectious material' },
    { icon: FlaskConical, label: 'Corrosive', desc: 'Burns skin/eyes' },
    { icon: AlertCircle, label: 'Irritant', desc: 'Causes irritation' },
    { icon: RefreshCcw, label: 'Oxidizer', desc: 'Fuels fires' },
    { icon: Activity, label: 'Health', desc: 'Long term damage' },
  ];
  return (
    <div className="grid grid-cols-4 gap-3 w-full">
      {symbols.map((s, i) => (
        <div 
          key={i} 
          onClick={() => setFlipped(flipped === i ? null : i)}
          className={`flex flex-col items-center justify-center aspect-square p-2 bg-white border-2 rounded-xl cursor-pointer transition-all duration-500 hover:shadow-md ${flipped === i ? 'bg-red-600 border-red-600 rotate-y-180' : 'border-slate-200 hover:border-red-200'}`}
        >
          {flipped === i ? (
            <span className="text-[8px] text-white font-bold text-center leading-tight rotate-y-180 animate-in fade-in">{s.desc}</span>
          ) : (
            <>
              <s.icon className="w-5 h-5 text-red-600 mb-1" />
              <span className="text-[7px] font-black text-slate-900 uppercase tracking-tight">{s.label}</span>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

const PeriodicTableVisual = () => (
  <div className="grid grid-cols-18 gap-0.5 w-full max-w-lg p-3 bg-slate-100 rounded-2xl overflow-hidden border border-slate-200">
    <div className="col-span-1 h-8 bg-orange-400 rounded-md hover:scale-110 transition-transform cursor-help" title="Hydrogen"></div>
    <div className="col-span-16"></div>
    <div className="col-span-1 h-8 bg-purple-400 rounded-md hover:scale-110 transition-transform cursor-help" title="Helium"></div>
    
    <div className="col-span-1 h-8 bg-red-400 rounded-md hover:scale-110 transition-transform cursor-help" title="Lithium"></div>
    <div className="col-span-1 h-8 bg-yellow-400 rounded-md hover:scale-110 transition-transform cursor-help" title="Beryllium"></div>
    <div className="col-span-10"></div>
    <div className="col-span-1 h-8 bg-green-400 rounded-md hover:scale-110 transition-transform cursor-help"></div>
    <div className="col-span-1 h-8 bg-green-400 rounded-md hover:scale-110 transition-transform cursor-help"></div>
    <div className="col-span-1 h-8 bg-green-400 rounded-md hover:scale-110 transition-transform cursor-help"></div>
    <div className="col-span-1 h-8 bg-green-400 rounded-md hover:scale-110 transition-transform cursor-help"></div>
    <div className="col-span-1 h-8 bg-blue-400 rounded-md hover:scale-110 transition-transform cursor-help" title="Fluorine"></div>
    <div className="col-span-1 h-8 bg-purple-400 rounded-md hover:scale-110 transition-transform cursor-help" title="Neon"></div>
    
    <div className="col-span-18 flex gap-4 mt-4 justify-center">
       <div className="flex items-center gap-2 bg-white px-3 py-1 rounded-full border border-slate-200 shadow-sm"><div className="w-2 h-2 bg-red-400 rounded-full"></div><span className="text-[10px] font-bold">Alkali</span></div>
       <div className="flex items-center gap-2 bg-white px-3 py-1 rounded-full border border-slate-200 shadow-sm"><div className="w-2 h-2 bg-blue-400 rounded-full"></div><span className="text-[10px] font-bold">Halogen</span></div>
       <div className="flex items-center gap-2 bg-white px-3 py-1 rounded-full border border-slate-200 shadow-sm"><div className="w-2 h-2 bg-purple-400 rounded-full"></div><span className="text-[10px] font-bold">Noble</span></div>
    </div>
  </div>
);

const LewisDotVisual = () => (
  <div className="flex justify-center gap-12 py-4">
    <div className="flex flex-col items-center gap-3">
      <div className="relative w-16 h-16 bg-white rounded-2xl flex items-center justify-center font-black text-2xl border-2 border-slate-200 shadow-lg text-slate-800">
        Na
        <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-indigo-600 rounded-full shadow-sm animate-pulse"></div>
      </div>
      <span className="text-[10px] font-bold bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full">Group 1 (1e)</span>
    </div>
    <div className="flex flex-col items-center gap-3">
      <div className="relative w-16 h-16 bg-white rounded-2xl flex items-center justify-center font-black text-2xl border-2 border-slate-200 shadow-lg text-slate-800">
        O
        <div className="absolute top-1/2 -right-1.5 w-3 h-3 bg-indigo-600 rounded-full shadow-sm"></div>
        <div className="absolute top-1/2 -left-1.5 w-3 h-3 bg-indigo-600 rounded-full shadow-sm"></div>
        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 flex gap-1"><div className="w-3 h-3 bg-indigo-600 rounded-full"></div><div className="w-3 h-3 bg-indigo-600 rounded-full"></div></div>
        <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 flex gap-1"><div className="w-3 h-3 bg-indigo-600 rounded-full"></div><div className="w-3 h-3 bg-indigo-600 rounded-full"></div></div>
      </div>
      <span className="text-[10px] font-bold bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full">Group 16 (6e)</span>
    </div>
  </div>
);

const IonVisual = () => (
  <div className="flex justify-center items-center gap-12 py-4">
    <div className="flex flex-col items-center gap-2 group cursor-help">
      <div className="w-16 h-16 rounded-full border-4 border-red-400 flex items-center justify-center bg-red-50 text-red-600 font-black text-2xl relative shadow-lg group-hover:scale-110 transition-transform">
        Na
        <div className="absolute -top-3 -right-3 bg-red-500 text-white text-xs font-bold w-7 h-7 rounded-full flex items-center justify-center shadow-md border-2 border-white">+</div>
      </div>
      <span className="text-[10px] font-black mt-1 uppercase text-red-400 tracking-widest">Cation</span>
    </div>
    <ArrowRight className="text-slate-300 w-6 h-6 animate-pulse" />
    <div className="flex flex-col items-center gap-2 group cursor-help">
      <div className="w-20 h-20 rounded-full border-4 border-blue-400 flex items-center justify-center bg-blue-50 text-blue-600 font-black text-2xl relative shadow-lg group-hover:scale-110 transition-transform">
        Cl
        <div className="absolute -top-3 -right-3 bg-blue-500 text-white text-xs font-bold w-7 h-7 rounded-full flex items-center justify-center shadow-md border-2 border-white">-</div>
      </div>
      <span className="text-[10px] font-black mt-1 uppercase text-blue-400 tracking-widest">Anion</span>
    </div>
  </div>
);

const StaticChargeVisual = () => (
  <div className="flex justify-center gap-8 py-4">
    <div className="w-24 h-24 rounded-full border-2 border-slate-300 flex flex-wrap gap-2 p-4 justify-center content-center bg-white shadow-sm hover:shadow-lg transition-shadow cursor-grab active:cursor-grabbing">
      <Plus className="w-4 h-4 text-red-400" /><Minus className="w-4 h-4 text-blue-400" />
      <Plus className="w-4 h-4 text-red-400" /><Minus className="w-4 h-4 text-blue-400" />
    </div>
    <div className="w-24 h-24 rounded-full border-2 border-blue-300 flex flex-wrap gap-2 p-4 justify-center content-center bg-blue-50 shadow-inner">
      <Minus className="w-4 h-4 text-blue-500 animate-bounce" /><Minus className="w-4 h-4 text-blue-500 animate-bounce [animation-delay:0.1s]" />
      <Minus className="w-4 h-4 text-blue-500 animate-bounce [animation-delay:0.2s]" /><Minus className="w-4 h-4 text-blue-500 animate-bounce [animation-delay:0.3s]" />
    </div>
  </div>
);

const EquationVisual = ({ type }: { type: 'photosynthesis' | 'respiration' }) => (
  <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 flex flex-col items-center gap-4 w-full">
    <div className="flex items-center gap-2 text-xs font-black text-slate-500 uppercase tracking-widest">
      {type === 'photosynthesis' ? <Sun className="w-5 h-5 text-orange-400 animate-spin-slow" /> : <Wind className="w-5 h-5 text-blue-400 animate-pulse" />}
      {type === 'photosynthesis' ? 'Photosynthesis' : 'Cellular Respiration'}
    </div>
    <div className="text-lg font-black text-slate-800 text-center leading-relaxed">
      {type === 'photosynthesis' ? (
        <>6CO₂ + 6H₂O <span className="text-orange-500 mx-2">→</span> C₆H₁₂O₆ + 6O₂</>
      ) : (
        <>C₆H₁₂O₆ + 6O₂ <span className="text-blue-500 mx-2">→</span> 6CO₂ + 6H₂O + ATP</>
      )}
    </div>
    <div className="flex gap-2">
      <div className="bg-white px-3 py-1 rounded-lg border border-slate-200 text-[10px] font-bold text-slate-500">Reactants</div>
      <ArrowRight className="w-4 h-4 text-slate-300" />
      <div className="bg-white px-3 py-1 rounded-lg border border-slate-200 text-[10px] font-bold text-slate-500">Products</div>
    </div>
  </div>
);

const CircuitSymbolsVisual = () => (
  <div className="grid grid-cols-2 gap-4 w-full">
    <SymbolItem icon={Battery} label="Battery" desc="Source" />
    <SymbolItem icon={Bulb} label="Load" desc="Uses Energy" />
    <SymbolItem icon={Minus} label="Wire" desc="Conductor" />
    <SymbolItem icon={ToggleLeft} label="Switch" desc="Control" />
  </div>
);

const SymbolItem = ({ icon: Icon, label, desc }: any) => (
  <div className="flex items-center gap-3 p-3 bg-white border border-slate-100 rounded-xl hover:shadow-md transition-shadow">
    <Icon className="w-6 h-6 text-slate-800" />
    <div className="flex flex-col">
      <span className="text-xs font-black text-slate-800">{label}</span>
      <span className="text-[9px] font-medium text-slate-400 uppercase tracking-wider">{desc}</span>
    </div>
  </div>
);

const AtomicModelsHistory = () => {
  const models = [
    { year: 1803, scientist: 'Dalton', name: 'Billiard Ball', desc: 'Solid, indivisible sphere.' },
    { year: 1897, scientist: 'Thomson', name: 'Plum Pudding', desc: 'Positive sphere with negative electrons embedded.' },
    { year: 1911, scientist: 'Rutherford', name: 'Nuclear Model', desc: 'Dense, positive nucleus with electrons orbiting randomly.' },
    { year: 1913, scientist: 'Bohr', name: 'Planetary Model', desc: 'Electrons orbit in specific energy levels/shells.' },
  ];
  const [index, setIndex] = useState(0);

  const renderVisual = () => {
    switch (index) {
      case 0: return <div className="w-24 h-24 bg-slate-400 rounded-full shadow-2xl" />;
      case 1: return (
        <div className="w-24 h-24 bg-red-400 rounded-full relative flex items-center justify-center border-2 border-red-500 overflow-hidden">
          <div className="absolute top-4 left-6 w-3 h-3 bg-blue-600 rounded-full flex items-center justify-center text-[8px] text-white font-black">-</div>
          <div className="absolute bottom-6 left-8 w-3 h-3 bg-blue-600 rounded-full flex items-center justify-center text-[8px] text-white font-black">-</div>
          <div className="absolute top-10 right-5 w-3 h-3 bg-blue-600 rounded-full flex items-center justify-center text-[8px] text-white font-black">-</div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-blue-600 rounded-full flex items-center justify-center text-[8px] text-white font-black">-</div>
        </div>
      );
      case 2: return (
        <div className="w-24 h-24 relative flex items-center justify-center">
          <div className="w-3 h-3 bg-red-600 rounded-full z-10 shadow-[0_0_10px_red]" />
          <div className="absolute inset-0 border border-slate-500 rounded-full opacity-30 rotate-45" />
          <div className="absolute inset-0 border border-slate-500 rounded-full opacity-30 -rotate-45" />
          <div className="absolute w-2 h-2 bg-blue-400 rounded-full top-0 left-1/2 -translate-x-1/2" />
        </div>
      );
      case 3: return (
        <div className="w-24 h-24 relative flex items-center justify-center">
          <div className="w-3 h-3 bg-red-600 rounded-full z-10" />
          <div className="absolute w-12 h-12 border border-slate-600 rounded-full" />
          <div className="absolute w-24 h-24 border border-slate-600 rounded-full" />
          <div className="absolute top-0 right-1/2 translate-x-1/2 w-2 h-2 bg-yellow-400 rounded-full" />
          <div className="absolute bottom-6 right-0 w-2 h-2 bg-yellow-400 rounded-full" />
        </div>
      );
      default: return null;
    }
  };

  return (
    <div className="bg-slate-900 text-white rounded-[1.5rem] p-8 space-y-8 flex flex-col items-center">
      <div className="h-32 flex items-center justify-center">{renderVisual()}</div>
      <div className="text-center space-y-2">
        <div className="bg-indigo-600 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest inline-block">{models[index].year}</div>
        <h5 className="text-xl font-black">{models[index].scientist}: {models[index].name}</h5>
        <p className="text-slate-400 text-sm font-medium leading-relaxed max-w-xs mx-auto">{models[index].desc}</p>
      </div>
      <div className="flex gap-4">
        <button disabled={index === 0} onClick={() => setIndex(index - 1)} className="p-3 bg-white/10 rounded-xl hover:bg-white/20 disabled:opacity-20 transition-all">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <button disabled={index === models.length - 1} onClick={() => setIndex(index + 1)} className="p-3 bg-indigo-600 rounded-xl hover:bg-indigo-500 disabled:opacity-20 transition-all">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

// --- Note & Layout Components ---

const IntroCard: React.FC<{icon: any, title: string, desc: string, iconColor?: string}> = ({ icon: Icon, title, desc, iconColor = "text-indigo-400" }) => (
  <div className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] space-y-4 hover:bg-white/[0.07] transition-all group hover:-translate-y-1">
    <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center ${iconColor} group-hover:scale-110 transition-transform shadow-inner`}>
      <Icon className="w-7 h-7" />
    </div>
    <h3 className="text-xl font-black">{title}</h3>
    <p className="text-slate-400 leading-relaxed font-medium text-xs">{desc}</p>
  </div>
);

const NoteDisplay: React.FC<{note: StudyNote, isDefinition?: boolean}> = ({ note, isDefinition }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  
  const renderDiagram = (type: string) => {
    switch (type) {
      case 'bohr-model': return <BohrModel />;
      case 'Atomic Models Diagram': return <AtomicModelsHistory />;
      case 'Classification of Matter Diagram': return <MatterTree />;
      case 'ecosystem-factors': return <BioticAbioticVisual />;
      case 'Terrestrial Food Chain Diagram': return <FoodChainVisual type="terrestrial" />;
      case 'Aquatic Food Chain Diagram': return <FoodChainVisual type="aquatic" />;
      case 'Energy Pyramid': return <EnergyPyramidVisual />;
      case 'Carbon Cycle Diagram': return <CycleVisual type="carbon" />;
      case 'Nitrogen Cycle Diagram': return <CycleVisual type="nitrogen" />;
      case 'Photosynthesis Diagram': return <EquationVisual type="photosynthesis" />;
      case 'Cellular Respiration Diagram': return <EquationVisual type="respiration" />;
      case 'WHMIS Symbols Diagram': return <WhmisGrid />;
      case 'Density Comparison Diagram': return <DensityVisual />;
      case 'Periodic Table Diagram': return <PeriodicTableVisual />;
      case 'Lewis Dot Diagram': return <LewisDotVisual />;
      case 'Ion Diagram': return <IonVisual />;
      case 'Static Electricity Diagram': return <StaticChargeVisual />;
      case 'Ohm\'s Law Triangle': return <OhmsLawTriangle />;
      case 'Complete Circuit Diagram': return <CircuitVisual type="simple" />;
      case 'Series Circuit Diagram': return <CircuitVisual type="series" />;
      case 'Parallel Circuit Diagram': return <CircuitVisual type="parallel" />;
      case 'Circuit Symbols Diagram': return <CircuitSymbolsVisual />;
      case 'Power Formula Diagram': return <PowerTriangle />;
      default: return null;
    }
  };

  return (
    <div className="bg-white rounded-[1.5rem] border border-slate-200 shadow-sm overflow-hidden transition-all">
      <button onClick={() => setIsExpanded(!isExpanded)} className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors">
        <div className="flex items-center gap-4">
          <div className="text-2xl bg-slate-100 p-2.5 rounded-xl">{note.emoji}</div>
          <h4 className="text-lg font-black text-slate-800 tracking-tight">{note.subtitle}</h4>
        </div>
        <div className={`text-slate-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`}><ChevronDown className="w-5 h-5" /></div>
      </button>
      {isExpanded && (
        <div className="px-6 pb-8 space-y-6">
          {note.diagram && (
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/50 overflow-hidden flex flex-col items-center">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4 self-start flex items-center gap-2"><MousePointerClick className="w-3 h-3" /> Interactive Diagram</span>
              {renderDiagram(note.diagram)}
            </div>
          )}
          <ul className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
            {note.points.map((point, pIdx) => {
               const parts = point.split(':');
               const hasColon = parts.length > 1;
               return (
                <li key={pIdx} className="flex items-start gap-3 p-4 bg-slate-50/50 rounded-xl border border-transparent hover:border-slate-200 transition-colors">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                  <div className="text-sm">
                    {hasColon ? (
                      <p className="text-slate-600 leading-relaxed font-medium">
                        <span className="font-black text-slate-900 uppercase tracking-tight">{parts[0].trim()}</span>
                        <span className="mx-2 text-indigo-400 font-bold">:</span>
                        {parts.slice(1).join(':').trim()}
                      </p>
                    ) : (
                      <p className="text-slate-600 leading-relaxed font-medium">{point}</p>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

const SectionDisplay: React.FC<{section: StudySection, color: string, onVisible: () => void}> = ({ section, color, onVisible }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onVisible();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [onVisible]);

  return (
    <div ref={sectionRef} className="scroll-mt-24 space-y-6">
       <div className="flex items-center gap-4 sticky top-20 bg-slate-50/95 backdrop-blur-sm py-4 z-10 border-b border-slate-200/50">
          <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center overflow-hidden">
             <img src={section.image} alt="" className="w-full h-full object-cover" />
          </div>
          <h3 className="text-2xl font-black text-slate-900 tracking-tight">{section.title}</h3>
       </div>
       <div className="grid gap-4">
         {section.notes.map((note, idx) => (
           <NoteDisplay key={idx} note={note} />
         ))}
       </div>
    </div>
  );
};

const SubjectCard: React.FC<{subject: Subject, onClick: (s: Subject) => void}> = ({ subject, onClick }) => (
  <div 
    onClick={() => onClick(subject)}
    className="group relative bg-white border border-slate-200 rounded-[2.5rem] overflow-hidden cursor-pointer hover:shadow-xl transition-all hover:-translate-y-1 h-full flex flex-col"
  >
    <div className="relative h-48 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${subject.gradient} opacity-90 group-hover:opacity-100 transition-opacity`} />
        <img src={subject.image} alt={subject.name} className="w-full h-full object-cover mix-blend-overlay opacity-50 group-hover:scale-110 transition-transform duration-700" />
        <div className="absolute bottom-6 left-6 right-6">
            <h3 className="text-2xl font-black text-white leading-tight mb-2">{subject.name}</h3>
            <div className="flex items-center gap-2">
                <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-lg text-[10px] font-black text-white uppercase tracking-widest border border-white/30">
                    {subject.sections.length} Modules
                </span>
            </div>
        </div>
    </div>
    <div className="p-8 flex-1 flex flex-col justify-between gap-6">
        <p className="text-slate-500 text-sm font-medium leading-relaxed">
            {subject.description}
        </p>
        <div className="flex items-center gap-2 text-sm font-black text-slate-900 group-hover:gap-3 transition-all">
            Start Unit <ArrowRight className="w-4 h-4 text-indigo-600" />
        </div>
    </div>
  </div>
);

const IntroView: React.FC<{onStart: () => void}> = ({onStart}) => (
  <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-6 relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-violet-600/20 rounded-full blur-[100px]" />
    </div>

    <div className="relative z-10 max-w-4xl w-full text-center space-y-12">
      <div className="space-y-6 animate-in slide-in-from-bottom-10 duration-700">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/80 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3 h-3 text-indigo-400" />
            <span>AI-Powered Learning Platform</span>
        </div>
        <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none">
          Appleby <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">Science.</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium">
          The ultimate study companion for Grade 9 Science. Master biology, chemistry, and physics with interactive diagrams, smart flashcards, and L.Y.N.E. — your personal AI tutor.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in slide-in-from-bottom-10 duration-1000 delay-200">
        <IntroCard icon={BookOpen} title="Curriculum" desc="Complete interactive notes for every unit." />
        <IntroCard icon={Brain} title="Active Recall" desc="Built-in flashcards and adaptive quizzes." iconColor="text-emerald-400" />
        <IntroCard icon={Sparkles} title="AI Tutor" desc="Instant answers tailored to your course." iconColor="text-violet-400" />
      </div>

      <div className="animate-in slide-in-from-bottom-10 duration-1000 delay-300">
        <button 
          onClick={onStart}
          className="group relative inline-flex items-center justify-center gap-3 bg-white text-slate-900 px-10 py-5 rounded-[2rem] font-black text-lg hover:scale-105 transition-all shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_-15px_rgba(255,255,255,0.5)]"
        >
          Begin Studying
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
      
      <p className="text-slate-500 text-xs font-bold uppercase tracking-widest animate-in fade-in duration-1000 delay-500">
          Created by Dean Concepcion
      </p>
    </div>
  </div>
);

const WorksheetsView: React.FC<{onBack: () => void}> = ({ onBack }) => (
  <div className="max-w-4xl mx-auto py-10 px-4">
    <button onClick={onBack} className="flex items-center gap-2 text-slate-500 font-bold hover:text-slate-900 transition-colors mb-8">
      <ArrowLeft className="w-4 h-4" /> Back to Library
    </button>
    <div className="bg-white rounded-[3rem] p-12 border border-slate-200 text-center space-y-6">
      <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mx-auto text-blue-600">
        <FileText className="w-10 h-10" />
      </div>
      <h2 className="text-4xl font-black text-slate-900">Practice Worksheets</h2>
      <p className="text-slate-500 font-medium max-w-lg mx-auto">
        Downloadable PDF problem sets for balancing equations, circuit calculations, and ecology case studies.
      </p>
      <div className="grid gap-4 max-w-md mx-auto pt-6 text-left">
        {[
          'Balancing Chemical Equations (Level 1)',
          'Ohm\'s Law Practice Problems',
          'Ecology: Food Web Analysis',
          'Space Exploration Timeline'
        ].map((item, i) => (
          <div key={i} className="flex items-center justify-between p-4 rounded-xl border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-colors cursor-pointer group">
            <span className="font-bold text-slate-700">{item}</span>
            <Download className="w-4 h-4 text-slate-300 group-hover:text-blue-500" />
          </div>
        ))}
      </div>
    </div>
  </div>
);

const TestGuideView: React.FC<{onBack: () => void}> = ({ onBack }) => (
  <div className="max-w-3xl mx-auto py-10 px-4">
    <button onClick={onBack} className="flex items-center gap-2 text-slate-500 font-bold hover:text-slate-900 transition-colors mb-8">
      <ArrowLeft className="w-4 h-4" /> Back to Library
    </button>
    <div className="space-y-6">
      <div className="bg-violet-600 text-white rounded-[2.5rem] p-10 relative overflow-hidden">
        <div className="relative z-10">
           <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/30 mb-4">
              Exam Prep
           </div>
           <h1 className="text-4xl font-black mb-2">What's on the Test?</h1>
           <p className="font-medium text-violet-200">The essential breakdown of topics for your upcoming evaluations.</p>
        </div>
        <ListChecks className="absolute -right-6 -bottom-6 w-48 h-48 text-white/10" />
      </div>
      
      <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 space-y-8">
        {[
          {
            unit: 'Biology', color: 'emerald', topics: [
              'Distinguish between bioaccumulation and biomagnification',
              'Draw and label the Nitrogen and Carbon cycles',
              'Explain the 4 spheres (Lithosphere, Atmosphere, etc.)',
              'Identify human impacts on biodiversity (HIPPOC)'
            ]
          },
          {
            unit: 'Chemistry', color: 'blue', topics: [
              'Draw Bohr-Rutherford diagrams for the first 20 elements',
              'Differentiate between physical and chemical changes',
              'Calculate density, mass, and volume',
              'Identify Ionic vs Molecular compounds'
            ]
          },
          {
            unit: 'Physics', color: 'amber', topics: [
              'Solve circuits using Ohm\'s Law (V=IR)',
              'Draw circuit diagrams with proper symbols',
              'Explain static electricity charging methods (Friction, etc.)',
              'Calculate cost of electricity usage'
            ]
          }
        ].map((u, i) => (
          <div key={i} className="space-y-4">
            <h3 className={`text-xl font-black text-${u.color}-600 flex items-center gap-2`}>
              <span className={`w-3 h-3 rounded-full bg-${u.color}-500`} /> {u.unit}
            </h3>
            <ul className="grid gap-3">
              {u.topics.map((t, j) => (
                <li key={j} className="flex items-start gap-3 text-sm font-medium text-slate-600">
                  <CheckCircle className={`w-5 h-5 text-${u.color}-200 shrink-0`} />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const QuizView: React.FC<{subject: Subject, onBack: () => void, onComplete: () => void, isSmall?: boolean}> = ({ subject, onBack, onComplete, isSmall }) => {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  
  const questions: QuizQuestion[] = PRACTICE_QUIZZES[subject.id as keyof typeof PRACTICE_QUIZZES] || [];
  
  if (questions.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-center p-8 bg-white rounded-[2rem] border border-slate-200">
        <div className="bg-slate-50 p-4 rounded-full mb-4"><HelpCircle className="w-8 h-8 text-slate-400" /></div>
        <h3 className="text-xl font-bold text-slate-900">No Questions Yet</h3>
        <p className="text-slate-500 mt-2">Check back later for practice questions!</p>
        <button onClick={onBack} className="mt-6 text-indigo-600 font-bold hover:underline">Go Back</button>
      </div>
    );
  }

  const handleAnswer = (idx: number) => {
    if (isAnswered) return;
    setSelectedOption(idx);
    setIsAnswered(true);
    if (idx === questions[currentQ].correct) {
      setScore(s => s + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ(c => c + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowResult(true);
      onComplete();
    }
  };

  if (showResult) {
    return (
      <div className="bg-white border border-slate-200 rounded-[3rem] p-12 text-center max-w-2xl mx-auto mt-10 shadow-sm">
         <div className="w-24 h-24 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <Target className="w-12 h-12 text-indigo-600" />
         </div>
         <h2 className="text-4xl font-black text-slate-900 mb-2">Quiz Complete!</h2>
         <p className="text-slate-500 font-medium text-lg mb-8">You mastered this unit.</p>
         
         <div className="text-6xl font-black text-slate-900 mb-2">
           {Math.round((score / questions.length) * 100)}%
         </div>
         <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-10">
           {score} out of {questions.length} correct
         </div>

         <div className="flex gap-4 justify-center">
            <button onClick={() => {setShowResult(false); setCurrentQ(0); setScore(0); setIsAnswered(false); setSelectedOption(null)}} className="bg-slate-100 text-slate-900 px-8 py-4 rounded-2xl font-bold hover:bg-slate-200 transition-colors">
              Retry Quiz
            </button>
            <button onClick={onBack} className="bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200">
              Return to Unit
            </button>
         </div>
      </div>
    );
  }

  return (
    <div className={`mx-auto ${isSmall ? 'w-full' : 'max-w-2xl mt-10'}`}>
      {!isSmall && (
        <button onClick={onBack} className="flex items-center gap-2 text-slate-500 font-bold hover:text-slate-900 transition-colors mb-6">
          <ArrowLeft className="w-4 h-4" /> Exit Quiz
        </button>
      )}
      
      <div className="bg-white border border-slate-200 rounded-[2rem] p-8 shadow-sm">
        <div className="flex justify-between items-center mb-8">
           <span className="text-xs font-black uppercase tracking-widest text-slate-400">Question {currentQ + 1} of {questions.length}</span>
           <span className="text-xs font-bold bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full">{subject.name}</span>
        </div>

        <div className="mb-8">
           <h3 className="text-2xl font-black text-slate-900 leading-tight">{questions[currentQ].question}</h3>
        </div>

        <div className="space-y-3">
           {questions[currentQ].options.map((opt, idx) => {
             let stateClass = "border-slate-200 hover:border-slate-300 hover:bg-slate-50";
             if (isAnswered) {
               if (idx === questions[currentQ].correct) stateClass = "border-emerald-200 bg-emerald-50 text-emerald-800";
               else if (idx === selectedOption) stateClass = "border-red-200 bg-red-50 text-red-800";
               else stateClass = "border-slate-100 opacity-50";
             }
             
             return (
               <button 
                 key={idx}
                 disabled={isAnswered}
                 onClick={() => handleAnswer(idx)}
                 className={`w-full text-left p-5 rounded-xl border-2 font-bold text-slate-700 transition-all ${stateClass} ${selectedOption === idx ? 'ring-2 ring-indigo-500 ring-offset-2 border-transparent' : ''}`}
               >
                 <div className="flex items-center justify-between">
                    <span>{opt}</span>
                    {isAnswered && idx === questions[currentQ].correct && <CheckCircle className="w-5 h-5 text-emerald-500" />}
                    {isAnswered && idx === selectedOption && idx !== questions[currentQ].correct && <X className="w-5 h-5 text-red-500" />}
                 </div>
               </button>
             );
           })}
        </div>

        {isAnswered && (
          <div className="mt-8 pt-6 border-t border-slate-100 animate-in slide-in-from-bottom-2">
             <div className="bg-slate-50 p-4 rounded-xl mb-6">
                <div className="flex items-center gap-2 text-slate-900 font-black text-sm mb-1">
                   <Info className="w-4 h-4 text-indigo-500" /> Explanation
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">{questions[currentQ].explanation}</p>
             </div>
             <button onClick={nextQuestion} className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200">
                {currentQ === questions.length - 1 ? "Finish Quiz" : "Next Question"}
             </button>
          </div>
        )}
      </div>
    </div>
  );
};

const FlashcardsView: React.FC<{subject: Subject, onBack: () => void, isSmall?: boolean}> = ({ subject, onBack, isSmall }) => {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const cards: FlashcardType[] = FLASHCARDS[subject.id as keyof typeof FLASHCARDS] || [];

  if (cards.length === 0) {
    return (
       <div className="flex flex-col items-center justify-center h-64 text-center p-8 bg-white rounded-[2rem] border border-slate-200">
        <Brain className="w-12 h-12 text-slate-300 mb-4" />
        <h3 className="text-xl font-bold text-slate-900">No Flashcards</h3>
        <button onClick={onBack} className="mt-4 text-indigo-600 font-bold hover:underline">Go Back</button>
      </div>
    );
  }

  const next = () => {
    setFlipped(false);
    setTimeout(() => setIndex((index + 1) % cards.length), 200);
  };
  
  const prev = () => {
    setFlipped(false);
    setTimeout(() => setIndex((index - 1 + cards.length) % cards.length), 200);
  };

  return (
    <div className={`mx-auto ${isSmall ? 'w-full' : 'max-w-2xl mt-10'}`}>
       {!isSmall && (
        <button onClick={onBack} className="flex items-center gap-2 text-slate-500 font-bold hover:text-slate-900 transition-colors mb-6">
          <ArrowLeft className="w-4 h-4" /> Back to Unit
        </button>
       )}
       
       <div className="perspective-1000 h-96 cursor-pointer group" onClick={() => setFlipped(!flipped)}>
          <div className={`relative w-full h-full duration-500 preserve-3d transition-transform ${flipped ? 'rotate-y-180' : ''}`}>
             <div className="absolute inset-0 backface-hidden bg-white border border-slate-200 rounded-[2.5rem] flex flex-col items-center justify-center p-12 text-center shadow-sm group-hover:shadow-md transition-shadow">
                <span className="absolute top-8 left-8 text-xs font-black uppercase tracking-widest text-indigo-400">Front</span>
                <Brain className="w-12 h-12 text-slate-100 mb-6" />
                <h3 className="text-3xl font-black text-slate-900">{cards[index].front}</h3>
                <p className="absolute bottom-8 text-xs font-bold text-slate-400 uppercase tracking-widest">Click to Flip</p>
             </div>
             
             <div className="absolute inset-0 backface-hidden rotate-y-180 bg-indigo-600 rounded-[2.5rem] flex flex-col items-center justify-center p-12 text-center shadow-xl text-white">
                <span className="absolute top-8 left-8 text-xs font-black uppercase tracking-widest text-indigo-300">Back</span>
                <p className="text-xl font-medium leading-relaxed">{cards[index].back}</p>
             </div>
          </div>
       </div>

       <div className="flex items-center justify-between mt-8">
          <button onClick={prev} className="p-4 rounded-full bg-white border border-slate-200 hover:bg-slate-50 transition-colors text-slate-600"><ArrowLeft className="w-5 h-5" /></button>
          <span className="font-bold text-slate-400 text-sm">{index + 1} / {cards.length}</span>
          <button onClick={next} className="p-4 rounded-full bg-white border border-slate-200 hover:bg-slate-50 transition-colors text-slate-600"><ArrowRight className="w-5 h-5" /></button>
       </div>
    </div>
  );
};

const InlineAIChat: React.FC<{
  messages: {role: 'user' | 'bot', text: string}[],
  loadingAI: boolean,
  aiInput: string,
  setAiInput: (s: string) => void,
  handleSendMessage: () => void
}> = ({ messages, loadingAI, aiInput, setAiInput, handleSendMessage }) => {
   const endRef = useRef<HTMLDivElement>(null);
   useEffect(() => endRef.current?.scrollIntoView({ behavior: 'smooth' }), [messages]);

   return (
     <div className="flex flex-col h-full bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm">
        <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50/50">
           {messages.length === 0 && (
             <div className="h-full flex flex-col items-center justify-center text-center p-8 opacity-50">
                <Sparkles className="w-12 h-12 text-indigo-300 mb-4" />
                <p className="text-slate-500 font-bold text-sm">Ask L.Y.N.E. anything about this unit.</p>
             </div>
           )}
           {messages.map((m, i) => (
             <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm font-medium leading-relaxed ${m.role === 'user' ? 'bg-indigo-600 text-white rounded-tr-none' : 'bg-white border border-slate-200 text-slate-700 rounded-tl-none shadow-sm'}`}>
                  {m.text}
                </div>
             </div>
           ))}
           {loadingAI && (
             <div className="flex justify-start">
               <div className="bg-white border border-slate-200 px-5 py-4 rounded-2xl rounded-tl-none shadow-sm flex gap-2">
                 <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" />
                 <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce [animation-delay:0.1s]" />
                 <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce [animation-delay:0.2s]" />
               </div>
             </div>
           )}
           <div ref={endRef} />
        </div>
        <div className="p-4 bg-white border-t border-slate-100">
           <form onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }} className="relative">
              <input 
                type="text" 
                value={aiInput}
                onChange={(e) => setAiInput(e.target.value)}
                placeholder="Ask a question..."
                className="w-full bg-slate-100 border-none rounded-2xl py-4 pl-5 pr-12 text-sm font-medium focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
              />
              <button 
                type="submit"
                disabled={!aiInput.trim() || loadingAI}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 disabled:opacity-50 disabled:hover:bg-indigo-600 transition-colors"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
           </form>
        </div>
     </div>
   );
};

const SubjectDetailView: React.FC<{
  subject: Subject; 
  onBack: () => void;
  onViewQuiz: () => void;
  onViewFlashcards: () => void;
  onSectionVisible: (id: string) => void;
}> = ({ subject, onBack, onViewQuiz, onViewFlashcards, onSectionVisible }) => {
  return (
    <div className="max-w-5xl mx-auto space-y-12 animate-in fade-in duration-500">
      <button onClick={onBack} className="flex items-center gap-2 text-slate-500 font-bold hover:text-slate-900 transition-colors mb-4">
        <ArrowLeft className="w-4 h-4" /> Back to Dashboard
      </button>

      <div className="bg-white border border-slate-200 rounded-[3rem] p-10 md:p-12 shadow-sm relative overflow-hidden">
        <div className={`absolute top-0 right-0 w-full h-2 bg-gradient-to-r ${subject.gradient}`} />
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between mb-8">
            <div className="space-y-4">
               <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-white bg-gradient-to-r ${subject.gradient}`}>
                  {subject.sections.length} Learning Modules
               </div>
               <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight">{subject.name}</h1>
               <p className="text-lg text-slate-500 font-medium max-w-2xl">{subject.description}</p>
            </div>
            <div className="flex gap-3 shrink-0">
               <button onClick={onViewFlashcards} className="flex flex-col items-center justify-center w-24 h-24 bg-slate-50 rounded-2xl border border-slate-200 hover:border-emerald-200 hover:bg-emerald-50 transition-all group">
                  <Brain className="w-6 h-6 text-slate-400 group-hover:text-emerald-600 mb-2" />
                  <span className="text-[10px] font-black text-slate-900 uppercase">Flashcards</span>
               </button>
               <button onClick={onViewQuiz} className="flex flex-col items-center justify-center w-24 h-24 bg-slate-50 rounded-2xl border border-slate-200 hover:border-indigo-200 hover:bg-indigo-50 transition-all group">
                  <Target className="w-6 h-6 text-slate-400 group-hover:text-indigo-600 mb-2" />
                  <span className="text-[10px] font-black text-slate-900 uppercase">Quiz</span>
               </button>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        {subject.sections.map((section, idx) => (
          <SectionDisplay 
            key={section.id} 
            section={section} 
            color={subject.color} 
            onVisible={() => onSectionVisible(section.id)}
          />
        ))}
      </div>
    </div>
  );
};

// --- Main App Component ---

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'intro' | 'home' | 'subject' | 'quiz' | 'flashcards' | 'practice-worksheets' | 'test-guide'>('intro');
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [aiChatOpen, setAiChatOpen] = useState(false);
  const [isSplitView, setIsSplitView] = useState(false);
  const [activeSplitTab, setActiveSplitTab] = useState<'ai' | 'quiz' | 'cards'>('ai');
  
  // Progress State
  const [exploredSections, setExploredSections] = useState<string[]>([]);
  const [completedQuizzes, setCompletedQuizzes] = useState<string[]>([]);
  
  // AI State
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string}[]>([]);
  const [aiInput, setAiInput] = useState('');
  const [loadingAI, setLoadingAI] = useState(false);

  const subjects = Object.values(STUDY_LIBRARY);

  // Load progress from local storage
  useEffect(() => {
    const savedExplored = localStorage.getItem('appleby_explored_sections');
    const savedQuizzes = localStorage.getItem('appleby_completed_quizzes');
    if (savedExplored) setExploredSections(JSON.parse(savedExplored));
    if (savedQuizzes) setCompletedQuizzes(JSON.parse(savedQuizzes));
  }, []);

  // Save progress when it changes
  useEffect(() => {
    localStorage.setItem('appleby_explored_sections', JSON.stringify(exploredSections));
  }, [exploredSections]);

  useEffect(() => {
    localStorage.setItem('appleby_completed_quizzes', JSON.stringify(completedQuizzes));
  }, [completedQuizzes]);

  const filteredSubjects = useMemo(() => {
    const mainUnits = ['biology', 'chemistry', 'physics', 'space'];
    if (!searchTerm) return subjects.filter(s => mainUnits.includes(s.id));
    return subjects.filter(s => 
      s.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      s.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.sections.some(sec => sec.title.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [searchTerm, subjects]);

  const trackSectionVisit = (sectionId: string) => {
    if (!exploredSections.includes(sectionId)) {
      setExploredSections(prev => [...prev, sectionId]);
    }
  };

  const handleSubjectClick = (subject: Subject) => {
    setSelectedSubject(subject);
    setCurrentView('subject');
    window.scrollTo(0, 0);
  };

  const handleSendMessage = async () => {
    if (!aiInput.trim()) return;
    const userMsg = aiInput;
    setAiInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoadingAI(true);
    
    const context = JSON.stringify(selectedSubject || subjects);
    const response = await getAITutorResponse(userMsg, context);
    
    setMessages(prev => [...prev, { role: 'bot', text: response || "I'm sorry, I couldn't process that." }]);
    setLoadingAI(false);
  };

  const handleExit = () => {
    setCurrentView('home');
    setSelectedSubject(null);
    setIsSplitView(false);
    window.scrollTo(0, 0);
  };

  if (currentView === 'intro') {
    return <IntroView onStart={() => setCurrentView('home')} />;
  }

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-indigo-100 selection:text-indigo-900 bg-slate-50">
      <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-xl border-b border-slate-200/60 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3 cursor-pointer group" onClick={handleExit}>
              <div className="bg-indigo-600 p-2.5 rounded-xl group-hover:scale-110 transition-transform shadow-lg shadow-indigo-100">
                <BookOpen className="text-white w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <h1 className="text-lg font-extrabold text-slate-900 tracking-tight leading-none">Appleby Science</h1>
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="text-[9px] font-bold text-indigo-600 uppercase tracking-wider">Study Smart, Succeed Fast</span>
                  <span className="text-[9px] text-slate-300">•</span>
                  <span className="text-[9px] font-medium text-slate-400">by Dean Concepcion</span>
                </div>
              </div>
            </div>
            
            <div className="flex-1 max-w-md mx-6 hidden md:block">
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4 group-focus-within:text-indigo-500 transition-colors" />
                <input 
                  type="text" 
                  placeholder="Search curriculum..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-slate-100 border-none rounded-2xl text-sm focus:ring-2 focus:ring-indigo-500 transition-all placeholder:text-slate-400 font-medium"
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              {currentView === 'subject' && (
                <button 
                  onClick={() => setIsSplitView(!isSplitView)}
                  className={`hidden lg:flex items-center gap-2 px-5 py-3 rounded-2xl text-sm font-bold transition-all border ${isSplitView ? 'bg-indigo-50 border-indigo-200 text-indigo-600 shadow-inner' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'}`}
                >
                  <PanelLeft className="w-4 h-4" />
                  <span>{isSplitView ? 'Standard View' : 'Split Mode'}</span>
                </button>
              )}
              <button 
                onClick={() => setAiChatOpen(true)}
                className="flex items-center gap-2 bg-indigo-600 text-white px-5 py-3 rounded-2xl text-sm font-bold hover:bg-indigo-700 active:scale-95 transition-all shadow-lg shadow-indigo-200"
              >
                <Sparkles className="w-4 h-4" />
                <span className="hidden sm:inline">AI Tutor</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className={`flex-grow ${isSplitView ? 'flex overflow-hidden h-[calc(100vh-80px)]' : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full'}`}>
        {currentView === 'home' && (
          <div className="space-y-12 animate-in fade-in duration-500">
            <section className="bg-white border border-slate-200 rounded-[3rem] p-10 md:p-16 shadow-sm overflow-hidden relative">
              <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-indigo-50 rounded-full blur-3xl opacity-50" />
              <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
                <div className="flex-1 text-center md:text-left space-y-6">
                  <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest">
                    <GraduationCap className="w-4 h-4" />
                    <span>Academic Dashboard</span>
                  </div>
                  <h2 className="text-5xl sm:text-7xl font-black text-slate-900 leading-[0.9] tracking-tighter">
                    Master <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Science.</span>
                  </h2>
                  <p className="text-slate-500 text-lg font-medium max-w-xl leading-relaxed">
                    This platform is your command center for Grade 9 Science. Use the interactive modules to explore concepts, the flashcards to lock in memory, and the AI tutor to clarify complex class notes instantly.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 w-full md:w-auto shrink-0">
                  <div className="bg-slate-50 border border-slate-200 p-8 rounded-[2rem] text-center space-y-2 group hover:border-indigo-200 transition-colors">
                    <div className="bg-white w-12 h-12 rounded-2xl flex items-center justify-center mx-auto shadow-sm text-indigo-600 group-hover:scale-110 transition-transform">
                      <Layers className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-3xl font-black text-slate-900 tabular-nums">{exploredSections.length}</div>
                      <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Sections Explored</div>
                    </div>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 p-8 rounded-[2rem] text-center space-y-2 group hover:border-emerald-200 transition-colors">
                    <div className="bg-white w-12 h-12 rounded-2xl flex items-center justify-center mx-auto shadow-sm text-emerald-600 group-hover:scale-110 transition-transform">
                      <Target className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-3xl font-black text-slate-900 tabular-nums">{completedQuizzes.length}</div>
                      <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Quizzes Mastered</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
                  <Layout className="w-4 h-4" />
                </div>
                <h3 className="text-xl font-black text-slate-900 tracking-tight">How to use your Library</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white border border-slate-200 p-8 rounded-[2rem] space-y-4 hover:shadow-lg transition-all">
                  <div className="bg-indigo-50 text-indigo-600 w-12 h-12 rounded-2xl flex items-center justify-center">
                    <Monitor className="w-6 h-6" />
                  </div>
                  <h4 className="text-sm font-black text-slate-900 uppercase tracking-tight">Productivity Split-View</h4>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">
                    Inside any unit, toggle <strong>Split Mode</strong> to view your notes alongside the AI tutor or practice tools. It's the ultimate way to research and test simultaneously.
                  </p>
                </div>
                <div className="bg-white border border-slate-200 p-8 rounded-[2rem] space-y-4 hover:shadow-lg transition-all">
                  <div className="bg-violet-50 text-violet-600 w-12 h-12 rounded-2xl flex items-center justify-center">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h4 className="text-sm font-black text-slate-900 uppercase tracking-tight">AI Curriculum Expert</h4>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">
                    Our AI Tutor, <strong>L.Y.N.E.</strong>, is specifically tuned to the Grade 9 Appleby curriculum. Ask about any diagram or class note for a personalized explanation.
                  </p>
                </div>
                <div className="bg-white border border-slate-200 p-8 rounded-[2rem] space-y-4 hover:shadow-lg transition-all">
                  <div className="bg-emerald-50 text-emerald-600 w-12 h-12 rounded-2xl flex items-center justify-center">
                    <Brain className="w-6 h-6" />
                  </div>
                  <h4 className="text-sm font-black text-slate-900 uppercase tracking-tight">Active Recall Tools</h4>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">
                    Each unit contains custom <strong>Flashcards</strong> and <strong>Quizzes</strong>. Use these frequently to shift from passive reading to active, long-term memory retention.
                  </p>
                </div>
              </div>
            </section>

            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-white">
                  <Globe className="w-4 h-4" />
                </div>
                <h3 className="text-xl font-black text-slate-900 tracking-tight">Unit Modules</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {filteredSubjects.map(subject => (
                  <SubjectCard key={subject.id} subject={subject} onClick={handleSubjectClick} />
                ))}
              </div>
            </div>

            <div className="space-y-6 pt-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
                  <ClipboardCheck className="w-4 h-4" />
                </div>
                <h3 className="text-xl font-black text-slate-900 tracking-tight">Study Practice</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <button 
                  onClick={() => {setSelectedSubject(STUDY_LIBRARY.biology); setCurrentView('quiz')}}
                  className="group text-left bg-white border border-slate-200 p-8 rounded-[2.5rem] space-y-4 hover:border-indigo-200 hover:shadow-lg transition-all"
                >
                  <div className="bg-indigo-50 text-indigo-600 w-12 h-12 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Target className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sm font-black text-slate-900 uppercase tracking-tight">Practice Quizzes</h4>
                    <p className="text-[10px] text-slate-500 font-medium leading-relaxed">Adaptive concept checks for every unit.</p>
                  </div>
                </button>

                <button 
                  onClick={() => setCurrentView('practice-worksheets')}
                  className="group text-left bg-white border border-slate-200 p-8 rounded-[2.5rem] space-y-4 hover:border-blue-200 hover:shadow-lg transition-all"
                >
                  <div className="bg-blue-50 text-blue-600 w-12 h-12 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sm font-black text-slate-900 uppercase tracking-tight">Practice Worksheets</h4>
                    <p className="text-[10px] text-slate-500 font-medium leading-relaxed">Challenge sets and problem-solving exercises.</p>
                  </div>
                </button>

                <button 
                  onClick={() => setCurrentView('test-guide')}
                  className="group text-left bg-white border border-slate-200 p-8 rounded-[2.5rem] space-y-4 hover:border-violet-200 hover:shadow-lg transition-all"
                >
                  <div className="bg-violet-50 text-violet-600 w-12 h-12 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ListChecks className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sm font-black text-slate-900 uppercase tracking-tight">What's on the Test?</h4>
                    <p className="text-[10px] text-slate-500 font-medium leading-relaxed">Comprehensive blueprint of exam objectives.</p>
                  </div>
                </button>

                <button 
                   onClick={() => {setSelectedSubject(STUDY_LIBRARY.biology); setCurrentView('flashcards')}}
                   className="group text-left bg-white border border-slate-200 p-8 rounded-[2.5rem] space-y-4 hover:border-emerald-200 hover:shadow-lg transition-all"
                >
                  <div className="bg-emerald-50 text-emerald-600 w-12 h-12 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Brain className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sm font-black text-slate-900 uppercase tracking-tight">Universal Flashcards</h4>
                    <p className="text-[10px] text-slate-500 font-medium leading-relaxed">Master the vocabulary of all units at once.</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        )}

        {currentView === 'practice-worksheets' && (
          <WorksheetsView onBack={handleExit} />
        )}

        {currentView === 'test-guide' && (
          <TestGuideView onBack={handleExit} />
        )}

        {currentView === 'subject' && selectedSubject && (
          isSplitView ? (
            <div className="flex w-full divide-x divide-slate-200">
              <div className="w-1/2 overflow-y-auto px-8 py-10 bg-white">
                <div className="flex justify-between items-center mb-8">
                  <button onClick={handleExit} className="flex items-center gap-2 text-slate-400 font-bold hover:text-slate-900 transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Back to Units
                  </button>
                  <button onClick={handleExit} className="p-2 text-slate-300 hover:text-red-500 transition-colors" title="Exit Unit">
                    <LogOut className="w-5 h-5" />
                  </button>
                </div>
                <div className="space-y-12">
                   <div className="flex justify-between items-end">
                      <h2 className="text-4xl font-black text-slate-900">{selectedSubject.name}</h2>
                      <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest pb-1">By Dean Concepcion</span>
                   </div>
                   <div className="grid gap-8">
                     {selectedSubject.sections.map(section => (
                       <SectionDisplay 
                         key={section.id} 
                         section={section} 
                         color={selectedSubject.color} 
                         onVisible={() => trackSectionVisit(`${selectedSubject.id}_${section.id}`)}
                       />
                     ))}
                   </div>
                   <div className="pt-10 flex justify-center pb-20">
                     <button onClick={handleExit} className="flex items-center gap-2 bg-slate-100 text-slate-600 px-8 py-4 rounded-2xl font-black text-sm hover:bg-slate-200 transition-all group">
                       <Home className="w-4 h-4 group-hover:scale-110 transition-transform" />
                       Return to Library
                     </button>
                   </div>
                </div>
              </div>
              <div className="w-1/2 overflow-y-auto flex flex-col bg-slate-50">
                <div className="sticky top-0 bg-white border-b border-slate-200 p-2 flex gap-1 z-10">
                   {[
                     {id: 'ai', label: 'AI Tutor', icon: Sparkles},
                     {id: 'cards', label: 'Flashcards', icon: Brain},
                     {id: 'quiz', label: 'Quiz', icon: Target}
                   ].map(tab => (
                     <button
                       key={tab.id}
                       onClick={() => setActiveSplitTab(tab.id as any)}
                       className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold transition-all ${activeSplitTab === tab.id ? 'bg-indigo-600 text-white shadow-lg' : 'bg-white text-slate-500 hover:bg-slate-50'}`}
                     >
                       <tab.icon className="w-4 h-4" />
                       {tab.label}
                     </button>
                   ))}
                </div>
                <div className="flex-1 p-8">
                  {activeSplitTab === 'ai' && <InlineAIChat messages={messages} loadingAI={loadingAI} aiInput={aiInput} setAiInput={setAiInput} handleSendMessage={handleSendMessage} />}
                  {activeSplitTab === 'cards' && <FlashcardsView subject={selectedSubject} onBack={() => setIsSplitView(false)} isSmall />}
                  {activeSplitTab === 'quiz' && (
                    <QuizView 
                      subject={selectedSubject} 
                      onBack={() => setIsSplitView(false)} 
                      isSmall 
                      onComplete={() => setCompletedQuizzes(prev => Array.from(new Set([...prev, selectedSubject.id])))}
                    />
                  )}
                </div>
              </div>
            </div>
          ) : (
            <SubjectDetailView 
              subject={selectedSubject} 
              onBack={handleExit} 
              onViewQuiz={() => setCurrentView('quiz')}
              onViewFlashcards={() => setCurrentView('flashcards')}
              onSectionVisible={(sid) => trackSectionVisit(`${selectedSubject.id}_${sid}`)}
            />
          )
        )}

        {(currentView === 'quiz' || currentView === 'flashcards') && selectedSubject && !isSplitView && (
          <div className="animate-in fade-in duration-500">
             {currentView === 'quiz' ? (
               <QuizView 
                 subject={selectedSubject} 
                 onBack={() => setCurrentView('subject')} 
                 onComplete={() => setCompletedQuizzes(prev => Array.from(new Set([...prev, selectedSubject.id])))}
               />
             ) : (
               <FlashcardsView subject={selectedSubject} onBack={() => setCurrentView('subject')} />
             )}
          </div>
        )}
      </main>

      {aiChatOpen && !isSplitView && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md">
          <div className="bg-white w-full max-w-2xl h-[700px] rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-300">
            <div className="p-8 border-b flex justify-between items-center bg-indigo-600 text-white">
              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-3 rounded-2xl"><Sparkles className="w-6 h-6" /></div>
                <div>
                  <h4 className="text-xl font-black">L.Y.N.E. Tutor</h4>
                  <p className="text-xs text-white/70 font-bold uppercase tracking-widest">Grade 9 Specialist</p>
                </div>
              </div>
              <button onClick={() => setAiChatOpen(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto">
               <InlineAIChat messages={messages} loadingAI={loadingAI} aiInput={aiInput} setAiInput={setAiInput} handleSendMessage={handleSendMessage} />
            </div>
          </div>
        </div>
      )}

      {!isSplitView && (
        <footer className="bg-white border-t border-slate-200/60 py-16">
          <div className="max-w-7xl mx-auto px-4 text-center space-y-6">
            <div className="flex justify-center gap-2 mb-4">
              <div className="bg-indigo-600 p-2 rounded-lg"><BookOpen className="text-white w-4 h-4" /></div>
              <span className="font-black text-slate-900 uppercase tracking-tighter">Appleby Science Library</span>
            </div>
            <div className="space-y-2">
              <p className="text-slate-500 text-sm max-w-lg mx-auto leading-relaxed font-medium">
                Created by <span className="text-indigo-600 font-bold">Dean Concepcion</span> for the Appleby student community.
              </p>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] italic">
                Source: Compiled interpretation of OneNote and Canvas materials.
              </p>
              <p className="text-[11px] text-indigo-400 font-black tracking-widest pt-4 uppercase">Study Smart, Succeed Fast</p>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
};

export default App;