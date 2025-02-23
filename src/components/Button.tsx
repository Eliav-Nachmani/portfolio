"use client";

import Link from "next/link";

interface ButtonProps {
  text: string;
  link: string;
}

const Button: React.FC<ButtonProps> = ({ text, link }) => {
  return (
    <div className="mt-6 flex justify-center">
      <Link href={link}>
        <button className="px-6 py-3 md:px-8 md:py-4 bg-neon-green text-black font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform text-sm md:text-lg">
          {text}
        </button>
      </Link>
    </div>
  );
};

export default Button;
