/* empty css                                 */
import { c as createComponent, a as addAttribute, r as renderHead, b as renderSlot, e as renderTemplate, f as createAstro, m as maybeRenderHead, g as renderComponent } from '../chunks/astro/server_NfpFIUji.mjs';
import 'kleur/colors';
import 'clsx';
import { createClient } from '@sanity/client';
export { renderers } from '../renderers.mjs';

const $$Astro$5 = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title, description = "Avansert datakonsulentvirksomhet levert av Multidata Consulting." } = Astro2.props;
  return renderTemplate`<html lang="no" class="scroll-smooth bg-neutral-light text-neutral-dark"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="description"${addAttribute(description, "content")}><title>${title}</title>${renderHead()}</head> <body class="min-h-screen flex flex-col font-sans antialiased"> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/home/runner/work/multidata-consulting/multidata-consulting/src/layouts/BaseLayout.astro", void 0);

const $$Astro$4 = createAstro();
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Header;
  const { content } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header class="bg-brand-blue border-b border-white/10 sticky top-0 z-50 backdrop-blur-md bg-opacity-90"> <div class="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between"> <a href="#" class="flex items-center gap-2 font-black text-xl text-white tracking-tight"> ${content.logoText} <span class="text-xs font-mono text-slate-400 font-normal ml-1">${content.logoSubtext}</span> </a> <nav class="hidden md:flex items-center gap-3 text-sm font-medium text-slate-200"> ${content.links.map((link) => renderTemplate`<a${addAttribute(link.href, "href")}${addAttribute([
    "transition-colors rounded-lg px-4 py-2",
    link.isPrimary ? "bg-brand-orange hover:bg-brand-accent text-brand-blue font-bold" : "hover:text-brand-orange"
  ], "class:list")}> ${link.label} </a>`)} </nav> </div> </header>`;
}, "/home/runner/work/multidata-consulting/multidata-consulting/src/components/Header.astro", void 0);

const $$Astro$3 = createAstro();
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Hero;
  const { content } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="relative bg-brand-blue text-white py-24 px-6 md:px-12 overflow-hidden border-b border-white/5"> <div class="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:32px_32px]"></div> <div class="max-w-6xl mx-auto relative z-10 grid gap-12 items-center md:grid-cols-2"> <div> <h1 class="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight"> ${content.title} <span class="text-brand-orange">${content.highlight}</span> </h1> <p class="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed"> ${content.description} </p> <div class="flex flex-col sm:flex-row gap-4"> <a${addAttribute(content.primaryCta.href, "href")} class="bg-brand-orange hover:bg-brand-accent text-brand-blue font-bold px-8 py-4 rounded-xl transition-colors shadow-lg shadow-brand-orange/10"> ${content.primaryCta.label} </a> <a${addAttribute(content.secondaryCta.href, "href")} class="border border-white/20 hover:bg-white/5 font-medium px-8 py-4 rounded-xl transition-colors backdrop-blur-sm"> ${content.secondaryCta.label} </a> </div> </div> ${content.imageUrl && renderTemplate`<img${addAttribute(content.imageUrl, "src")}${addAttribute(content.imageAlt || content.title, "alt")} class="w-full h-[320px] md:h-[420px] rounded-2xl object-cover border border-white/10 shadow-2xl shadow-brand-blue/40" loading="eager">`} </div> </section>`;
}, "/home/runner/work/multidata-consulting/multidata-consulting/src/components/Hero.astro", void 0);

const $$Astro$2 = createAstro();
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$About;
  const { content } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section id="om-oss" class="bg-white py-24 px-6 md:px-12 border-y border-slate-200"> <div class="max-w-6xl mx-auto grid gap-10 items-center md:grid-cols-2"> <div> <h2 class="text-3xl md:text-4xl font-black text-brand-blue tracking-tight mb-4">${content.title}</h2> <p class="text-slate-600 text-lg leading-relaxed mb-6">${content.description}</p> <ul class="space-y-3"> ${content.bullets.map((item) => renderTemplate`<li class="flex gap-3 text-slate-700"> <span class="mt-2 h-2 w-2 rounded-full bg-brand-accent shrink-0"></span> <span>${item}</span> </li>`)} </ul> </div> ${content.imageUrl && renderTemplate`<img${addAttribute(content.imageUrl, "src")}${addAttribute(content.imageAlt || content.title, "alt")} class="w-full h-[320px] md:h-[420px] rounded-2xl object-cover border border-slate-200" loading="lazy">`} </div> </section>`;
}, "/home/runner/work/multidata-consulting/multidata-consulting/src/components/About.astro", void 0);

