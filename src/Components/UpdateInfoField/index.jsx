import { CheckIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";

function UpdateInfoField({ value, updateValue, closeField, type}) {
	const [input, setInput] = useState('');

	const handleUpdate = () => {
		updateValue(input ? input : value);
		closeField();
	}

  return (
    <div className="flex justify-end ">
      <input
        type={type || 'text'}
        placeholder={value}
        value={input}
        onChange={(e) => setInput(e.target.value)}
				className="px-2 mx-2 border border-slate-500 rounded-md w-5/6"
      />
      <button onClick={handleUpdate}>
        <CheckIcon className="w-6 h-6" />
      </button>
    </div>
  ); 
}

export { UpdateInfoField };
