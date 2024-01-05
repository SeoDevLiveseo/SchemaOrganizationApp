import React from 'react'
import { JsonLd, PropsSchema } from './typings/SchemaType'

function SchemaOrganization({
  name,
  alternateName,
  url,
  logo,
  sameAs1,
  sameAs2,
  sameAs3,
  sameAs4,
  sameAs5,
  sameAs6,
  streetAddress,
  addressLocality,
  addressRegion,
  addressCountry,
  postalCode,
  email,
  telephone,
}: PropsSchema) {
  const jsonLd: JsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    url,
    sameAs: [sameAs1, sameAs2, sameAs3, sameAs4, sameAs5, sameAs6].filter(Boolean),
    logo,
    name,
    alternateName,
  };

  if (streetAddress || addressLocality || addressRegion || addressCountry || postalCode) {
    jsonLd.address = {
      '@type': 'PostalAddress',
      streetAddress,
      addressLocality,
      addressRegion,
      addressCountry,
      postalCode,
    };
  }

  if (email || telephone) {
    jsonLd.contactPoint = {
      '@type': 'ContactPoint',
      email,
      telephone,
    };
  }

  const SchemaOrganizationTest = () => (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );

  return <>{SchemaOrganizationTest()}</>;
}

SchemaOrganization.schema = {
  title: "Schema Organization",
  description: "Inserção de dados para Rich Snippet de Organization",
  type: "object",
  properties: {
    name: {
      title: "name",
      description: "",
      type: "string"
    },
    alternateName: {
      title: "alternateName",
      description: "",
      type: "string"
    },
    url: {
      title: "url",
      description: "",
      type: "string"
    },
    logo: {
      title: "logo",
      description: "",
      type: "string"
    },
    sameAs1: {
      title: "sameAs1",
      description: "",
      type: "string"
    },
    sameAs2: {
      title: "sameAs2",
      description: "",
      type: "string"
    },
    sameAs3: {
      title: "sameAs3",
      description: "",
      type: "string"
    },
    sameAs4: {
      title: "sameAs4",
      description: "",
      type: "string"
    },
    sameAs5: {
      title: "sameAs5",
      description: "",
      type: "string"
    },
    sameAs6: {
      title: "sameAs6",
      description: "",
      type: "string"
    },
    streetAddress: {
      title: "streetAddress",
      description: "",
      type: "string"
    },
    addressLocality: {
      title: "addressLocality",
      description: "",
      type: "string"
    },
    addressRegion: {
      title: "addressRegion",
      description: "",
      type: "string"
    },
    addressCountry: {
      title: "addressCountry",
      description: "",
      type: "string"
    },
    postalCode: {
      title: "postalCode",
      description: "",
      type: "string"
    },
    email: {
      title: "email",
      description: "",
      type: "string"
    },
    telephone: {
      title: "telephone",
      description: "",
      type: "string"
    },
  }
}

export default SchemaOrganization