export function calculateAQI(pm25) {
  const breakpoints = [
    { cLow: 0, cHigh: 12, aLow: 0, aHigh: 50 },
    { cLow: 12.1, cHigh: 35.4, aLow: 51, aHigh: 100 },
    { cLow: 35.5, cHigh: 55.4, aLow: 101, aHigh: 150 },
    { cLow: 55.5, cHigh: 150.4, aLow: 151, aHigh: 200 },
    { cLow: 150.5, cHigh: 250.4, aLow: 201, aHigh: 300 },
    { cLow: 250.5, cHigh: 500.4, aLow: 301, aHigh: 500 }
  ];

  const bp = breakpoints.find(b => pm25 >= b.cLow && pm25 <= b.cHigh);

  if (!bp) return null;

  return Math.round(
    ((bp.aHigh - bp.aLow) / (bp.cHigh - bp.cLow)) *
      (pm25 - bp.cLow) +
      bp.aLow
  );
}
