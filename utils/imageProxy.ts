export type ProxyOptions = {
  width?: number;
  height?: number;
  fit?: 'cover' | 'contain';
  quality?: number;
  format?: 'jpg' | 'webp';
};

// Builds a proxy URL via images.weserv.nl to avoid ORB/CORS hotlink issues
export function proxyImage(url: string, opts: ProxyOptions = {}): string {
  const base = 'https://images.weserv.nl/';
  const params = new URLSearchParams();
  // images.weserv.nl supports full URLs; encode for safety
  params.set('url', url);
  if (opts.width) params.set('w', String(opts.width));
  if (opts.height) params.set('h', String(opts.height));
  params.set('fit', opts.fit ?? 'cover');
  params.set('output', opts.format ?? 'jpg');
  params.set('q', String(opts.quality ?? 85));
  return `${base}?${params.toString()}`;
}