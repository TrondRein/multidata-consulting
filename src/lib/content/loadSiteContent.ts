import { fallbackSiteContent } from './fallback';
import type { SiteContent } from './types';
import { sanityClient } from '../sanity/client';

const siteContentQuery = `*[_type == "siteContent"][0]{
  seo,
  header,
  hero{
    ...,
    "imageUrl": image.asset->url
  },
  about{
    ...,
    "imageUrl": image.asset->url
  },
  services,
  footer
}`;

function normalizeContent(content: Partial<SiteContent>): SiteContent {
  return {
    seo: {
      title: content.seo?.title || fallbackSiteContent.seo.title,
      description: content.seo?.description || fallbackSiteContent.seo.description,
    },
    header: {
      logoText: content.header?.logoText || fallbackSiteContent.header.logoText,
      logoSubtext: content.header?.logoSubtext || fallbackSiteContent.header.logoSubtext,
      links: content.header?.links?.length ? content.header.links : fallbackSiteContent.header.links,
    },
    hero: {
      title: content.hero?.title || fallbackSiteContent.hero.title,
      highlight: content.hero?.highlight || fallbackSiteContent.hero.highlight,
      description: content.hero?.description || fallbackSiteContent.hero.description,
      primaryCta: content.hero?.primaryCta || fallbackSiteContent.hero.primaryCta,
      secondaryCta: content.hero?.secondaryCta || fallbackSiteContent.hero.secondaryCta,
      imageUrl: content.hero?.imageUrl || fallbackSiteContent.hero.imageUrl,
      imageAlt: content.hero?.imageAlt || fallbackSiteContent.hero.imageAlt,
    },
    about: {
      title: content.about?.title || fallbackSiteContent.about.title,
      description: content.about?.description || fallbackSiteContent.about.description,
      bullets: content.about?.bullets?.length ? content.about.bullets : fallbackSiteContent.about.bullets,
      imageUrl: content.about?.imageUrl || fallbackSiteContent.about.imageUrl,
      imageAlt: content.about?.imageAlt || fallbackSiteContent.about.imageAlt,
    },
    services: {
      title: content.services?.title || fallbackSiteContent.services.title,
      description: content.services?.description || fallbackSiteContent.services.description,
      cards: content.services?.cards?.length ? content.services.cards : fallbackSiteContent.services.cards,
    },
    footer: {
      title: content.footer?.title || fallbackSiteContent.footer.title,
      description: content.footer?.description || fallbackSiteContent.footer.description,
      email: content.footer?.email || fallbackSiteContent.footer.email,
      location: content.footer?.location || fallbackSiteContent.footer.location,
      copyright: content.footer?.copyright || fallbackSiteContent.footer.copyright,
    },
  };
}

export async function loadSiteContent(): Promise<SiteContent> {
  if (!sanityClient) {
    return fallbackSiteContent;
  }

  try {
    const content = await sanityClient.fetch<Partial<SiteContent> | null>(siteContentQuery);

    if (!content) {
      return fallbackSiteContent;
    }

    return normalizeContent(content);
  } catch (error) {
    console.error('Kunne ikke hente innhold fra Sanity, bruker fallback-data.', error);
    return fallbackSiteContent;
  }
}
