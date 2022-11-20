// button.tsx
import {type VariantProps, cva} from 'class-variance-authority';
import React from 'react';

const button = cva('rounded', {
  variants: {
    variant: {
      primary: [
        'bg-primary-600 shadow-primary-600/20 shadow-md',
        'text-white',
        'border-transparent',
        'hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500',
      ],
      secondary: [
        'bg-secondary-600 shadow-secondary-600/20 shadow-md',
        'text-white',
        'border-transparent',
        'hover:bg-secondary-700 focus:ring-2 focus:ring-secondary-500',
      ],
      subtle: [
        'bg-slate-900/5',
        'text-slate-900',
        'hover:bg-slate-900/10 focus:ring-2 focus:ring-slate-500',
      ],
      link: [
        'bg-white',
        'text-primary-600',
        'border-primary-400',
        'hover:underline hover:text-primary-500',
      ],
      'subtle-link': [
        'bg-white',
        'text-slate-900',
        'border-slate-400',
        'hover:underline',
      ],
    },
    size: {
      small: ['text-sm', 'py-1', 'px-2'],
      medium: ['text-base', 'py-2', 'px-4'],
      large: ['text-lg', 'py-3', 'px-6'],
    },
  },
  compoundVariants: [{variant: 'primary', size: 'medium'}],
  defaultVariants: {
    variant: 'subtle',
    size: 'medium',
  },
});

export interface ButtonProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

export const Button: React.FC<ButtonProps> = ({
  className,
  variant,
  size,
  ...props
}) => (
  <button className={button({variant, size, class: className})} {...props} />
);
