
import { LibraryData } from './types';

export const STUDY_LIBRARY: LibraryData = {
  biology: {
    id: 'biology',
    name: 'Biology: Sustainable Ecosystems',
    description: 'Explore the complexity of life, from genetic diversity to global nutrient cycles and human stewardship of the environment.',
    color: 'emerald',
    gradient: 'from-emerald-500 to-teal-600',
    image: 'https://images.unsplash.com/photo-1500829243541-74b677fecc30?auto=format&fit=crop&q=80&w=800',
    sections: [
      {
        id: 'bio-definitions',
        title: 'Key Biology Definitions',
        image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=800',
        notes: [
          {
            subtitle: 'Biodiversity Terms',
            emoji: '🌿',
            points: [
              'BIODIVERSITY: Variety of life in an area (genetic, species, ecosystem)',
              'GENETIC DIVERSITY: Variation of genes within a species',
              'SPECIES DIVERSITY: Variety of different species in a habitat',
              'ECOSYSTEM DIVERSITY: Variety of ecosystems in a region',
              'SPECIES: Group of organisms that can reproduce and produce fertile offspring',
              'POPULATION: All members of one species in an area',
              'HABITAT: Natural home or environment of an organism'
            ]
          },
          {
            subtitle: 'Ecosystem Terms',
            emoji: '🌍',
            points: [
              'ECOSYSTEM: Community of living things interacting with non-living environment',
              'BIOTIC FACTOR: Living component of ecosystem (plants, animals, bacteria)',
              'ABIOTIC FACTOR: Non-living component (sunlight, water, soil, temperature)',
              'SUSTAINABLE ECOSYSTEM: Can maintain itself over time, resources regenerate',
              'BIOSPHERE: All living things on Earth',
              'ATMOSPHERE: Layer of gases surrounding Earth',
              'HYDROSPHERE: All water on Earth',
              'LITHOSPHERE: Earth\'s crust (rocks and soil)'
            ]
          },
          {
            subtitle: 'Organism Roles',
            emoji: '🔗',
            points: [
              'PRODUCER: Organism that makes own food through photosynthesis (plants)',
              'CONSUMER: Organism that eats other organisms for energy',
              'PRIMARY CONSUMER: Herbivore that eats producers (rabbit, deer)',
              'SECONDARY CONSUMER: Carnivore that eats primary consumers (snake, fox)',
              'TERTIARY CONSUMER: Top predator that eats secondary consumers (eagle, shark)',
              'DECOMPOSER: Breaks down dead matter (bacteria, fungi, worms)',
              'HERBIVORE: Eats only plants',
              'CARNIVORE: Eats only animals',
              'OMNIVORE: Eats both plants and animals'
            ]
          },
          {
            subtitle: 'Energy Flow Terms',
            emoji: '⚡',
            points: [
              'FOOD CHAIN: Linear sequence showing who eats whom',
              'FOOD WEB: Interconnected food chains in ecosystem',
              'TROPHIC LEVEL: Position in food chain (producer, primary consumer, etc.)',
              'ENERGY PYRAMID: Diagram showing energy at each trophic level',
              '10% RULE: Only 10% of energy passes to next level, 90% lost as heat',
              'BIOMASS: Total mass of living organisms in an area',
              'BIOACCUMULATION: Build-up of substance in single organism over time',
              'BIOMAGNIFICATION: Increase in toxin concentration up food chain'
            ]
          },
          {
            subtitle: 'Relationships',
            emoji: '🤝',
            points: [
              'SYMBIOSIS: Close relationship between two species',
              'MUTUALISM: Both species benefit (bee and flower)',
              'COMMENSALISM: One benefits, other unaffected (bird nesting in tree)',
              'PARASITISM: One benefits, other harmed (tick on dog)',
              'PREDATION: One organism hunts and eats another',
              'COMPETITION: Organisms compete for same limited resources'
            ]
          },
          {
            subtitle: 'Photosynthesis & Respiration',
            emoji: '🌱',
            points: [
              'PHOTOSYNTHESIS: Plants use CO₂ + water + sunlight → glucose + oxygen',
              'CELLULAR RESPIRATION: Organisms break down glucose + oxygen → CO₂ + water + ATP',
              'ATP: Energy currency of cells',
              'CHLOROPHYLL: Green pigment in plants that captures sunlight',
              'CHLOROPLAST: Organelle where photosynthesis occurs',
              'MITOCHONDRIA: Organelle where cellular respiration occurs'
            ]
          },
          {
            subtitle: 'Nutrient Cycles',
            emoji: '♻️',
            points: [
              'CARBON CYCLE: Movement of carbon through atmosphere, organisms, soil, water',
              'NITROGEN CYCLE: Movement of nitrogen through atmosphere, soil, organisms',
              'NITROGEN FIXATION: Converting N₂ gas to ammonia (by bacteria or lightning)',
              'NUTRITION: Converting ammonia to nitrite to nitrate (by bacteria)',
              'DENITRIFICATION: Converting nitrate back to N₂ gas (returns to atmosphere)',
              'AMMONIFICATION: Decomposers release ammonia from dead matter'
            ]
          },
          {
            subtitle: 'Threats to Biodiversity',
            emoji: '⚠️',
            points: [
              'HABITAT DESTRUCTION: Removal of living spaces (deforestation)',
              'INVASIVE SPECIES: Non-native species that cause harm',
              'POLLUTION: Harmful substances in environment (oil spills, chemicals)',
              'OVERHARVESTING: Taking organisms faster than they can reproduce',
              'CLIMATE CHANGE: Long-term changes in temperature and weather patterns',
              'EXTINCTION: Permanent loss of a species',
              'ENDANGERED: Species at risk of extinction'
            ]
          },
          {
            subtitle: 'Conservation & Restoration',
            emoji: '🌲',
            points: [
              'REFORESTATION: Planting trees where they were cut down',
              'BIOREMEDIATION: Using organisms to break down waste and improve environment',
              'BIOAUGMENTATION: Adding bacteria/fungi to neutralize toxins',
              'CONSERVATION: Protection and preservation of ecosystems',
              'SUSTAINABILITY: Meeting current needs without harming future generations',
              'BIODEGRADABLE: Can be broken down naturally by decomposers'
            ]
          }
        ]
      },
      {
        id: 'bio-types',
        title: 'Three Types of Biodiversity',
        image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&q=80&w=800',
        notes: [
          {
            subtitle: 'Genetic Diversity',
            emoji: '🧬',
            points: [
              'Variation of genes within a species',
              'Example: Different breeds of dogs',
              'Why it matters: Helps species adapt and survive'
            ]
          },
          {
            subtitle: 'Species Diversity',
            emoji: '🐠',
            points: [
              'Variety of species within a habitat',
              'Example: Variety of fish species in a coral reef',
              'More species = More stable ecosystem'
            ]
          },
          {
            subtitle: 'Ecosystem Diversity',
            emoji: '🌍',
            points: [
              'Variety of ecosystems in a region',
              'Example: Forests, wetlands, grasslands in an area',
              'Different ecosystems support different life forms'
            ]
          }
        ]
      },
      {
        id: 'bio-hippoc',
        title: 'H.I.P.P.O.C. - Threats to Biodiversity',
        image: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&q=80&w=800',
        notes: [
          {
            subtitle: 'H - Habitat Destruction',
            emoji: '🏗️',
            points: [
              'Removes living spaces for species',
              'Example: Deforestation of Amazon rainforest',
              'Species cannot survive without homes'
            ]
          },
          {
            subtitle: 'I - Invasive Species',
            emoji: '🦟',
            points: [
              'Outsiders compete with native species',
              'Example: Zebra mussels in North American lakes',
              'Disrupts natural balance'
            ]
          },
          {
            subtitle: 'P - Pollution',
            emoji: '🏭',
            points: [
              'Toxic chemicals, waste, and noise',
              'Example: Oil spills in oceans',
              'Kills or harms organisms'
            ]
          },
          {
            subtitle: 'P - Population (Human)',
            emoji: '👥',
            points: [
              'Too many people = more resources used',
              'Example: Urban sprawl reduces wildlife space',
              'Less room for native animals'
            ]
          },
          {
            subtitle: 'O - Overharvesting',
            emoji: '🎣',
            points: [
              'Taking too much (fishing/hunting/logging)',
              'Example: Overfishing of Atlantic cod',
              'Depletes species faster than recovery'
            ]
          },
          {
            subtitle: 'C - Climate Change',
            emoji: '🌡️',
            points: [
              'Alters habitats and weather patterns',
              'Example: Coral bleaching from warming seas',
              'Species struggle to adapt'
            ]
          }
        ]
      },
      {
        id: 'bio-factors',
        title: 'Biotic vs Abiotic Factors',
        image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800',
        notes: [
          {
            subtitle: 'Biotic Factors (Living)',
            emoji: '🌱',
            diagram: 'ecosystem-factors',
            points: [
              'Plants, animals, bacteria, fungi',
              'Algae, insects, microorganisms',
              'Note: Dying/decaying things are still biotic (e.g., decaying logs)'
            ]
          },
          {
            subtitle: 'Abiotic Factors (Non-living)',
            emoji: '☀️',
            points: [
              'Sunlight, temperature, water',
              'Soil, air, pH levels',
              'Physical and chemical components'
            ]
          }
        ]
      },
      {
        id: 'bio-foodchain',
        title: 'Food Chains & Energy Transfer',
        image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&q=80&w=800',
        notes: [
          {
            subtitle: 'Terrestrial Food Chain',
            emoji: '🌾',
            diagram: 'Terrestrial Food Chain Diagram',
            points: [
              'Example: Grass → Grasshopper → Mouse → Snake',
              'Starts with plants (producers)',
              'Energy flows one direction',
              'Each level is called a trophic level'
            ]
          },
          {
            subtitle: 'Aquatic Food Chain',
            emoji: '🌊',
            diagram: 'Aquatic Food Chain Diagram',
            points: [
              'Example: Phytoplankton → Small fish → Medium fish → Shark',
              'Starts with microscopic organisms',
              'Same 10% energy transfer rule',
              'Top predators get very little energy'
            ]
          },
          {
            subtitle: 'The 10% Rule',
            emoji: '⚡',
            diagram: 'Energy Pyramid',
            points: [
              'Only 10% of energy passes to next level',
              '90% lost as heat, movement, waste',
              'That is why food chains are limited in length!'
            ]
          },
          {
            subtitle: 'Energy Pyramid Example',
            emoji: '🔺',
            points: [
              'Producers: 54,670 kcal',
              'Primary consumers: 5,467 kcal (10%)',
              'Secondary consumers: 547 kcal (10%)',
              'Tertiary consumers: 54.7 kcal (10%)'
            ]
          },
          {
            subtitle: 'Key Points',
            emoji: '📌',
            points: [
              'Decomposers not included in energy pyramid',
              'Ecosystems can survive without consumers',
              'Producers are essential (initial energy source)',
              'Humans not included (can be anywhere in chain)'
            ]
          }
        ]
      },
      {
        id: 'bio-accumulation',
        title: 'Bioaccumulation & Biomagnification',
        image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&q=80&w=800',
        notes: [
          {
            subtitle: 'Bioaccumulation',
            emoji: '🐟',
            points: [
              'Build-up of substance in organism over time',
              'Example: Mercury in fish',
              'Individual organism absorbs toxins'
            ]
          },
          {
            subtitle: 'Biomagnification',
            emoji: '🦅',
            points: [
              'Concentration increases up food chain',
              'Example: DDT in birds of prey',
              'Top predators affected most',
              'Small fish eat plankton → bigger fish eat small fish → concentration increases'
            ]
          }
        ]
      },
      {
        id: 'bio-restoration',
        title: 'Restoration Techniques',
        image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800',
        notes: [
          {
            subtitle: 'Bio-Augmentation (Fixes)',
            emoji: '🦠',
            points: [
              'Uses bacteria/fungi to neutralize toxins',
              'Example: 2010 BP oil spill cleanup',
              'Breaks down contaminants naturally'
            ]
          },
          {
            subtitle: 'Bio-Remediation (Adds)',
            emoji: '🌿',
            points: [
              'Adding species that break down waste',
              'Improves soil quality and cleans water',
              'Example: Microbes as natural water filtration'
            ]
          },
          {
            subtitle: 'Reforestation',
            emoji: '🌲',
            points: [
              'Planting trees where they were cut',
              'Prevents soil erosion',
              'Provides food, shelter, shade for wildlife'
            ]
          }
        ]
      },
      {
        id: 'bio-carbon',
        title: 'Carbon Cycle',
        image: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&q=80&w=800',
        notes: [
          {
            subtitle: 'Reservoirs',
            emoji: '💨',
            points: [
              'Atmosphere: CO₂ gas',
              'Biosphere: Living organisms',
              'Lithosphere: Fossil fuels, carbonate rocks',
              'Hydrosphere: Dissolved CO₂ in water'
            ]
          },
          {
            subtitle: 'Photosynthesis vs Respiration',
            emoji: '🔄',
            diagram: 'Carbon Cycle Diagram',
            points: [
              'Photosynthesis: Plants absorb CO₂ → glucose',
              'Respiration: Organisms release CO₂',
              'Combustion: Burning fuels releases CO₂',
              'Decomposition: Dead matter releases CO₂',
              'Ocean uptake: Oceans absorb atmospheric CO₂'
            ]
          },
          {
            subtitle: 'Photosynthesis Equation',
            emoji: '🌱',
            diagram: 'Photosynthesis Diagram',
            points: [
              '6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂',
              'Uses sunlight energy',
              'Produces glucose (sugar) and oxygen',
              'Only happens in plants and some bacteria'
            ]
          },
          {
            subtitle: 'Cellular Respiration Equation',
            emoji: '💨',
            diagram: 'Cellular Respiration Diagram',
            points: [
              'C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP',
              'Breaks down glucose with oxygen',
              'Releases energy (ATP) for life',
              'Happens in ALL living organisms'
            ]
          }
        ]
      },
      {
        id: 'bio-nitrogen',
        title: 'Nitrogen Cycle',
        image: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&q=80&w=800',
        notes: [
          {
            subtitle: 'Complete Nitrogen Cycle',
            emoji: '♻️',
            diagram: 'Nitrogen Cycle Diagram',
            points: [
              'Nitrogen moves between atmosphere, soil, and organisms',
              'Essential for proteins and DNA',
              'Bacteria do most of the work!',
              '78% of air is nitrogen gas (N₂)'
            ]
          },
          {
            subtitle: 'Nitrogen Fixation',
            emoji: '⚡',
            points: [
              'N₂ → ammonia (NH₃)',
              'Done by bacteria (Rhizobium) or lightning',
              'Makes nitrogen usable for plants'
            ]
          },
          {
            subtitle: 'Nitrification',
            emoji: '🔬',
            points: [
              'Ammonia → nitrite (NO₂⁻) by Nitrosomonas',
              'Nitrite → nitrate (NO₃⁻) by Nitrobacter',
              'Two-step bacterial process'
            ]
          },
          {
            subtitle: 'Assimilation & Ammonification',
            emoji: '🌱',
            points: [
              'Assimilation: Plants absorb nitrate from soil',
              'Ammonification: Decomposers release ammonium',
              'Returns nitrogen to soil'
            ]
          },
          {
            subtitle: 'Denitrification',
            emoji: '💨',
            points: [
              'Nitrate → N₂ gas',
              'By denitrifying bacteria',
              'Returns nitrogen to atmosphere'
            ]
          }
        ]
      }
    ]
  },
  chemistry: {
    id: 'chemistry',
    name: 'Chemistry: Matter & Changes',
    description: 'The comprehensive study of matter, atomic structure, the periodic table, chemical reactions, and lab safety.',
    color: 'blue',
    gradient: 'from-blue-500 to-indigo-600',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9d343b400?auto=format&fit=crop&q=80&w=800',
    sections: [
      {
        id: 'chem-definitions',
        title: 'Key Chemistry Definitions',
        image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=800',
        notes: [
          {
            subtitle: 'Matter & Classification',
            emoji: '🧪',
            diagram: 'Classification of Matter Diagram',
            points: [
              'MATTER: Anything that has mass and takes up space',
              'PURE SUBSTANCE: Uniform composition - element or compound',
              'ELEMENT: Pure substance made of one type of atom (gold, oxygen)',
              'COMPOUND: Two or more elements chemically bonded (H₂O, CO₂)',
              'MIXTURE: Two or more substances physically combined (not bonded)',
              'HOMOGENEOUS MIXTURE: Uniform throughout, can\'t see parts (salt water)',
              'HETEROGENEOUS MIXTURE: Can see different parts (sand and water)',
              'SOLUTION: Type of homogeneous mixture (dissolved)',
              'SUSPENSION: Heterogeneous mixture where particles settle',
              'ALLOY: Mixture of metals (brass, steel)'
            ]
          },
          {
            subtitle: 'Properties of Matter',
            emoji: '⚖️',
            points: [
              'PHYSICAL PROPERTY: Observable without changing substance (color, density)',
              'CHEMICAL PROPERTY: How substance reacts with others (flammability)',
              'QUALITATIVE: Descriptive property (color, texture, odor)',
              'QUANTITATIVE: Measurable property with numbers (mass, volume, temperature)',
              'DENSITY: Mass per unit volume (D = m/V), measured in g/cm³ or g/mL',
              'MASS: Amount of matter in object, measured in grams (g)',
              'VOLUME: Space object occupies, measured in cm³ or mL',
              'MELTING POINT: Temperature solid becomes liquid',
              'BOILING POINT: Temperature liquid becomes gas',
              'SOLUBILITY: How much solute dissolves in solvent'
            ]
          },
          {
            subtitle: 'Changes in Matter',
            emoji: '🔬',
            points: [
              'PHYSICAL CHANGE: Same substance, different form (melting ice)',
              'CHEMICAL CHANGE: New substance forms (burning wood)',
              'INDICATORS OF CHEMICAL CHANGE: Color change, gas production, temperature change, light, precipitate',
              'PRECIPITATE: Solid that forms in liquid during chemical reaction',
              'COMBUSTION: Burning - reaction with oxygen producing heat and light',
              'OXIDATION: Reaction with oxygen (rusting)',
              'REACTANTS: Substances you start with in chemical reaction',
              'PRODUCTS: New substances formed in chemical reaction'
            ]
          },
          {
            subtitle: 'Atomic Structure',
            emoji: '⚛️',
            points: [
              'ATOM: Smallest unit of element that keeps its properties',
              'NUCLEUS: Dense center of atom containing protons and neutrons',
              'PROTON: Positively charged particle in nucleus (+1 charge)',
              'NEUTRON: Neutral particle in nucleus (0 charge)',
              'ELECTRON: Negatively charged particle orbiting nucleus (-1 charge)',
              'ATOMIC NUMBER: Number of protons (identifies element)',
              'MASS NUMBER: Total protons + neutrons',
              'ISOTOPE: Same element with different number of neutrons',
              'ELECTRON SHELL: Energy level where electrons orbit',
              'VALENCE ELECTRONS: Electrons in outermost shell (determine bonding)'
            ]
          },
          {
            subtitle: 'Ions & Bonding',
            emoji: '⚡',
            points: [
              'ION: Atom with unequal protons and electrons (charged)',
              'CATION: Positive ion (lost electrons), metals form cations',
              'ANION: Negative ion (gained electrons), non-metals form anions',
              'IONIC BOND: Transfer of electrons between atoms',
              'OCTET RULE: Atoms want 8 valence electrons for stability',
              'CHARGE: Number of protons minus number of electrons'
            ]
          },
          {
            subtitle: 'Periodic Table Terms',
            emoji: '📊',
            points: [
              'PERIODIC TABLE: Chart organizing elements by properties',
              'PERIOD: Horizontal row on periodic table',
              'GROUP/FAMILY: Vertical column with similar properties',
              'ALKALI METALS (Group 1): Soft, highly reactive, 1 valence electron',
              'ALKALINE EARTH METALS (Group 2): Form +2 ions, 2 valence electrons',
              'HALOGENS (Group 17): Reactive non-metals, 7 valence electrons',
              'NOBLE GASES (Group 18): Unreactive, 8 valence electrons (stable)',
              'TRANSITION METALS: Groups 3-12, can form multiple ion charges',
              'METAL: Shiny, conductive, malleable, loses electrons',
              'NON-METAL: Dull, poor conductor, brittle, gains electrons',
              'METALLOID: Properties between metals and non-metals (silicon)'
            ]
          },
          {
            subtitle: 'Atomic Models',
            emoji: '🔭',
            points: [
              'DALTON MODEL (1803): Solid sphere, indivisible atoms',
              'THOMSON MODEL (1897): Plum Pudding - positive with embedded electrons',
              'RUTHERFORD MODEL (1911): Nuclear model - dense nucleus with orbiting electrons',
              'BOHR MODEL (1913): Planetary model - electrons in specific energy levels/shells'
            ]
          },
          {
            subtitle: 'Separation Methods',
            emoji: '🔧',
            points: [
              'FILTRATION: Separating solid from liquid using filter',
              'DISTILLATION: Separating liquids by different boiling points',
              'EVAPORATION: Liquid evaporates leaving dissolved solid behind',
              'CHROMATOGRAPHY: Separating dissolved substances by movement rate',
              'MAGNETISM: Separating magnetic from non-magnetic materials'
            ]
          },
          {
            subtitle: 'Important Formulas',
            emoji: '📐',
            points: [
              'DENSITY: D = m/V (Density = mass ÷ volume)',
              'MASS: m = D × V (Mass = density × volume)',
              'VOLUME: V = m/D (Volume = mass ÷ density)',
              'NEUTRONS: N = Mass number - Atomic number',
              'CHARGE: Charge = Protons - Electrons',
              'Floating: Object floats if density < liquid density',
              'Sinking: Object sinks if density > liquid density'
            ]
          },
          {
            subtitle: 'Units & Conversions',
            emoji: '🔢',
            points: [
              'Mass: grams (g), kilograms (kg), 1 kg = 1000 g',
              'Volume: milliliters (mL), liters (L), cubic centimeters (cm³)',
              '1 mL = 1 cm³',
              'Density: g/cm³ or g/mL',
              'Temperature: Celsius (°C), Kelvin (K), °C + 273 = K',
              'AMU (atomic mass unit): Unit for atomic mass, 1 amu ≈ mass of proton/neutron'
            ]
          }
        ]
      },
      {
        id: 'chem-terms',
        title: 'More Essential Chemistry Terms',
        image: 'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?auto=format&fit=crop&q=80&w=800',
        notes: [
          {
            subtitle: 'States of Matter',
            emoji: '💧',
            points: [
              'SOLID: Definite shape and volume, particles tightly packed',
              'LIQUID: Definite volume but no shape, particles close but can move',
              'GAS: No definite shape or volume, particles far apart and moving fast',
              'PLASMA: Super-heated gas with charged particles (found in stars)',
              'MELTING: Solid to liquid (ice → water)',
              'FREEZING: Liquid to solid (water → ice)',
              'EVAPORATION: Liquid to gas (water → steam)',
              'CONDENSATION: Gas to liquid (steam → water)',
              'SUBLIMATION: Solid directly to gas (dry ice)',
              'DEPOSITION: Gas directly to solid (frost forming)'
            ]
          },
          {
            subtitle: 'Lab Safety',
            emoji: '🥽',
            points: [
              'SAFETY GOGGLES: Protect eyes from chemicals and broken glass',
              'LAB COAT/APRON: Protect clothing and skin',
              'FIRE EXTINGUISHER: Put out fires (know location)',
              'EYEWASH STATION: Rinse eyes if chemicals splash',
              'SAFETY SHOWER: Rinse body if large chemical spill',
              'FUME HOOD: Ventilated area for handling toxic fumes',
              'MSDS (Material Safety Data Sheet): Information about chemical hazards',
              'WHMIS: Workplace Hazardous Materials Information System (Canadian)',
              'Never eat/drink in lab, tie back long hair, report all accidents'
            ]
          },
          {
            subtitle: 'WHMIS Symbols',
            emoji: '⚠️',
            diagram: 'WHMIS Symbols Diagram',
            points: [
              'FLAME: Flammable materials that catch fire easily',
              'FLAME OVER CIRCLE: Oxidizers that make fires burn stronger',
              'GAS CYLINDER: Compressed gases under pressure',
              'CORROSION: Acids/bases that burn skin and eyes',
              'SKULL & CROSSBONES: Poisonous/toxic materials',
              'EXCLAMATION MARK: Irritants causing skin/eye irritation',
              'HEALTH HAZARD: Long-term health effects (cancer, breathing problems)',
              'EXPLODING BOMB: Explosives',
              'BIOHAZARD: Infectious materials',
              'ENVIRONMENT: Toxic to aquatic life and ecosystems'
            ]
          },
          {
            subtitle: 'Chemical Reactions',
            emoji: '⚗️',
            points: [
              'CHEMICAL REACTION: Process where substances change into new substances',
              'SYNTHESIS: Two or more substances combine (A + B → AB)',
              'DECOMPOSITION: Compound breaks down (AB → A + B)',
              'SINGLE REPLACEMENT: One element replaces another (A + BC → AC + B)',
              'DOUBLE REPLACEMENT: Two compounds swap parts (AB + CD → AD + CB)',
              'EXOTHERMIC: Releases energy/heat (combustion, hand warmers)',
              'ENDOTHERMIC: Absorbs energy/heat (photosynthesis, cold packs)',
              'CATALYST: Speeds up reaction without being used up',
              'ACTIVATION ENERGY: Minimum energy needed to start reaction'
            ]
          },
          {
            subtitle: 'Solutions & Concentration',
            emoji: '🧬',
            points: [
              'SOLVENT: Substance doing the dissolving (usually water)',
              'SOLUTE: Substance being dissolved (sugar, salt)',
              'CONCENTRATED: Solution with lots of solute',
              'DILUTE: Solution with little solute',
              'SATURATED: Maximum amount of solute dissolved at given temperature',
              'UNSATURATED: Can dissolve more solute',
              'SUPERSATURATED: More solute than normally possible (unstable)',
              'SOLUBLE: Able to dissolve',
              'INSOLUBLE: Unable to dissolve',
              'AQUEOUS: Dissolved in water (symbol: aq)'
            ]
          },
          {
            subtitle: 'Acids & Bases',
            emoji: '🧪',
            points: [
              'ACID: Substance with pH less than 7, tastes sour, donates H⁺ ions',
              'BASE: Substance with pH greater than 7, tastes bitter, accepts H⁺ ions',
              'NEUTRAL: pH of exactly 7 (pure water)',
              'pH SCALE: Measures acidity/basicity from 0 (very acidic) to 14 (very basic)',
              'INDICATOR: Substance that changes color in acids vs bases (litmus paper)',
              'NEUTRALIZATION: Acid + Base → Salt + Water',
              'CORROSIVE: Strong acid or base that burns/damages materials',
              'Examples of acids: HCl (hydrochloric), H₂SO₄ (sulfuric), vinegar',
              'Examples of bases: NaOH (sodium hydroxide), ammonia, soap'
            ]
          },
          {
            subtitle: 'Chemical Nomenclature',
            emoji: '📝',
            points: [
              'CHEMICAL FORMULA: Symbols showing what\'s in compound (H₂O)',
              'SUBSCRIPT: Small number showing how many atoms (H₂O has 2 hydrogen)',
              'COEFFICIENT: Number before formula showing how many molecules (2H₂O)',
              'DIATOMIC MOLECULES: Elements existing as pairs (H₂, O₂, N₂, F₂, Cl₂, Br₂, I₂)',
              'BINARY COMPOUND: Compound made of two elements (NaCl)',
              'POLYATOMIC ION: Group of atoms with charge (SO₄²⁻, NO₃⁻)',
              'MOLECULAR FORMULA: Shows actual number of atoms in molecule',
              'EMPIRICAL FORMULA: Shows simplest whole number ratio'
            ]
          },
          {
            subtitle: 'Energy in Chemistry',
            emoji: '🔥',
            points: [
              'CHEMICAL ENERGY: Energy stored in chemical bonds',
              'THERMAL ENERGY: Heat energy from particle motion',
              'KINETIC ENERGY: Energy of motion',
              'POTENTIAL ENERGY: Stored energy',
              'LAW OF CONSERVATION OF ENERGY: Energy cannot be created or destroyed',
              'LAW OF CONSERVATION OF MASS: Matter cannot be created or destroyed in chemical reactions',
              'TEMPERATURE: Measure of average kinetic energy of particles',
              'HEAT: Transfer of thermal energy from hot to cold'
            ]
          },
          {
            subtitle: 'Advanced Atomic Concepts',
            emoji: '🌟',
            points: [
              'ORBITAL: Region where electron is likely to be found',
              'QUANTUM: Smallest discrete amount of energy',
              'GROUND STATE: Lowest energy state of atom',
              'EXCITED STATE: Higher energy state when electron absorbs energy',
              'EMISSION SPECTRUM: Light given off when excited electrons return to ground state',
              'ATOMIC MASS: Weighted average mass of all isotopes',
              'RELATIVE ATOMIC MASS: Atomic mass compared to carbon-12',
              'ELECTRON CONFIGURATION: Arrangement of electrons in shells/orbitals'
            ]
          },
          {
            subtitle: 'Scientific Method & Measurement',
            emoji: '🔬',
            points: [
              'HYPOTHESIS: Testable prediction based on observations',
              'EXPERIMENT: Test to check if hypothesis is correct',
              'VARIABLE: Factor that can change in experiment',
              'CONTROL: Part of experiment that stays the same for comparison',
              'INDEPENDENT VARIABLE: What you change on purpose',
              'DEPENDENT VARIABLE: What you measure (depends on independent variable)',
              'PRECISION: How close measurements are to each other (consistency)',
              'ACCURACY: How close measurement is to true value (correctness)',
              'SIGNIFICANT FIGURES: Digits in measurement that are certain plus one estimated digit'
            ]
          }
        ]
      },
      {
        id: 'chem-lab',
        title: 'Lab Equipment & Tools',
        image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800',
        notes: [
          {
            subtitle: 'Measuring & Transferring',
            emoji: '📏',
            points: [
              'Graduated Cylinder: Measures liquid volume accurately',
              'Beaker: Holds and mixes liquids (less accurate measurements)',
              'Erlenmeyer Flask: For mixing, heating, and storing liquids',
              'Funnel: Transfers liquids or powders into containers'
            ]
          },
          {
            subtitle: 'Heating Equipment',
            emoji: '🔥',
            points: [
              'Portable Bunsen Burner: Heats substances with controlled flame',
              'Lighter: Ignites Bunsen burner'
            ]
          },
          {
            subtitle: 'Handling & Mixing',
            emoji: '🥄',
            points: [
              'Scoopula/Spatula: Scoops and transfers solid chemicals',
              'Stirring Rod: Stirs and mixes liquids without contamination',
              'Test Tubes: Holds small amounts of liquid for experiments'
            ]
          },
          {
            subtitle: 'Measuring & Observation',
            emoji: '⚖️',
            points: [
              'Electronic Balance/Scale: Measures mass of objects accurately',
              'Overflow Can: Measures volume by water displacement',
              'Dimple Tile: Holds small samples for mixing or observation'
            ]
          }
        ]
      },
      {
        id: 'chem-safety-whmis',
        title: 'Lab Safety & WHMIS Symbols',
        image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&q=80&w=800',
        notes: [
          {
            subtitle: 'General Safety Rules',
            emoji: '⚠️',
            points: [
              'Wear safety goggles when required',
              'Tie back long hair',
              'NO eating or drinking in lab',
              'Report all accidents immediately',
              'Know where safety equipment is located'
            ]
          },
          {
            subtitle: 'Key WHMIS Symbols to Know',
            emoji: '🔶',
            diagram: 'WHMIS Symbols Diagram',
            points: [
              'Explosive: Risk of exploding',
              'Flammable: Catches fire easily',
              'Corrosive: Burns skin and eyes',
              'Health Hazard: May cause serious health issues',
              'Environmental Hazard: Toxic to aquatic life'
            ]
          }
        ]
      },
      {
        id: 'chem-classification',
        title: 'Classification of Matter',
        image: 'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?auto=format&fit=crop&q=80&w=800',
        notes: [
          {
            subtitle: 'Pure Substances',
            emoji: '✨',
            diagram: 'Classification of Matter Diagram',
            points: [
              'Elements: One type of atom (e.g., Gold, Oxygen)',
              'Compounds: Two+ elements bonded (e.g., H₂O, NaCl)',
              'Uniform composition throughout'
            ]
          },
          {
            subtitle: 'Homogeneous Mixtures',
            emoji: '🥤',
            points: [
              'Uniform throughout - cannot see parts',
              'Examples: Salt water, air, brass',
              'Also called solutions'
            ]
          },
          {
            subtitle: 'Heterogeneous Mixtures',
            emoji: '🥗',
            points: [
              'Can see different parts',
              'Suspensions: Particles settle (muddy water)',
              'Mechanical: Parts clearly visible (trail mix)'
            ]
          }
        ]
      },
      {
        id: 'chem-separation',
        title: 'Separation Methods',
        image: 'https://images.unsplash.com/photo-1532187863486-abf9d343b400?auto=format&fit=crop&q=80&w=800',
        notes: [
          {
            subtitle: 'Common Methods',
            emoji: '🔬',
            points: [
              'Filtration: Solid from liquid (sand from water)',
              'Distillation: Different boiling points (water from salt)',
              'Evaporation: Dissolved solid from liquid (get salt)',
              'Magnetism: Magnetic from non-magnetic (iron from sand)',
              'Chromatography: Dissolved substances (separate dyes)'
            ]
          }
        ]
      },
      {
        id: 'chem-changes',
        title: 'Physical vs Chemical Changes',
        image: 'https://images.unsplash.com/photo-1628863353691-0071c8c1874c?auto=format&fit=crop&q=80&w=800',
        notes: [
          {
            subtitle: 'Physical Changes',
            emoji: '❄️',
            points: [
              'Same substance, different appearance',
              'Usually reversible',
              'Examples: Ice melting, cutting paper, dissolving sugar'
            ]
          },
          {
            subtitle: 'Chemical Changes - Look For',
            emoji: '🔥',
            points: [
              'Color change (iron rusting)',
              'Gas production/bubbles (vinegar + baking soda)',
              'Temperature change (hand warmers)',
              'Light production (fireworks)',
              'Precipitate forms (solid in liquid)',
              'Difficult/impossible to reverse'
            ]
          }
        ]
      },
      {
        id: 'chem-density',
        title: 'Density Calculations',
        image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800',
        notes: [
          {
            subtitle: 'The Formula',
            emoji: '📐',
            points: [
              'D = m/V',
              'D = Density (g/cm³ or g/mL)',
              'm = Mass (grams)',
              'V = Volume (cm³ or mL)'
            ]
          },
          {
            subtitle: 'Triangle Trick',
            emoji: '🔺',
            points: [
              'Top: m (mass)',
              'Bottom left: D (density)',
              'Bottom right: V (volume)',
              'Cover what you are solving for!'
            ]
          },
          {
            subtitle: 'Floating Rule',
            emoji: '🛟',
            diagram: 'Density Comparison Diagram',
            points: [
              'Object floats if density < liquid density',
              'Object sinks if density > liquid density',
              'Example: Ice (0.92) floats on water (1.0)'
            ]
          }
        ]
      },
      {
        id: 'chem-properties-2',
        title: 'Physical & Chemical Properties',
        image: 'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?auto=format&fit=crop&q=80&w=800',
        notes: [
          {
            subtitle: 'Physical Properties',
            emoji: '👁️',
            points: [
              'Qualitative: Color, texture, odor, state, luster, malleability, ductility',
              'Quantitative: Mass, volume, density, melting/boiling point, solubility',
              'Observable WITHOUT changing the substance'
            ]
          },
          {
            subtitle: 'Chemical Properties',
            emoji: '⚗️',
            points: [
              'Combustibility: Ability to burn',
              'Reactivity with acids (metals produce hydrogen gas)',
              'Stability: Reactivity with oxygen (e.g., iron rusting)',
              'How substance reacts with OTHER substances'
            ]
          }
        ]
      },
      {
        id: 'chem-periodic',
        title: 'Periodic Table Organization',
        image: 'https://images.unsplash.com/photo-1614935151651-0bea6508db6b?auto=format&fit=crop&q=80&w=800',
        notes: [
          {
            subtitle: 'Element Families',
            emoji: '👨‍👩‍👧‍👦',
            diagram: 'Periodic Table Diagram',
            points: [
              'Alkali Metals (Group 1): Soft, highly reactive, form basic solutions',
              'Alkaline-Earth Metals (Group 2): Form +2 ions, basic oxides',
              'Halogens (Group 17): Reactive non-metals, diatomic, form salts',
              'Noble Gases (Group 18): Full valence shells, almost unreactive'
            ]
          },
          {
            subtitle: 'Metals vs Non-metals',
            emoji: '🔧',
            points: [
              'Metals: Shiny, conductive, malleable, lose electrons (Na, Fe, Cu)',
              'Non-metals: Dull, poor conductors, brittle, gain electrons (O, S, Cl)',
              'Metalloids: Between metals/non-metals, semiconductors (Si, B, As)'
            ]
          }
        ]
      },
      {
        id: 'chem-models-history',
        title: 'Atomic Models Through History',
        image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800',
        notes: [
          {
            subtitle: 'John Dalton (1766-1844) - The Atomic Model',
            emoji: '⚪',
            diagram: 'Atomic Models Diagram',
            points: [
              'Matter is made of small indivisible atoms',
              'Atoms can\'t be subdivided, created or destroyed',
              'Atoms of the same element have the same properties',
              'Atoms of different elements have different properties',
              'Atoms of different elements can form compounds'
            ]
          },
          {
            subtitle: 'J.J. Thomson (1856-1940) - Plum Pudding Model',
            emoji: '🍮',
            points: [
              'An atom is electrically neutral (no net charge)',
              'Positive and negative charges are equal in an atom',
              'Atom is a sphere of positive charge with negative electrons embedded in it',
              'Discovered the electron'
            ]
          },
          {
            subtitle: 'Ernest Rutherford (1871-1937) - Nuclear Model',
            emoji: '🎯',
            points: [
              'Atoms are mostly empty space',
              'Most of the mass is concentrated in the center (nucleus)',
              'The nucleus is tiny, dense, and positively charged',
              'Electrons are located outside the nucleus'
            ]
          },
          {
            subtitle: 'Niels Bohr (1885-1962) - Planetary Model',
            emoji: '🪐',
            points: [
              'Electrons orbit the nucleus in specific energy levels (shells)',
              'The energy of an orbit is related to its size',
              'The lowest energy is found in the smallest orbit',
              'Electrons move between shells when gaining or losing energy',
              'Gaining energy → electrons move to farther orbits',
              'Losing energy → electrons move to closer orbits'
            ]
          }
        ]
      },
      {
        id: 'chem-subatomic',
        title: 'Subatomic Particles & Bohr Diagrams',
        image: 'https://images.unsplash.com/photo-1635070041409-e5e34c1a6ff9?auto=format&fit=crop&q=80&w=800',
        notes: [
          {
            subtitle: 'The Three Particles',
            emoji: '⚛️',
            points: [
              'Protons: Positive (+1), mass ≈ 1 amu, in nucleus',
              'Neutrons: Neutral (0), mass ≈ 1 amu, in nucleus',
              'Electrons: Negative (-1), negligible mass, in shells'
            ]
          },
          {
            subtitle: 'Using the Periodic Table',
            emoji: '📊',
            points: [
              'Atomic number = # protons = # electrons (neutral atom)',
              'Mass number ≈ atomic mass (rounded)',
              'Neutrons = Mass number - Atomic number'
            ]
          },
          {
            subtitle: 'Bohr-Rutherford Diagrams',
            emoji: '🎨',
            diagram: 'bohr-model',
            points: [
              'Nucleus in center (protons + neutrons)',
              '1st shell: max 2 electrons',
              '2nd shell: max 8 electrons',
              '3rd shell: max 8 electrons (for first 20 elements)'
            ]
          },
          {
            subtitle: 'Isotopes',
            emoji: '🔄',
            points: [
              'Same element, different neutron count',
              'Same protons, different mass numbers',
              'Example: Carbon-12 vs Carbon-14'
            ]
          }
        ]
      },
      {
        id: 'chem-valence',
        title: 'Valence Electrons & Ions',
        image: 'https://images.unsplash.com/photo-1614935151651-0bea6508db6b?auto=format&fit=crop&q=80&w=800',
        notes: [
          {
            subtitle: 'Valence Electrons',
            emoji: '🌟',
            diagram: 'Lewis Dot Diagram',
            points: [
              'Electrons in outermost shell',
              'Determine chemical behavior',
              'Shown in Lewis dot diagrams',
              'Group number = number of valence electrons'
            ]
          },
          {
            subtitle: 'Ions - Charged Atoms',
            emoji: '⚡',
            diagram: 'Ion Diagram',
            points: [
              'Cations: Positive (lost electrons), protons > electrons',
              'Anions: Negative (gained electrons), electrons > protons',
              'Protons NEVER change (determines element)',
              'Electrons = protons - charge',
              'Atoms form ions to get a full outer shell (stable)'
            ]
          },
          {
            subtitle: 'Why Atoms Form Ions',
            emoji: '🎯',
            points: [
              'Atoms want 8 valence electrons (octet rule)',
              'Metals (Groups 1-3): Easier to LOSE 1-3 electrons → form cations (+)',
              'Non-metals (Groups 15-17): Easier to GAIN 1-3 electrons → form anions (-)',
              'Noble gases already have 8 (or 2 for He) → don\'t form ions',
              'Example: Na loses 1e⁻ → Na⁺ | Cl gains 1e⁻ → Cl⁻'
            ]
          }
        ]
      }
    ]
  },
  physics: {
    id: 'physics',
    name: 'Physics: Electricity',
    description: 'Master the principles of static and current electricity, including circuit design and Ohm\'s Law.',
    color: 'amber',
    gradient: 'from-amber-500 to-orange-600',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800',
    sections: [
      {
        id: 'phys-definitions',
        title: 'Key Electricity Definitions',
        image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=800',
        notes: [
          {
            subtitle: 'Fundamental Concepts',
            emoji: '📚',
            points: [
              'ELECTRICITY: Flow of electric charge through a conductor',
              'CHARGE: Property of matter that causes electrical force (positive or negative)',
              'ELECTRON: Negatively charged particle that moves in electric current',
              'PROTON: Positively charged particle in nucleus (doesn\'t move)',
              'NEUTRAL: Object with equal positive and negative charges (no net charge)',
              'ION: Atom with unequal protons and electrons (charged atom)'
            ]
          },
          {
            subtitle: 'Static Electricity Terms',
            emoji: '⚡',
            points: [
              'STATIC ELECTRICITY: Build-up of electric charge on surface of objects',
              'FRICTION: Charging by rubbing two objects together (transfers electrons)',
              'CONDUCTION: Charging by direct contact with charged object',
              'INDUCTION: Charging without direct contact (nearby charged object)',
              'ELECTROSCOPE: Device used to detect electric charge',
              'GROUNDING: Connecting object to Earth to remove excess charge'
            ]
          },
          {
            subtitle: 'Current Electricity Terms',
            emoji: '🔋',
            points: [
              'CURRENT (I): Rate of flow of electric charge, measured in Amperes (A)',
              'VOLTAGE (V): Electric potential difference, electrical "pressure", measured in Volts (V)',
              'RESISTANCE (R): Opposition to flow of current, measured in Ohms (Ω)',
              'CONDUCTOR: Material that allows electricity to flow easily (copper, metals)',
              'INSULATOR: Material that resists flow of electricity (rubber, plastic, wood)',
              'AMMETER: Device that measures electric current (connected in series)',
              'VOLTMETER: Device that measures voltage (connected in parallel)'
            ]
          },
          {
            subtitle: 'Circuit Terms',
            emoji: '🔌',
            points: [
              'CIRCUIT: Complete path that allows electricity to flow',
              'CLOSED CIRCUIT: Complete loop allowing current to flow',
              'OPEN CIRCUIT: Broken path preventing current flow',
              'SHORT CIRCUIT: Unintended path with very low resistance (dangerous)',
              'LOAD: Device in circuit that uses electrical energy (bulb, motor, resistor)',
              'POWER SOURCE: Provides energy to circuit (battery, generator)',
              'SWITCH: Device to open or close a circuit'
            ]
          },
          {
            subtitle: 'Series Circuit Definitions',
            emoji: '➡️',
            points: [
              'SERIES CIRCUIT: Circuit with single path for current',
              'In series: Components connected end-to-end',
              'Current is SAME at all points in series circuit',
              'Voltage DIVIDES among components (V_total = V₁ + V₂ + V₃)',
              'Total resistance INCREASES (R_total = R₁ + R₂ + R₃)',
              'If one component fails, entire circuit stops working'
            ]
          },
          {
            subtitle: 'Parallel Circuit Definitions',
            emoji: '🔀',
            points: [
              'PARALLEL CIRCUIT: Circuit with multiple paths for current',
              'In parallel: Components connected across same two points',
              'Voltage is SAME across all branches',
              'Current DIVIDES among paths (I_total = I₁ + I₂ + I₃)',
              'Total resistance DECREASES (more paths = easier flow)',
              'If one branch fails, other branches continue working'
            ]
          },
          {
            subtitle: 'Power & Energy Terms',
            emoji: '💡',
            points: [
              'POWER (P): Rate of using electrical energy, measured in Watts (W)',
              'WATT: Unit of power (1 W = 1 Joule per second)',
              'KILOWATT: 1000 Watts (kW)',
              'ENERGY: Total amount of electrical work done, measured in Joules (J)',
              'KILOWATT-HOUR (kWh): Amount of energy used by 1 kW device in 1 hour',
              'ELECTRICAL EFFICIENCY: Ratio of useful energy output to total energy input'
            ]
          },
          {
            subtitle: 'Safety Terms',
            emoji: '⚠️',
            points: [
              'FUSE: Safety device with thin wire that melts when overloaded',
              'CIRCUIT BREAKER: Safety switch that trips/opens when too much current flows',
              'GFCI (Ground Fault Circuit Interrupter): Device that detects shorts and cuts power',
              'GROUND: Connection to Earth providing safe path for excess electricity',
              'SHOCK: Effect of electric current passing through body',
              'OVERLOAD: Too much current drawn from circuit (can cause fire)'
            ]
          },
          {
            subtitle: 'Important Formulas',
            emoji: '📐',
            points: [
              'OHM\'S LAW: V = I × R (Voltage = Current × Resistance)',
              'POWER: P = V × I (Power = Voltage × Current)',
              'POWER: P = I²R (alternate formula using resistance)',
              'POWER: P = V²/R (alternate formula)',
              'ENERGY: E = P × t (Energy = Power × time)',
              'COST: Cost = Energy (kWh) × Rate ($/kWh)'
            ]
          },
          {
            subtitle: 'Unit Conversions',
            emoji: '🔢',
            points: [
              '1 Ampere (A) = 1 Coulomb per second',
              '1 Kilowatt (kW) = 1000 Watts (W)',
              '1 Megawatt (MW) = 1,000,000 Watts',
              '1 Milliampere (mA) = 0.001 Amperes',
              '1 Kilohm (kΩ) = 1000 Ohms',
              '1 Megohm (MΩ) = 1,000,000 Ohms',
              '1 Kilowatt-hour = 3,600,000 Joules'
            ]
          }
        ]
      },
      {
        id: 'phys-static',
        title: 'Static Electricity',
        image: 'https://images.unsplash.com/photo-1516339901601-2e1a62dc0c45?auto=format&fit=crop&q=80&w=800',
        notes: [
          {
            subtitle: 'What is Static Electricity?',
            emoji: '⚡',
            points: [
              'Build-up of electric charge on the surface of objects',
              'Caused by imbalance of electrons (negative) and protons (positive)',
              'Called "static" because charges don\'t move - they stay in one place',
              'Creates a shock when you touch something metal'
            ]
          },
          {
            subtitle: 'The Law of Electric Charges',
            emoji: '🧲',
            diagram: 'Static Electricity Diagram',
            points: [
              'Like charges REPEL (push away): + and + OR - and -',
              'Opposite charges ATTRACT (pull together): + and -',
              'Neutral objects have equal positive and negative charges',
              'Charged objects have more of one type of charge'
            ]
          },
          {
            subtitle: 'Three Ways to Charge Objects',
            emoji: '🔄',
            points: [
              'FRICTION: Rubbing objects transfers electrons (balloon on hair)',
              'CONDUCTION: Direct contact transfers charge (touching a charged rod)',
              'INDUCTION: Charged object nearby causes separation without touching',
              'Only ELECTRONS move - protons stay in the nucleus'
            ]
          },
          {
            subtitle: 'Electroscope',
            emoji: '🔬',
            points: [
              'Device that detects electric charge',
              'Metal leaves spread apart when charged (same charge repels)',
              'If leaves collapse, object is neutral or opposite charge',
              'Used in labs to test if objects are charged'
            ]
          },
          {
            subtitle: 'Real-World Examples',
            emoji: '🌟',
            points: [
              'Lightning: Massive static discharge between clouds and ground',
              'Balloon sticking to wall after rubbing on hair',
              'Shock when touching doorknob after walking on carpet',
              'Clothes clinging together from dryer (static cling)'
            ]
          }
        ]
      },
      {
        id: 'phys-current-ohm',
        title: 'Current Electricity & Ohm\'s Law',
        image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800',
        notes: [
          {
            subtitle: 'Current Electricity Basics',
            emoji: '🔋',
            diagram: 'Complete Circuit Diagram',
            points: [
              'Continuous flow of electrons through a conductor',
              'Unlike static, charges are MOVING constantly',
              'Requires a complete circuit (closed loop)',
              'Power source (battery) pushes electrons through wires'
            ]
          },
          {
            subtitle: 'Three Key Terms',
            emoji: '📊',
            points: [
              'CURRENT (I): Flow of electrons, measured in Amperes (A)',
              'VOLTAGE (V): Electrical pressure/push, measured in Volts (V)',
              'RESISTANCE (R): Opposition to flow, measured in Ohms (Ω)',
              'Think: Voltage pushes, Current flows, Resistance slows'
            ]
          },
          {
            subtitle: 'Ohm\'s Law',
            emoji: '📐',
            diagram: 'Ohm\'s Law Triangle',
            points: [
              'Formula: V = I × R',
              'Voltage = Current × Resistance',
              'If you know any 2 values, you can find the 3rd',
              'Example: V = 12V, R = 4Ω → I = V/R = 12/4 = 3A'
            ]
          },
          {
            subtitle: 'Calculating with Ohm\'s Law',
            emoji: '🧮',
            points: [
              'To find Current: I = V / R',
              'To find Voltage: V = I × R',
              'To find Resistance: R = V / I',
              'Always include units in your answer!'
            ]
          },
          {
            subtitle: 'What Affects Resistance?',
            emoji: '🔌',
            points: [
              'LENGTH: Longer wire = MORE resistance',
              'THICKNESS: Thinner wire = MORE resistance',
              'MATERIAL: Copper (low) vs Rubber (high)',
              'TEMPERATURE: Hotter = MORE resistance (usually)'
            ]
          }
        ]
      },
      {
        id: 'phys-circuits',
        title: 'Electric Circuits',
        image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=800',
        notes: [
          {
            subtitle: 'Circuit Components',
            emoji: '🔧',
            diagram: 'Circuit Symbols Diagram',
            points: [
              'BATTERY/CELL: Provides voltage (energy source)',
              'WIRES: Conduct electricity (usually copper)',
              'LOAD: Device that uses electricity (bulb, motor, resistor)',
              'SWITCH: Opens/closes circuit to control flow',
              'Must form a COMPLETE LOOP for current to flow'
            ]
          },
          {
            subtitle: 'Series Circuits',
            emoji: '➡️',
            diagram: 'Series Circuit Diagram',
            points: [
              'ONE path for current to flow',
              'Components connected end-to-end in a line',
              'Current is SAME everywhere: I₁ = I₂ = I₃',
              'Voltage DIVIDES among components: V_total = V₁ + V₂ + V₃',
              'If one bulb breaks, ALL go out (like old Christmas lights)',
              'More bulbs = dimmer light (resistance adds up)'
            ]
          },
          {
            subtitle: 'Parallel Circuits',
            emoji: '🔀',
            diagram: 'Parallel Circuit Diagram',
            points: [
              'MULTIPLE paths for current to flow',
              'Components connected across same two points',
              'Voltage is SAME across all branches: V₁ = V₂ = V₃',
              'Current DIVIDES among branches: I_total = I₁ + I₂ + I₃',
              'If one bulb breaks, others STAY ON (home wiring)',
              'More paths = MORE total current drawn'
            ]
          },
          {
            subtitle: 'Series vs Parallel Summary',
            emoji: '⚖️',
            points: [
              'Series: Same current, voltage divides, one path',
              'Parallel: Same voltage, current divides, multiple paths',
              'Series: One break stops everything',
              'Parallel: One break doesn\'t affect others',
              'Real homes use PARALLEL so outlets work independently'
            ]
          },
          {
            subtitle: 'Circuit Diagrams',
            emoji: '📋',
            points: [
              'Battery: Long line (+) and short line (-)',
              'Wire: Straight line',
              'Bulb/Resistor: Zigzag line or circle with X',
              'Switch: Break in line that can open/close',
              'Learn to read and draw simple circuit diagrams'
            ]
          }
        ]
      },
      {
        id: 'phys-energy',
        title: 'Electrical Energy & Power',
        image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800',
        notes: [
          {
            subtitle: 'What is Electrical Power?',
            emoji: '💡',
            points: [
              'Rate at which electrical energy is used or produced',
              'Measured in Watts (W)',
              'Higher wattage = more energy used per second',
              '1000 Watts = 1 Kilowatt (kW)'
            ]
          },
          {
            subtitle: 'Power Formula',
            emoji: '⚡',
            diagram: 'Power Formula Diagram',
            points: [
              'Formula: P = V × I',
              'Power = Voltage × Current',
              'Example: 120V outlet, 0.5A current → P = 120 × 0.5 = 60W',
              'Can also use: P = I²R or P = V²/R (using Ohm\'s Law)'
            ]
          },
          {
            subtitle: 'Energy vs Power',
            emoji: '🔋',
            points: [
              'POWER: How fast you use energy (Watts)',
              'ENERGY: Total amount used over time (Joules or kWh)',
              'Energy = Power × Time',
              'Example: 100W bulb for 10 hours = 1000 Wh = 1 kWh',
              'Electric bill charges for ENERGY (kWh), not power'
            ]
          },
          {
            subtitle: 'Cost of Electricity',
            emoji: '💰',
            points: [
              'Power companies charge per kilowatt-hour (kWh)',
              'To find cost: (Power in kW) × (Time in hours) × (Rate per kWh)',
              'Example: 1.5 kW heater, 8 hours, $0.12/kWh → 1.5 × 8 × 0.12 = $1.44',
              'Leaving devices on 24/7 wastes energy and money'
            ]
          },
          {
            subtitle: 'Appliance Wattage Examples',
            emoji: '🏠',
            points: [
              'LED bulb: 10W',
              'Laptop: 50W',
              'Desktop computer: 200W',
              'Microwave: 1000W (1 kW)',
              'Electric heater: 1500W (1.5 kW)',
              'Hair dryer: 1800W (1.8 kW)'
            ]
          }
        ]
      },
      {
        id: 'phys-safety',
        title: 'Electrical Safety',
        image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&q=80&w=800',
        notes: [
          {
            subtitle: 'Why Electricity is Dangerous',
            emoji: '⚠️',
            points: [
              'Electric current can disrupt your heart rhythm',
              'As little as 0.1A (100mA) through heart can be fatal',
              'High voltage can cause severe burns',
              'Electricity always takes easiest path to ground - could be through YOU'
            ]
          },
          {
            subtitle: 'Circuit Protection Devices',
            emoji: '🛡️',
            points: [
              'FUSE: Thin wire that melts if too much current flows',
              'CIRCUIT BREAKER: Switch that trips/opens if overloaded',
              'GFCI (Ground Fault): Detects shorts, shuts off in 0.025 seconds',
              'All prevent fires and electrocution from overloaded circuits'
            ]
          },
          {
            subtitle: 'Grounding',
            emoji: '⚡',
            points: [
              'Third prong on plug connects to ground (Earth)',
              'Provides safe path for excess electricity',
              'Prevents shocks if device has internal short',
              'Metal appliances (fridges, washers) MUST be grounded'
            ]
          },
          {
            subtitle: 'Safety Rules',
            emoji: '🚫',
            points: [
              'NEVER use electrical devices near water',
              'NEVER touch outlets or switches with wet hands',
              'NEVER overload outlets with too many devices',
              'NEVER touch downed power lines - call 911',
              'Replace damaged cords immediately',
              'Pull plug by the plug, not the cord'
            ]
          },
          {
            subtitle: 'What to Do in Emergencies',
            emoji: '🆘',
            points: [
              'If someone is being shocked: DON\'T TOUCH THEM',
              'Turn off power source or use non-conductive object (wood)',
              'Call 911 immediately',
              'If you see sparks or smell burning: unplug and stop using',
              'Electrical fire: NEVER use water - use fire extinguisher'
            ]
          }
        ]
      }
    ]
  },
  space: {
    id: 'space',
    name: 'Space: Astronomy',
    description: 'Exploring the universe, celestial bodies, and the history of space exploration. Future modules incoming.',
    color: 'purple',
    gradient: 'from-purple-900 to-slate-900',
    image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=800',
    sections: []
  }
};

