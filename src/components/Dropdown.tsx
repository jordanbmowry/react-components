import { useState, useEffect, useRef } from 'react';
import { GoChevronDown } from 'react-icons/go';
import Panel from './Panel';

export interface Option {
  label: string;
  value: string;
}

interface DropdownProps {
  options: Option[];
  onChange(option: Option): void;
  value: Option | null;
}

function Dropdown({ options, value, onChange }: DropdownProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const divEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (event: Event) => {
      if (!divEl.current?.contains(event?.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handler, true);

    return () => document.removeEventListener('click', handler);
  }, []);

  const handleClick = () => {
    setIsOpen((currIsOpen) => !currIsOpen);
  };

  const handleOptionClick = (option: Option) => {
    setIsOpen(false);
    onChange(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div
        className='hover:bg-sky-100 rounded cursor-pointer p-1'
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={divEl} className='w-48 relative'>
      <Panel
        className='flex justify-between items-center cursor-pointer'
        onClick={handleClick}
      >
        {value?.label ?? 'Select...'}
        <GoChevronDown className='text-lg' />
      </Panel>
      {isOpen && <Panel className='absolute top-full'>{renderedOptions}</Panel>}
    </div>
  );
}

export default Dropdown;
