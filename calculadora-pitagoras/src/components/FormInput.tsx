import React, { ChangeEvent } from "react";

interface FormInputProps {
  name: string;
  label: string;
  linha: string;
  setLinhaDestacada: Function;
  onChange: (value: number) => void;
  ifUndefined: number;
  id: string;
}

export function FormInput({
  setLinhaDestacada,
  name,
  label,
  linha,
  onChange,
  ifUndefined,
  id,
}: FormInputProps) {
  // Campo de entrada de valores do triângulo
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;

    console.log(ifUndefined);
    onChange(value.length == 0 ? ifUndefined : parseFloat(value));
  }
  return (
    <div className="grid">
      <label htmlFor={name} className="xl:text-xl my-1">
        {label}
      </label>
      <input
        id={id}
        className="text-zinc-900 xl:text-2xl py-1 px-2 rounded"
        type="number"
        name={name}
        onFocus={() => {
          setLinhaDestacada(linha);
        }}
        onBlur={() => {
          setLinhaDestacada("");
        }}
        onChange={handleChange}
      />
    </div>
  );
}
