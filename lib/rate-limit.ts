/**
 * Simple in-memory per-IP rate limiter: 15 messages per rolling 24h window.
 * Resets on server restart; fine for a portfolio chat bot. Swap for a
 * persistent store (Upstash, etc.) if it ever matters.
 */

const LIMIT = 15;
const WINDOW_MS = 24 * 60 * 60 * 1000;

interface Bucket {
  count: number;
  resetAt: number;
}

const buckets = new Map<string, Bucket>();

export interface RateLimitResult {
  allowed: boolean;
  remaining: number;
  resetAt: number;
}

export function checkRateLimit(ip: string): RateLimitResult {
  const now = Date.now();

  // Opportunistically prune expired buckets so the map doesn't grow forever.
  if (buckets.size > 1000) {
    for (const [key, bucket] of buckets) {
      if (bucket.resetAt <= now) buckets.delete(key);
    }
  }

  const existing = buckets.get(ip);
  if (!existing || existing.resetAt <= now) {
    buckets.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return { allowed: true, remaining: LIMIT - 1, resetAt: now + WINDOW_MS };
  }

  if (existing.count >= LIMIT) {
    return { allowed: false, remaining: 0, resetAt: existing.resetAt };
  }

  existing.count += 1;
  return { allowed: true, remaining: LIMIT - existing.count, resetAt: existing.resetAt };
}
