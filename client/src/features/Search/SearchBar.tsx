import React, { useState } from "react";
import { CgSearch } from "react-icons/cg";
import classNames from "classnames";

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch(inputValue);
      setInputValue("");
    }
  };

  const containerClasses = classNames("flex", "w-[25.5625rem]", "h-[2.75rem]", "px-0.25rem", "justify-between", "items-center", "flex-shrink-0", {
    "border-b border-blue-500 bg-[#F4F4F4]": isInputFocused,
    "border-b border-gray-900 bg-white": !isInputFocused,
  });

  const searchIconClasses = classNames("h-4", "w-4", {
    "text-blue-500": isInputFocused,
    "": !isInputFocused,
  });

  return (
    <div className={containerClasses}>
      <CgSearch className={searchIconClasses} />
      <input
        type="text"
        className="flex-1 px-2 text-[#181818] text-sm focus:outline-none bg-transparent text-base font-sans font-light leading-[170%]"
        placeholder="Find your insight"
        value={inputValue}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
};

export default SearchBar;
