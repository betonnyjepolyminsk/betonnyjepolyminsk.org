export default {
  async fetch(request) {
    const url = new URL(request.url);
    if (url.pathname === "/robots.txt") {
      return new Response("User-agent: *\nDisallow: /\n", {
        headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store" }
      });
    }
    return new Response(null, {
      status: 301,
      headers: { "Location": "https://promyshlennyepoly.net/", "Cache-Control": "no-store" }
    });
  }
};
