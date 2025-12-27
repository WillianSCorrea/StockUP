interface Insight {
id: number;
message: string;
type: "info" | "warning" | "danger";
}


const insightStyles = {
info: "border-blue-400 bg-blue-50 text-blue-700",
warning: "border-amber-400 bg-amber-50 text-amber-700",
danger: "border-red-400 bg-red-50 text-red-700",
};


export function InsightCard({ insights }: { insights: Insight[] }) {
return (
<div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
<h3 className="text-sm font-semibold text-slate-700 mb-4">🧠 Insights do Sistema</h3>


<ul className="space-y-3">
{insights.map((insight) => (
<li
key={insight.id}
className={`border-l-4 p-3 rounded-md text-sm ${insightStyles[insight.type]}`}
>
{insight.message}
</li>
))}
</ul>
</div>
);
}