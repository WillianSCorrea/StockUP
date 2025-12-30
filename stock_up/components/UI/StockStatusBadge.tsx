interface StockStatusBadgeProps {
status: "OK" | "ATENCAO" | "CRITICO";
}


export function StockStatusBadge({ status }: StockStatusBadgeProps) {
const styles = {
OK: "bg-green-100 text-green-700",
ATENCAO: "bg-amber-100 text-amber-700",
CRITICO: "bg-red-100 text-red-700",
};


return (
<span className={`px-2 py-1 rounded-md text-xs font-medium ${styles[status]}`}>
{status}
</span>
);
}