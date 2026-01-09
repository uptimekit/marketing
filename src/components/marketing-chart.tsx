"use client"

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
    { time: "00:00", latency: 25 },
    { time: "00:01", latency: 35 },
    { time: "00:02", latency: 20 },
    { time: "00:03", latency: 45 },
    { time: "00:04", latency: 30 },
    { time: "00:05", latency: 25 },
    { time: "00:06", latency: 40 },
    { time: "00:07", latency: 55 },
    { time: "00:08", latency: 45 },
    { time: "00:09", latency: 35 },
    { time: "00:10", latency: 30 },
    { time: "00:11", latency: 25 },
    { time: "00:12", latency: 40 },
    { time: "00:13", latency: 50 },
    { time: "00:14", latency: 45 },
    { time: "00:15", latency: 30 },
]

const chartConfig = {
    latency: {
        label: "Latency (ms)",
        color: "#22c55e",
    },
} satisfies ChartConfig

export function MarketingChart() {
    return (
        <div className="w-full h-full min-h-[100px] flex items-center justify-center">
            <ChartContainer config={chartConfig} className="w-full h-full aspect-auto">
                <AreaChart
                    accessibilityLayer
                    data={chartData}
                    margin={{
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0,
                    }}
                >
                    <defs>
                        <linearGradient id="fillLatency" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="var(--color-latency)" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="var(--color-latency)" stopOpacity={0.1} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid vertical={false} stroke="hsl(var(--muted)/0.2)" />
                    <XAxis
                        dataKey="time"
                        tickLine={false}
                        axisLine={false}
                        tickMargin={8}
                        hide
                    />
                    <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent indicator="line" className="!bg-zinc-900 !border-zinc-800 text-zinc-50 [&_.text-muted-foreground]:text-zinc-400 [&_.text-foreground]:text-zinc-50" />}
                    />
                    <Area
                        dataKey="latency"
                        type="natural"
                        fill="url(#fillLatency)"
                        fillOpacity={0.4}
                        stroke="var(--color-latency)"
                        stackId="a"
                    />
                </AreaChart>
            </ChartContainer>
        </div>
    )
}