export const PRACTICE_QUIZZES = {
  biology: [
    {
      question: 'Which bacteria convert Nitrogen gas directly into ammonia?',
      options: ['Nitrosomonas', 'Rhizobium', 'Nitrobacter', 'Denitrifying bacteria'],
      correct: 1,
      explanation: 'Rhizobium perform Nitrogen Fixation.'
    },
    {
      question: 'In H.I.P.P.O.C., what does the "O" stand for?',
      options: ['Oxygen depletion', 'Overharvesting', 'Ozone layer', 'Organic waste'],
      correct: 1,
      explanation: 'O stands for Overharvesting.'
    },
    {
      question: 'What percentage of energy is lost as heat between trophic levels?',
      options: ['10%', '50%', '90%', '100%'],
      correct: 2,
      explanation: 'The 10% rule states 90% is lost.'
    }
  ],
  chemistry: [
    {
      question: 'Which model proposed the "Plum Pudding" structure of the atom?',
      options: ['Dalton', 'Thomson', 'Rutherford', 'Bohr'],
      correct: 1,
      explanation: 'J.J. Thomson discovered the electron and proposed the plum pudding model.'
    },
    {
      question: 'What is the density of an object with mass 20g and volume 5mL?',
      options: ['100 g/mL', '25 g/mL', '4 g/mL', '0.25 g/mL'],
      correct: 2,
      explanation: 'Density = mass/volume = 20/5 = 4.'
    },
    {
      question: 'Which WHMIS symbol features a flame over a circle?',
      options: ['Flammable', 'Poison', 'Oxidizer', 'Corrosive'],
      correct: 2,
      explanation: 'Flame over circle represents oxidizers.'
    },
    {
      question: 'A solid that forms in a liquid during a chemical reaction is called a:',
      options: ['Solute', 'Reactant', 'Precipitate', 'Catalyst'],
      correct: 2,
      explanation: 'Precipitate is the solid formed in a liquid.'
    },
    {
      question: 'Which process describes a gas turning directly into a solid?',
      options: ['Sublimation', 'Deposition', 'Condensation', 'Freezing'],
      correct: 1,
      explanation: 'Deposition is gas to solid (e.g., frost).'
    }
  ],
  physics: [
    {
      question: 'How should a Voltmeter be connected in a circuit?',
      options: ['In parallel', 'In series', 'Directly to the battery', 'Anywhere'],
      correct: 0,
      explanation: 'Voltmeters must be in parallel to measure potential difference.'
    },
    {
      question: 'Charging by rubbing two objects together is called:',
      options: ['Conduction', 'Induction', 'Friction', 'Grounding'],
      correct: 2,
      explanation: 'Friction involves transfer via rubbing.'
    }
  ],
  space: []
};

