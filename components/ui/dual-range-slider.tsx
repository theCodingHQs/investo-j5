"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "@/lib/utils";

/**
 * Explicit dual-range value type
 */
export type DualRangeValue = [number, number];

interface DualRangeSliderProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>,
    "value" | "defaultValue" | "onValueChange"
  > {
  value?: DualRangeValue;
  defaultValue?: DualRangeValue;
  onValueChange?: (value: DualRangeValue) => void;

  labelPosition?: "top" | "bottom";
  label?: (value: number | undefined) => React.ReactNode;
}

const DualRangeSlider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  DualRangeSliderProps
>(
  (
    {
      className,
      label,
      labelPosition = "top",
      value,
      defaultValue,
      min = 0,
      max = 100,
      ...props
    },
    ref
  ) => {
    /**
     * Resolve values safely for rendering thumbs
     * Controlled → value
     * Uncontrolled → defaultValue
     * Fallback → [min, max]
     */
    const resolvedValue: DualRangeValue =
      value ?? defaultValue ?? ([min, max] as DualRangeValue);

    return (
      <SliderPrimitive.Root
        ref={ref}
        value={value}
        defaultValue={defaultValue}
        min={min}
        max={max}
        className={cn(
          "relative flex w-full touch-none select-none items-center",
          className
        )}
        {...props}
      >
        <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary">
          <SliderPrimitive.Range className="absolute h-full bg-primary" />
        </SliderPrimitive.Track>

        {resolvedValue.map((val, index) => (
          <SliderPrimitive.Thumb
            key={index}
            className="relative block h-4 w-4 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          >
            {label && (
              <span
                className={cn(
                  "absolute flex w-full justify-center",
                  labelPosition === "top" && "-top-7",
                  labelPosition === "bottom" && "top-4"
                )}
              >
                {label(val)}
              </span>
            )}
          </SliderPrimitive.Thumb>
        ))}
      </SliderPrimitive.Root>
    );
  }
);

DualRangeSlider.displayName = "DualRangeSlider";

export { DualRangeSlider };
