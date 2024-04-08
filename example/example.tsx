"use client";
import React from "react";
import useSelectFieldHook from "../src/selectFields";
import CustomCheckBox from "../src/CheckBox";

export default function Additem() {
  const {
    checkboxData,
    selectAllChange,
    selectAllChecked,
    selectChange,
    selectedFields,
    setSelectAllChecked,
    isHidden,
  } = useSelectFieldHook([
    { price: true },
    { notes: true },
    { quantity: true },
  ]);
  const fields = [
    {
      label: "quantity",
      type: "number",
      placeholder: "enter quantity",
      name: "quantity",
      hidden: isHidden("quantity"),
    },
    {
      label: "price",
      hidden: isHidden("price"),
      type: "number",
      placeholder: "enter price",
      name: "price",
    },
    {
      label: "total",
      placeholder: "enter total",
      type: "number",
      disabled: !(isHidden("quantity") || isHidden("price")),
      name: "total",
    },
    {
      label: "notes",
      type: "text",
      hidden: isHidden("notes"),

      placeholder: "enter note",
      name: "notes",
    },
  ];

  return (
    <>
      <CustomCheckBox
        data={checkboxData}
        selectAllChange={selectAllChange}
        selectAllChecked={selectAllChecked}
        selectAll
        onChange={selectChange}
      />
      <div className="grid grid-cols-3">
        {fields.map((field, index) => (
          <div
            key={index}
            className={`space-y-2 ${
              field.hidden != false ? "flex" : " hidden"
            } flex gap-2 flex-col mb-4`}
          >
            <label className="text-gray-600 text-sm">{field.label}</label>
            <input
              type={field.type}
              placeholder={field.placeholder}
              name={field.name}
              disabled={field.disabled}
              className="border-gray-300 p-2 rounded-md"
            />
          </div>
        ))}
      </div>
    </>
  );
}
