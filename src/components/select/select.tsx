import { Listbox } from '@headlessui/react';
import { useState } from 'react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { Sorting } from '../../../types/sorting.enum';

const sortingTypes = [
  { name: Sorting.BubbleSort },
  { name: Sorting.QuickSort },
  { name: Sorting.MergeSort },
  { name: Sorting.HeapSort },
];

export interface SelectProps {
  options?: string[];
  className?: string;
  setSelectedOption?: (option: string) => void;
}

export function Select(props: SelectProps) {
  const [selected, setSelected] = useState(sortingTypes[0]);

  const handleOnchange = (selected: string) => {
    props.setSelectedOption && props.setSelectedOption(selected);
  };

  return (
    <div className={`${props.className}`}>
      <Listbox value={selected}>
        <div className="relative">
          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-3 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">{selected.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {sortingTypes.map((sortingType, sortingTypeIdx) => (
              <Listbox.Option
                key={sortingTypeIdx}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                    active ? 'bg-teal-100 text-teal-900' : 'text-gray-900'
                  }`
                }
                value={sortingType}
                onClick={() => {
                  setSelected(sortingType);
                  handleOnchange(sortingType.name);
                }}
              >
                {({ selected }) => (
                  <div>
                    <span
                      className={`block truncate ${
                        selected ? 'font-medium' : 'font-normal'
                      }`}
                    >
                      {sortingType.name}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-teal-600">
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </div>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  );
}

export default Select;
