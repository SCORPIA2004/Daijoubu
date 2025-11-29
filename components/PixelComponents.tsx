import React, { ReactNode } from 'react';

// --- WRAPPERS ---

interface PixelCardProps {
  children: ReactNode;
  className?: string;
  title?: string;
  icon?: string;
}

export const PixelCard: React.FC<PixelCardProps> = ({ children, className = '', title, icon }) => {
  return (
    <div className={`relative bg-slate-900 border-2 border-green-500 shadow-[0_0_10px_rgba(34,197,94,0.3)] ${className}`}>
      {/* Decorative corners */}
      <div className="absolute -top-1 -left-1 w-2 h-2 bg-green-500" />
      <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500" />
      <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-green-500" />
      <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-green-500" />
      
      {title && (
        <div className="bg-green-500 text-slate-900 px-3 py-1 font-bold retro-font text-sm uppercase flex items-center gap-2 border-b-2 border-green-700">
          {icon && <span>{icon}</span>}
          {title}
        </div>
      )}
      <div className="p-4 md:p-6">
        {children}
      </div>
    </div>
  );
};

// --- INPUTS ---

interface RadioGroupProps<T extends string> {
  options: { value: T; label: string; subLabel?: string }[];
  value: T;
  onChange: (value: T) => void;
  name: string;
  columns?: 1 | 2;
}

export const PixelRadioGroup = <T extends string>({ options, value, onChange, name, columns = 1 }: RadioGroupProps<T>) => {
  return (
    <div className={`grid gap-3 ${columns === 2 ? 'grid-cols-2' : 'grid-cols-1'}`}>
      {options.map((opt) => {
        const isSelected = value === opt.value;
        return (
          <label 
            key={opt.value}
            className={`
              cursor-pointer relative p-3 border-2 transition-all duration-150 group
              ${isSelected 
                ? 'bg-green-500/10 border-green-400 shadow-[inset_0_0_15px_rgba(34,197,94,0.3)]' 
                : 'bg-slate-800/50 border-slate-700 hover:border-green-500/50'
              }
            `}
          >
            <input
              type="radio"
              name={name}
              value={opt.value}
              checked={isSelected}
              onChange={() => onChange(opt.value)}
              className="absolute opacity-0 w-0 h-0"
            />
            <div className="flex items-center gap-3">
              <div className={`
                w-4 h-4 border-2 flex items-center justify-center
                ${isSelected ? 'border-green-400 bg-green-900' : 'border-slate-500'}
              `}>
                {isSelected && <div className="w-2 h-2 bg-green-400" />}
              </div>
              <div className="flex flex-col">
                <span className={`font-bold text-lg leading-none ${isSelected ? 'text-green-400' : 'text-slate-300 group-hover:text-green-200'}`}>
                  {opt.label}
                </span>
                {opt.subLabel && (
                  <span className="text-sm text-slate-500 mt-1 font-sans">{opt.subLabel}</span>
                )}
              </div>
            </div>
          </label>
        );
      })}
    </div>
  );
};

interface CheckboxGroupProps<T extends string> {
  options: { value: T; label: string }[];
  selected: T[];
  onChange: (values: T[]) => void;
  columns?: 1 | 2 | 3;
}

export const PixelCheckboxGroup = <T extends string>({ options, selected, onChange, columns = 2 }: CheckboxGroupProps<T>) => {
  const toggle = (val: T) => {
    if (selected.includes(val)) {
      onChange(selected.filter(v => v !== val));
    } else {
      onChange([...selected, val]);
    }
  };

  return (
    <div className={`grid gap-2 grid-cols-${columns} sm:grid-cols-${columns}`}>
      {options.map((opt) => {
        const isSelected = selected.includes(opt.value);
        return (
          <div 
            key={opt.value}
            onClick={() => toggle(opt.value)}
            className={`
              cursor-pointer px-3 py-2 border border-dashed transition-all select-none text-center
              ${isSelected 
                ? 'bg-green-500 text-slate-900 border-green-400 font-bold' 
                : 'bg-transparent text-slate-400 border-slate-600 hover:border-green-500/50 hover:text-green-200'
              }
            `}
          >
            {opt.label}
          </div>
        );
      })}
    </div>
  );
};

// --- BUTTONS ---

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
}

export const PixelButton: React.FC<ButtonProps> = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseClass = "px-6 py-4 font-bold retro-font uppercase tracking-wider text-sm transition-transform active:scale-95 border-b-4 active:border-b-0 active:translate-y-1";
  
  const variants = {
    primary: "bg-green-500 text-slate-900 border-green-700 hover:bg-green-400 shadow-[0_4px_0_rgba(21,128,61,1)]",
    secondary: "bg-slate-700 text-slate-200 border-slate-900 hover:bg-slate-600 shadow-[0_4px_0_rgba(2,6,23,1)]",
    danger: "bg-red-500 text-white border-red-700 hover:bg-red-400 shadow-[0_4px_0_rgba(185,28,28,1)]"
  };

  return (
    <button className={`${baseClass} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};
