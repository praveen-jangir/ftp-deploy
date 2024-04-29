import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

export default function Meta({ rule }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    document.getElementById('navbarSupportedContent').classList.remove('show');
    const fetchData = async () => {
      try {
        const response = await fetch(`https://www.assignmentexperthelp.co.uk/admin/page-info?rule=${rule}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        setData(jsonData.info);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [rule]); // Include rule as a dependency to fetch data when it changes

  if (loading) {
    return <Helmet><title>Loading...</title></Helmet>;
  }

  if (error) {
    return <Helmet><title>Error</title></Helmet>;
  }

  if (!data) {
    return <Helmet><title>No Data</title></Helmet>;
  }
  const jsonLdSchema = `
    {
      "@context": "http://schema.org",
      "@type": "WebPage",
      "name": "${data.title}", /* Use the title of the page as the name */
      "description": "${data.description}", /* Use the description of the page */
      "url": "${window.location.href.endsWith('/') ? window.location.href.slice(0, -1) : window.location.href}", /* Use the URL of the page */
      "publisher": {
        "@type": "Organization",
        "name": "Assignment Expert Help UK", /* Your organization's name */
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.assignmentexperthelp.co.uk/assets/logo-5W0MrzTb.webp",
          "width": 425,
          "height": 121
        }
      },
      "author": {
        "@type": "Person",
        "name": "John Doe" /* The author's name */
      }
    }
  `;
  return (
    <Helmet>
      {data.title && <title>{data.title}</title>}
      {data.description && <meta name="description" content={data.description} />}
      {data.keyword && <meta name="keywords" content={data.keyword} />}
      <link rel="canonical" href={window.location.href[window.location.href.length-1] == '/' ? window.location.href.slice(0,window.location.href.length-1) : window.location.href}></link>
      <link rel="alternate" href={window.location.href[window.location.href.length-1]=='/' ? window.location.href.slice(0,window.location.href.length-1) : window.location.href} hreflang="en-gb"></link>
      {data.other_meta && (
                document.head.insertAdjacentHTML('beforeend', data.other_meta)
      )}
      <meta property="og:title" content={data.title} />
      <meta property="og:description" content={data.description} />
      <meta property="og:image" content="https://www.assignmentexperthelp.co.uk/assets/logo-5W0MrzTb.webp" />
      <meta property="og:url" content={window.location.href[window.location.href.length-1] == '/' ? window.location.href.slice(0,window.location.href.length-1) : window.location.href} />
      <meta property="og:type" content="website" />
      {/* Additional OG tags */}
      <meta property="og:site_name" content="Assignment Expert Help UK" />
      <meta property="og:locale" content="en_UK" />
      <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org/",
              "@type": "EducationalOrganization",
              "name": "Assignment Expert Help",
              "logo": "https://www.assignmentexperthelp.co.uk/assets/logo-5W0MrzTb.webp",
              "url": "https://www.assignmentexperthelp.co.uk",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "United Kingdom"
              },
              "sameAs": ["https://www.facebook.com/assignmentexperthelp", "https://www.instagram.com/assignmentexperthelps", "https://www.linkedin.com/company/assignmentexperthelp", "https://twitter.com/asexperthelp"]
            }
          `}
        </script>
    </Helmet>
  );
}
