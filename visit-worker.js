/* Bộ đếm lượt truy cập riêng — Cloudflare Worker + D1 (đếm chính xác, không lệch giữa các trình duyệt)
   Cách dùng: xem hướng dẫn trong tin nhắn. Bảng cần tạo 1 lần:
   CREATE TABLE IF NOT EXISTS c (k TEXT PRIMARY KEY, n INTEGER NOT NULL);            */
const CORS = { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Methods": "GET,OPTIONS", "Cache-Control": "no-store" };
export default {
  async fetch(req, env) {
    if (req.method === "OPTIONS") return new Response(null, { headers: CORS });
    const hit = new URL(req.url).searchParams.has("hit");
    const row = hit
      ? await env.DB.prepare("INSERT INTO c (k, n) VALUES ('v', 1) ON CONFLICT(k) DO UPDATE SET n = n + 1 RETURNING n").first()
      : await env.DB.prepare("SELECT n FROM c WHERE k = 'v'").first();
    return Response.json({ value: row ? row.n : 0 }, { headers: CORS });
  }
};
