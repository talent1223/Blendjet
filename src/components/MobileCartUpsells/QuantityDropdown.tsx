/** @jsx h */
import { h } from 'preact';
import { CaretDown } from '../Icons/Navigation';

interface QuantityDropdownProps {
  fieldLabel: string;
  currentChoice: {
    label: number;
    value: number;
  };
  choices: {
    label: number;
    value: number;
  }[];
  isMobile?: boolean;
  onChange?: (value: number) => void;
}

export function QuantityDropdown({
  fieldLabel,
  currentChoice,
  choices,
  isMobile = true,
  onChange,
}: QuantityDropdownProps) {
  return (
    <div class="dropdown-container">
      {isMobile && (
        <div class="mobile-select-container">
          <div class="select-cover" role="button">
            <span class="field-label">{fieldLabel}:</span>
            <span class="select-cover__selected">{currentChoice.label}</span>
            <div class="svg-container caret-down">
              <CaretDown />
            </div>
          </div>
          <select
            class="mobile-select"
            value={currentChoice.value}
            onChange={(e) => {
              const value = Number(e.currentTarget.value);
              onChange && onChange(value);
            }}>
            {choices.map((choice, i) => (
              <option key={i} value={choice.value}>
                {choice.label}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}
