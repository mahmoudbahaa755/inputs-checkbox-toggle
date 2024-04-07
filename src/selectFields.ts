import { useState } from "react";
export type Field = { [key: string]: boolean };

export default function useSelectFieldHook(fields: Field[]) {
  const [selectedFields, setSelectedFields] = useState<Field[]>(fields);
  const [selectAllChecked, setSelectAllChecked] = useState(
    selectedFields.every((obj: Record<string, unknown>) =>
      Object.values(obj).every((val) => val === true)
    )
  );
  const selectAllChange = (data: any) => {
    setSelectedFields(
      data.map((item: { label: string; value: boolean }) => ({
        [item.label]: !selectAllChecked,
      }))
    );
    setSelectAllChecked(!selectAllChecked);
  };

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
  const isHidden = (label: string) => {
    const data = checkboxData.filter((item: any) => item.label == label);
    return !data[0]?.checked;
  };
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
