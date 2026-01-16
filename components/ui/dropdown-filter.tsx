import { useState, useCallback, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import DualRangeSlider from "./dual-range-slider";

interface BaseProps {
  /** Button label */
  label: string;
  /** Additional class for the trigger button */
  className?: string;
  /** Popover alignment */
  align?: "start" | "center" | "end";
}

interface CheckboxFilterProps<T> extends BaseProps {
  type: "checkbox";
  /** List of data items */
  data: T[];
  /** Extract unique value from item */
  getValue: (item: T) => string | number;
  /** Extract display label from item */
  getLabel: (item: T) => string;
  /** Selected values array */
  value: (string | number)[];
  /** Change handler */
  onChange: (value: (string | number)[]) => void;
}

interface RadioFilterProps<T> extends BaseProps {
  type: "radio";
  /** List of data items */
  data: T[];
  /** Extract unique value from item */
  getValue: (item: T) => string | number;
  /** Extract display label from item */
  getLabel: (item: T) => string;
  /** Selected value */
  value: string | number | null;
  /** Change handler */
  onChange: (value: string | number | null) => void;
}

interface RangeFilterProps extends BaseProps {
  type: "range";
  /** Range min */
  min: number;
  /** Range max */
  max: number;
  /** Step value */
  step?: number;
  /** Current range value [min, max] */
  value: [number, number];
  /** Change handler */
  onChange: (value: [number, number]) => void;
  /** Minimum gap between values */
  minGap?: number;
  /** Show scale labels */
  showScale?: boolean;
}

type DropdownFilterProps<T> =
  | CheckboxFilterProps<T>
  | RadioFilterProps<T>
  | RangeFilterProps;

function isRangeFilter(
  props: DropdownFilterProps<unknown>
): props is RangeFilterProps {
  return props.type === "range";
}

function isCheckboxFilter<T>(
  props: DropdownFilterProps<T>
): props is CheckboxFilterProps<T> {
  return props.type === "checkbox";
}

export function DropdownFilter<T>(props: DropdownFilterProps<T>) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { label, type, className, align = "start" } = props;

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [open]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [open]);

  const getSelectedDisplay = useCallback(() => {
    if (isRangeFilter(props)) {
      return `${props.value[0]} - ${props.value[1]}`;
    }
    if (isCheckboxFilter(props)) {
      const count = props.value.length;
      return count > 0 ? count : null;
    }
    // Radio
    const radioProps = props as RadioFilterProps<T>;
    const selectedItem = radioProps.data.find(
      (item) => radioProps.getValue(item) === radioProps.value
    );
    return selectedItem ? radioProps.getLabel(selectedItem) : null;
  }, [props]);

  const getAlignmentClasses = () => {
    switch (align) {
      case "center":
        return "left-1/2 -translate-x-1/2";
      case "end":
        return "right-0";
      default:
        return "left-0";
    }
  };

  const renderContent = () => {
    if (isRangeFilter(props)) {
      return (
        <div className="p-2 min-w-[280px]">
          <DualRangeSlider
            min={props.min}
            max={props.max}
            step={props.step}
            value={props.value}
            onChange={props.onChange}
            minGap={props.minGap}
            showScale={props.showScale}
            showLabels
          />
        </div>
      );
    }

    if (type === "checkbox") {
      const checkboxProps = props as CheckboxFilterProps<T>;
      const {
        data,
        getValue,
        getLabel,
        value: selectedValues,
        onChange,
      } = checkboxProps;

      const handleCheckboxChange = (
        itemValue: string | number,
        checked: boolean
      ) => {
        if (checked) {
          onChange([...selectedValues, itemValue]);
        } else {
          onChange(selectedValues.filter((v) => v !== itemValue));
        }
      };

      return (
        <div className="flex flex-col gap-1 p-1 min-w-[200px] max-h-[300px] overflow-y-auto">
          {data.map((item) => {
            const itemValue = getValue(item);
            const itemLabel = getLabel(item);
            const isChecked = selectedValues.includes(itemValue);
            const checkboxId = `checkbox-${String(itemValue)}`;

            return (
              <label
                key={String(itemValue)}
                htmlFor={checkboxId}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer",
                  "hover:bg-accent transition-colors",
                  isChecked && "bg-accent/50"
                )}
              >
                {/* Custom Checkbox */}
                <div className="relative flex items-center justify-center">
                  <input
                    type="checkbox"
                    id={checkboxId}
                    checked={isChecked}
                    onChange={(e) =>
                      handleCheckboxChange(itemValue, e.target.checked)
                    }
                    className="peer sr-only"
                  />
                  <div
                    className={cn(
                      "h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background",
                      "peer-focus-visible:outline-none peer-focus-visible:ring-2 peer-focus-visible:ring-ring peer-focus-visible:ring-offset-2",
                      "transition-colors",
                      isChecked ? "bg-primary border-primary" : "bg-background"
                    )}
                  >
                    {isChecked && (
                      <Check
                        className="h-4 w-4 text-primary-foreground"
                        strokeWidth={3}
                      />
                    )}
                  </div>
                </div>
                <span className="text-sm text-foreground">{itemLabel}</span>
              </label>
            );
          })}
        </div>
      );
    }

    // Radio
    const radioProps = props as RadioFilterProps<T>;
    const {
      data,
      getValue,
      getLabel,
      value: selectedValue,
      onChange,
    } = radioProps;

    const handleRadioChange = (itemValue: string | number) => {
      onChange(itemValue);
      setOpen(false);
    };

    return (
      <div className="flex flex-col gap-1 p-1 min-w-[200px] max-h-[300px] overflow-y-auto">
        {data.map((item) => {
          const itemValue = getValue(item);
          const itemLabel = getLabel(item);
          const isSelected = selectedValue === itemValue;

          return (
            <button
              key={String(itemValue)}
              type="button"
              onClick={() => handleRadioChange(itemValue)}
              className={cn(
                "flex items-center justify-between gap-3 px-3 py-2 rounded-md cursor-pointer text-left",
                "hover:bg-accent transition-colors",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                isSelected && "bg-accent/50"
              )}
            >
              <span className="text-sm text-foreground">{itemLabel}</span>
              {isSelected && <Check className="h-4 w-4 text-primary" />}
            </button>
          );
        })}
      </div>
    );
  };

  const selectedDisplay = getSelectedDisplay();

  return (
    <div ref={containerRef} className="relative inline-block">
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-haspopup="listbox"
        className={cn(
          "inline-flex items-center justify-between gap-2 px-4 py-2 rounded-md",
          "border border-input bg-background text-sm font-normal",
          "hover:bg-accent hover:text-accent-foreground",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          "transition-colors",
          selectedDisplay && "text-foreground",
          className
        )}
      >
        <span className="flex items-center gap-2">
          {label}
          {selectedDisplay !== null && (
            <span className="text-xs bg-primary/10 text-primary px-1.5 py-0.5 rounded-full">
              {selectedDisplay}
            </span>
          )}
        </span>
        <ChevronDown
          className={cn(
            "h-4 w-4 shrink-0 opacity-50 transition-transform duration-200",
            open && "rotate-180"
          )}
        />
      </button>

      {/* Dropdown Content */}
      {open && (
        <div
          className={cn(
            "absolute z-50 mt-2 rounded-md border border-border bg-popover shadow-md",
            "animate-in fade-in-0 zoom-in-95",
            getAlignmentClasses()
          )}
        >
          {renderContent()}
        </div>
      )}
    </div>
  );
}
