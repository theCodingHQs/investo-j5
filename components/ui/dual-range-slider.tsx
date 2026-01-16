import { useState, useCallback, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface DualRangeSliderProps {
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: [number, number];
  value?: [number, number];
  onChange?: (value: [number, number]) => void;
  minGap?: number;
  showLabels?: boolean;
  showScale?: boolean;
  className?: string;
}

const DualRangeSlider = ({
  min = 0,
  max = 100,
  step = 1,
  defaultValue = [20, 80],
  value,
  onChange,
  minGap = 1,
  showLabels = true,
  showScale = true,
  className,
}: DualRangeSliderProps) => {
  const [internalValue, setInternalValue] =
    useState<[number, number]>(defaultValue);

  // Use controlled or uncontrolled value
  const currentValue = value ?? internalValue;
  const [minVal, maxVal] = currentValue;

  const minRef = useRef<HTMLInputElement>(null);
  const maxRef = useRef<HTMLInputElement>(null);

  // Calculate percentage positions for the active range bar
  const minPercent = ((minVal - min) / (max - min)) * 100;
  const maxPercent = ((maxVal - min) / (max - min)) * 100;

  const handleMinChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newMin = Math.min(Number(e.target.value), maxVal - minGap);
      const newValue: [number, number] = [newMin, maxVal];

      if (!value) {
        setInternalValue(newValue);
      }
      onChange?.(newValue);
    },
    [maxVal, minGap, onChange, value]
  );

  const handleMaxChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newMax = Math.max(Number(e.target.value), minVal + minGap);
      const newValue: [number, number] = [minVal, newMax];

      if (!value) {
        setInternalValue(newValue);
      }
      onChange?.(newValue);
    },
    [minVal, minGap, onChange, value]
  );

  // Sync internal state with controlled value
  useEffect(() => {
    if (value) {
      setInternalValue(value);
    }
  }, [value]);

  return (
    <div
      className={cn("relative w-full px-3", className)}
      role="group"
      aria-label="Range selector"
    >
      {/* Value Display Section */}
      {showLabels && (
        <div className="flex justify-between items-center mb-6">
          <div className="flex flex-col items-center">
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">
              Min
            </span>
            <span className="text-2xl font-bold text-primary tabular-nums">
              {minVal}
            </span>
          </div>
          <div className="flex-1 flex justify-center">
            <span className="text-muted-foreground/50 text-xl">—</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">
              Max
            </span>
            <span className="text-2xl font-bold text-primary tabular-nums">
              {maxVal}
            </span>
          </div>
        </div>
      )}

      {/* Slider Container */}
      <div className="relative h-8 flex items-center">
        {/* Background Track */}
        <div
          className="absolute w-full h-2 bg-muted rounded-full"
          aria-hidden="true"
        />

        {/* Active Range Bar */}
        <div
          className="absolute h-2 bg-primary rounded-full transition-all duration-75 ease-out"
          aria-hidden="true"
          style={{
            left: `${minPercent}%`,
            right: `${100 - maxPercent}%`,
          }}
        />

        {/* Min Range Input */}
        <input
          ref={minRef}
          type="range"
          min={min}
          max={max}
          step={step}
          value={minVal}
          onChange={handleMinChange}
          className="dual-range-thumb absolute w-full h-2 z-20 appearance-none bg-transparent pointer-events-none cursor-pointer"
          aria-label="Minimum value"
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={minVal}
        />

        {/* Max Range Input */}
        <input
          ref={maxRef}
          type="range"
          min={min}
          max={max}
          step={step}
          value={maxVal}
          onChange={handleMaxChange}
          className="dual-range-thumb absolute w-full h-2 z-30 appearance-none bg-transparent pointer-events-none cursor-pointer"
          aria-label="Maximum value"
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={maxVal}
        />
      </div>

      {/* Scale Labels */}
      {showScale && (
        <div className="flex justify-between mt-3 text-xs text-muted-foreground/60 font-medium">
          <span>{min}</span>
          <span>{min + (max - min) * 0.25}</span>
          <span>{min + (max - min) * 0.5}</span>
          <span>{min + (max - min) * 0.75}</span>
          <span>{max}</span>
        </div>
      )}
    </div>
  );
};

export default DualRangeSlider;
