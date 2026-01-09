import { cn } from "@/lib/utils";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

export interface UptimeDay {
    date: string;
    status: "operational" | "degraded" | "outage" | "maintenance";
    uptime: number; // 0-100
}

interface UptimeBarProps {
    days: UptimeDay[];
    className?: string;
}

export function UptimeBar({ days, className }: UptimeBarProps) {
    return (
        <div className={cn("flex h-8 w-full gap-[2px]", className)}>
            <TooltipProvider>
                {days.map((day, i) => {
                    let bgClass = "bg-emerald-500/20";
                    if (day.status === "operational") bgClass = "bg-emerald-500";
                    if (day.status === "degraded") bgClass = "bg-yellow-500";
                    if (day.status === "outage") bgClass = "bg-red-500";
                    if (day.status === "maintenance") bgClass = "bg-blue-500";

                    return (
                        <Tooltip key={i}>
                            <TooltipTrigger asChild>
                                <div className={cn("h-full w-full flex-1 rounded-sm first:rounded-l-md last:rounded-r-md transition-colors hover:opacity-80", bgClass)} />
                            </TooltipTrigger>
                            <TooltipContent>
                                <p className="text-xs font-medium">{day.date}: {day.uptime}%</p>
                            </TooltipContent>
                        </Tooltip>
                    );
                })}
            </TooltipProvider>
        </div>
    );
}