const $$Astro$1 = createAstro();
const $$Services = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Services;
  const { content } = Astro2.props;
  const toneClasses = {
    accent: "border-slate-200 bg-white hover:border-brand-accent/50 hover:shadow-[0_0_30px_rgba(238,150,75,0.08)]",
    orange: "border-slate-200 bg-white hover:border-brand-orange/50 hover:shadow-[0_0_30px_rgba(244,211,94,0.08)]",
    blue: "border-slate-200 bg-white hover:border-brand-blue/30 hover:shadow-[0_0_30px_rgba(13,59,102,0.05)]",
    dark: "border-slate-200 bg-brand-blue text-white hover:shadow-[0_10px_30px_rgba(13,59,102,0.12)]"
  };
  const labelClasses = {
    accent: "text-brand-accent bg-brand-orange/10",
    orange: "text-brand-blue bg-brand-blue/5",
    blue: "text-slate-500 bg-slate-100",
    dark: "text-brand-orange bg-white/10"
  };
  return renderTemplate`${maybeRenderHead()}<section id="tjenester" class="bg-neutral-light py-24 px-6 md:px-12"> <div class="max-w-6xl mx-auto"> <div class="mb-16"> <h2 class="text-3xl md:text-4xl font-black text-brand-blue tracking-tight mb-4">${content.title}</h2> <p class="text-slate-600 max-w-xl text-lg">${content.description}</p> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-6"> ${content.cards.map((card) => renderTemplate`<div${addAttribute([
    "group relative rounded-2xl border p-8 transition-all duration-300 flex flex-col justify-between",
    card.featured && "md:col-span-2 overflow-hidden",
    toneClasses[card.tone]
  ], "class:list")}> <div> <span${addAttribute(["text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full", labelClasses[card.tone]], "class:list")}> ${card.label} </span> <h3${addAttribute(["mt-4 mb-3 font-bold", card.featured ? "text-2xl" : "text-xl", card.tone === "dark" ? "text-white" : "text-brand-blue"], "class:list")}> ${card.title} </h3> <p${addAttribute(["leading-relaxed", card.featured ? "max-w-xl" : "text-sm", card.tone === "dark" ? "text-slate-300" : "text-slate-600"], "class:list")}> ${card.description} </p> </div> <div${addAttribute(["mt-8 h-1 rounded-full transition-all group-hover:w-24 w-12", card.tone === "dark" ? "bg-brand-orange" : "bg-brand-blue"], "class:list")}></div> </div>`)} </div> </div> </section>`;
}, "/home/runner/work/multidata-consulting/multidata-consulting/src/components/Services.astro", void 0);

