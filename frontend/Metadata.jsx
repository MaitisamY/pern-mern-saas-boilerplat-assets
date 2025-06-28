import { Helmet } from "react-helmet-async";

const Metadata = ({
  title = "@SaaS-BoilerPlate",
  description = "A tool that offers a starter kit more like generator (MERN/PERN) with out-of-the-box SaaS essentials.",
  canonicalUrl,
  url,
  image,
  siteName,
  locale = "en_US",
  twitterCard = "summary_large_image",
  author,
  keywords,
  pageName,
  type = "WebPage",
}) => {
  const jsonLD = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: url,
    name: pageName,
    alternateName: siteName,
    description: description,
    // "keywords": keywords.split(", "), <-- Either Use This (Fully Dynamic)
    // "keywords": [                     <--         Or This (When You Aren't in need of keywords)
    //     "SaaS",
    //     ......
    // ],

    potentialAction: {
      "@type": "SearchAction",
      target: `${url}/search/{search_term_string}`,
      "query-input": "required name=search_term_string",
    },
    publisher: {
      "@type": "Organization",
      name: siteName,
      url: url,
      logo: {
        "@type": "ImageObject",
        url: image,
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+1-234-567-8900",
        contactType: "customer service",
        areaServed: "US",
        availableLanguage: "English",
      },
    },

    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://SaaS-BoilerPlate.com/",
        },
        { "@type": "ListItem", position: 2, name: pageName, item: url },
        { "@type": "ListItem", position: 3, name: pageName, item: url },
        { "@type": "ListItem", position: 4, name: pageName, item: url },
        { "@type": "ListItem", position: 5, name: pageName, item: url },
      ],
    },

    mainEntityOfPage: {
      "@type": type,
      "@id": "https://SaaS-BoilerPlate.com/",
    },

    sameAs: [
      "https://www.facebook.com/SaaS-BoilerPlate",
      "https://www.instagram.com/SaaS-BoilerPlate/",
      "https://www.youtube.com/@SaaS-BoilerPlate123",
    ],
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      <meta name="author" content={author} />
      <meta name="keywords" content={keywords} />
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content={image} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content="SaaS BoilerPlate Logo" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={locale} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter Meta Tags */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content="@SaaS-BoilerPlate" />
      <meta name="twitter:creator" content="@SaaS-BoilerPlate" />

      {/* Links */}
      <link rel="canonical" href={canonicalUrl} />
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

      {/* JSON-LD for Structured Data */}
      <script type="application/ld+json">{JSON.stringify(jsonLD)}</script>

      {/* Call 3rd Party Scripts Here */}
    </Helmet>
  );
};

export default Metadata;