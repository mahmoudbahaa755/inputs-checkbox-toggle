# inputs show toggle with CheckBox 

## Description

This package provides a toggle checkbox component for React applications. It allows you to show or hide input fields, enhancing the user experience by providing a cleaner UI. The code used in the demonstration GIF can be found in the 'Usage' section.
[![npm version](https://badge.fury.io/js/inputs-checkbox-toggle.svg)](https://badge.fury.io/js/inputs-checkbox-toggle)
<p align="center">
    <img src="example.gif" alt="Demo Gif">
</p>

## Installation

just run this command and see the example
```bash
npm i inputs-checkbox-toggle
```
## Requirements

- React 15.0.0 or higher

## Usage

After installing the package, you can import it into your project and use it to create a toggle checkbox. 
for a basic example look at:  [this simple example](https://github.com/mahmoudbahaa755/inputs-checkbox-toggle/blob/main/example/example.tsx)




## Props



Here's a Markdown table describing the props, types, and functionalities of the `useSelectFieldHook` function:

| Function             | Description                                                                                                                                                |
|----------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **`useSelectFieldHook(fields: Field[])`** | A custom React hook that manages the state of selected fields and provides functions to handle selection changes.                                         |
| **Parameters**       |                                                                                                                                                            |
| `fields`             | An array of objects representing the initial state of selected fields. Each object maps field names to boolean values indicating whether the field is selected. |
| **Returns**          | An object containing various state variables and functions to interact with the selection state.                                                         |
| **Returned Object**  |                                                                                                                                                            |
| `selectedFields`     | State variable holding the current selection state of fields.                                                                                             |
| `setSelectedFields`  | Function to update the state of selected fields.                                                                                                           |
| `isHidden(label: string)` | Function to determine if a field with a given label is hidden (not selected).                                                                            |
| `selectAllChecked`   | State variable indicating whether the "select all" checkbox is checked.                                                                                    |
| `setSelectAllChecked`| Function to update the state of the "select all" checkbox.                                                                                                |
| `selectAllChange(data: any)` | Function triggered when the "select all" checkbox is toggled. Updates the selected fields state based on the new state of the "select all" checkbox. |
| `selectChange(value: string, checked: boolean)` | Function triggered when an individual checkbox is toggled. Updates the selected fields state based on the checkbox value and checked state.          |
| `checkboxData`       | An array containing data for each checkbox, including label, value, and checked state.                                                                     |

This table provides an overview of the `useSelectFieldHook` function, its parameters, returned object, and the functionalities it offers.









`CheckboxGroup` accepts the following props, all of which can be obtained from the `useSelectFieldHook`:

| Prop              | Type                                                               | Description                                                                                                                                                              | Default Value |
|-------------------|--------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
| `data`            | `{ label: string; value: string; checked: boolean }[]`             | An array of objects, each representing a checkbox. Each object should have a `label` (the text displayed next to the checkbox), a `value` (the value of the checkbox), and a `checked` (a boolean indicating whether the checkbox is checked). | -             |
| `onChange`        | `(value: string, checked: boolean) => void`                        | A function that is called when a checkbox is toggled. It receives the `value` of the checkbox and a boolean `checked` indicating the new state of the checkbox.       | -             |
| `selectAll`       | `boolean`                                                          | A boolean indicating whether a "select all" checkbox should be displayed.                                                                                                | `false`       |
| `selectAllChecked`| `boolean`                                                          | A boolean indicating whether the "select all" checkbox is checked.                                                                                                       | `false`       |
| `label`           | `string`                                                           | The label for the checkbox group.                                                                                                                                        | `'Select All'`          |
| `className`       | `string`                                                           | A CSS class to apply to the checkbox group.                                                                                                                              | `''`          |
| `oneCheckBoxStyle`| `string`                                                           | A CSS class to apply to each individual checkbox.                                                                                                                        | `''`          |
| `selectAllChange`| `(data: { label: string; value: string; checked: boolean }[]) => void` | A function that is called when the "select all" checkbox is toggled. It receives the new state of all checkboxes.                                                         | -             |





## Contributing

Contributions are always welcome! Here's how you can help:

- **Reporting bugs**: If you find a bug, please open an issue on our [GitHub issue tracker](https://github.com/mahmoudbahaa755/inputs-checkbox-toggle/issues). Describe the problem and include steps to reproduce it, if possible.

- **Suggesting enhancements**: If you have an idea for a new feature or an improvement to an existing feature, please open an issue to discuss it.

- **Submitting pull requests**: If you've fixed a bug or implemented a new feature, we'd love to see your work. Please submit a pull request with your changes.

