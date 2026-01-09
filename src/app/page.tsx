"use client";

import { cn } from "@/lib/utils";
import { MarketingChart } from "@/components/marketing-chart";
import { Map as MapComponent, MapMarker, MarkerContent } from "@/components/ui/map";
import { MonitorListItem } from "@/components/monitor/monitor-list-item";
import { DiscordWebhook } from "@/components/discord-webhook";
import { Activity, Bell, Globe, MonitorCheck, LayoutTemplate, Github, BookOpen } from "lucide-react";
import Image from "next/image";
import { motion } from "motion/react";

// Animation Variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

// Helper for grid items
function GridItem({ className, children, noHover = false }: { className?: string; children?: React.ReactNode; noHover?: boolean }) {
  return (
    <motion.div
      variants={item as any}
      whileHover={noHover ? {} : {
        backgroundColor: "rgba(9, 9, 11, 0.95)",
        transition: { duration: 0.2 }
      }}
      className={cn("bg-zinc-950 p-6 flex flex-col justify-center items-center relative overflow-hidden group border border-transparent hover:border-zinc-800/50 transition-colors select-none", className)}
    >
      {!noHover && (
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-transparent pointer-events-none"
        />
      )}
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-black text-white flex flex-col items-center justify-center p-4 sm:p-8 font-sans">
      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
        className="w-full max-w-[1200px] border border-zinc-800 bg-zinc-800"
      >

        {/* Navbar */}
        <div className="flex flex-col gap-px bg-zinc-800 border-b border-zinc-800">
          <GridItem noHover className="w-full h-20 !items-center !justify-between !flex-row !p-6 z-10">
            <div className="flex items-center gap-2">
              <Image src="/uptimekit.svg" alt="UptimeKit Logo" width={32} height={32} className="rounded-sm" />
            </div>
            <div className="flex items-center gap-6 text-zinc-400">
              <a href="https://docs.uptimekit.dev" className="hover:text-white transition-colors" aria-label="Documentation">
                <BookOpen className="size-5" />
              </a>
              <a href="https://github.com/uptimekit/uptimekit" className="hover:text-white transition-colors" aria-label="GitHub">
                <Github className="size-5" />
              </a>
            </div>
          </GridItem>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-zinc-800">

          {/* Main Showcase Panel - Spans 4 columns (Conceptually the "Hero" or "Showcase") */}
          <GridItem className="lg:col-span-4 min-h-[500px] lg:min-h-[800px] !justify-start !items-start text-left !p-8">
            <div className="relative z-10 flex flex-col h-full w-full">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="mb-8"
              >
                <h1 className="text-4xl font-bold tracking-tight text-white mb-4">
                  The Open Source <span className="text-zinc-500">Status Page Solution.</span>
                </h1>
                <p className="text-zinc-400 text-lg leading-relaxed">
                  Free, self-hosted, and unrestricted monitoring for all your services.
                  Visualize your infrastructure with beautiful status pages.
                </p>
              </motion.div>

              {/* COMPONENT SHOWCASE AREA - EMPTY as requested */}
              <div className="w-full grow" />
            </div>
          </GridItem>

          {/* Right Area - Spans 8 columns */}
          <div className="lg:col-span-8 grid grid-rows-[auto_1fr] gap-px bg-zinc-800 h-full">

            {/* Top Wide Box: Real-Time Monitoring */}
            <GridItem className="h-[250px] w-full !items-start !justify-start !p-0">
              <div className="relative z-10 w-full h-full flex flex-col">
                <div className="flex flex-col p-8 pb-4 shrink-0 relative z-30 bg-zinc-950 shadow-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-zinc-900 rounded-md border border-zinc-800">
                      <Activity className="size-5 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white group-hover:scale-105 transition-transform duration-300 origin-left">Real-time Monitoring</h3>
                  </div>
                  <p className="text-zinc-400 max-w-md mb-4">
                    Accurate down to the second. 1-minute check intervals with detailed latency sparklines and uptime history.
                  </p>
                </div>
                {/* Real Chart */}
                <div className="grow w-full min-h-0">
                  <MarketingChart />
                </div>
              </div>
            </GridItem>

            {/* Bottom Split */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-800 h-full">

              {/* Middle/Bottom Left Stack */}
              <div className="flex flex-col gap-px bg-zinc-800 h-full">
                {/* Multi-region Workers */}
                <GridItem className="h-[275px] w-full !items-start !justify-between !p-0">
                  <div className="flex flex-col p-6 pb-4 relative z-30 bg-zinc-950 shadow-2xl">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-zinc-900 rounded-md border border-zinc-800">
                        <Globe className="size-5 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-white group-hover:scale-105 transition-transform duration-300 origin-left">Global Monitoring</h3>
                    </div>
                    <p className="text-zinc-400 text-sm">Setup monitoring from different locations.</p>
                  </div>
                  <div className="w-full grow relative min-h-0 rounded-b-lg overflow-hidden grayscale-[50%] brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-500">
                    <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-zinc-950 to-transparent z-20 pointer-events-none" />
                    <MapComponent
                      center={[0, 20]}
                      zoom={0.5}
                      interactive={true}
                      attributionControl={false}
                      styles={{
                        light: "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json",
                        dark: "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json",
                      }}
                    >
                      {/* Frankfurt */}
                      <MapMarker longitude={8.6821} latitude={50.1109}>
                        <MarkerContent>
                          <div className="size-2.5 rounded-full bg-green-500 ring-4 ring-green-500/20" />
                        </MarkerContent>
                      </MapMarker>
                      {/* Paris */}
                      <MapMarker longitude={2.3522} latitude={48.8566}>
                        <MarkerContent>
                          <div className="size-2.5 rounded-full bg-green-500 ring-4 ring-green-500/20" />
                        </MarkerContent>
                      </MapMarker>
                      {/* Sydney */}
                      <MapMarker longitude={151.2093} latitude={-33.8688}>
                        <MarkerContent>
                          <div className="size-2.5 rounded-full bg-green-500 ring-4 ring-green-500/20" />
                        </MarkerContent>
                      </MapMarker>
                      {/* NYC */}
                      <MapMarker longitude={-74.0060} latitude={40.7128}>
                        <MarkerContent>
                          <div className="size-2.5 rounded-full bg-green-500 ring-4 ring-green-500/20" />
                        </MarkerContent>
                      </MapMarker>
                    </MapComponent>
                  </div>
                </GridItem>

                {/* Alerting */}
                <GridItem className="flex-grow w-full !items-start !justify-between !p-0 overflow-hidden">
                  <div className="relative z-30 w-full p-6 pb-4 bg-zinc-950 shadow-2xl">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-zinc-900 rounded-md border border-zinc-800">
                        <Bell className="size-5 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-white group-hover:scale-105 transition-transform duration-300 origin-left">Instant Alerts</h3>
                    </div>
                    <p className="text-zinc-400 text-sm">Get notified via Slack, Discord, or Email.</p>
                  </div>

                  {/* Webhook Mockup Container */}
                  <div className="w-full grow relative flex items-start justify-center p-6 pt-4">
                    <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-zinc-950 to-transparent z-10 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-zinc-950 to-transparent z-10 pointer-events-none" />
                    <div className="w-full">
                      <DiscordWebhook />
                    </div>
                  </div>
                </GridItem>
              </div>

              {/* Right Tall Box: Status Pages */}
              <GridItem className="h-full min-h-[550px] !items-start !justify-start !p-0 overflow-hidden relative">
                <div className="p-8 pb-4 w-full relative z-30 bg-zinc-950 shadow-2xl">
                  <div className="mb-6 p-3 rounded-lg bg-zinc-900 border border-zinc-800 w-fit mx-auto">
                    <MonitorCheck className="size-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 text-center group-hover:scale-105 transition-transform duration-300 origin-center">Status Pages</h3>
                  <p className="text-zinc-400 max-w-xs mx-auto text-center mb-8">
                    Beautiful, public-facing status pages for your users.
                  </p>
                </div>

                {/* Monitor List Container with Mask */}
                <div className="w-full grow relative">
                  {/* Gradient Mask to fade out the bottom/cut off */}
                  <div className="absolute inset-0 z-20 bg-gradient-to-b from-zinc-950 via-transparent to-zinc-950 pointer-events-none" style={{ background: 'linear-gradient(to bottom, #09090b 0%, transparent 10%, transparent 50%, #09090b 100%)' }} />

                  <div className="flex flex-col gap-2 p-6 pt-0 opacity-80 select-none pointer-events-none mask-image-bottom">
                    <MonitorListItem
                      name="API Service"
                      status="operational"
                      uptimePercentage={99.99}
                      history={Array(60).fill(0).map((_, i) => ({ date: `2024-01-${i}`, status: Math.random() > 0.98 ? 'degraded' : 'operational', uptime: 100 }))}
                    />
                    <MonitorListItem
                      name="Web Dashboard"
                      status="operational"
                      uptimePercentage={99.95}
                      history={Array(60).fill(0).map((_, i) => ({ date: `2024-01-${i}`, status: 'operational', uptime: 100 }))}
                    />
                    <MonitorListItem
                      name="Worker Nodes (EU)"
                      status="degraded"
                      uptimePercentage={98.50}
                      history={Array(60).fill(0).map((_, i) => ({ date: `2024-01-${i}`, status: Math.random() > 0.95 ? 'degraded' : 'operational', uptime: 98 }))}
                    />

                  </div>
                </div>
              </GridItem>
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
}
