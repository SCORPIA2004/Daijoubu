import React from 'react';
import { AssessmentResult } from '../types';
import { PixelCard, PixelButton } from './PixelComponents';

interface RoadmapResultProps {
  result: AssessmentResult;
  userName: string;
  onReset: () => void;
}

export const RoadmapResult: React.FC<RoadmapResultProps> = ({ result, userName, onReset }) => {
  const { roadmap, recommendations, level } = result;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="w-full max-w-5xl mx-auto animate-fade-in-up pb-12">
      <div className="flex justify-between items-end mb-8 border-b-4 border-green-500 pb-4">
        <div>
           <div className="text-xs text-green-400 mb-1 retro-font">QUEST LOG UPDATED</div>
           <h1 className="text-4xl text-white retro-font">
             <span className="text-green-500">{userName}'s</span> JOURNEY
           </h1>
        </div>
        <div className="text-right hidden sm:block">
          <div className="text-yellow-400 retro-font text-2xl">{roadmap.level}</div>
          <div className="text-slate-500 text-sm uppercase">{roadmap.difficulty}</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* LEFT: PHASES */}
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-2xl text-green-400 retro-font mb-4 flex items-center gap-2">
            <span>🗺️</span> Campaign Map ({roadmap.duration})
          </h2>
          
          <div className="space-y-4">
            {roadmap.phases.map((phase, idx) => (
              <PixelCard key={idx} className="border-l-8 border-l-green-600">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="shrink-0 flex sm:flex-col items-center gap-2 sm:gap-0">
                    <div className="w-10 h-10 bg-slate-800 border-2 border-green-500 flex items-center justify-center font-bold text-green-400 text-xl retro-font">
                      {idx + 1}
                    </div>
                    <div className="h-full w-1 bg-slate-800 hidden sm:block my-2"></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl text-yellow-400 font-bold mb-1 retro-font">{phase.title}</h3>
                    <p className="text-slate-300 mb-3 font-sans text-lg">{phase.content}</p>
                    <div className="flex flex-wrap gap-2">
                      {phase.topics.map((t, i) => (
                        <span key={i} className="bg-slate-800 text-green-300 px-2 py-1 text-xs uppercase tracking-wide border border-slate-700">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </PixelCard>
            ))}
          </div>
        </div>

        {/* RIGHT: INVENTORY / RESOURCES */}
        <div className="space-y-6">
          <PixelCard title="Inventory" icon="🎒">
             <div className="space-y-4">
               <div>
                 <h4 className="text-xs text-slate-500 uppercase mb-2">Class</h4>
                 <div className="text-green-400 font-bold text-lg">{roadmap.level}</div>
               </div>
               <div>
                 <h4 className="text-xs text-slate-500 uppercase mb-2">Difficulty</h4>
                 <div className="text-yellow-400 font-bold text-lg">{roadmap.difficulty}</div>
               </div>
                <div>
                 <h4 className="text-xs text-slate-500 uppercase mb-2">Est. Time</h4>
                 <div className="text-white font-bold text-lg">{roadmap.duration}</div>
               </div>
             </div>
          </PixelCard>

          <PixelCard title="Loot (Resources)" icon="💎">
            <div className="space-y-3">
              {recommendations.map((rec, i) => (
                <a 
                  key={i} 
                  href={rec.url}
                  className="block bg-slate-950 p-3 border border-slate-800 hover:border-green-500 transition-colors group"
                >
                  <div className="flex justify-between items-start">
                    <span className="text-green-400 font-bold text-sm group-hover:underline decoration-green-500 underline-offset-4 decoration-2">{rec.title}</span>
                    <span className="text-[10px] bg-slate-800 px-1 py-0.5 text-slate-400 uppercase">{rec.type}</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">{rec.description}</p>
                </a>
              ))}
            </div>
            <div className="mt-4 p-2 bg-yellow-400/10 border border-yellow-400/30 text-yellow-200 text-xs text-center font-sans">
              *Equip these items to boost XP gain by 50%*
            </div>
          </PixelCard>

          <div className="pt-4 space-y-3">
             <PixelButton onClick={handlePrint} variant="secondary" className="w-full">
              Save to PDF
            </PixelButton>
            <PixelButton onClick={onReset} variant="danger" className="w-full">
              Respawn (Reset)
            </PixelButton>
          </div>
        </div>

      </div>
    </div>
  );
};