import { useState } from "react";
export type Field = { [key: string]: boolean };

/**
 * A custom hook for managing the state of a group of selectable fields to be hidden or not.
 *
 * @param {Field[]} fields - An array of fields to be managed by the hook.
 * @returns {Object} The state and handlers for the selectable fields.
 */
export default function useSelectFieldHook(fields: Field[]) {
    
  // State for the selected fields
  const [selectedFields, setSelectedFields] = useState<Field[]>(fields);

  // State for whether all fields are selected
  const [selectAllChecked, setSelectAllChecked] = useState(
    selectedFields.every((obj: Record<string, unknown>) =>
      Object.values(obj).every((val) => val === true)
    )
  );


  
  /**
   * Handler for changing the selection of all fields.
   *
   * @param {any} data - The data for all fields.
   */
  const selectAllChange = (data: any) => {
    setSelectedFields(
      data.map((item: { label: string; value: boolean }) => ({
        [item.label]: !selectAllChecked,
      }))
    );
    setSelectAllChecked(!selectAllChecked);
  };
  
  // Generate the data for each checkbox
  const checkboxData: any = Object.entries(selectedFields)
    .map(([key, value]: any) => {
      const v = Object.values(value);
      const k = Object.keys(value);
      if (k.length > 0) {
        return {
          label: k[0],
          value: k[0],
          checked: v[0],
        };
      } else {
        return {
          label: "null",
          value: "null",
          checked: false,
        };
      }
    })
    .filter((item: any) => item.value !== "null");
 /**
   * Check whether a input field value is hidden or not.
   *
   * @param {string} label - The label of the input field to check.
   * @returns {boolean} Whether the field is hidden.
   */
  const isHidden = (label: string) => {
    const data = checkboxData.filter((item: any) => item.label == label);
    return !data[0]?.checked;
  };

  /**
   * Handler for changing the selection of a single field.
   *
   * @param {string} value - The value of the field to change.
   * @param {boolean} checked - The new checked state of the field.
   */
  const selectChange = (value: string, checked: boolean) => {
    const data = selectedFields.map((item: any) => {
      if (Object.keys(item)[0] == value) {
        return { [Object.keys(item)[0]]: checked };
      } else {
        return { ...item };
      }
    });

    setSelectedFields(data);
  };
  return {
    selectedFields,
    setSelectedFields,
    isHidden,
    selectAllChecked,
    setSelectAllChecked,
    selectAllChange,
    selectChange,
    checkboxData,
  };
}
