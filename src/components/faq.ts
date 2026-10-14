// Helper comun pentru paginile cu întrebări frecvente.
// Aceeași listă de elemente produce atât textul vizibil (FaqList.astro), cât și JSON-LD FAQPage,
// deci cele două nu pot diverge.

export interface FaqLink {
  label: string;
  href: string; // relativ ("/despre/") sau absolut ("https://...")
}

export interface FaqItem {
  id: string;
  q: string;
  /** Răspunsul direct, 40-60 de cuvinte. */
  a: string;
  /** Linkuri către pagina de serviciu / articolul relevant, afișate după răspunsul direct. */
  links: FaqLink[];
}

const SITE = 'https://axait.ro';

export const absoluteUrl = (href: string): string =>
  href.startsWith('http') ? href : `${SITE}${href}`;

/** Propoziția cu linkuri, în variantă text simplu (identică cu cea vizibilă). */
export const linksSentenceText = (links: FaqLink[]): string =>
  links.length ? `Detalii: ${links.map((l) => l.label).join(' · ')}` : '';

/** Aceeași propoziție, cu ancore HTML și URL-uri absolute, pentru JSON-LD. */
export const linksSentenceHtml = (links: FaqLink[]): string =>
  links.length
    ? `Detalii: ${links
        .map((l) => `<a href="${absoluteUrl(l.href)}">${l.label}</a>`)
        .join(' · ')}`
    : '';

export const answerHtml = (item: FaqItem): string =>
  [item.a, linksSentenceHtml(item.links)].filter(Boolean).join(' ');

export const buildFaqSchema = (items: FaqItem[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: answerHtml(item),
    },
  })),
});
