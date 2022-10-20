import React from 'react';

interface Button extends React.HTMLProps<HTMLButtonElement> {
  text?: string;
  type?: 'submit' | 'reset' | 'button';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = (props: Button) => {
  return (
    <button
      onClick={props?.onClick}
      className="font-playfair text-lg transition hover:border-gray-400 hover:shadow-md px-5 py-0.5 border border-gray-500 w-fit rounded-sm"
      type={props?.type}
    >
      {props.text}
    </button>
  );
};

export default Button;
