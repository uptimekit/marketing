import { Activity, AlertCircle, Monitor, Calendar } from "lucide-react";

export function DiscordWebhook() {
  return (
    <div className="font-sans text-[15px] leading-[1.375rem] text-zinc-400 w-full font-medium">
      {/* Header: Avatar + Username + Time */}
      <div className="flex items-center gap-3 mb-2">
        <div className="size-10 rounded-full bg-zinc-800 flex items-center justify-center shrink-0 border border-zinc-700">
          <Activity className="size-5 text-zinc-400" />
        </div>
        <div className="flex items-baseline gap-1.5 ">
          <span className="text-zinc-200 font-semibold hover:underline cursor-pointer">
            UptimeKit
          </span>
          <span className="bg-zinc-700 text-zinc-300 text-[0.625rem] px-[0.275rem] rounded-[3px] h-[0.9375rem] flex items-center justify-center font-semibold leading-none mt-[1px]">
            APP
          </span>
          <span className="text-zinc-600 text-xs font-medium ml-1">
            Today at 5:25 AM
          </span>
        </div>
      </div>

      {/* Message Content / Embed */}
      <div className="pl-12 w-full">
        <div className="flex flex-col bg-zinc-900/40 border-l-4 border-l-red-900/80 rounded-sm overflow-hidden shadow-sm w-full">
          <div className="p-4 grid gap-4">
            {/* Title */}
            <div className="flex items-center gap-2 text-zinc-300 font-semibold text-base">
              <AlertCircle className="size-5 text-red-900/80 fill-red-900/10" />
              <span>New incident created</span>
            </div>

            {/* Fields Grid */}
            <div className="grid grid-cols-2 gap-y-4 gap-x-6 text-sm">
              {/* Monitors */}
              <div>
                <div className="text-zinc-600 font-bold mb-1 flex items-center gap-1.5 text-[0.7rem] uppercase tracking-wider">
                  <Monitor className="size-3" /> Monitors
                </div>
                <div className="text-zinc-400 font-medium">Marketing Page</div>
              </div>

              {/* Date */}
              <div>
                <div className="text-zinc-600 font-bold mb-1 flex items-center gap-1.5 text-[0.7rem] uppercase tracking-wider">
                  <Calendar className="size-3" /> Date
                </div>
                <div className="text-zinc-400 font-medium">Jan 9, 2026</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
