import React from "react";

interface FormInputProps {
  name: string;
  label: string;
  linha:string
  setLinhaDestacada: Function;
}

export function FormInput({ setLinhaDestacada, name, label, linha }: FormInputProps) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        name={name}
        onFocus={() => {
          setLinhaDestacada(linha);
        }}
        onBlur={() => {
          setLinhaDestacada("");
        }}
      />
    </>
  );
}
