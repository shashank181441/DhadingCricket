import React, { useId } from 'react';

const Input = React.forwardRef(function Input({
  label = "",
  type = "text",
  className = "",
  ...props
}, ref) {
  const id = useId();

  return (
    <div className='w-full mb-4'>
      {label && (
        <label className='block text-gray-600 text-sm font-semibold mb-1' htmlFor={id}>
          {label}
        </label>
      )}
      <input
        type={type}
        className={`w-full px-4 py-2 rounded-md bg-white text-gray-800 outline-none focus:bg-gray-100 border border-gray-300 duration-200 ${className}`}
        ref={ref}
        {...props}
        id={id}
      />
    </div>
  );
});

export default Input;
