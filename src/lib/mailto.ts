/** Builds a mailto: link with an encoded subject and body. */
export const buildMailto = (to: string, subject: string, lines: Record<string, string>) => {
  const body = Object.entries(lines)
    .filter(([, value]) => value.trim())
    .map(([label, value]) => `${label}:\n${value.trim()}`)
    .join("\n\n");
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};
