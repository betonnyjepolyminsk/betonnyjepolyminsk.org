export default {
  async fetch(request) {
    const url = new URL(request.url);
    if (url.pathname === "/robots.txt") {
      const robots = [
        "User-agent: Googlebot",
        "Allow: /",
        "",
        "User-agent: Google-InspectionTool",
        "Allow: /",
        "",
        "User-agent: *",
        "Disallow: /",
        "",
        "Sitemap: https://betonnyjepolyminsk.org/sitemap.xml",
        ""
      ].join("\n");
      return new Response(robots, {
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
          "Cache-Control": "no-store"
        }
      });
    }
    if (url.pathname === "/sitemap.xml") {
      const sitemap = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
        '  <url><loc>https://betonnyjepolyminsk.org/</loc></url>',
        '  <url><loc>https://betonnyjepolyminsk.org/blog/ustroystvo-betonnogo-pola</loc></url>',
        '  <url><loc>https://betonnyjepolyminsk.org/blog/shvy-v-betonnom-polu</loc></url>',
        '  <url><loc>https://betonnyjepolyminsk.org/blog/remont-betonnyh-polov</loc></url>',
        '</urlset>',
        ''
      ].join("\n");
      return new Response(sitemap, {
        headers: {
          "Content-Type": "application/xml; charset=utf-8",
          "Cache-Control": "no-store"
        }
      });
    }
    return new Response(null, {
      status: 301,
      headers: {
        "Location": "https://promyshlennyepoly.net/",
        "Cache-Control": "no-store"
      }
    });
  }
};
