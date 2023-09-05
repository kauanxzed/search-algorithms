import { useState } from 'react';

/* eslint-disable-next-line */
export interface RangeInputProps {}

export function RangeInput(props: RangeInputProps) {
  const [arrayLength, setArrayLength] = useState(10);

  function createArray(arrayLength: number) {
    throw new Error('Function not implemented.');
  }

  return (
    <div className="grid">
      <label className="text-white">Array Length:{arrayLength}</label>
      <input
        id="arraylength"
        type="range"
        step={1}
        max={100}
        min={10}
        defaultValue={10}
        className="cursor-pointer"
        onChange={(e) => {
          setArrayLength(e.target.valueAsNumber);
          createArray(arrayLength);
        }}
      ></input>
    </div>
  );
}

export default RangeInput;
