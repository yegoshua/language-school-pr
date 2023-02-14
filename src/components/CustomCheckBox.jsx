import React, { useState } from 'react';

function CustomCheckBox({ label}) {
    const [checked, setChecked] = useState(false);
    const onChange = ()=>{
        setChecked((prev=>!prev));
    }
return (
    <label className="flex items-center">
        <div className="relative">
        <input
            type="checkbox"
            checked={checked}
            onChange={onChange}
            className="sr-only"
        />
        <div className="w-4 h-4 bg-white rounded border border-gray-300 cursor-pointer flex-shrink-0 flex items-center justify-center">
            {checked && (
            <svg className="w-3 h-3 text-green-500 pointer-events-none" fill="currentColor" viewBox="0 0 20 20">
                <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
            </svg>
        )}
        </div>
        </div>
        <div className="ml-3 text-sm leading-5 font-medium text-gray-700">{label}</div>
    </label>
);
}

export default CustomCheckBox;