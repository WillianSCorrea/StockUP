import { ReactNode } from "react";


interface KpiCardProps {
title: string;
value: string | number;
description?: string;
icon: ReactNode;
variant?: "info" | "success" | "warning" | "danger";
}


const variantStyles = {
info: "text-blue-600",
success: "text-green-600",
warning: "text-amber-600",
danger: "text-red-600",
};


export function KpiCard({ title, value, description, icon, variant = "info" }: KpiCardProps) {
return (
<div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition">
<div className="flex items-center justify-between">
<span className={`text-xl ${variantStyles[variant]}`}>{icon}</span>
</div>


<div className="mt-4">
<p className="text-sm text-slate-500">{title}</p>
<p className="text-3xl font-semibold text-slate-900 mt-1">{value}</p>
{description && (
<p className="text-xs text-slate-400 mt-1">{description}</p>
)}
</div>
</div>
);
}