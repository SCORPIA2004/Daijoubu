import React, { useState, useEffect } from 'react';
import { HeroForm } from './components/HeroForm';
import { RoadmapResult } from './components/RoadmapResult';
import { UserProfile, AssessmentResult, RoadmapTemplate, Resource } from './types';
import { ROADMAP_TEMPLATES, LEARNING_RESOURCES } from './constants';

const INITIAL_PROFILE: UserProfile = {
  name: '',
  experience: 'none',
  learningFocus: ['fundamentals'],
  timePerWeek: '5',
  learningStyles: ['videos'],
  endGoal: 'hobby',
  timeline: '3-6',
  email: ''
};

function App() {
  const [profile, setProfile] = useState<UserProfile>(INITIAL_PROFILE);
  const [result, setResult] = useState<AssessmentResult | null>(null);

  // Logic to determine the roadmap based on inputs
  const calculateRoadmap = () => {
    let level: 'beginner' | 'intermediate' | 'advanced' = 'beginner';
    let roadmapKey = 'beginner_moderate';

    // 1. Determine Base Level
    if (profile.experience === 'comfortable') level = 'intermediate';
    if (profile.experience === 'advanced') level = 'advanced';

    // 2. Determine Specific Roadmap Template
    if (level === 'beginner') {
      roadmapKey = parseInt(profile.timePerWeek) >= 8 ? 'beginner_intensive' : 'beginner_moderate';
    } else if (level === 'intermediate') {
      roadmapKey = 'intermediate_focus';
    } else {
      roadmapKey = 'advanced_mastery';
    }

    const template: RoadmapTemplate = ROADMAP_TEMPLATES[roadmapKey];

    // 3. Gather Recommendations
    // Get generic resources for the level + specific resources for the chosen focus
    const levelResources = LEARNING_RESOURCES[level];
    let recommendations: Resource[] = [];
    
    // Always add fundamentals if beginner
    if (level === 'beginner') {
      recommendations = [...recommendations, ...levelResources['fundamentals']];
    }
    
    // Add specific focus resources (limit to top 2 per focus to avoid clutter)
    profile.learningFocus.forEach(focus => {
      if (levelResources[focus]) {
        recommendations = [...recommendations, ...levelResources[focus]];
      }
    });

    // Deduplicate by title
    recommendations = recommendations.filter((v,i,a)=>a.findIndex(v2=>(v2.title===v.title))===i);

    setResult({
      level,
      roadmap: template,
      recommendations
    });
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetForm = () => {
    setResult(null);
    setProfile(INITIAL_PROFILE);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen p-4 md:p-8 flex flex-col items-center">
      {/* View Switching */}
      {!result ? (
        <HeroForm 
          data={profile} 
          onChange={setProfile} 
          onSubmit={calculateRoadmap} 
        />
      ) : (
        <RoadmapResult 
          result={result} 
          userName={profile.name || 'Adventurer'} 
          onReset={resetForm} 
        />
      )}
      
      {/* Footer */}
      <footer className="mt-12 text-center text-slate-600 text-xs font-sans">
        <p>PRESS START TO BEGIN • INSERT COIN TO CONTINUE</p>
        <p className="mt-2 opacity-50">© 2024 Python Adventure Corp.</p>
      </footer>
    </div>
  );
}

export default App;