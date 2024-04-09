import React from "react";
import "./checkbox.css";
interface CheckboxProps {
  label: string;
  checked: boolean;
  oneCheckBoxStyle?: string;
  onChange: () => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ label,oneCheckBoxStyle, checked, onChange }) => (
  <div
   className={oneCheckBoxStyle || 'one-check-box'}
  >
    <label>
      <input type="checkbox" checked={checked} onChange={onChange} />
      {label}
    </label>
  </div>
);

interface CheckboxGroupProps {
  data: { label: string; value: string; checked: boolean }[];
  onChange: (value: string, checked: boolean) => void;
  selectAll?: boolean;
  selectAllChecked?: boolean;
  label?: string;
  className?: string;
  oneCheckBoxStyle?: string;
  selectAllChange?: (
    data: { label: string; value: string; checked: boolean }[]
  ) => void;
}

type checkBoxData={
  label:string,
  value:string,
  checked:boolean
}
const CustomCheckBox: React.FC<CheckboxGroupProps> = ({
  selectAllChange,
  selectAllChecked,
  label,
  data,
  onChange,
  selectAll,
  className,
}) => {
  return (
    <div className={className || "check-box"}>
      {selectAll && (
        <Checkbox
          label={label || "select all"}
          checked={selectAllChecked ? selectAllChecked : false}
          onChange={() => selectAllChange && selectAllChange(data)}
        />
      )}
      {data.map((item:checkBoxData, index: number) => (
        <Checkbox
          key={index}
          label={item.label}
          checked={item.checked}
          onChange={() => onChange(item.value, !item.checked)}
        />
      ))}
    </div>
  );
};

export default CustomCheckBox;
