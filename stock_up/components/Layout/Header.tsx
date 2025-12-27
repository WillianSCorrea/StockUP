import { Bell, User } from "lucide-react";


export function Header() {
return (
<header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6">
<h1 className="text-lg font-semibold text-slate-800">Dashboard</h1>


<div className="flex items-center gap-4">
<button className="relative text-slate-600 hover:text-slate-800">
<Bell size={20} />
<span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
</button>


<div className="flex items-center gap-2 text-slate-700">
<User size={20} />
<span className="text-sm">Admin</span>
</div>
</div>
</header>
);
}


