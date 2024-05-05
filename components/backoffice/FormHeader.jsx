import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

export default function FormHeader({ title }) {
  const router = useRouter();
  return (
    <div className="flex items-center justify-between py-6 px-12 bg-white shadow text-slate-800 dark:bg-slate-600 dark:text-slate-50 rounded-lg mb-12">
      <h2 className="text-xl font-semibold">{title}</h2>
      <button className="" onClick={() => router.back()}>
        <X />
      </button>
    </div>
  );
}
