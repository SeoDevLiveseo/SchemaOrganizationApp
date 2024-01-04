import React from 'react'
import { JsonLd, PropsSchema } from './typings/SchemaType'

function SchemaOrganization({
  name,
  alternateName,
  url,
  logo,
  redeSocial1,
  redeSocial2,
  redeSocial3,
  redeSocial4,
  redeSocial5,
  redeSocial6,
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
    sameAs: [redeSocial1, redeSocial2, redeSocial3, redeSocial4, redeSocial5, redeSocial6].filter(Boolean),
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
      id="my-script"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );

  return <>{SchemaOrganizationTest()}</>;
}

SchemaOrganization.schema = {
  title: "Schema Organization",
  description: "Descrição",
  type: "object",
  properties: {
    name: {
      title: "Name",
      description: "",
      type: "string"
    },
    alternateName: {
      title: "Alternate Name",
      description: "",
      type: "string"
    },
    url: {
      title: "URL",
      description: "",
      type: "string"
    },
    logo: {
      title: "logo",
      description: "",
      type: "string"
    },
    redeSocial1: {
      title: "Rede Social 1",
      description: "",
      type: "string"
    },
    redeSocial2: {
      title: "Rede Social 2",
      description: "",
      type: "string"
    },
    redeSocial3: {
      title: "Rede Social 3",
      description: "",
      type: "string"
    },
    redeSocial4: {
      title: "Rede Social 4",
      description: "",
      type: "string"
    },
    redeSocial5: {
      title: "Rede Social 5",
      description: "",
      type: "string"
    },
    redeSocial6: {
      title: "Rede Social 6",
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