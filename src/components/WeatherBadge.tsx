"use client";

import { useState, useEffect } from "react";

type Weather = { temp: string; desc: string; icon: string };

function conditionIcon(desc: string): string {
  const d = desc.toLowerCase();
  if (d.includes("sun") || d.includes("clear")) return "☀️";
  if (d.includes("cloud") || d.includes("overcast")) return "⛅";
  if (d.includes("rain") || d.includes("drizzle") || d.includes("shower")) return "🌧";
  if (d.includes("thunder") || d.includes("storm")) return "⛈";
  if (d.includes("snow") || d.includes("sleet")) return "❄️";
  if (d.includes("fog") || d.includes("mist") || d.includes("haze")) return "🌫";
  if (d.includes("wind")) return "💨";
  return "🌤";
}

export default function WeatherBadge() {
  const [weather, setWeather] = useState<Weather | null>(null);

  useEffect(() => {
    const cached = sessionStorage.getItem("genovaWeather");
    if (cached) { setWeather(JSON.parse(cached)); return; }

    fetch("https://wttr.in/Genova?format=j1")
      .then(r => r.json())
      .then(data => {
        const cond = data?.current_condition?.[0];
        if (!cond) return;
        const w: Weather = {
          temp: cond.temp_C,
          desc: cond.weatherDesc?.[0]?.value ?? "",
          icon: conditionIcon(cond.weatherDesc?.[0]?.value ?? ""),
        };
        setWeather(w);
        sessionStorage.setItem("genovaWeather", JSON.stringify(w));
      })
      .catch(() => {});
  }, []);

  if (!weather) return null;

  return (
    <div className="inline-flex items-center gap-1.5 bg-black/30 backdrop-blur-sm border border-white/15 text-white/85 text-xs rounded-full px-3 py-1.5">
      <span>{weather.icon}</span>
      <span className="font-medium">Genova</span>
      <span className="opacity-60">·</span>
      <span>{weather.temp}°C</span>
    </div>
  );
}
