import { DownArrowSVG } from "@/svg/allSvgs";
import React, { useState, useEffect, useRef } from "react";

interface DropdownProps {
  options: {label:string,value:string}[];
  onSelect: ({label,value}:{label:string,value:string}) => void;
  defValue?:{label:string,value:string};
  className?:string;
  Icon?:any
}

const Dropdown: React.FC<DropdownProps> = ({ options, onSelect,defValue,Icon=DownArrowSVG,className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(defValue?.label||"");
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Dışarıya tıklama ile dropdown'ı kapatma işlevi
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false); // Dışarıya tıklanırsa dropdown kapanır
      }
    };

    document.addEventListener("mousedown", handleClickOutside); // Mouse ile tıklama
    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // Temizleme
    };
  }, []);

  const handleSelect = (option: {label:string,value:string}) => {
    setSelectedOption(option.label);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={"w-max flex items-center gap-x-1 h-full text-sm font-medium rounded-md focus:outline-none "+
          (className||"px-4 py-2 ")}
      >
        <span>{selectedOption || "Şəhər"}</span>
        <span>
         <Icon/>
        </span>
      </button>

      {isOpen && (
        <ul className="absolute left-0 w-48 mt-2 z-20 bg-white border rounded-md shadow-lg max-h-72  overflow-y-scroll">
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleSelect(option)}
              className="px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-700 cursor-pointer"
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