const $$Astro = createAstro();
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Footer;
  const { content } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<footer id="kontakt" class="bg-neutral-dark text-slate-400 py-16 px-6 md:px-12 mt-auto border-t border-slate-800"> <div class="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12"> <div> <h3 class="text-white font-bold text-xl mb-4">${content.title}</h3> <p class="max-w-md text-sm leading-relaxed text-slate-400">${content.description}</p> <a${addAttribute(`mailto:${content.email}`, "href")} class="inline-block text-brand-orange font-bold text-lg mt-4 hover:underline"> ${content.email} </a> </div> <div class="text-xs font-mono text-slate-500"> <p>${content.location}</p> <p class="mt-4">${content.copyright}</p> </div> </div> </footer>`;
}, "/home/runner/work/multidata-consulting/multidata-consulting/src/components/Footer.astro", void 0);

const fallbackSiteContent = {
  seo: {
    title: "Multidata Consulting | Robust IT-Infrastruktur og Skyarkitektur",
    description: "Avansert datakonsulentvirksomhet levert av Multidata Consulting."
  },
  header: {
    logoText: "MULTIDATA",
    logoSubtext: "CONSULTING",
    links: [
      { label: "Tjenester", href: "#tjenester" },
      { label: "Om oss", href: "#om-oss" },
      { label: "Kontakt", href: "#kontakt", isPrimary: true }
    ]
  },
  hero: {
    title: "Avansert datakonsulentvirksomhet.",
    highlight: "Levert.",
    description: "Vi bygger og optimaliserer fremtidens IT-infrastruktur. Fra robuste dataløsninger til skyarkitektur – vi omsetter kompleks data til reell forretningsverdi.",
    primaryCta: { label: "Kom i gang", href: "#kontakt" },
    secondaryCta: { label: "Våre tjenester", href: "#tjenester" },
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Abstrakt illustrasjon av skyinfrastruktur og nettverk"
  },
  about: {
    title: "Teknologi som tåler virkeligheten",
    description: "Multidata Consulting leverer rådgivning og gjennomføring innen infrastruktur, dataflyt og operativ modernisering. Vi kombinerer teknisk dybde med tydelig retning for å skape målbar verdi.",
    bullets: [
      "Erfaring med virksomhetskritiske miljøer i både privat og offentlig sektor",
      "Tverrfaglig kompetanse innen sky, data, sikkerhet og automatisering",
      "Pragmatisk leveransemodell som gir raske forbedringer uten å kompromisse kvalitet"
    ],
    imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Konsulenter i møte rundt en skjerm"
  },
  services: {
    title: "Våre tjenester",
    description: "Tung teknisk kompetanse pakket inn i en strukturert og fremtidsrettet leveransemodell.",
    cards: [
      {
        label: "Infrastruktur",
        title: "Skyarkitektur & Moderne Endpoint Management",
        description: "Vi designer, migrerer og optimaliserer skytjenester og virksomhetskritisk infrastruktur med fokus på automasjon, sikkerhet og skalerbarhet.",
        tone: "accent",
        featured: true
      },
      {
        label: "Data",
        title: "Dataintegrasjon & Analyse",
        description: "Vi samler og strukturerer data fra spredte kilder, slik at virksomheten kan ta beslutninger basert på sanntidsinnsikt.",
        tone: "orange"
      },
      {
        label: "Strategi",
        title: "IT-Rådgivning & Arkitektur",
        description: "Strategisk rådgivning som kobler forretningsmål med teknologiske valg, roadmap og konkret gjennomføring.",
        tone: "blue"
      },
      {
        label: "Kode & Effektivitet",
        title: "Automatisering & DevOps Pipelines",
        description: "Vi fjerner manuelle feilkilder med moderne CI/CD, skripting og infrastruktur som kode for konsistente miljøer.",
        tone: "dark",
        featured: true
      }
    ]
  },
  footer: {
    title: "Klar for å rigge infrastrukturen for fremtiden?",
    description: "Send oss en e-post eller avtal et uforpliktende møte for å diskutere dine tekniske utfordringer.",
    email: "kontakt@multidataconsulting.no",
    location: "Oslo, Norge",
    copyright: "© 2026 Multidata Consulting AS. Driftet på Vercel."
  }
};

const projectId = undefined                                 ;
const dataset = undefined                              ;
const apiVersion = "2025-01-01";
const token = undefined                                 ;
const isSanityConfigured = Boolean(projectId);
const sanityClient = isSanityConfigured ? createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: !token
}) : null;

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
function normalizeContent(content) {
  return {
    seo: {
      title: content.seo?.title || fallbackSiteContent.seo.title,
      description: content.seo?.description || fallbackSiteContent.seo.description
    },
    header: {
      logoText: content.header?.logoText || fallbackSiteContent.header.logoText,
      logoSubtext: content.header?.logoSubtext || fallbackSiteContent.header.logoSubtext,
      links: content.header?.links?.length ? content.header.links : fallbackSiteContent.header.links
    },
    hero: {
      title: content.hero?.title || fallbackSiteContent.hero.title,
      highlight: content.hero?.highlight || fallbackSiteContent.hero.highlight,
      description: content.hero?.description || fallbackSiteContent.hero.description,
      primaryCta: content.hero?.primaryCta || fallbackSiteContent.hero.primaryCta,
      secondaryCta: content.hero?.secondaryCta || fallbackSiteContent.hero.secondaryCta,
      imageUrl: content.hero?.imageUrl || fallbackSiteContent.hero.imageUrl,
      imageAlt: content.hero?.imageAlt || fallbackSiteContent.hero.imageAlt
    },
    about: {
      title: content.about?.title || fallbackSiteContent.about.title,
      description: content.about?.description || fallbackSiteContent.about.description,
      bullets: content.about?.bullets?.length ? content.about.bullets : fallbackSiteContent.about.bullets,
      imageUrl: content.about?.imageUrl || fallbackSiteContent.about.imageUrl,
      imageAlt: content.about?.imageAlt || fallbackSiteContent.about.imageAlt
    },
    services: {
      title: content.services?.title || fallbackSiteContent.services.title,
      description: content.services?.description || fallbackSiteContent.services.description,
      cards: content.services?.cards?.length ? content.services.cards : fallbackSiteContent.services.cards
    },
    footer: {
      title: content.footer?.title || fallbackSiteContent.footer.title,
      description: content.footer?.description || fallbackSiteContent.footer.description,
      email: content.footer?.email || fallbackSiteContent.footer.email,
      location: content.footer?.location || fallbackSiteContent.footer.location,
      copyright: content.footer?.copyright || fallbackSiteContent.footer.copyright
    }
  };
}
async function loadSiteContent() {
  if (!sanityClient) {
    return fallbackSiteContent;
  }
  try {
    const content = await sanityClient.fetch(siteContentQuery);
    if (!content) {
      return fallbackSiteContent;
    }
    return normalizeContent(content);
  } catch (error) {
    console.error("Kunne ikke hente innhold fra Sanity, bruker fallback-data.", error);
    return fallbackSiteContent;
  }
}

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const content = await loadSiteContent();
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": content.seo.title, "description": content.seo.description }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "content": content.header })} ${maybeRenderHead()}<main> ${renderComponent($$result2, "Hero", $$Hero, { "content": content.hero })} ${renderComponent($$result2, "About", $$About, { "content": content.about })} ${renderComponent($$result2, "Services", $$Services, { "content": content.services })} </main> ${renderComponent($$result2, "Footer", $$Footer, { "content": content.footer })} ` })}`;
}, "/home/runner/work/multidata-consulting/multidata-consulting/src/pages/index.astro", void 0);

const $$file = "/home/runner/work/multidata-consulting/multidata-consulting/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
