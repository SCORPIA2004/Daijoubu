import React from 'react';
import { UserProfile, ExperienceLevel, TimeCommitment, LearningStyle, EndGoal, LearningFocus, Timeline } from '../types';
import { PixelCard, PixelRadioGroup, PixelCheckboxGroup, PixelButton } from './PixelComponents';

interface HeroFormProps {
  data: UserProfile;
  onChange: (data: UserProfile) => void;
  onSubmit: () => void;
}

export const HeroForm: React.FC<HeroFormProps> = ({ data, onChange, onSubmit }) => {
  
  const update = <K extends keyof UserProfile>(key: K, value: UserProfile[K]) => {
    onChange({ ...data, [key]: value });
  };

  return (
    <div className="w-full max-w-6xl mx-auto space-y-8 animate-fade-in">
      
      {/* Header / Intro */}
      <div className="text-center space-y-4 mb-8">
        <div className="inline-block border-2 border-green-500 px-4 py-1 text-green-400 text-xs retro-font mb-2 bg-slate-900">
          SYSTEM_READY
        </div>
        <h1 className="text-3xl md:text-5xl text-green-400 text-shadow-neon uppercase tracking-tight">
          Python Adventure: Build Your Hero
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          Configure your character stats to generate a personalized learning campaign.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
        
        {/* COLUMN 1: BACKGROUND & XP */}
        <PixelCard title="Background & XP" icon="🧪" className="h-full">
          <div className="space-y-6">
            <div className="text-center p-4 bg-slate-950 border border-slate-800 mb-4">
              <div className="w-20 h-20 mx-auto bg-green-500/20 rounded-full flex items-center justify-center border-2 border-green-500 mb-2">
                <span className="text-4xl">🧙‍♂️</span>
              </div>
              <input 
                type="text" 
                value={data.name}
                onChange={(e) => update('name', e.target.value)}
                placeholder="PLAYER NAME"
                className="w-full bg-transparent text-center text-green-400 font-bold text-xl border-b border-green-500/50 focus:border-green-400 outline-none placeholder-slate-600 uppercase font-retro"
              />
            </div>

            <div>
              <label className="block text-green-400 text-xs mb-2 uppercase tracking-widest">Experience Level</label>
              <PixelRadioGroup<ExperienceLevel>
                name="experience"
                value={data.experience}
                onChange={(v) => update('experience', v)}
                options={[
                  { value: 'none', label: 'None', subLabel: 'New Game' },
                  { value: 'some', label: 'Rusty', subLabel: 'Save File Corrupted' },
                  { value: 'comfortable', label: 'Comfortable', subLabel: 'Level 10+' },
                  { value: 'advanced', label: 'Advanced', subLabel: 'Speedrunner' },
                ]}
              />
            </div>

            <div>
              <label className="block text-green-400 text-xs mb-2 uppercase tracking-widest">Current Skills (Focus)</label>
              <PixelCheckboxGroup<LearningFocus>
                selected={data.learningFocus}
                onChange={(v) => update('learningFocus', v)}
                columns={2}
                options={[
                  { value: 'fundamentals', label: 'Basics' },
                  { value: 'automation', label: 'Automation' },
                  { value: 'web', label: 'Web Dev' },
                  { value: 'data', label: 'Data Sci' },
                  { value: 'ml', label: 'AI / ML' },
                  { value: 'other', label: 'Other' },
                ]}
              />
            </div>
          </div>
        </PixelCard>

        {/* COLUMN 2: QUEST & TIME */}
        <PixelCard title="Quest & Time" icon="⏳" className="h-full">
          <div className="space-y-8">
            <div>
              <label className="block text-green-400 text-xs mb-2 uppercase tracking-widest">Weekly Hours</label>
              <div className="bg-slate-950 p-4 border border-slate-800">
                <div className="flex justify-between text-xs text-slate-500 mb-1">
                  <span>Casual</span>
                  <span>Hardcore</span>
                </div>
                <input 
                  type="range" 
                  min="0" max="3" step="1"
                  value={['2','5','8','12'].indexOf(data.timePerWeek)}
                  onChange={(e) => {
                    const val = ['2','5','8','12'][parseInt(e.target.value)] as TimeCommitment;
                    update('timePerWeek', val);
                  }}
                  className="w-full accent-green-500 h-2 bg-slate-800 rounded-none appearance-none cursor-pointer"
                />
                <div className="text-center mt-2 text-xl font-bold text-yellow-400 retro-font">
                  {data.timePerWeek} HOURS / WEEK
                </div>
              </div>
            </div>

            <div>
              <label className="block text-green-400 text-xs mb-2 uppercase tracking-widest">Timeline</label>
              <PixelRadioGroup<Timeline>
                name="timeline"
                value={data.timeline}
                onChange={(v) => update('timeline', v)}
                columns={2}
                options={[
                  { value: '1-3', label: '1-3 MO' },
                  { value: '3-6', label: '3-6 MO' },
                  { value: '6-12', label: '6-12 MO' },
                  { value: 'flexible', label: 'FLEX' },
                ]}
              />
            </div>

             <div>
              <label className="block text-green-400 text-xs mb-2 uppercase tracking-widest">Learning Style</label>
              <PixelCheckboxGroup<LearningStyle>
                selected={data.learningStyles}
                onChange={(v) => update('learningStyles', v)}
                columns={1}
                options={[
                  { value: 'videos', label: 'Video Tutorials' },
                  { value: 'reading', label: 'Docs & Reading' },
                  { value: 'exercises', label: 'Hands-on Code' },
                  { value: 'chaos', label: 'Chaos Mode (Just build)' },
                ]}
              />
            </div>
          </div>
        </PixelCard>

        {/* COLUMN 3: LOADOUT & END GAME */}
        <PixelCard title="Loadout & End Game" icon="🏰" className="h-full flex flex-col justify-between">
          <div className="space-y-6">
            <div className="p-4 border-2 border-dashed border-slate-700 bg-slate-950/50">
              <h4 className="text-yellow-400 text-sm mb-2 retro-font">QUEST BRIEF:</h4>
              <p className="text-sm text-slate-400 leading-relaxed font-sans">
                Define your build to receive a tailored Python roadmap. Share this profile for a concrete 4-12 week plan.
              </p>
            </div>

            <div>
              <label className="block text-green-400 text-xs mb-2 uppercase tracking-widest">End Goal</label>
              <PixelRadioGroup<EndGoal>
                name="endGoal"
                value={data.endGoal}
                onChange={(v) => update('endGoal', v)}
                options={[
                  { value: 'career-change', label: 'Career Change', subLabel: 'New Job' },
                  { value: 'automation', label: 'Automation', subLabel: 'Efficiency' },
                  { value: 'data-science', label: 'Data Science', subLabel: 'Analytics' },
                  { value: 'hobby', label: 'Hobby', subLabel: 'Just for Fun' },
                ]}
              />
            </div>
          </div>

          <div className="mt-8 space-y-4">
            <div className="bg-slate-800/50 p-3 text-xs text-slate-400 font-sans border border-slate-700">
              <span className="text-green-500 font-bold">REALITY CHECK:</span> Calendar consistency beats manic sprints.
            </div>
            
            <PixelButton onClick={onSubmit} className="w-full text-lg animate-pulse" variant="primary">
              CONFIRM LOADOUT &gt;
            </PixelButton>
          </div>
        </PixelCard>

      </div>
    </div>
  );
};
