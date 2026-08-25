import { Helmet } from "react-helmet-async";

const SITE_URL = "https://olawalecodes.netlify.app";
const SITE_NAME = "Olawalecodes";
const FULL_NAME = "Iwaloye Olawale Samuel";
const TITLE =
  "Olawalecodes | Iwaloye Olawale Samuel — Frontend & FullStack Developer";
const DESCRIPTION =
  "Portfolio of Iwaloye Olawale Samuel (Olawalecodes), a Frontend & FullStack Developer based in Lagos State, Nigeria, building elegant, accessible web applications with React, TypeScript and Tailwind CSS.";
const IMAGE_URL = `${SITE_URL}/assets/olawale.png`;

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: FULL_NAME,
  alternateName: SITE_NAME,
  url: SITE_URL,
  image: IMAGE_URL,
  jobTitle: "Frontend & FullStack Developer",
  homeLocation: {
    "@type": "Place",
    name: "Lagos State, Nigeria",
  },
  sameAs: [
    "https://github.com/iwa-temmy",
    "https://x.com/OlawaleCodes",
    "https://www.linkedin.com/in/olawale-iwaloye-26b80314b/",
    "https://www.facebook.com/iwaloye.olawale",
  ],
};

const Seo = () => {
  return (
    <Helmet>
      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />
      <meta
        name="keywords"
        content="Olawale Iwaloye, Olawalecodes, Iwaloye Olawale Samuel, Frontend Engineer, FullStack Developer, React Developer, Lagos Nigeria Developer"
      />
      <meta name="author" content={FULL_NAME} />
      <link rel="canonical" href={SITE_URL} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={TITLE} />
      <meta property="og:description" content={DESCRIPTION} />
      <meta property="og:url" content={SITE_URL} />
      <meta property="og:image" content={IMAGE_URL} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@OlawaleCodes" />
      <meta name="twitter:creator" content="@OlawaleCodes" />
      <meta name="twitter:title" content={TITLE} />
      <meta name="twitter:description" content={DESCRIPTION} />
      <meta name="twitter:image" content={IMAGE_URL} />

      <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
    </Helmet>
  );
};

export default Seo;
