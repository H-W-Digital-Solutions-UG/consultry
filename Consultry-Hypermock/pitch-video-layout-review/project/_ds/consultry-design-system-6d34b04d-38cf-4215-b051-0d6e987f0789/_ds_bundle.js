/* @ds-bundle: {"format":3,"namespace":"ConsultryDesignSystem_6d34b0","components":[],"sourceHashes":{"ui_kits/marketing/CTAFooter.jsx":"683d4db695e0","ui_kits/marketing/EditorialScroller.jsx":"b1d065fa4138","ui_kits/marketing/Hero.jsx":"e0f2c5dcb802","ui_kits/marketing/InternalLinkGrid.jsx":"b0b4c0b78021","ui_kits/marketing/MetricsBand.jsx":"90d06972688e","ui_kits/marketing/Nav.jsx":"d5ccddb214d8"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ConsultryDesignSystem_6d34b0 = window.ConsultryDesignSystem_6d34b0 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/marketing/CTAFooter.jsx
try { (() => {
// CTABand.jsx — full-bleed waitlist closer + Footer.jsx — gradient hairline + columns

const CTABand = () => {
  const [email, setEmail] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);
  const onSubmit = e => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "cta-band",
    id: "warteliste"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cta-band__grid-overlay",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "cta-band__aurora-top",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "cta-band__aurora-bottom",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "content-shell cta-band__inner"
  }, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow"
  }, "WARTELISTE"), /*#__PURE__*/React.createElement("h2", {
    className: "cta-band__title"
  }, "Als Erste dabei, wenn Consultry live geht."), /*#__PURE__*/React.createElement("p", {
    className: "cta-band__body"
  }, "E-Mail eintragen. Zum Launch h\xF6ren Sie zuerst. Pilot-Interesse im n\xE4chsten Schritt ankreuzen, wir melden uns binnen 48 Stunden."), !submitted ? /*#__PURE__*/React.createElement("form", {
    className: "cta-band__form",
    onSubmit: onSubmit
  }, /*#__PURE__*/React.createElement("div", {
    className: "newsletter"
  }, /*#__PURE__*/React.createElement("input", {
    type: "email",
    required: true,
    placeholder: "Gesch\xE4ftliche E-Mail-Adresse",
    value: email,
    onChange: e => setEmail(e.target.value)
  }), /*#__PURE__*/React.createElement("button", {
    className: "btn btn--primary btn--md newsletter__submit",
    type: "submit"
  }, "Auf die Warteliste")), /*#__PURE__*/React.createElement("p", {
    className: "cta-band__trust"
  }, "Double-Opt-in \xB7 F\xFCr DACH-Beratungen \xB7 Pilotpl\xE4tze werden kuratiert")) : /*#__PURE__*/React.createElement("div", {
    className: "cta-band__success"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot",
    style: {
      background: "var(--consultry-success)"
    }
  }), /*#__PURE__*/React.createElement("span", null, "Danke. Bitte best\xE4tigen Sie den Link in Ihrer E-Mail."))));
};
const Footer = () => /*#__PURE__*/React.createElement("footer", {
  className: "footer"
}, /*#__PURE__*/React.createElement("div", {
  className: "footer__hairline-wrap",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("div", {
  className: "footer__hairline-base"
}), /*#__PURE__*/React.createElement("div", {
  className: "footer__hairline-gradient"
}), /*#__PURE__*/React.createElement("div", {
  className: "footer__hairline-blur"
})), /*#__PURE__*/React.createElement("div", {
  className: "content-shell footer__inner"
}, /*#__PURE__*/React.createElement("div", {
  className: "footer__grid"
}, /*#__PURE__*/React.createElement("div", {
  className: "footer__brand"
}, /*#__PURE__*/React.createElement("img", {
  className: "footer__logo",
  src: "../../assets/logo/consultry-v3-dark-transparent.svg",
  alt: "Consultry \u2014 The Smart Consultancy Engine"
}), /*#__PURE__*/React.createElement("p", {
  className: "footer__compliance"
}, /*#__PURE__*/React.createElement("span", {
  className: "dot",
  style: {
    background: "var(--consultry-success)"
  }
}), "DSGVO \xB7 EU-HOSTING")), /*#__PURE__*/React.createElement("div", {
  className: "footer__cols"
}, [{
  title: "PLATTFORM",
  links: ["Produktübersicht", "Bestandskunden-Wachstum", "Staffing und Forecasting", "Wissen, das wieder auftaucht", "Delivery und Marge"]
}, {
  title: "UNTERNEHMEN",
  links: ["Über uns", "Kontakt"]
}, {
  title: "RECHTLICHES",
  links: ["Impressum", "Datenschutz", "AGB", "Cookies"]
}].map(col => /*#__PURE__*/React.createElement("div", {
  key: col.title,
  className: "footer__col"
}, /*#__PURE__*/React.createElement("p", {
  className: "footer__col-title"
}, col.title), /*#__PURE__*/React.createElement("ul", null, col.links.map(l => /*#__PURE__*/React.createElement("li", {
  key: l
}, /*#__PURE__*/React.createElement("a", {
  href: "#",
  onClick: e => e.preventDefault()
}, l)))))))), /*#__PURE__*/React.createElement("div", {
  className: "footer__bottom"
}, /*#__PURE__*/React.createElement("span", {
  className: "footer__copy"
}, "\xA9 2026 H&W Digital Solutions UG"), /*#__PURE__*/React.createElement("div", {
  className: "footer__socials"
}, /*#__PURE__*/React.createElement("a", {
  className: "footer__social footer__social--li",
  href: "#",
  onClick: e => e.preventDefault(),
  "aria-label": "LinkedIn"
}, "in"), /*#__PURE__*/React.createElement("a", {
  className: "footer__social footer__social--xing",
  href: "#",
  onClick: e => e.preventDefault(),
  "aria-label": "XING"
}, "XING")))));
window.CTABand = CTABand;
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/CTAFooter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/EditorialScroller.jsx
try { (() => {
// EditorialScroller.jsx — Four-step (Signal / Team / Angebot / Wissen) editorial section
// with sticky-left rail (label + dot + gradient progress) and right-side step visual.

const STEPS = [{
  id: "account-growth",
  label: "[01]",
  stepperLabel: "Signal",
  accent: "#f0a85e",
  glow: "rgba(240,168,94,0.28)",
  eyebrow: "BESTANDSKUNDEN UND MARKTSIGNALE",
  title: "Kundenportfolio ausbauen",
  body: "Consultry analysiert stetig den Markt und erkennt Bewegungen in Ihrem Kundenportfolio: Veränderungen im Management, neue Digitalisierungsvorhaben, neue Ausschreibungen.",
  highlights: ["Eine Ansicht statt vieler Tools", "Keine stundenlange Recherche mehr", "Priorisiert nach Ihren Stärken"],
  image: "../../assets/step-signal.png",
  panelLabel: "Signal Layer",
  ctaLabel: "Mehr zu Bestandskunden-Wachstum"
}, {
  id: "staffing-forecasting",
  label: "[02]",
  stepperLabel: "Team",
  accent: "#e8655a",
  glow: "rgba(232,101,90,0.26)",
  eyebrow: "BERATER UND KAPAZITÄT",
  title: "Teams besser besetzen",
  body: "Drei Team-Vorschläge in Minuten, nicht in Tagen. Mit Marge, Auslastung und Erfahrung. Kompetenzlücken werden früh sichtbar, nicht erst kurz vor Projektstart.",
  highlights: ["Drei Vorschläge in Minuten", "Mit Marge, Auslastung und Erfahrung", "Kompetenzlücken früh sichtbar"],
  image: "../../assets/step-matching.png",
  panelLabel: "Staffing Layer",
  ctaLabel: "Mehr zu Staffing und Forecasting"
}, {
  id: "proposal-workflow",
  label: "[03]",
  stepperLabel: "Angebot",
  accent: "#c084e5",
  glow: "rgba(192,132,229,0.24)",
  eyebrow: "ANGEBOT UND VERTRAG",
  title: "Angebote schneller erstellen",
  body: "Engagement-Brief, CVs, Referenzen und Pricing entstehen aus demselben Kontext wie die Opportunity. Kein Copy-Paste zwischen PowerPoint, Word und Inbox.",
  highlights: ["Engagement Briefs mit Kontext", "Teamvorschläge ohne Copy-Paste", "Proposal-Drafts aus einem Flow"],
  image: "../../assets/step-delivery.png",
  panelLabel: "Proposal Layer",
  ctaLabel: "Mehr zum Angebots-Workflow"
}, {
  id: "knowledge-reuse",
  label: "[04]",
  stepperLabel: "Wissen",
  accent: "#7ad3ea",
  glow: "rgba(122,211,234,0.24)",
  eyebrow: "WISSEN UND DELIVERY",
  title: "Wissen wieder nutzen",
  body: "Delivery Health, Scope-Risiken und Deckungsbeiträge laufen in derselben Ansicht. Methoden und Referenzen fließen nach Projektende zurück.",
  highlights: ["Referenzen wiederverwendbar machen", "Lessons Learned im Deal sichtbar", "Delivery-Wissen operativ nutzbar halten"],
  image: "../../assets/step-knowledge.png",
  panelLabel: "Knowledge Layer",
  ctaLabel: "Mehr zu Wissen und Delivery"
}];
const StepVisual = ({
  step
}) => /*#__PURE__*/React.createElement("div", {
  className: "step-visual"
}, /*#__PURE__*/React.createElement("div", {
  className: "step-visual__dot-grid",
  "aria-hidden": "true"
}), /*#__PURE__*/React.createElement("div", {
  className: "step-visual__glow step-visual__glow--tl",
  style: {
    background: step.glow
  },
  "aria-hidden": "true"
}), /*#__PURE__*/React.createElement("div", {
  className: "step-visual__glow step-visual__glow--br",
  style: {
    background: step.glow
  },
  "aria-hidden": "true"
}), /*#__PURE__*/React.createElement("div", {
  className: "step-visual__inner-frame",
  "aria-hidden": "true"
}), /*#__PURE__*/React.createElement("aside", {
  className: "step-visual__panel step-visual__panel--tr"
}, /*#__PURE__*/React.createElement("p", {
  className: "mono-label"
}, step.panelLabel), /*#__PURE__*/React.createElement("p", {
  className: "step-visual__panel-title"
}, step.eyebrow), /*#__PURE__*/React.createElement("p", {
  className: "step-visual__panel-body"
}, step.body)), /*#__PURE__*/React.createElement("aside", {
  className: "step-visual__panel step-visual__panel--bl"
}, /*#__PURE__*/React.createElement("p", {
  className: "mono-label"
}, "/", step.label.replace(/\D/g, "")), /*#__PURE__*/React.createElement("ul", null, step.highlights.map(h => /*#__PURE__*/React.createElement("li", {
  key: h
}, /*#__PURE__*/React.createElement("span", {
  className: "dot",
  style: {
    backgroundColor: step.accent
  }
}), h)))), /*#__PURE__*/React.createElement("div", {
  className: "step-visual__image"
}, /*#__PURE__*/React.createElement("img", {
  src: step.image,
  alt: ""
})));
const EditorialScroller = () => {
  const [activeIdx, setActiveIdx] = React.useState(0);
  const stepRefs = React.useRef([]);
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      // Find the entry closest to the top of the viewport that's intersecting
      let best = null;
      for (const entry of entries) {
        if (entry.isIntersecting) {
          if (!best || entry.boundingClientRect.top < best.boundingClientRect.top) {
            best = entry;
          }
        }
      }
      if (best) {
        const idx = Number(best.target.dataset.idx);
        setActiveIdx(idx);
      }
    }, {
      rootMargin: "-18% 0px -38% 0px",
      threshold: 0
    });
    stepRefs.current.forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);
  const activeStep = STEPS[activeIdx];
  return /*#__PURE__*/React.createElement("section", {
    className: "scroller",
    id: "scroller"
  }, /*#__PURE__*/React.createElement("div", {
    className: "scroller__glow-top",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "scroller__wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "scroller__shell"
  }, /*#__PURE__*/React.createElement("div", {
    className: "scroller__grid-overlay",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "scroller__aurora",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("header", {
    className: "scroller__header"
  }, /*#__PURE__*/React.createElement("p", {
    className: "mono-label scroller__overline"
  }, "PLATTFORM"), /*#__PURE__*/React.createElement("h2", {
    className: "scroller__heading"
  }, "Marktsignale erkennen, Teams aufstellen, Angebote schreiben, Wissen sichern.")), /*#__PURE__*/React.createElement("div", {
    className: "scroller__layout"
  }, /*#__PURE__*/React.createElement("aside", {
    className: "rail"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rail__line"
  }), /*#__PURE__*/React.createElement("div", {
    className: "rail__progress",
    style: {
      height: `${activeIdx / (STEPS.length - 1) * 100}%`
    }
  }), /*#__PURE__*/React.createElement("ol", {
    className: "rail__steps"
  }, STEPS.map((s, i) => {
    const isActive = i === activeIdx;
    const isComplete = i < activeIdx;
    return /*#__PURE__*/React.createElement("li", {
      key: s.id,
      className: "rail__step " + (isActive ? "is-active " : "") + (isComplete ? "is-complete" : "")
    }, /*#__PURE__*/React.createElement("a", {
      href: `#${s.id}`,
      onClick: e => {
        e.preventDefault();
        stepRefs.current[i]?.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "rail__dot"
    }, /*#__PURE__*/React.createElement("span", {
      className: "rail__dot-inner"
    })), /*#__PURE__*/React.createElement("span", {
      className: "rail__meta"
    }, /*#__PURE__*/React.createElement("span", {
      className: "rail__meta-label"
    }, s.label), /*#__PURE__*/React.createElement("span", {
      className: "rail__meta-name"
    }, s.stepperLabel))));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "scroller__copy"
  }, STEPS.map((s, i) => /*#__PURE__*/React.createElement("article", {
    key: s.id,
    id: s.id,
    ref: el => stepRefs.current[i] = el,
    "data-idx": i,
    className: "step-article"
  }, /*#__PURE__*/React.createElement("p", {
    className: "mono-label step-article__meta",
    style: {
      color: s.accent
    }
  }, s.label, " / ", s.stepperLabel), /*#__PURE__*/React.createElement("h3", {
    className: "step-article__title"
  }, s.title), /*#__PURE__*/React.createElement("p", {
    className: "step-article__body"
  }, s.body), /*#__PURE__*/React.createElement("ul", {
    className: "step-article__list"
  }, s.highlights.map(h => /*#__PURE__*/React.createElement("li", {
    key: h
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot",
    style: {
      backgroundColor: s.accent
    }
  }), h))), /*#__PURE__*/React.createElement("a", {
    className: "step-article__cta",
    href: `#${s.id}`,
    onClick: e => e.preventDefault()
  }, s.ctaLabel, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "16",
    height: "16",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7 17 17 7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 7h9v9"
  })))))), /*#__PURE__*/React.createElement("div", {
    className: "scroller__visual-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "scroller__visual-sticky",
    key: activeStep.id
  }, /*#__PURE__*/React.createElement(StepVisual, {
    step: activeStep
  }), /*#__PURE__*/React.createElement("div", {
    className: "scroller__visual-caption"
  }, /*#__PURE__*/React.createElement("p", {
    className: "mono-label",
    style: {
      color: "var(--consultry-brand-warm)"
    }
  }, activeStep.label, " \xB7 ", activeStep.stepperLabel))))))));
};
window.EditorialScroller = EditorialScroller;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/EditorialScroller.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Hero.jsx
try { (() => {
// Hero.jsx — Full-bleed dark hero with gradient headline accent and pulsing CTA
const Hero = () => {
  return /*#__PURE__*/React.createElement("section", {
    className: "hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__bg",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero__glow",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__copy"
  }, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow rise-in"
  }, "DER OPERATIVE AI-BEGLEITER F\xDCR BERATUNGEN"), /*#__PURE__*/React.createElement("h1", {
    className: "hero__title rise-in rise-in--1"
  }, "Weniger Tools.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "gradient-text-hero"
  }, "Mehr Beratung.")), /*#__PURE__*/React.createElement("p", {
    className: "hero__body rise-in rise-in--2"
  }, "Ihre Datenhoheit bleibt in Europa. EU-gehostet, DSGVO in der Produktlogik, lokale Open-Source-Modelle f\xFCr vertrauliche Daten."), /*#__PURE__*/React.createElement("div", {
    className: "hero__ctas rise-in rise-in--3"
  }, /*#__PURE__*/React.createElement("a", {
    className: "btn btn--primary btn--lg hero-cta-pulse",
    href: "#warteliste",
    onClick: e => {
      e.preventDefault();
      document.getElementById("warteliste")?.scrollIntoView({
        behavior: "smooth"
      });
    }
  }, "Auf die Warteliste"), /*#__PURE__*/React.createElement("a", {
    className: "btn btn--ghost btn--lg",
    href: "#produkt",
    onClick: e => {
      e.preventDefault();
      document.getElementById("scroller")?.scrollIntoView({
        behavior: "smooth"
      });
    }
  }, "Produkt ansehen")), /*#__PURE__*/React.createElement("p", {
    className: "hero__proof rise-in rise-in--4"
  }, "Pre-Launch \xB7 F\xFCr IT-Beratungen 30\u2013200 Berater \xB7 Pilotkunden willkommen")), /*#__PURE__*/React.createElement("div", {
    className: "hero__visual rise-in rise-in--2",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__visual-glow"
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/hero-dashboard.png",
    alt: ""
  }))));
};
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/InternalLinkGrid.jsx
try { (() => {
// InternalLinkGrid.jsx — Vertieften topic grid with hover-lift cards
const INTERNAL_LINKS = [{
  label: "Bestandskunden-Wachstum",
  body: "Entscheider-Wechsel und neue Initiativen bei Ihren Bestandskunden. Priorisiert, mit Bedarfshypothese und Projektreferenz aus Ihrer Delivery-Historie."
}, {
  label: "Staffing und Forecasting",
  body: "Drei Team-Varianten pro Opportunity, mit Margin und Verfügbarkeit. Skill-Lücken werden früh sichtbar."
}, {
  label: "Wissen, das wieder auftaucht",
  body: "Methoden und Referenzen erscheinen im Kontext. 15 Sekunden Antwort statt drei Stunden Suche."
}, {
  label: "Delivery und Marge",
  body: "Projekt-Health und Deckungsbeitrag, live. Invoice-Ready-Übergabe an DATEV per XRechnung und ZUGFeRD."
}, {
  label: "Consultry vs. Standard-CRM",
  body: "Ein CRM kennt die Pipeline. Consultry kennt Ihre Berater, Ihr Wissen und Ihre Delivery."
}];
const InternalLinkGrid = () => /*#__PURE__*/React.createElement("section", {
  className: "link-grid"
}, /*#__PURE__*/React.createElement("div", {
  className: "content-shell"
}, /*#__PURE__*/React.createElement("header", {
  className: "link-grid__header"
}, /*#__PURE__*/React.createElement("p", {
  className: "eyebrow"
}, "VERTIEFEN"), /*#__PURE__*/React.createElement("h2", {
  className: "link-grid__title"
}, "Die wichtigsten Themen im Detail."), /*#__PURE__*/React.createElement("p", {
  className: "link-grid__body"
}, "Jede dieser Seiten vertieft einen der Bereiche. Mit konkreten Zahlen, Szenarien und Vergleichen.")), /*#__PURE__*/React.createElement("ul", {
  className: "link-grid__list"
}, INTERNAL_LINKS.map(l => /*#__PURE__*/React.createElement("li", {
  key: l.label
}, /*#__PURE__*/React.createElement("a", {
  className: "link-card",
  href: "#",
  onClick: e => e.preventDefault()
}, /*#__PURE__*/React.createElement("span", {
  className: "link-card__label"
}, l.label), /*#__PURE__*/React.createElement("span", {
  className: "link-card__body"
}, l.body), /*#__PURE__*/React.createElement("span", {
  className: "link-card__arrow",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  width: "18",
  height: "18",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M7 17 17 7"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 7h9v9"
})))))))));
window.InternalLinkGrid = InternalLinkGrid;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/InternalLinkGrid.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/MetricsBand.jsx
try { (() => {
// MetricsBand.jsx — Four-card numeric KPI band with gradient hairlines
const METRICS = [{
  value: "Eine Ansicht",
  label: "Statt fünf bis acht Tools",
  body: "Signal, Staffing, Angebot und Delivery laufen in einem System zusammen.",
  gradient: "linear-gradient(135deg, #e8913a, #bf5347)",
  glow: "rgba(232,145,58,0.12)"
}, {
  value: "3 Stunden",
  label: "Vom Brief zum Angebot",
  body: "Heute zwei bis vier Tage. Engagement-Brief, CVs, Referenzen und Pricing aus demselben Kontext.",
  gradient: "linear-gradient(135deg, #bf5347, #e8655a)",
  glow: "rgba(191,83,71,0.12)"
}, {
  value: "80–90 %",
  label: "Ziel-Utilization pro Berater",
  body: "Heute 60 bis 70 Prozent. Pipeline, Skills und Verfügbarkeit in einer Steuerungslogik.",
  gradient: "linear-gradient(135deg, #e8655a, #9b59b6)",
  glow: "rgba(232,101,90,0.12)"
}, {
  value: "15 Sekunden",
  label: "Antwort aus der Wissensbasis",
  body: "Heute drei Stunden Suche. Eine Query statt einer Dokumentliste.",
  gradient: "linear-gradient(135deg, #9b59b6, #c084e5)",
  glow: "rgba(155,89,182,0.12)"
}];
const MetricsBand = () => /*#__PURE__*/React.createElement("section", {
  className: "metrics"
}, /*#__PURE__*/React.createElement("div", {
  className: "metrics__grid-overlay",
  "aria-hidden": "true"
}), /*#__PURE__*/React.createElement("div", {
  className: "metrics__aurora",
  "aria-hidden": "true"
}), /*#__PURE__*/React.createElement("div", {
  className: "content-shell"
}, /*#__PURE__*/React.createElement("div", {
  className: "metrics__layout"
}, /*#__PURE__*/React.createElement("div", {
  className: "metrics__intro"
}, /*#__PURE__*/React.createElement("p", {
  className: "eyebrow"
}, "ERGEBNISSE"), /*#__PURE__*/React.createElement("h2", {
  className: "metrics__title"
}, "Was sich operativ verschiebt."), /*#__PURE__*/React.createElement("p", {
  className: "metrics__body"
}, "Zielwerte aus Marktanalyse und Gespr\xE4chen mit Pilotkunden im DACH-Raum."), /*#__PURE__*/React.createElement("a", {
  className: "btn btn--primary btn--lg metrics__cta",
  href: "#warteliste",
  onClick: e => {
    e.preventDefault();
    document.getElementById("warteliste")?.scrollIntoView({
      behavior: "smooth"
    });
  }
}, "Auf die Warteliste"), /*#__PURE__*/React.createElement("p", {
  className: "metrics__footnote"
}, "Basis: Branchen-Benchmarks und Gespr\xE4che mit Beratungen zwischen 30 und 200 Beratern. Consultry ist im Pre-Launch. Werte sind Zielkorridore. Keine Versprechen.")), /*#__PURE__*/React.createElement("div", {
  className: "metrics__cards"
}, METRICS.map((m, i) => {
  const badge = String(i + 1).padStart(2, "0");
  return /*#__PURE__*/React.createElement("article", {
    key: m.label,
    className: "metric-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "metric-card__accent",
    style: {
      background: m.gradient
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "metric-card__glow",
    style: {
      background: m.glow
    }
  }), /*#__PURE__*/React.createElement("header", {
    className: "metric-card__row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "metric-card__badge"
  }, "[", badge, "]"), /*#__PURE__*/React.createElement("span", {
    className: "metric-card__hairline",
    style: {
      background: m.gradient
    }
  })), /*#__PURE__*/React.createElement("p", {
    className: "metric-card__value"
  }, m.value), /*#__PURE__*/React.createElement("p", {
    className: "metric-card__label"
  }, m.label), /*#__PURE__*/React.createElement("p", {
    className: "metric-card__body"
  }, m.body));
})))));
window.MetricsBand = MetricsBand;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/MetricsBand.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Nav.jsx
try { (() => {
// Nav.jsx — sticky glass nav with brand gradient on active link
const Nav = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [active, setActive] = React.useState("Produkt");
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = ["Produkt", "Unternehmen", "Kontakt"];
  return /*#__PURE__*/React.createElement("header", {
    className: "nav-shell"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nav-bar " + (scrolled ? "nav-bar--scrolled" : "")
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "nav-logo",
    onClick: e => {
      e.preventDefault();
      setActive("Produkt");
    },
    "aria-label": "Consultry"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/consultry-v1-dark-transparent.svg",
    alt: "Consultry"
  })), /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Hauptnavigation",
    className: "nav-links"
  }, links.map(label => /*#__PURE__*/React.createElement("a", {
    key: label,
    href: "#" + label.toLowerCase(),
    className: "nav-link " + (active === label ? "is-active" : ""),
    onClick: e => {
      e.preventDefault();
      setActive(label);
      document.getElementById("stub-" + label.toLowerCase())?.scrollIntoView({
        behavior: "smooth"
      });
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "nav-link__inner"
  }, label)))), /*#__PURE__*/React.createElement("a", {
    href: "#warteliste",
    className: "nav-cta",
    onClick: e => {
      e.preventDefault();
      document.getElementById("warteliste")?.scrollIntoView({
        behavior: "smooth"
      });
    }
  }, /*#__PURE__*/React.createElement("span", null, "Auf die Warteliste"), /*#__PURE__*/React.createElement("span", {
    className: "nav-cta__arrow",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "14",
    height: "14",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.1",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7 17 17 7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 7h9v9"
  }))))));
};
window.Nav = Nav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Nav.jsx", error: String((e && e.message) || e) }); }

})();
