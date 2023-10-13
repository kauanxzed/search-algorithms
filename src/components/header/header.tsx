import { ReactElement, useEffect, useState } from 'react';
import Button from '../button/button';
import RangeInput from '../range-input/range-input';
import Select from '../select/select';
import Line from '../line/line';
import { Sorting } from '../../../types/sorting.enum';

export function Header() {
  const [array, setArray] = useState<number[]>([]);
  const [arrayLength, setArrayLength] = useState<number>(10);
  const [sorted, setSorted] = useState<ReactElement[]>([]);
  const [sortingType, setSortingType] = useState<string>(Sorting.BubbleSort);

  const handleArrayLengthChange = (newLength: number) => {
    setArrayLength(newLength);
  };

  const createRandomArray = (length: number) => {
    for (let i = 0; i < length; i++) {
      setArray((array) => [...array, Math.floor(Math.random() * 200)]);
    }
  };

  const bubbleSort = async (array: number[]) => {
    let swapped = false;
    const result = [...array];
    do {
      swapped = false;
      for (let i = 0; i < result.length; i++) {
        if (result[i] > result[i + 1]) {
          const temp = result[i];
          result[i] = result[i + 1];
          result[i + 1] = temp;
          swapped = true;
          await new Promise((resolve) => setTimeout(resolve, 10));
          setSorted(
            result.map((item: number, index: number) => {
              return <Line key={index} height={item} />;
            }),
          );
        }
      }
    } while (swapped);
    return result;
  };

  const quickSort = async (array: number[]): Promise<number[]> => {
    if (array.length <= 1) {
      return array;
    }

    const pivot = array[Math.floor(array.length / 2)];

    const left = [];
    const right = [];

    for (let i = 0; i < array.length; i++) {
      if (array[i] < pivot) {
        left.push(array[i]);
      } else if (array[i] > pivot) {
        right.push(array[i]);
      }
    }

    const leftSorted = await quickSort(left);
    const rightSorted = await quickSort(right);

    const sorted = [...leftSorted, pivot, ...rightSorted];

    await new Promise((resolve) => setTimeout(resolve, 10));
    setSorted(
      sorted.map((item: number, index: number) => {
        return <Line key={index} height={item} />;
      }),
    );

    return sorted;
  };

  const mergeSort = async (array: number[]): Promise<number[]> => {
    if (array.length <= 1) {
      return array;
    }

    const middle = Math.floor(array.length / 2);

    const left = array.slice(0, middle);
    const right = array.slice(middle);

    const leftSorted = await mergeSort(left);
    const rightSorted = await mergeSort(right);

    const sorted = [];
    
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < leftSorted.length && rightIndex < rightSorted.length) {
      if (leftSorted[leftIndex] < rightSorted[rightIndex]) {
        sorted.push(leftSorted[leftIndex]);
        leftIndex++;
      } else {
        sorted.push(rightSorted[rightIndex]);
        rightIndex++;
      }
    }

    while (leftIndex < leftSorted.length) {
      sorted.push(leftSorted[leftIndex]);
      leftIndex++;
    }

    while (rightIndex < rightSorted.length) {
      sorted.push(rightSorted[rightIndex]);
      rightIndex++;
    }

    await new Promise((resolve) => setTimeout(resolve, 10));
    setSorted(
      sorted.map((item: number, index: number) => {
        return <Line key={index} height={item} />;
      }),
    );

    return sorted;
  };

  const HeapSort = async (array: number[]): Promise<number[]> => {
    const result = [...array];
    let n = result.length;

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      await heapify(result, n, i);
    }

    for (let i = n - 1; i > 0; i--) {
      const temp = result[0];
      result[0] = result[i];
      result[i] = temp;
    
      await heapify(result, i, 0);
    }

    await new Promise((resolve) => setTimeout(resolve, 10));
    setSorted(
      result.map((item: number, index: number) => {
        return <Line key={index} height={item} />;
      }),
    );
    
    return result;
  };

  const heapify = async (array: number[], n: number, i: number) => {
    let largest = i;
    let l = 2 * i + 1;
    let r = 2 * i + 2;
    
    if (l < n && array[l] > array[largest]) {
      largest = l;
    }

    if (r < n && array[r] > array[largest]) {
      largest = r;
    }

    if (largest !== i) {
      const temp = array[i];
      array[i] = array[largest];
      array[largest] = temp;
      
      await heapify(array, n, largest);
    }
  };

  useEffect(() => {
    setArray([]);
    createRandomArray(arrayLength);
  }, [arrayLength]);

  useEffect(() => {
    const result = array.map((item, index) => (
      <Line key={index} height={item} />
    ));
    setSorted(result);
  }, [array]);

  const getSelected = (selected: string) => {
    setSortingType(selected);
  };

  return (
    <>
      <div className="border-spacing-1 bg-slate-800 p-10 w-full">
        <div className="flex justify-between">
          <Select className="w-64" setSelectedOption={getSelected} />
          <RangeInput onArrayLengthChange={handleArrayLengthChange} />
          <Button
            msg="Do the sorting"
            onClick={() => {
              switch (sortingType) {
                case Sorting.BubbleSort:
                  bubbleSort(array);
                  break;
                case Sorting.QuickSort:
                  quickSort(array);
                  break;
                case Sorting.MergeSort:
                  mergeSort(array);
                  break;
                case Sorting.HeapSort:
                  HeapSort(array);
                  break;
              }
            }}
          />
        </div>
      </div>
      <div className="grid place-items-center w-screen">
        <div className="flex flex-col">
          <ul className="flex justify-center">{sorted}</ul>
        </div>
      </div>
    </>
  );
}

export default Header;
