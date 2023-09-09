import { useState } from 'react';

/* eslint-disable-next-line */
export interface RangeInputProps {
  onArrayLengthChange: (value: number) => void;
}

export function RangeInput(props: RangeInputProps) {
  const [arrayLength, setArrayLength] = useState(10);

  const handleChange = (value: number) => {
    setArrayLength(value);
    props.onArrayLengthChange(value);
  };

  return (
    <div className="grid place-items-center relative right-14">
      <label className="text-white">Array Length:{arrayLength}</label>
      <input
        type="range"
        step={1}
        max={70}
        min={10}
        defaultValue={10}
        className="cursor-pointer"
        onChange={(e) => {
          handleChange(e.target.valueAsNumber);
        }}
      ></input>
    </div>
  );
}

export default RangeInput;
