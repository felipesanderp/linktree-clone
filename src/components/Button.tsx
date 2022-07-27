import { IconProps } from "phosphor-react";
import { ComponentType, ReactNode } from "react";

interface ButtonProps {
  href: string;
  title: string;
  children?: ReactNode;
  icon?: ComponentType<IconProps>;
}

export function Button({ href, title, children, icon: Icon }: ButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      className="rounded-sm h-10 w-5/6 outline outline-offset-2 outline-blue-500 flex justify-center items-center mt-6 hover:bg-blue-300 font-bold transition duration-0 hover:duration-150"
    >
      <button className="flex items-center justify-center gap-1">
        {Icon && <Icon size={23} />}
        <p className="text-gray-700  text-lg">{title}</p>
      </button>
    </a>
  )
}