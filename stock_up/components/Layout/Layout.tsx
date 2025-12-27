import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { ReactNode } from "react";


export function AppLayout({ children }: { children: ReactNode }) {
return (
<div className="flex h-screen bg-slate-100">
<Sidebar />


<div className="flex flex-col flex-1">
<Header />
<main className="flex-1 overflow-y-auto p-6">{children}</main>
</div>
</div>
);
}