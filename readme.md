# inputs show toggle with CheckBox 

## Description

this package for making toggle checkbox to show or hide input
## Installation

Provide step by step series of commands and procedures on how to install the project.

```bash
npm i inputs-checkbox-toggle
```
## Usage

After installing the package, you can import it into your project and use it to create a toggle checkbox. Here's a basic example:
```TypeScript
import { ToggleCheckbox } from 'inputs-checkbox-toggle';

// Initialize the hook and destructure the returned values
const {
    checkboxData,
    selectAllChange,
    selectAllChecked,
    selectChange,
    selectedFields,
    setSelectAllChecked,
    isHidden,
} = useSelectFieldHook([
    { item_type: true },
    { item_name: true },
    { uom_id: true },
]);

// Use the CustomCheckBox component in your render method
<CustomCheckBox
    data={checkboxData}
    selectAllChange={selectAllChange}
    selectAllChecked={selectAllChecked}
    selectAll
    onChange={selectChange}
/>