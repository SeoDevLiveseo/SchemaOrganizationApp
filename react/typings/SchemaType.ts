type Address = {
    '@type': string;
    streetAddress?: string;
    addressLocality?: string;
    addressRegion?: string;
    addressCountry?: string;
    postalCode?: string;
};

type ContactPoint = {
    '@type': string;
    email?: string;
    telephone?: string;
};

type JsonLd = {
    '@context': string;
    '@type': string;
    url?: string;
    sameAs?: string[];
    logo?: string;
    name?: string;
    alternateName?: string;
    address?: Address;
    contactPoint?: ContactPoint;
};

type PropsSchema = {
    name: string;
    alternateName: string;
    url: string;
    logo: string;
    sameAs1: string;
    sameAs2: string;
    sameAs3: string;
    sameAs4: string;
    sameAs5: string;
    sameAs6: string;
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    addressCountry: string;
    postalCode: string;
    email: string;
    telephone: string;
};

export { Address, ContactPoint, JsonLd, PropsSchema };