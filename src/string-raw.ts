const isChrome =
  // @ts-ignore
  typeof navigator !== 'undefined' && /Chrom(?:e|ium)/.test(navigator.userAgent);

const loosePolyfill = (callSite: TemplateStringsArray, ...substitutions: any[]) => {
  let t = '';
  const raw = callSite.raw;
  const length = raw.length - 1;
  for (let idx = 0; idx < length; idx++) {
    t += raw[idx] + substitutions[idx];
  }
  return t + raw[length];
};

// NOTE: Use polyfill because Chrome has performance issue for String.raw
const stringRaw: typeof String.raw = isChrome || typeof String.raw === 'undefined' ? loosePolyfill : String.raw;

export default stringRaw;
