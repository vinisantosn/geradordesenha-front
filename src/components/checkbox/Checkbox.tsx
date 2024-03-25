import React, { useState } from 'react';

interface CheckboxProps {
  label: string;
  isChecked: boolean;
  onChange: (isChecked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, isChecked, onChange }) => {
  const [checked, setChecked] = useState<boolean>(isChecked);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    setChecked(checked);
    onChange(checked);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={handleChange}
        />
        {label}
      </label>
    </div>
  );
};

export default Checkbox;