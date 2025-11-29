export type ExperienceLevel = 'none' | 'some' | 'comfortable' | 'advanced';
export type TimeCommitment = '2' | '5' | '8' | '12';
export type LearningStyle = 'videos' | 'reading' | 'exercises' | 'guided' | 'chaos';
export type EndGoal = 'career-change' | 'automation' | 'data-science' | 'academia' | 'hobby';
export type LearningFocus = 'fundamentals' | 'automation' | 'web' | 'data' | 'ml' | 'other';
export type Timeline = '1-3' | '3-6' | '6-12' | 'flexible';

export interface UserProfile {
  name: string;
  experience: ExperienceLevel;
  learningFocus: LearningFocus[];
  timePerWeek: TimeCommitment;
  learningStyles: LearningStyle[];
  endGoal: EndGoal;
  timeline: Timeline;
  email?: string;
}

export interface Resource {
  title: string;
  type: 'course' | 'guide' | 'book' | 'tool';
  url: string;
  description: string;
}

export interface RoadmapPhase {
  title: string;
  content: string;
  topics: string[];
}

export interface RoadmapTemplate {
  level: string;
  difficulty: string;
  duration: string;
  phases: RoadmapPhase[];
}

export interface AssessmentResult {
  level: 'beginner' | 'intermediate' | 'advanced';
  roadmap: RoadmapTemplate;
  recommendations: Resource[];
}