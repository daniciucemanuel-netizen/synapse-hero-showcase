import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  noindex?: boolean;
  ogImage?: string;
  type?: string;
  jsonLd?: object;
}

const SEO = ({ title, description, canonical, noindex, ogImage, type = "website", jsonLd }: SEOProps) => {
  useEffect(() => {
    document.title = title;

    const setMeta = (selector: string, content: string, attr = "content") => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute(attr, content);
    };

    setMeta('meta[name="description"]', description);
    setMeta('meta[property="og:title"]', title);
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[property="og:type"]', type);
    setMeta('meta[name="twitter:title"]', title);
    setMeta('meta[name="twitter:description"]', description);

    if (ogImage) {
      setMeta('meta[property="og:image"]', ogImage);
      setMeta('meta[name="twitter:image"]', ogImage);
    }

    if (canonical) {
      setMeta('link[rel="canonical"]', canonical, "href");
      setMeta('meta[property="og:url"]', canonical);
    }

    // Handle noindex
    let robotsMeta = document.querySelector('meta[name="robots"]') as HTMLMetaElement;
    if (noindex) {
      if (!robotsMeta) {
        robotsMeta = document.createElement("meta");
        robotsMeta.name = "robots";
        document.head.appendChild(robotsMeta);
      }
      robotsMeta.content = "noindex, nofollow";
    } else if (robotsMeta) {
      robotsMeta.content = "index, follow";
    }

    // Handle JSON-LD
    const existingScript = document.querySelector('script[data-seo-jsonld]');
    if (existingScript) existingScript.remove();
    if (jsonLd) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-seo-jsonld", "true");
      script.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }

    return () => {
      const script = document.querySelector('script[data-seo-jsonld]');
      if (script) script.remove();
    };
  }, [title, description, canonical, noindex, ogImage, type, jsonLd]);

  return null;
};

export default SEO;
