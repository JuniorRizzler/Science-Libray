
export interface Flashcard {
  front: string;
  back: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

export interface StudyNote {
  subtitle: string;
  emoji: string;
  points: string[];
  answers?: string[];
  diagram?: string;
}

export interface StudySection {
  id: string;
  title: string;
  image: string;
  notes: StudyNote[];
  flashcards?: Flashcard[];
  quiz?: QuizQuestion[];
}

export interface Subject {
  id: string;
  name: string;
  description: string;
  color: string;
  gradient: string;
  image: string;
  sections: StudySection[];
}

export interface LibraryData {
  [key: string]: Subject;
}
