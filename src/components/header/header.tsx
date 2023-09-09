import { useEffect, useState } from 'react';
import Button from '../button/button';
import RangeInput from '../range-input/range-input';
import Select from '../select/select';
import Line from '../line/line';

export function Header() {
  const [array, setArray] = useState<number[]>([]);
  const [arrayLength, setArrayLength] = useState<number>(10);

  const handleArrayLengthChange = (newLength: number) => {
    setArrayLength(newLength);
  };

  const createArray = (length: number) => {
    setArray([]);
    for (let i = 0; i < length; i++) {
      setArray((array) => [...array, Math.floor(Math.random() * 200)]);
    }
  };

  useEffect(() => {
    createArray(arrayLength);
  }, [arrayLength]);

  return (
    <>
      <div className="border-spacing-1 bg-slate-800 p-10 w-full">
        <div className="flex justify-between">
          <Select className="w-64" />
          <RangeInput onArrayLengthChange={handleArrayLengthChange} />
          <Button msg="Do the sorting" />
        </div>
      </div>
      <div className="grid place-items-center w-screen">
        <div className="flex flex-col">
          <ul className="flex justify-center">
            {array.map((item, index) => (
              <Line key={index} height={item} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
