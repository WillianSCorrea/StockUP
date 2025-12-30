import { StockStatusBadge } from "./StockStatusBadge";


interface StockItem {
id: number;
name: string;
current: number;
minimum: number;
status: "OK" | "ATENCAO" | "CRITICO";
}


export function StockTable({ items }: { items: StockItem[] }) {
return (
<div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
<table className="w-full text-sm">
<thead className="bg-slate-50 text-slate-600">
<tr>
<th className="px-4 py-3 text-left">Produto</th>
<th className="px-4 py-3">Estoque</th>
<th className="px-4 py-3">Mínimo</th>
<th className="px-4 py-3">Status</th>
</tr>
</thead>
<tbody>
{items.map((item) => (
<tr key={item.id} className="border-t">
<td className="px-4 py-3 text-slate-700">{item.name}</td>
<td className="px-4 py-3 text-center">{item.current}</td>
<td className="px-4 py-3 text-center">{item.minimum}</td>
<td className="px-4 py-3 text-center">
<StockStatusBadge status={item.status} />
</td>
</tr>
))}
</tbody>
</table>
</div>
);
}