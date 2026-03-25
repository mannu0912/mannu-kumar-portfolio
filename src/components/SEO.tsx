import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  type?: string;
  schema?: any;
}

export const SEO = ({ title, description, type = "website", schema }: SEOProps) => {
  useEffect(() => {
    document.title = `${title} | Mannu Dhiman SEO`;
    
    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Update OG Tags
    const ogTags = [
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:type', content: type },
      { property: 'og:url', content: window.location.href },
    ];

    ogTags.forEach(tag => {
      let element = document.querySelector(`meta[property="${tag.property}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('property', tag.property);
        document.head.appendChild(element);
      }
      element.setAttribute('content', tag.content);
    });

    // Handle Schema
    if (schema) {
      let script = document.querySelector('#json-ld-schema');
      if (!script) {
        script = document.createElement('script');
        script.id = 'json-ld-schema';
        script.setAttribute('type', 'application/ld+json');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(schema);
    }

    return () => {
      // Cleanup schema on unmount if needed, but usually fine to leave or overwrite
    };
  }, [title, description, type, schema]);

  return null;
};
