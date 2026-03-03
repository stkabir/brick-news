type DateLabels = { en: string; es: string };

const shortOpts: Intl.DateTimeFormatOptions = {
  month: "short",
  day: "numeric",
  year: "numeric",
};

const longOpts: Intl.DateTimeFormatOptions = {
  weekday: "long",
  month: "long",
  day: "numeric",
  year: "numeric",
};

export function formatShortDate(iso: string): DateLabels {
  const d = new Date(iso);
  if (isNaN(d.getTime())) return { en: "", es: "" };
  return {
    en: d.toLocaleDateString("en-US", shortOpts).toUpperCase(),
    es: d.toLocaleDateString("es-ES", shortOpts).toUpperCase(),
  };
}

export function formatLongDate(iso: string): DateLabels {
  const d = new Date(iso);
  if (isNaN(d.getTime())) return { en: "", es: "" };
  return {
    en: d.toLocaleDateString("en-US", longOpts),
    es: d.toLocaleDateString("es-ES", longOpts),
  };
}
