/** @jsx h */
import { h } from 'preact';
import { CaretDown } from '../Icons/Navigation';

interface CartDropdownProps {
  fieldLabel: string;
  currentChoice: {
    label: string | number;
    value: string;
  };
  choices: {
    label: string | number;
    value: string;
  }[];
  isMobile?: boolean;
  onChange?: (value: any) => void;
}

// TODO: Look around, and examine the logic in the Vue application, and figure
// out if we actually need `isMobile`. Is it ever false?

export function CartDropdown({
  fieldLabel,
  currentChoice,
  choices,
  isMobile = true,
  onChange,
}: CartDropdownProps) {
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
              const value = e.currentTarget.value;
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

// TODO: Create a HOC called OptionDropdown that takes children. CartDropdown
// and QuantityDropdown should use it to wrap whatever markup they have that is
// different (which is not very much).
