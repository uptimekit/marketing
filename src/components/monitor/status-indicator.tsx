import { cn } from "@/lib/utils";

export type StatusType = "operational" | "degraded" | "outage" | "maintenance";

export const statusConfig: Record<StatusType, { label: string; color: string }> = {
    operational: { label: "Operational", color: "bg-emerald-500" },
    degraded: { label: "Degraded Performance", color: "bg-yellow-500" },
    outage: { label: "Major Outage", color: "bg-red-500" },
    maintenance: { label: "Maintenance", color: "bg-blue-500" },
};

export function StatusDot({ status, className }: { status: StatusType; className?: string }) {
    const config = statusConfig[status];
    return (
        <div className={cn("relative flex h-3 w-3", className)}>
            <span className={cn("animate-ping absolute inline-flex h-full w-full rounded-full opacity-75", config.color)} />
            <span className={cn("relative inline-flex rounded-full h-3 w-3", config.color)} />
        </div>
    );
}
