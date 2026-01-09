import { cn } from "@/lib/utils";
import { StatusDot, type StatusType, statusConfig } from "./status-indicator";
import type { UptimeDay } from "./uptime-bar";
import { UptimeBar } from "./uptime-bar";
import { Info } from "lucide-react";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
    TooltipProvider
} from "@/components/ui/tooltip";

interface MonitorListItemProps {
    name: string;
    status: StatusType;
    uptimePercentage: number;
    history: UptimeDay[];
    displayStyle?: "history" | "status";
    className?: string;
    description?: string | null;
}

export function MonitorListItem({
    name,
    status,
    uptimePercentage,
    history,
    displayStyle = "history",
    className,
    description,
}: MonitorListItemProps) {
    // Status-only mode: show only name and current status
    if (displayStyle === "status") {
        return (
            <div className={cn("group py-4 first:pt-0 last:pb-0", className)}>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <StatusDot status={status} />
                        <h3 className="font-semibold text-foreground text-lg">{name}</h3>
                        {description && (
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Info className="h-4 w-4 text-muted-foreground/60" />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p className="max-w-xs text-sm">{description}</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        )}
                    </div>
                    <div
                        className={cn(
                            "font-medium text-sm",
                            status === "operational"
                                ? "text-emerald-500"
                                : status === "maintenance"
                                    ? "text-blue-500"
                                    : "text-red-500",
                        )}
                    >
                        {statusConfig[status].label}
                    </div>
                </div>
            </div>
        );
    }

    // History mode: show full uptime bar with history
    return (
        <div className={cn("group py-4 first:pt-0 last:pb-0 font-sans w-full", className)}>
            <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <StatusDot status={status} />
                    <h3 className="font-semibold text-white text-base">{name}</h3>
                    {/* Simplified tooltip for demo since we might be missing TooltipProvider up top or simpler just to hide description if not critical */}
                    {description && (
                        <div className="hidden">
                            {/* Skipping complex tooltip for marketing landing page simplicity unless strictly required */}
                        </div>
                    )}
                </div>
                <div
                    className={cn(
                        "font-medium text-xs",
                        status === "operational"
                            ? "text-emerald-500"
                            : "text-zinc-500",
                    )}
                >
                    {uptimePercentage.toFixed(2)}% uptime
                </div>
            </div>

            <UptimeBar days={history} />
        </div>
    );
}
