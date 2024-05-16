"use client";

import { useRouter } from "next/navigation";

export default function Button({ path, children }) {
  const router = useRouter();
  const handleClick = () => {
    router.push(path);
  };
  
  return (
    <button className="bg-rose-500 text-white px-3 py-2" onClick={handleClick}>
      {children}
    </button>
  );
}
