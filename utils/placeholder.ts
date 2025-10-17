export function svgPlaceholder(width: number, height: number, text: string, bg = '#e5e7eb', fg = '#111827'): string {
  const safeText = text.replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const fontSize = Math.max(12, Math.floor(height / 14));
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
      <rect width="100%" height="100%" fill="${bg}" />
      <text x="50%" y="50%" fill="${fg}" font-family="Arial, Helvetica, sans-serif" font-size="${fontSize}" text-anchor="middle" dominant-baseline="middle">${safeText}</text>
    </svg>
  `;
  return 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg);
}