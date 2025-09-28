import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: object;
}

const SEO: React.FC<SEOProps> = ({
  title = 'CONACC - Professional Control Accounting Services',
  description = 'CONACC provides professional control accounting services to help businesses maintain financial accuracy, compliance, and strategic control over their accounting processes.',
  keywords = 'control accounting, financial control, compliance, accounting services, South Africa, financial accuracy, process control',
  canonical,
  ogTitle,
  ogDescription,
  ogImage = 'https://conacc.co.za/og-image.jpg',
  ogType = 'website',
  structuredData
}) => {
  useEffect(() => {
    // Update title
    document.title = title;
    
    // Update meta description
    updateMetaTag('description', description);
    
    // Update keywords
    updateMetaTag('keywords', keywords);
    
    // Update canonical URL
    if (canonical) {
      updateLinkTag('canonical', canonical);
    }
    
    // Update Open Graph tags
    updateMetaTag('og:title', ogTitle || title, 'property');
    updateMetaTag('og:description', ogDescription || description, 'property');
    updateMetaTag('og:image', ogImage, 'property');
    updateMetaTag('og:type', ogType, 'property');
    updateMetaTag('og:url', canonical || window.location.href, 'property');
    updateMetaTag('og:site_name', 'CONACC', 'property');
    
    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', ogTitle || title);
    updateMetaTag('twitter:description', ogDescription || description);
    updateMetaTag('twitter:image', ogImage);
    
    // Structured data
    if (structuredData) {
      updateStructuredData(structuredData);
    }
    
  }, [title, description, keywords, canonical, ogTitle, ogDescription, ogImage, ogType, structuredData]);

  return null;
};

const updateMetaTag = (name: string, content: string, attribute = 'name') => {
  let element = document.querySelector(`meta[${attribute}="${name}"]`);
  
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }
  
  element.setAttribute('content', content);
};

const updateLinkTag = (rel: string, href: string) => {
  let element = document.querySelector(`link[rel="${rel}"]`);
  
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }
  
  element.setAttribute('href', href);
};

const updateStructuredData = (data: object) => {
  const id = 'structured-data';
  let element = document.querySelector(`script[id="${id}"]`);
  
  if (!element) {
    element = document.createElement('script');
    element.setAttribute('type', 'application/ld+json');
    element.setAttribute('id', id);
    document.head.appendChild(element);
  }
  
  element.textContent = JSON.stringify(data);
};

export default SEO;