export const FLASHCARDS = {
  biology: [
    { front: 'Denitrification', back: 'Nitrate → N₂ gas, returns to atmosphere.' },
    { front: '10% Rule', back: 'Only 10% of energy passes to the next trophic level.' },
    { front: 'Bioaccumulation', back: 'Build-up of a substance in a single organism over its lifetime.' }
  ],
  chemistry: [
    { front: 'Cation', back: 'A positively charged ion (lost electrons).' },
    { front: 'Anion', back: 'A negatively charged ion (gained electrons).' },
    { front: 'Isotope', back: 'Same element, different number of neutrons.' },
    { front: 'Alloy', back: 'A homogeneous mixture of metals (e.g., Brass).' },
    { front: 'Reactants', back: 'Substances you start with in a chemical reaction.' },
    { front: 'Catalyst', back: 'Speeds up a reaction without being used up.' },
    { front: 'Octet Rule', back: 'Atoms want 8 valence electrons for stability.' }
  ],
  physics: [
    { front: 'V = I x R', back: 'Ohm\'s Law: Voltage = Current x Resistance.' },
    { front: 'Insulator', back: 'Material that resists electron flow (Rubber, Wood).' },
    { front: 'Grounding', back: 'Connecting to Earth to safely discharge excess charge.' }
  ],
  space: []
};
