import React from "react";
interface CheckboxProps {
  label: string;
  checked: boolean;
 
  onChange: () => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange }) => (
  <div style={{ 
  borderWidth: 1, 
  borderColor: 'gray', 
  borderRadius: '0.375rem', 
  gap: '0.5rem', 
  display: 'flex', 
  padding: '0.5rem' 
}}>
  
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
  selectAllChange?: (data:{ label: string; value: string; checked: boolean }[]) => void;
}

const CustomCheckBox: React.FC<CheckboxGroupProps> = ({
  selectAllChange ,
  selectAllChecked,
  data, onChange,selectAll 
}) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', flexDirection: 'row' }}>
    {selectAll &&  <Checkbox
          
          label={"select_all"}
          checked={selectAllChecked?selectAllChecked: false}
          onChange={() => selectAllChange && selectAllChange(data)}
        />
     }
      {data.map((item, index) => (
        <Checkbox
          key={index}
          label={item.label}
          checked={item.checked}
          onChange={() => onChange(item.value, !item.checked)}
        />
      ))}
    </div>
  );
}

export default CustomCheckBox;
