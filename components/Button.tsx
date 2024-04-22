import React from 'react'
import Image from 'next/image'

/* `type ButtonProps = {` is defining a TypeScript type called `ButtonProps` which specifies the
expected shape of the props that the `Button` component should receive. It includes properties such
as `type`, `title`, `icon`, and `variant`, along with their respective types. This helps in
type-checking and ensuring that the component is used correctly with the expected props. */

type ButtonProps = {
    type: 'button' | 'submit';
    title: string;
    icon?: string;
    variant: string;
    full?: boolean;
}

const Button = ({type, title, icon, variant, full}: ButtonProps) => {
  return (
    <button 
      className={`flexCenter gap-3 rounded-full border ${variant} ${full && 'w-full'}`}
      type={type}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24}  priority/>}
      <label className=' bold-16 whitespace-nowrap cursor-pointer'>{title}</label>
    </button>
  )
}

export default Button
