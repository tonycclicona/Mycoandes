import heroBgImg from "figma:asset/9c4cbe22ce2d747f9a9a2962d0585c6062e5f2ed.png";
import imgMycoAndes1 from "../imports/mycoandes-1.png";
import imgOstraBlanco from "../imports/image-1.png";
import imgSetaRosada from "../imports/image-6.png";
import imgSetaRey from "../imports/image-3.png";
import imgShiitake from "../imports/image-5.png";
import imgAmarilla from "../imports/image-4.png";
import imgOstraGris from "../imports/image-2.png";
import imgChampignon from "../imports/Champignon.jpeg";
import imgNuevaPasantia from "../imports/Agregar_pasantia.jpeg";
import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import {
  Menu,
  X,
  Leaf,
  FlaskConical,
  Scissors,
  Package,
  CheckCircle,
  ChevronRight,
  Star,
  TrendingUp,
  Facebook,
  Instagram,
  Wind,
  Droplets,
  Layers,
  Users2,
  Shield,
  BookOpen,
  Repeat,
  ShoppingBag,
  GraduationCap,
} from "lucide-react";

// ─── SEO: inject meta tags & structured data ─────────────────────────────────
function SEOHead() {
  useEffect(() => {
    document.title =
      "MycoAndes | Cultivo de Hongos en Perú — Inóculos, Extractos y Formación";

    const setMeta = (name: string, content: string, prop = false) => {
      const attr = prop ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", "MycoAndes es la empresa peruana líder en cultivo de hongos comestibles y funcionales. Vendemos inóculos de alta calidad (Seta Ostra, Shiitake, Seta Rey), extractos funcionales de Reishi, Melena de León y Cordyceps, y ofrecemos formación técnica y pasantías en micología andina.");
    setMeta("keywords", "cultivo de hongos Peru, inóculos de hongos, hongos comestibles Peru, producción de hongos, extractos funcionales hongos, Reishi Peru, Melena de Leon, Cordyceps Peru, curso cultivo hongos, pasantias micologia Peru, hongos andinos, MycoAndes, hongos funcionales, seta ostra, shiitake Peru, emprendimiento hongos");
    setMeta("robots", "index, follow");
    setMeta("author", "MycoAndes");
    setMeta("geo.region", "PE");
    setMeta("geo.placename", "Perú");

    // Open Graph
    setMeta("og:title", "MycoAndes | Cultivo de Hongos en Perú", true);
    setMeta("og:description", "Inóculos, extractos funcionales y formación técnica en micología. La cadena de valor del micelio andino.", true);
    setMeta("og:type", "website", true);
    setMeta("og:locale", "es_PE", true);
    setMeta("og:site_name", "MycoAndes", true);

    // Twitter Card
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", "MycoAndes | Cultivo de Hongos en Perú");
    setMeta("twitter:description", "Inóculos de alta calidad, extractos de Reishi, Melena de León y Cordyceps, y pasantías técnicas en el Perú.");

    // lang
    document.documentElement.lang = "es";

    // JSON-LD structured data
    const schemaId = "mycoandes-schema";
    let schema = document.getElementById(schemaId);
    if (!schema) {
      schema = document.createElement("script");
      schema.id = schemaId;
      schema.setAttribute("type", "application/ld+json");
      document.head.appendChild(schema);
    }
    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "LocalBusiness",
          "@id": "https://mycoandes.com/#business",
          "name": "MycoAndes",
          "description": "Empresa peruana especializada en cultivo de hongos comestibles y funcionales, producción de inóculos, extractos funcionales y formación técnica en micología.",
          "telephone": "+51900246403",
          "address": { "@type": "PostalAddress", "addressCountry": "PE" },
          "url": "https://mycoandes.com",
          "sameAs": ["https://wa.me/51900246403"],
          "priceRange": "S/25 – S/35",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Catálogo MycoAndes",
            "itemListElement": [
              { "@type": "Offer", "name": "Inóculo de Seta Ostra Blanca", "price": "25", "priceCurrency": "PEN" },
              { "@type": "Offer", "name": "Inóculo de Seta Rey (Pleurotus eryngii)", "price": "35", "priceCurrency": "PEN" },
              { "@type": "Offer", "name": "Inóculo de Shiitake", "price": "35", "priceCurrency": "PEN" },
              { "@type": "Offer", "name": "Extracto de Reishi (Ganoderma lucidum)" },
              { "@type": "Offer", "name": "Extracto de Melena de León (Hericium erinaceus)" },
              { "@type": "Offer", "name": "Extracto de Cordyceps militaris" },
            ],
          },
        },
        {
          "@type": "WebSite",
          "name": "MycoAndes",
          "url": "https://mycoandes.com",
          "inLanguage": "es-PE",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://mycoandes.com/?s={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        },
      ],
    });

    return () => {
      // cleanup schema on unmount
    };
  }, []);
  return null;
}

// ─── Images ────────────────────────────────────────────────────────────────
const HERO_BG = heroBgImg;
const IMG_SEMILLA =
  "https://images.unsplash.com/photo-1622370387370-3eec28a387c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxveXN0ZXIlMjBtdXNocm9vbSUyMHNwb3JlcyUyMHNlZWRzfGVufDF8fHx8MTc3NTU3NzU3nww&ixlib=rb-4.1.0&q=80&w=400";
const IMG_COSECHA =
  "https://images.unsplash.com/photo-1770429939069-2f649afea536?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXJ2ZXN0aW5nJTIwbXVzaHJvb21zJTIwaGFuZHN8ZW58MXx8fHwxNzc1NTc3NTc1fDA&ixlib=rb-4.1.0&q=80&w=400";
const IMG_EMPAQUE =
  "https://images.unsplash.com/photo-1774709781920-cc80f33001d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNocm9vbSUyMHBhY2thZ2luZyUyMGV4cG9ydCUyMHByZW1pdW18ZW58MXx8fHwxNzc1NTc3NTc2fDA&ixlib=rb-4.1.0&q=80&w=400";
const IMG_INDOOR_FARM =
  "https://images.unsplash.com/photo-1762889278403-1d1a57d9a587?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNocm9vbSUyMGZhcm0lMjBpbmRvb3IlMjBncm93aW5nJTIwc2V0dXB8ZW58MXx8fHwxNzc1NTc3NTgxfDA&ixlib=rb-4.1.0&q=80&w=400";
const IMG_EXTRACTO_POLVO =
  "https://images.unsplash.com/photo-1566216867955-5b2e8c77e45f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNocm9vbSUyMHBvd2RlciUyMGV4dHJhY3QlMjBsYWJvcmF0b3J5JTIwZHJ5aW5nfGVufDF8fHx8MTc3NjM5NzAwOHww&ixlib=rb-4.1.0&q=80&w=1080";

// ─── Animation helper ──────────────────────────────────────────────────────
function FadeIn({
  children,
  delay = 0,
  direction = "up",
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const dirMap = { up: { y: 36 }, left: { x: -36 }, right: { x: 36 }, none: {} };
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...dirMap[direction] }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

// ─── WhatsApp icon ────────────────────────────────────────────────────────────
function WaIcon({ size = 16 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true" style={{ flexShrink: 0 }}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.561 4.14 1.535 5.873L.057 23.428a.75.75 0 0 0 .916.916l5.555-1.478A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.718 9.718 0 0 1-4.953-1.355l-.355-.211-3.684.979.979-3.684-.211-.355A9.718 9.718 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
    </svg>
  );
}

// ─── Catálogo data ─────────────────────────────────────────────────────────────
const catalogoItems = [
  {
    id: 1,
    num: "01",
    name: 'KIT "PRIMERA COSECHA"',
    tagline: "Ideal para empezar desde cero",
    includes: ["Inóculo + sustrato + guía + soporte básico"],
    extra: ["Tiempo de cosecha: 10–15 días", "Nivel: Principiante"],
    price: "Consultar",
    badge: "Principiante",
    accentColor: "#6edd8c",
    badgeBg: "rgba(45,102,64,0.15)",
    icon: <Leaf size={16} aria-hidden="true" />,
    waMsg: "Hola%20%F0%9F%91%8B%20MycoAndes%2C%20quiero%20informaci%C3%B3n%20sobre%20el%20KIT%20PRIMERA%20COSECHA%20%F0%9F%8D%84.%20Quisiera%20empezar%20desde%20cero.",
    featured: false,
  },
  {
    id: 2,
    num: "02",
    name: "KIT EMPRENDEDOR",
    tagline: "Para producir y vender",
    includes: ["3 kg inóculo + guía técnica + asesoría"],
    extra: ["Producción estimada: 20–30 bolsas"],
    price: "Consultar",
    badge: "Negocio",
    accentColor: "#6ab4f0",
    badgeBg: "rgba(30,74,106,0.15)",
    icon: <TrendingUp size={16} aria-hidden="true" />,
    waMsg: "Hola%20%F0%9F%91%8B%20MycoAndes%2C%20estoy%20interesado%20en%20el%20KIT%20EMPRENDEDOR%20para%20producir%20y%20vender%20hongos.",
    featured: false,
  },
  {
    id: 3,
    num: "03",
    name: "SUSCRIPCIÓN DE INÓCULOS",
    tagline: "Producción continua",
    includes: ["Entrega mensual", "Descuento por volumen"],
    extra: [],
    price: "Consultar / mes",
    badge: "Mensual",
    accentColor: "#c4a7fa",
    badgeBg: "rgba(74,30,106,0.15)",
    icon: <Repeat size={16} aria-hidden="true" />,
    waMsg: "Hola%20%F0%9F%91%8B%20MycoAndes%2C%20quiero%20informaci%C3%B3n%20sobre%20la%20SUSCRIPCI%C3%93N%20MENSUAL%20DE%20IN%C3%93CULOS%20%F0%9F%8D%84.",
    featured: false,
  },
  {
    id: 4,
    num: "04",
    name: "PACK DE INSUMOS",
    tagline: "Reposición rápida",
    includes: ["Guantes", "Bolsas", "Alcohol"],
    extra: [],
    price: "Consultar",
    badge: "Insumos",
    accentColor: "#a8d86a",
    badgeBg: "rgba(90,122,46,0.15)",
    icon: <ShoppingBag size={16} aria-hidden="true" />,
    waMsg: "Hola%20%F0%9F%91%8B%20MycoAndes%2C%20necesito%20el%20PACK%20DE%20INSUMOS.%20%C2%BFQu%C3%A9%20incluye%20y%20cu%C3%A1l%20es%20el%20precio%3F",
    featured: false,
  },
  {
    id: 5,
    num: "05",
    name: "CURSO + KIT",
    tagline: "Aprende + produce",
    includes: ["Taller práctico", "Kit incluido"],
    extra: [],
    price: "Consultar",
    badge: "Capacitación",
    accentColor: "#6ab0f4",
    badgeBg: "rgba(30,60,106,0.15)",
    icon: <GraduationCap size={16} aria-hidden="true" />,
    waMsg: "Hola%20%F0%9F%91%8B%20MycoAndes%2C%20quiero%20informaci%C3%B3n%20sobre%20el%20CURSO%20%2B%20KIT%20%F0%9F%8D%84.%20Me%20gustar%C3%ADa%20aprender%20y%20producir.",
    featured: false,
  },
];

// ─── Catálogo Modal ────────────────────────────────────────────────────────────
function CatalogoModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="catalogo-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Catálogo de productos MycoAndes"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-6"
          style={{ background: "rgba(0,0,0,0.62)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)" }}
          onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 24 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="relative w-full max-w-5xl max-h-[92dvh] overflow-y-auto rounded-2xl"
            style={{
              background: "linear-gradient(145deg, #1a1208 0%, #0f0a05 100%)",
              border: "1px solid rgba(200,87,42,0.25)",
              boxShadow: "0 30px 80px rgba(0,0,0,0.75), 0 0 0 1px rgba(255,255,255,0.04)",
              scrollbarWidth: "thin",
              scrollbarColor: "rgba(200,87,42,0.3) transparent",
            }}
          >
            {/* Header */}
            <div
              className="sticky top-0 z-10 flex items-center justify-between px-4 sm:px-6 py-4"
              style={{ background: "linear-gradient(180deg, #1a1208 80%, rgba(26,18,8,0) 100%)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(200,87,42,0.18)", border: "1px solid rgba(200,87,42,0.35)" }}
                >
                  <span style={{ fontSize: "1.1rem" }} aria-hidden="true">🍄</span>
                </div>
                <div>
                  <p className="text-white/35 text-[10px] tracking-widest uppercase">MycoAndes · Versión Comercial</p>
                  <h2 className="text-white" style={{ fontSize: "clamp(0.95rem, 2.2vw, 1.2rem)", fontWeight: 800, lineHeight: 1.2 }}>
                    🛒 KIT MYCOANDES
                  </h2>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all flex-shrink-0"
                aria-label="Cerrar catálogo"
              >
                <X size={18} />
              </button>
            </div>

            {/* Subtitle */}
            <div className="px-4 sm:px-6 pt-3 pb-1">
              <p className="text-white/35 text-xs leading-relaxed">
                Elige el producto ideal para tu nivel y objetivos. Cada botón te conecta directamente con nuestro equipo en WhatsApp 📲
              </p>
            </div>

            {/* Grid */}
            <div className="px-4 sm:px-6 pb-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-3">
              {catalogoItems.map((item) => (
                <article
                  key={item.id}
                  className="flex flex-col rounded-xl overflow-hidden relative group"
                  style={{
                    background: item.featured
                      ? "linear-gradient(135deg, rgba(200,87,42,0.14) 0%, rgba(200,87,42,0.06) 100%)"
                      : "rgba(255,255,255,0.04)",
                    border: item.featured ? "1px solid rgba(200,87,42,0.45)" : "1px solid rgba(255,255,255,0.08)",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 14px 36px rgba(0,0,0,0.45)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  {item.featured && (
                    <div className="absolute top-0 right-0 px-3 py-1 text-[9px] font-black tracking-widest text-white uppercase" style={{ background: "#C8572A", borderRadius: "0 0.75rem 0 0.5rem" }}>
                      🔥 RECOMENDADO
                    </div>
                  )}
                  <div className="p-4 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-2.5">
                      <span className="text-[10px] font-black tracking-widest" style={{ color: "rgba(255,255,255,0.18)" }}>{item.num}</span>
                      <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: item.badgeBg, color: item.accentColor, border: `1px solid ${item.accentColor}33` }}>
                        {item.icon}
                      </div>
                      {!item.featured && (
                        <span className="ml-auto text-[9px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wide" style={{ background: item.badgeBg, color: item.accentColor, border: `1px solid ${item.accentColor}33` }}>
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <h3 className="text-white mb-1 leading-snug" style={{ fontSize: "0.82rem", fontWeight: 800 }}>{item.name}</h3>
                    <p className="mb-3" style={{ fontSize: "0.7rem", color: item.accentColor, fontStyle: "italic" }}>👉 {item.tagline}</p>
                    <div className="flex-1 mb-3 space-y-1.5">
                      {item.includes.map((inc, i) => (
                        <div key={i} className="flex items-start gap-1.5">
                          <CheckCircle size={10} style={{ color: "#7dd68a", flexShrink: 0, marginTop: 2 }} aria-hidden="true" />
                          <span className="text-white/60 text-[11px] leading-snug">{inc}</span>
                        </div>
                      ))}
                      {item.extra.map((ex, i) => (
                        <div key={i} className="flex items-start gap-1.5">
                          <span className="text-white/25 text-[10px]" style={{ marginTop: 1 }} aria-hidden="true">•</span>
                          <span className="text-white/38 text-[10px] leading-snug italic">{ex}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center gap-1.5 mb-3 px-2.5 py-1.5 rounded-lg" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
                      <span className="text-white/35 text-[10px]">💰 Precio:</span>
                      <span className="text-[11px] font-bold" style={{ color: item.featured ? "#f4a46a" : item.accentColor }}>{item.price}</span>
                    </div>
                    <a
                      href={`https://wa.me/51900246403?text=${item.waMsg}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-white text-[11px] font-bold hover:opacity-90 active:scale-95 transition-all w-full justify-center"
                      style={{ background: item.featured ? "#C8572A" : "rgba(200,87,42,0.22)", border: item.featured ? "none" : "1px solid rgba(200,87,42,0.4)", boxShadow: item.featured ? "0 4px 18px rgba(200,87,42,0.38)" : "none" }}
                    >
                      <WaIcon size={13} />
                      Consultar por WhatsApp 📲
                    </a>
                  </div>
                </article>
              ))}
            </div>

            {/* Footer */}
            <div className="px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3" style={{ borderTop: "1px solid rgba(255,255,255,0.06)", background: "rgba(0,0,0,0.2)" }}>
              <div className="flex items-center gap-2">
                <Leaf size={12} style={{ color: "#7dd68a" }} aria-hidden="true" />
                <span className="text-white/35 text-[10px]">Respuesta en menos de 24 h · Asesoría personalizada incluida</span>
              </div>
              <a
                href="https://wa.me/51900246403?text=Hola%20%F0%9F%91%8B%20gracias%20por%20escribir%20a%20MycoAndes%20%F0%9F%8D%84%0AElige%20una%20opci%C3%B3n%3A%0A1%EF%B8%8F%E2%83%A3%20Empezar%20desde%20cero%0A2%EF%B8%8F%E2%83%A3%20Producir%20a%20nivel%20negocio%0A3%EF%B8%8F%E2%83%A3%20Comprar%20insumos%0A4%EF%B8%8F%E2%83%A3%20Capacitaci%C3%B3n"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-lg text-white text-[11px] font-semibold hover:opacity-90 transition-all flex-shrink-0"
                style={{ background: "#25D366" }}
              >
                <WaIcon size={13} />
                Iniciar chat general
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─── Navbar ─────────────────────────────────────────────────────────────────
function Navbar({ onOpenCatalogo }: { onOpenCatalogo: () => void }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMobileOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const scrollToSection = (href: string) => {
    setMobileOpen(false);
    if (href === "#catalogo") { onOpenCatalogo(); return; }
    if (href === "#") { window.scrollTo({ top: 0, behavior: "smooth" }); return; }
    const target = document.getElementById(href.replace("#", ""));
    if (!target) return;
    const navH = navRef.current?.offsetHeight ?? 0;
    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - navH, behavior: "smooth" });
  };

  const navItems = [
    { label: "Asistencia técnica", href: "#proceso", isCatalogo: false },
    { label: "Inóculos", href: "#productos", isCatalogo: false },
    { label: "Extractos", href: "#extractos", isCatalogo: false },
    { label: "Pasantías", href: "#pasantias", isCatalogo: false },
    { label: "Mercado Peruano", href: "#roi", isCatalogo: false },
    { label: "Kit Cultivador", href: "#catalogo", isCatalogo: true },
  ];

  return (
    <header
      ref={navRef as React.RefObject<HTMLElement>}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(15,10,5,0.97)" : "rgba(15,10,5,0.88)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "none",
      }}
    >
      <nav aria-label="Navegación principal" className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Main bar */}
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <button onClick={() => scrollToSection("#")} className="flex items-center gap-2 flex-shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 rounded" aria-label="Ir al inicio — MycoAndes">
            <img src={imgMycoAndes1} alt="MycoAndes — cultivo de hongos en Perú" className="h-14 sm:h-18 w-auto object-contain" />
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-5 lg:gap-6" aria-label="Menú desktop">
            {navItems.map((item) =>
              item.isCatalogo ? (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                  className="text-xs tracking-wider uppercase cursor-pointer transition-all rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
                  style={{ color: "#f4a46a", border: "1px solid rgba(200,87,42,0.45)", borderRadius: "5px", padding: "3px 10px", background: "rgba(200,87,42,0.1)" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(200,87,42,0.22)"; (e.currentTarget as HTMLAnchorElement).style.color = "#fff"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(200,87,42,0.1)"; (e.currentTarget as HTMLAnchorElement).style.color = "#f4a46a"; }}
                >
                  🍄 {item.label}
                </a>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                  className="text-white/70 hover:text-white text-xs tracking-wider uppercase transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 rounded"
                >
                  {item.label}
                </a>
              )
            )}
          </nav>

          {/* Right side: CTA + hamburger */}
          <div className="flex items-center gap-2">
            <a
              href="https://wa.me/51900246403?text=Hola%20estoy%20interesado(a)%20en%20MycoAndes"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 py-1.5 rounded text-white text-[10px] sm:text-xs tracking-wider uppercase border border-white/30 hover:bg-white/10 transition-colors flex-shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 px-[50px] py-[8px]"
            >
              <WaIcon size={13} />
              <span className="hidden xs:inline">Reservar</span>
              <span className="xs:hidden">Reservar</span>
            </a>
            {/* Hamburger — mobile only */}
            <button
              className="md:hidden flex items-center justify-center w-9 h-9 rounded text-white/70 hover:text-white hover:bg-white/10 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
              onClick={() => setMobileOpen((v) => !v)}
              aria-expanded={mobileOpen}
              aria-label="Abrir menú de navegación"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.22 }}
              className="md:hidden overflow-hidden"
              aria-label="Menú móvil"
            >
              <div className="py-3 flex flex-col gap-1" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                    className="block px-3 py-2.5 rounded-lg text-sm tracking-wide transition-colors cursor-pointer"
                    style={item.isCatalogo
                      ? { color: "#f4a46a", fontWeight: 700, background: "rgba(200,87,42,0.08)" }
                      : { color: "rgba(255,255,255,0.7)" }
                    }
                  >
                    {item.isCatalogo ? `🍄 ${item.label}` : item.label}
                  </a>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero({ onOpenCatalogo }: { onOpenCatalogo: () => void }) {
  const scrollTo = (id: string) => {
    const nav = document.querySelector("header");
    const navH = nav ? (nav as HTMLElement).offsetHeight : 0;
    const target = document.getElementById(id);
    if (target) window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - navH, behavior: "smooth" });
  };

  return (
    <section
      aria-label="Inicio — MycoAndes cultivo de hongos"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "#0f0a05" }}
    >
      {/* Background image */}
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src={HERO_BG}
          alt=""
          className="w-full h-full object-cover opacity-50"
          style={{ objectPosition: "center" }}
          decoding="async"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(105deg, rgba(10,6,2,0.7) 40%, rgba(10,6,2,0.2) 100%)" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 pt-24 sm:pt-28 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-xl"
        >
          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-3 py-1 rounded text-xs tracking-widest uppercase mb-5"
            style={{ background: "#1e4a2a", color: "#6edd8c", border: "1px solid #2d6640" }}
          >
            Mico-Tecnología Avanzada
          </motion.span>

          {/* H1 — main keyword */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-white mb-5"
            style={{ fontSize: "clamp(1.85rem, 5vw, 3.1rem)", lineHeight: 1.15, fontWeight: 700 }}
          >
            Aprende, produce y escala tu{" "}
            <span style={{ color: "#7dd68a" }}>cultivo de hongos</span> en Perú con{" "}
            <em className="not-italic" style={{ color: "#C8572A", fontStyle: "italic", fontFamily: "Georgia, serif" }}>
              MycoAndes
            </em>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-white/65 mb-8 max-w-sm"
            style={{ lineHeight: 1.65, fontSize: "0.92rem" }}
          >
            Inóculos de alta calidad, extractos funcionales de{" "}
            <strong className="text-white/80">Reishi, Melena de León y Cordyceps</strong>, y formación técnica en micología andina.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-3"
          >
            <button
              onClick={() => scrollTo("productos")}
              className="px-5 py-3 rounded text-white text-sm font-medium hover:opacity-90 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300"
              style={{ background: "#C8572A" }}
            >
              Ver Inóculos
            </button>
            <button
              onClick={() => scrollTo("pasantias")}
              className="px-5 py-3 rounded text-white text-sm border border-white/30 hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              Conocer Pasantías
            </button>
            <button
              onClick={onOpenCatalogo}
              className="px-5 py-3 rounded text-sm font-medium transition-all active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
              style={{ color: "#f4a46a", border: "1px solid rgba(200,87,42,0.45)", background: "rgba(200,87,42,0.08)" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(200,87,42,0.18)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(200,87,42,0.08)"; }}
            >
              Kit Cultivador 🍄
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40"
        aria-hidden="true"
      >
        <div className="w-px h-8 bg-white" />
        <div className="w-1.5 h-1.5 rounded-full bg-white" />
      </motion.div>
    </section>
  );
}

// ─── Process Section ──────────────────────────────────────────────────────────
const processSteps = [
  {
    num: "01",
    icon: <Leaf size={22} aria-hidden="true" />,
    title: "BASE DE UNA PRODUCCIÓN EXITOSA",
    subtitle: "Inóculos de alta calidad genética",
    desc: "Utilizamos inóculos seleccionados que garantizan un alto rendimiento, resistencia y uniformidad en tu cultivo.",
    benefit: "El punto de partida para una producción rentable.",
    img: IMG_SEMILLA,
    imgAlt: "Inóculos de hongos de alta calidad para cultivo",
  },
  {
    num: "02",
    icon: <FlaskConical size={22} aria-hidden="true" />,
    title: "OPTIMIZACIÓN Y ACOMPAÑAMIENTO TÉCNICO",
    subtitle: "Crecimiento controlado y eficiente",
    desc: "Te acompañamos desde la incubación hasta el desarrollo del cultivo, aplicando buenas prácticas para maximizar tu producción y reducir pérdidas.",
    benefit: "No produces solo, produces con respaldo.",
    img: IMG_INDOOR_FARM,
    imgAlt: "Granja indoor de hongos comestibles en Perú",
  },
  {
    num: "03",
    icon: <Scissors size={22} aria-hidden="true" />,
    title: "PRODUCCIÓN RENTABLE Y DE CALIDAD",
    subtitle: "Cosechas consistentes y competitivas",
    desc: "Implementamos técnicas que aseguran fructificaciones uniformes, saludables y listas para el mercado.",
    benefit: "Más producción, mejor calidad, mayor ingreso.",
    img: IMG_COSECHA,
    imgAlt: "Cosecha de hongos comestibles en condiciones controladas",
  },
  {
    num: "04",
    icon: <Package size={22} aria-hidden="true" />,
    title: "LISTO PARA EL MERCADO",
    subtitle: "Empaque y valorización del producto",
    desc: "Te guiamos en procesos de empaque y manejo postcosecha para asegurar calidad, trazabilidad y mejor presentación comercial.",
    benefit: "Tu producto listo para venderse mejor.",
    img: IMG_EMPAQUE,
    imgAlt: "Empaque de hongos para exportación y mercado local peruano",
  },
];

function ProcessSection() {
  const valueProps = [
    { icon: <Users2 size={15} aria-hidden="true" />, title: "ACOMPAÑAMIENTO TÉCNICO REAL", desc: "Estamos contigo en cada paso del proceso." },
    { icon: <TrendingUp size={15} aria-hidden="true" />, title: "RESULTADOS COMPROBADOS", desc: "Productores que aumentan su rendimiento y rentabilidad." },
    { icon: <Shield size={15} aria-hidden="true" />, title: "CALIDAD Y CONFIANZA GARANTIZADA", desc: "Inóculos seleccionados y procesos con altos estándares." },
    { icon: <Leaf size={15} aria-hidden="true" />, title: "SOSTENIBILIDAD Y RESPETO", desc: "Cuidamos el entorno para un cultivo responsable." },
  ];

  return (
    <section
      id="proceso"
      aria-labelledby="proceso-heading"
      style={{ background: "#f5f0e8" }}
      className="py-12 sm:py-16 px-4 sm:px-6"
    >
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="text-center mb-8 sm:mb-10">
            <h2
              id="proceso-heading"
              className="text-[#1a1208]"
              style={{ fontSize: "clamp(1.2rem, 2.8vw, 1.9rem)", fontWeight: 900, lineHeight: 1.2 }}
            >
              PROCESO PRODUCTIVO:{" "}
              <span style={{ color: "#C8572A" }}>
                <span style={{ fontStyle: "italic" }}>De la siembra al mercado</span>
              </span>
            </h2>
            <p className="mt-1 text-[#5a4a30]" style={{ fontSize: "clamp(0.8rem, 1.4vw, 0.95rem)", fontFamily: "Georgia, serif", fontStyle: "italic" }}>
              🌿 con resultados reales 🌿
            </p>
            <p className="mt-2 text-[#6b5c3e] max-w-lg mx-auto leading-relaxed" style={{ fontSize: "0.78rem" }}>
              Acompañamos cada etapa del cultivo de hongos para asegurar una producción eficiente, rentable y de alta calidad.
            </p>
          </div>
        </FadeIn>

        {/* 4 Steps */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-6 lg:gap-x-5">
          {processSteps.map((step, i) => (
            <FadeIn key={step.num} delay={i * 0.1}>
              <div className="flex flex-col h-full">
                <div className="relative z-10 flex items-center mb-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center border-2 bg-white flex-shrink-0"
                    style={{ borderColor: "#C8572A", color: "#C8572A", boxShadow: "0 2px 10px rgba(200,87,42,0.15)" }}
                  >
                    {step.icon}
                  </div>
                </div>
                <div className="flex items-start gap-2 mb-3" style={{ minHeight: "3rem" }}>
                  <span className="flex-shrink-0 text-[#C8572A]" style={{ fontSize: "2.2rem", fontWeight: 900, lineHeight: 1 }}>{step.num}</span>
                  <div>
                    <h3 className="text-[#1a1208] leading-tight" style={{ fontSize: "0.68rem", fontWeight: 800, letterSpacing: "0.01em" }}>{step.title}</h3>
                    <p className="mt-0.5" style={{ fontSize: "0.63rem", color: "#C8572A", fontStyle: "italic" }}>{step.subtitle}</p>
                  </div>
                </div>
                <div className="relative mb-3 flex-shrink-0">
                  <div className="rounded-lg overflow-hidden" style={{ height: "9rem" }}>
                    <img
                      src={step.img}
                      alt={step.imgAlt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  {i < processSteps.length - 1 && (
                    <div
                      className="hidden lg:flex absolute top-1/2 -right-3.5 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-white items-center justify-center"
                      style={{ border: "1px solid rgba(200,87,42,0.25)", boxShadow: "0 2px 6px rgba(0,0,0,0.08)" }}
                      aria-hidden="true"
                    >
                      <ChevronRight size={13} style={{ color: "#C8572A" }} />
                    </div>
                  )}
                </div>
                <p className="text-[#5a4a30] leading-relaxed mb-2" style={{ fontSize: "0.68rem" }}>{step.desc}</p>
                <div className="flex items-start gap-1.5 mt-auto rounded-md px-2.5 py-1.5" style={{ background: "#edf7f1" }}>
                  <CheckCircle size={12} style={{ color: "#2d7a3c", flexShrink: 0, marginTop: 1 }} aria-hidden="true" />
                  <p className="text-[#2a5c30] leading-snug" style={{ fontSize: "0.65rem", fontWeight: 700 }}>{step.benefit}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Bottom value props */}
        <FadeIn delay={0.3}>
          <div className="mt-7 rounded-xl overflow-hidden relative shadow-sm" style={{ background: "white", border: "1px solid #e8e0d4" }}>
            <div className="grid grid-cols-2 lg:grid-cols-4">
              {valueProps.map((vp, i) => (
                <div
                  key={vp.title}
                  className="flex items-start gap-2 p-3 sm:p-4"
                  style={{ borderRight: i % 2 === 0 && i < 3 ? "1px solid #f0ebe0" : "none", borderBottom: i < 2 ? "1px solid #f0ebe0" : "none" }}
                >
                  <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "#e8f5ec", color: "#2d7a3c" }}>
                    {vp.icon}
                  </div>
                  <div>
                    <p className="text-[#1a1208] mb-0.5 leading-tight" style={{ fontSize: "0.62rem", fontWeight: 800, letterSpacing: "0.04em" }}>{vp.title}</p>
                    <p className="text-[#888] leading-relaxed" style={{ fontSize: "0.6rem" }}>{vp.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full overflow-hidden items-center justify-center border-4 border-white z-10 shadow-md">
              <img src={imgMycoAndes1} alt="MycoAndes logo" className="w-full h-full object-contain" loading="lazy" />
            </div>
          </div>
        </FadeIn>

        {/* Bottom banner */}
        <FadeIn delay={0.4}>
          <div className="mt-3 rounded-lg py-2.5 px-5 flex items-center justify-center gap-2 flex-wrap" style={{ background: "#3d4a2e" }}>
            <Leaf size={13} style={{ color: "#7dd68a", flexShrink: 0 }} aria-hidden="true" />
            <p className="text-center" style={{ fontSize: "0.75rem" }}>
              <span className="text-white" style={{ fontWeight: 700 }}>NO SOLO VENDEMOS INÓCULOS. </span>
              <span style={{ color: "#f4a46a", fontWeight: 700 }}>FORMAMOS PRODUCTORES DE HONGOS EXITOSOS.</span>
            </p>
            <Leaf size={13} style={{ color: "#7dd68a", flexShrink: 0 }} aria-hidden="true" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Products Section ──────────────────────────────────────────────────────────
const allProducts = [
  {
    id: 4,
    name: "Inóculo de Seta Ostra Blanca",
    scientificName: "Pleurotus ostreatus",
    price: 25.0,
    currency: "PEN",
    img: imgOstraBlanco,
    imgAlt: "Inóculo de Seta Ostra Blanca Pleurotus ostreatus",
    tags: ["Semilla", "Blanco"],
    trustTags: ["⭐ Alto rendimiento", "👨‍🌾 Ideal para iniciantes", "🔬 Validado en campo"],
    badge: "Más vendido",
    badgeColor: "#C8572A",
    desc: "Ideal para productores que buscan rápida colonización, alta productividad y fácil manejo en cultivo.",
    benefit: "Alta tasa de producción y excelente adaptación climática",
  },
  {
    id: 5,
    name: "Inóculo de Seta Rosada",
    scientificName: "Pleurotus djamor var. salmoneostramineus",
    price: 30.0,
    currency: "PEN",
    img: imgSetaRosada,
    imgAlt: "Inóculo de Seta Rosada para cultivo diferenciado",
    tags: ["Semilla", "Rosada"],
    trustTags: ["⭐ Alto rendimiento", "🌸 Mercado diferenciado", "🔬 Validado en campo"],
    badge: null,
    badgeColor: null,
    desc: "Ideal para productores que buscan diferenciarse con una especie visualmente atractiva y de alta demanda en mercados gourmet.",
    benefit: "Alta demanda en restaurantes y mercados especializados",
  },
  {
    id: 6,
    name: "Inóculo de Seta Rey",
    scientificName: "Pleurotus eryngii",
    price: 35.0,
    currency: "PEN",
    img: imgSetaRey,
    imgAlt: "Inóculo de Seta Rey Pleurotus eryngii gourmet",
    tags: ["Semilla", "Gourmet"],
    trustTags: ["💎 Mayor valor comercial", "🔬 Validado en campo", "👨‍🌾 Recomendado para productores"],
    badge: "Premium",
    badgeColor: "#8B4513",
    desc: "La especie más cotizada del mercado. Ideal para productores que apuntan al sector gourmet con alto retorno por kilogramo.",
    benefit: "Mayor precio de venta por kg producido en el mercado local",
  },
  {
    id: 7,
    name: "Inóculo de Shiitake",
    scientificName: "Lentinula edodes",
    price: 35.0,
    currency: "PEN",
    img: imgShiitake,
    imgAlt: "Inóculo de Shiitake Lentinula edodes medicinal",
    tags: ["Semilla", "Medicinal"],
    trustTags: ["🌿 Especie medicinal", "🔬 Validado en campo", "👨‍🌾 Recomendado para productores"],
    badge: "Medicinal",
    badgeColor: "#5a7a2e",
    desc: "Especie medicinal de alto valor. Ideal para productores que buscan diversificar con hongos funcionales de creciente demanda.",
    benefit: "Reconocido por sus propiedades funcionales y alta demanda sostenida",
  },
  {
    id: 8,
    name: "Inóculo de Ostra Amarilla",
    scientificName: "Pleurotus citrinopileatus",
    price: 30.0,
    currency: "PEN",
    img: imgAmarilla,
    imgAlt: "Inóculo de Seta Ostra Amarilla Pleurotus citrinopileatus",
    tags: ["Semilla", "Amarilla"],
    trustTags: ["⭐ Alto rendimiento", "🌿 Especie exótica", "🔬 Validado en campo"],
    badge: null,
    badgeColor: null,
    desc: "Ideal para productores que buscan rápida colonización, alta productividad y fácil manejo en cultivo andino.",
    benefit: "Alta tasa de producción y excelente adaptación al clima andino",
  },
  {
    id: 9,
    name: "Inóculo de Seta Ostra Gris",
    scientificName: "Pleurotus ostreatus var. gris",
    price: 25.0,
    currency: "PEN",
    img: imgOstraGris,
    imgAlt: "Inóculo de Seta Ostra Gris resistente y versátil",
    tags: ["Semilla", "Gris"],
    trustTags: ["⭐ Máxima adaptabilidad", "👨‍🌾 Ideal para iniciantes", "🔬 Validado en campo"],
    badge: null,
    badgeColor: null,
    desc: "La especie más resistente y versátil. Ideal para cualquier nivel de experiencia y condición climática.",
    benefit: "Máxima adaptabilidad y resistencia en condiciones de campo",
  },
  {
    id: 10,
    name: "Inóculo de Champiñón",
    scientificName: "Agaricus bisporus",
    price: 0,
    currency: "",
    img: imgChampignon,
    imgAlt: "Inóculo de Champiñón Agaricus bisporus cultivo masivo",
    tags: ["Semilla", "Blanco"],
    trustTags: ["⭐ Clásico del mercado", "🍄 Alta demanda", "🔬 Validado en campo"],
    badge: "Nuevo",
    badgeColor: "#C8572A",
    desc: "El hongo más conocido y consumido a nivel mundial. Ideal para productores que buscan volumen y rotación constante en el mercado local.",
    benefit: "Consumo masivo garantizado y rotación rápida",
  },
];

function ProductsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1);

  const total = allProducts.length;
  const safeIndex = ((currentIndex % total) + total) % total;
  const product = allProducts[safeIndex];

  const goTo = (next: number, direction: 1 | -1) => {
    setDir(direction);
    setCurrentIndex(((next % total) + total) % total);
  };

  if (!product) return null;

  return (
    <section
      id="productos"
      aria-labelledby="productos-heading"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-8"
    >
      {/* Stacked backgrounds */}
      {allProducts.map((p, i) => (
        <div
          key={p.id + "-bg"}
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            backgroundImage: `url(${p.img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(28px) brightness(0.4) saturate(1.4)",
            transform: "scale(1.12)",
            opacity: i === safeIndex ? 1 : 0,
            transition: "opacity 0.6s ease",
          }}
        />
      ))}
      <div className="absolute inset-0" aria-hidden="true" style={{ background: "rgba(10,6,2,0.3)" }} />

      <div className="relative z-10 w-full flex flex-col items-center px-4 py-4 sm:py-6">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-5 px-2">
            <h2
              id="productos-heading"
              className="text-white"
              style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.7rem)", fontWeight: 700, lineHeight: 1.3 }}
            >
              Inóculos MycoAndes: La Base de tu Rentabilidad
            </h2>
            <p className="text-white/65 text-sm mt-1.5">
              Inóculos de hongos comestibles y medicinales para el mercado peruano
            </p>
          </div>
        </FadeIn>

        {/* Carousel */}
        <div className="relative w-full max-w-4xl flex items-center justify-center">
          <button
            onClick={() => goTo(currentIndex - 1, -1)}
            className="absolute left-0 z-20 flex items-center justify-center rounded-full transition-all hover:scale-110 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            style={{ width: 40, height: 40, background: "rgba(255,255,255,0.12)", border: "1.5px solid rgba(255,255,255,0.25)", color: "rgba(255,255,255,0.85)", backdropFilter: "blur(8px)" }}
            aria-label="Inóculo anterior"
          >
            <ChevronRight size={20} style={{ transform: "rotate(180deg)" }} />
          </button>

          {/* Card */}
          <div className="w-full px-11 sm:px-14">
            <motion.article
              key={product.id}
              initial={{ opacity: 0, x: dir * 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.32, ease: "easeOut" }}
              className="w-full rounded-2xl overflow-hidden flex flex-col sm:flex-row"
              style={{ background: "rgba(255,255,255,0.09)", backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.18)", boxShadow: "0 20px 60px rgba(0,0,0,0.4)" }}
            >
              {/* Image */}
              <div className="relative sm:w-5/12 h-44 sm:h-auto overflow-hidden flex-shrink-0">
                {allProducts.map((p, i) => (
                  <img
                    key={p.id}
                    src={p.img}
                    alt={p.imgAlt}
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ opacity: i === safeIndex ? 1 : 0, transition: "opacity 0.45s ease, transform 0.5s ease", transform: i === safeIndex ? "scale(1)" : "scale(1.03)" }}
                    loading={i === 0 ? "eager" : "lazy"}
                    decoding="async"
                  />
                ))}
                {product.badge && (
                  <span className="absolute top-3 left-3 px-2 py-0.5 rounded text-white text-[10px] font-semibold tracking-wide uppercase z-10" style={{ background: product.badgeColor! }}>
                    {product.badge}
                  </span>
                )}
                <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded text-white text-[11px] font-medium z-10" style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(6px)" }}>
                  {safeIndex + 1} / {total}
                </div>
              </div>

              {/* Content */}
              <div className="sm:w-7/12 p-5 sm:p-7 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {product.trustTags?.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded-full text-[10px] font-medium" style={{ background: "rgba(200,87,42,0.2)", color: "#f4a46a", border: "1px solid rgba(200,87,42,0.3)" }}>{tag}</span>
                    ))}
                  </div>
                  <h3 className="text-white mb-0.5" style={{ fontSize: "clamp(0.9rem, 2.2vw, 1.2rem)", fontWeight: 700, lineHeight: 1.3 }}>{product.name}</h3>
                  <p className="text-white/45 text-[11px] mb-2 italic">{product.scientificName}</p>
                  <p className="text-white/70 text-sm leading-relaxed">{product.desc}</p>
                  <div className="flex items-center gap-1.5 mt-2.5">
                    <TrendingUp size={13} style={{ color: "#7dd68a", flexShrink: 0 }} aria-hidden="true" />
                    <span className="text-[11px]" style={{ color: "#7dd68a" }}>{product.benefit}</span>
                  </div>
                </div>
                <div className="mt-4">
                  <a
                    href={`https://wa.me/51900246403?text=Hola,%20quiero%20el%20in%C3%B3culo:%20${encodeURIComponent(product.name)}%20(%20${encodeURIComponent(product.scientificName)}%20)`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white text-sm font-semibold hover:opacity-90 active:scale-95 transition-all w-full sm:w-auto justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300"
                    style={{ background: "#C8572A", boxShadow: "0 4px 18px rgba(200,87,42,0.4)" }}
                  >
                    <WaIcon size={16} />
                    Quiero este inóculo
                  </a>
                  <div className="flex flex-col gap-1 mt-3">
                    <span className="text-[11px] text-white/55 flex items-center gap-1.5"><CheckCircle size={11} style={{ color: "#7dd68a", flexShrink: 0 }} aria-hidden="true" /> Incluye asesoría básica de uso</span>
                    <span className="text-[11px] text-white/55 flex items-center gap-1.5"><CheckCircle size={11} style={{ color: "#7dd68a", flexShrink: 0 }} aria-hidden="true" /> Recomendaciones técnicas iniciales</span>
                  </div>
                </div>
              </div>
            </motion.article>
          </div>

          <button
            onClick={() => goTo(currentIndex + 1, 1)}
            className="absolute right-0 z-20 flex items-center justify-center rounded-full transition-all hover:scale-110 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            style={{ width: 40, height: 40, background: "rgba(255,255,255,0.12)", border: "1.5px solid rgba(255,255,255,0.25)", color: "rgba(255,255,255,0.85)", backdropFilter: "blur(8px)" }}
            aria-label="Siguiente inóculo"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-5" role="tablist" aria-label="Seleccionar inóculo">
          {allProducts.map((p, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > currentIndex ? 1 : -1)}
              role="tab"
              aria-selected={i === safeIndex}
              aria-label={`Ver ${p.name}`}
              className="rounded-full transition-all duration-300"
              style={{ width: i === safeIndex ? 22 : 8, height: 8, background: i === safeIndex ? "#C8572A" : "rgba(255,255,255,0.35)" }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Extractos Section ─────────────────────────────────────────────────────────
const extractoSteps = [
  {
    num: "01",
    icon: <Wind size={22} aria-hidden="true" />,
    title: "Deshidratación y Molienda",
    desc: "Los cuerpos fructíferos se secan a temperaturas controladas (40–55 °C) para preservar sus compuestos bioactivos. Luego se trituran hasta obtener un polvo fino que aumenta el área de contacto con el solvente.",
    tag: "Biomasa",
    tagColor: "#5a3e1b",
    tagBg: "#f0ebe0",
  },
  {
    num: "02",
    icon: <Droplets size={22} aria-hidden="true" />,
    title: "Extracción Acuosa",
    desc: "El polvo se somete a decocción en agua caliente (70–100 °C) para romper las paredes de quitina y liberar los beta-glucanos, los principales compuestos asociados al soporte inmunológico y adaptogénico.",
    tag: "Beta-Glucanos",
    tagColor: "#1e4a6a",
    tagBg: "#e0f0f8",
  },
  {
    num: "03",
    icon: <FlaskConical size={22} aria-hidden="true" />,
    title: "Extracción Alcohólica",
    desc: "Maceración en etanol de alta pureza para disolver compuestos liposolubles como triterpenos y esteroles. Proceso esencial para Reishi y Melena de León.",
    tag: "Triterpenos",
    tagColor: "#4a1e6a",
    tagBg: "#f0e0f8",
  },
  {
    num: "04",
    icon: <Layers size={22} aria-hidden="true" />,
    title: "Doble Extracción — Espectro Completo",
    desc: "Estándar de oro de la industria. Los líquidos acuoso y alcohólico se combinan y concentran para crear un extracto en polvo de hasta 10:1, capturando el perfil bioactivo total del hongo funcional.",
    tag: "Extracto 10:1",
    tagColor: "#6a1e1e",
    tagBg: "#f8e0e0",
  },
];

function ExtractosSection() {
  const species = [
    {
      emoji: "🍄",
      name: "Reishi",
      scientific: "Ganoderma lucidum",
      focus: "Sistema inmune",
      focusColor: "#7dd68a",
      focusBg: "rgba(125,214,138,0.12)",
      format: "Extracto líquido · Polvo 10:1",
      desc: "Adaptógeno clásico. Rico en triterpenos y beta-glucanos para el soporte inmunológico y el manejo del estrés.",
      tag: "Inmunomodulador",
    },
    {
      emoji: "🦁",
      name: "Melena de León",
      scientific: "Hericium erinaceus",
      focus: "Memoria y concentración",
      focusColor: "#a78bfa",
      focusBg: "rgba(167,139,250,0.12)",
      format: "Polvo · Cápsulas",
      desc: "Estimula la síntesis de NGF (factor de crecimiento nervioso). Ideal para bienestar cognitivo y neurológico.",
      tag: "Neuroprotector",
    },
    {
      emoji: "⚡",
      name: "Cordyceps",
      scientific: "Cordyceps militaris",
      focus: "Energía y rendimiento",
      focusColor: "#f4a46a",
      focusBg: "rgba(244,164,106,0.12)",
      format: "Extracto · Polvo",
      desc: "Favorece la producción de ATP y la oxigenación celular. Muy usado en nutrición deportiva y suplementación natural.",
      tag: "Energizante natural",
    },
  ];

  return (
    <section
      id="extractos"
      aria-labelledby="extractos-heading"
      className="relative overflow-hidden py-16 sm:py-20 px-4 sm:px-6"
      style={{ background: "#0f0a05" }}
    >
      <div className="absolute inset-0 opacity-15" aria-hidden="true" style={{ backgroundImage: `url(${IMG_EXTRACTO_POLVO})`, backgroundSize: "cover", backgroundPosition: "center", filter: "blur(50px) saturate(0.5)" }} />
      <div className="absolute inset-0" aria-hidden="true" style={{ background: "linear-gradient(180deg, rgba(15,10,5,0.92) 0%, rgba(15,10,5,0.65) 50%, rgba(15,10,5,0.95) 100%)" }} />

      <div className="relative z-10 max-w-7xl mx-auto">
        <FadeIn>
          <div className="mb-10 sm:mb-14">
            <span className="inline-block px-3 py-1 rounded text-xs tracking-widest uppercase mb-4" style={{ background: "#1e2a1a", color: "#7dd68a", border: "1px solid #2d4030" }}>
              Línea de Valor Agregado · Bienestar &amp; Nutrición Funcional
            </span>
            <h2
              id="extractos-heading"
              className="text-white mb-4"
              style={{ fontSize: "clamp(1.4rem, 3.5vw, 2.3rem)", fontWeight: 700, lineHeight: 1.25 }}
            >
              Extractos de hongos funcionales:{" "}
              <span style={{ color: "#C8572A" }}>Reishi, Melena de León y Cordyceps</span> en Perú
            </h2>
            <p className="text-white/60 max-w-2xl" style={{ fontSize: "0.9rem", lineHeight: 1.7 }}>
              Transforma el conocimiento del cultivo en productos de alto valor con aplicaciones en salud, bienestar y nutrición.
            </p>
          </div>
        </FadeIn>

        {/* Species cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10 sm:mb-12">
          {species.map((s, i) => (
            <FadeIn key={s.name} delay={i * 0.1}>
              <article
                className="rounded-2xl p-6 flex flex-col h-full hover:-translate-y-1 transition-transform duration-300"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(12px)" }}
              >
                <div className="text-3xl mb-3" aria-hidden="true">{s.emoji}</div>
                <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wide mb-3 self-start" style={{ background: s.focusBg, color: s.focusColor, border: `1px solid ${s.focusColor}33` }}>
                  {s.focus}
                </span>
                <h3 className="text-white mb-0.5" style={{ fontWeight: 700, fontSize: "1.05rem" }}>{s.name}</h3>
                <p className="text-white/40 text-[11px] italic mb-2">{s.scientific}</p>
                <p className="text-white/60 text-xs leading-relaxed flex-1 mb-4">{s.desc}</p>
                <div className="flex items-center justify-between mt-auto flex-wrap gap-2 mb-5">
                  <span className="text-[10px] px-2 py-0.5 rounded" style={{ background: "rgba(200,87,42,0.15)", color: "#f4a46a", border: "1px solid rgba(200,87,42,0.25)" }}>{s.tag}</span>
                  <span className="text-white/35 text-[10px]">{s.format}</span>
                </div>
                <a
                  href={`https://wa.me/51900246403?text=Hola,%20quiero%20informaci%C3%B3n%20sobre%20el%20extracto%20de%20${encodeURIComponent(s.name)}%20(${encodeURIComponent(s.scientific)})`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-white text-xs font-semibold hover:opacity-90 active:scale-95 transition-all w-full justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300"
                  style={{ background: "#C8572A", boxShadow: "0 4px 14px rgba(200,87,42,0.3)" }}
                >
                  <WaIcon size={14} />
                  Consultar por WhatsApp
                </a>
              </article>
            </FadeIn>
          ))}
        </div>

        {/* Extraction process steps */}
        <FadeIn delay={0.15}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {extractoSteps.map((step, i) => (
              <div
                key={step.num}
                className="rounded-xl p-4"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: step.tagBg, color: step.tagColor }}>{step.icon}</div>
                  <span className="text-white/25 text-xs font-black">{step.num}</span>
                </div>
                <h4 className="text-white mb-2 leading-tight" style={{ fontSize: "0.75rem", fontWeight: 700 }}>{step.title}</h4>
                <p className="text-white/50 leading-relaxed" style={{ fontSize: "0.65rem" }}>{step.desc}</p>
                <span className="inline-block mt-3 text-[9px] px-2 py-0.5 rounded-full font-semibold uppercase" style={{ background: step.tagBg, color: step.tagColor }}>{step.tag}</span>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Key message */}
        <FadeIn delay={0.2}>
          <div
            className="rounded-2xl px-6 sm:px-8 py-6 flex flex-col sm:flex-row items-center gap-4 sm:gap-8"
            style={{ background: "rgba(200,87,42,0.1)", border: "1px solid rgba(200,87,42,0.3)" }}
          >
            <div className="text-4xl flex-shrink-0" aria-hidden="true">🧬</div>
            <div>
              <p className="text-white mb-1" style={{ fontWeight: 700, fontSize: "clamp(0.95rem, 2vw, 1.2rem)", lineHeight: 1.4 }}>
                No solo producimos hongos.{" "}
                <span style={{ color: "#f4a46a" }}>Desarrollamos productos de alto valor a partir del micelio.</span>
              </p>
              <p className="text-white/50 text-xs leading-relaxed mt-1">
                Del cultivo al producto final: MycoAndes integra toda la cadena de valor del micelio andino.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Pasantías Section ─────────────────────────────────────────────────────────
const pasantiaFeatures = [
  { title: "🔬 Ecosistema Completo", desc: "Gestión integral de la cadena de valor: desde el inóculo hasta la comercialización." },
  { title: "🧬 Tecnología de Inóculos", desc: "Formación técnica avanzada en laboratorio para la producción de semillas de alta calidad." },
  { title: "⚗️ Valor Agregado", desc: "Aprende a transformar cosechas en extractos funcionales y productos premium." },
  { title: "📈 Estrategia de Negocio", desc: "Modelos validados para escalar tu producción y maximizar la rentabilidad operativa." },
];

function PasantiasSection() {
  return (
    <section
      id="pasantias"
      aria-labelledby="pasantias-heading"
      className="relative overflow-hidden"
    >
      <div className="flex flex-col lg:flex-row min-h-screen w-full">
        {/* Left – image */}
        <div className="relative w-full lg:w-1/2 h-[50vw] min-h-[280px] max-h-[600px] lg:max-h-none lg:h-auto overflow-hidden">
          <img
            src={imgNuevaPasantia}
            alt="Pasantía técnica de micología en MycoAndes — formación en cultivo de hongos en Perú"
            className="w-full h-full object-cover object-center"
            loading="lazy"
            decoding="async"
          />
          <div
            className="absolute inset-0"
            aria-hidden="true"
            style={{ background: "linear-gradient(to bottom, rgba(30,60,40,0) 0%, rgba(30,60,40,0.3) 70%, rgba(30,60,40,0.95) 100%)" }}
          />
          <div
            className="absolute inset-0 hidden lg:block"
            aria-hidden="true"
            style={{ background: "linear-gradient(to right, rgba(30,60,40,0) 50%, rgba(30,60,40,1) 100%)" }}
          />
        </div>

        {/* Right – content */}
        <div className="w-full lg:w-1/2 flex items-center px-6 sm:px-10 lg:px-12 py-12 sm:py-16" style={{ background: "#1e3c28" }}>
          <div className="max-w-lg w-full">
            <FadeIn direction="right">
              <span className="inline-block px-3 py-1 rounded text-[10px] tracking-widest uppercase mb-4" style={{ background: "#2d6640", color: "#6edd8c", border: "1px solid #3d8c55" }}>
                Formación Profesional en Micología
              </span>
              <h2
                id="pasantias-heading"
                className="text-white mb-6"
                style={{ fontSize: "clamp(1.5rem, 3.8vw, 2.7rem)", fontWeight: 800, lineHeight: 1.15 }}
              >
                Domina la <span style={{ color: "#f4a46a" }}>Cadena de Valor</span> del Reino Fungi
              </h2>
            </FadeIn>
            <FadeIn delay={0.1} direction="right">
              <p className="text-white/80 mb-8 sm:mb-10 text-sm sm:text-base leading-relaxed">
                Nuestras pasantías no son solo cursos técnicos; son una inmersión total en el ecosistema MycoAndes. Aprende a gestionar desde la pureza del inóculo hasta la comercialización de productos funcionales.
              </p>
            </FadeIn>
            <div className="space-y-5 sm:space-y-6 mb-10 sm:mb-12">
              {pasantiaFeatures.map((f, i) => (
                <FadeIn key={f.title} delay={0.15 + i * 0.1} direction="right">
                  <div className="flex items-start gap-4 group">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#f4a46a] flex-shrink-0 group-hover:scale-125 transition-transform" aria-hidden="true" />
                    <div>
                      <p className="text-white text-sm sm:text-base font-bold mb-1">{f.title}</p>
                      <p className="text-white/60 text-xs sm:text-sm leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
            <FadeIn delay={0.5} direction="right">
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <a
                  href="https://wa.me/51900246403?text=Hola%2C%20estoy%20interesado(a)%20en%20reservar%20una%20Pasan%C3%ADa%20de%20Inmersi%C3%B3n%20en%20MycoAndes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded text-white text-sm font-bold uppercase tracking-wider hover:brightness-110 transition-all shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300"
                  style={{ background: "#C8572A" }}
                >
                  <WaIcon size={16} />
                  Postular a Pasantía
                </a>
                <p className="text-white/40 text-[11px] italic max-w-[200px]">
                  Cupos limitados por temporada para garantizar formación personalizada.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── ROI / Market Section ──────────────────────────────────────────────────────
const roiData = [
  { label: "Perú", value: 50, color: "#d9cfc0", desc: "50 g" },
  { label: "Brasil", value: 160, color: "#d9cfc0", desc: "160 g" },
  { label: "Argentina", value: 200, color: "#d9cfc0", desc: "200 g" },
  { label: "Chile", value: 300, color: "#d9cfc0", desc: "300 g" },
  { label: "México", value: 1000, color: "#C8572A", desc: "1 kg" },
];

function AnimatedHorizontalBar({ label, value, color, desc, delay }: { label: string; value: number; color: string; desc: string; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div ref={ref} className="flex items-center gap-3 sm:gap-4 w-full mb-4 sm:mb-5">
      <div className="w-16 sm:w-20 text-right text-xs sm:text-sm font-medium text-[#1a1208] flex-shrink-0">{label}</div>
      <div className="flex-1 flex items-center h-5 sm:h-6">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${(value / 1000) * 100}%` } : { width: 0 }}
          transition={{ duration: 0.8, delay, ease: "easeOut" }}
          className="h-full rounded-r"
          style={{ background: color, minWidth: "4px" }}
          role="meter"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={1000}
          aria-label={`${label}: ${desc} per capita`}
        />
        <span className="ml-2 sm:ml-3 text-xs font-bold text-[#888] flex-shrink-0">{desc}</span>
      </div>
    </div>
  );
}

function ROISection() {
  return (
    <section
      id="roi"
      aria-labelledby="roi-heading"
      className="py-10 sm:py-16 px-4 sm:px-6"
      style={{ background: "#f7f3ec" }}
    >
      <div className="max-w-7xl mx-auto w-full">
        <FadeIn>
          <div className="text-center mb-6 sm:mb-8">
            <h2
              id="roi-heading"
              className="text-[#1a1208]"
              style={{ fontSize: "clamp(1.3rem, 3.5vw, 2.1rem)", fontWeight: 700 }}
            >
              Mercado de hongos en Perú: una oportunidad en crecimiento
            </h2>
            <p className="text-[#888] text-sm mt-2 max-w-xl mx-auto leading-relaxed">
              Mientras el consumo de hongos crece en Latinoamérica, el Perú mantiene uno de los niveles más bajos, abriendo una oportunidad única para nuevos productores.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="mt-4 rounded-2xl overflow-hidden border border-[#e8e0d4]" style={{ background: "white", boxShadow: "0 4px 30px rgba(0,0,0,0.06)" }}>
            <div className="flex flex-col lg:flex-row">
              {/* Chart */}
              <div className="flex-1 p-5 sm:p-8">
                <h3 className="text-[#1a1208] mb-6 sm:mb-8" style={{ fontSize: "clamp(0.9rem, 2vw, 1.5rem)", fontWeight: 700 }}>
                  Consumo per cápita de hongos en Latinoamérica
                </h3>
                <div className="px-0 sm:px-2 py-2">
                  {roiData.map((d, i) => (
                    <AnimatedHorizontalBar key={d.label} label={d.label} value={d.value} color={d.color} desc={d.desc} delay={i * 0.08} />
                  ))}
                </div>
              </div>

              {/* Stats panel */}
              <div
                className="lg:w-[26rem] p-6 sm:p-8 flex flex-col justify-between gap-6"
                style={{ background: "#1a1208", borderTop: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div>
                  <p className="text-[#C8572A] text-xs tracking-wider uppercase font-bold mb-3">🚀 Mercado en Expansión</p>
                  <p className="text-white mb-6" style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.2rem)", fontWeight: 700, lineHeight: 1.35 }}>
                    Alta demanda + baja oferta = <span style={{ color: "#C8572A" }}>oportunidad real de negocio</span>
                  </p>
                  <div className="space-y-4">
                    <div className="border-t border-white/10 pt-4">
                      <p className="text-white/40 text-[10px] uppercase tracking-wider mb-2">📈 Indicadores clave</p>
                      <ul className="text-white/80 text-sm space-y-2">
                        <li className="flex items-start gap-2"><span style={{ color: "#C8572A" }} aria-hidden="true">•</span> Consumo en crecimiento sostenido</li>
                        <li className="flex items-start gap-2"><span style={{ color: "#C8572A" }} aria-hidden="true">•</span> Baja producción nacional</li>
                        <li className="flex items-start gap-2"><span style={{ color: "#C8572A" }} aria-hidden="true">•</span> Mercado aún poco desarrollado</li>
                      </ul>
                    </div>
                    <div className="border-t border-white/10 pt-4">
                      <p className="text-white/40 text-[10px] uppercase tracking-wider mb-1">🎯 Oportunidad</p>
                      <p className="text-white font-medium text-sm leading-relaxed">Ingresar hoy permite posicionarse antes de la expansión del mercado.</p>
                    </div>
                  </div>
                </div>
                <a
                  href="https://wa.me/51900246403?text=Hola%2C%20estoy%20interesado(a)%20en%20esta%20oportunidad%20de%20MycoAndes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white text-sm font-semibold hover:opacity-90 active:scale-95 transition-all w-full justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300"
                  style={{ background: "#C8572A", boxShadow: "0 4px 18px rgba(200,87,42,0.4)" }}
                >
                  <WaIcon size={16} />
                  Quiero aprovechar esta oportunidad
                </a>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Feature row */}
        <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
          {[
            { icon: <TrendingUp size={20} aria-hidden="true" />, title: "Demanda creciente", desc: "Mayor interés en alimentos saludables y sostenibles." },
            { icon: <Star size={20} aria-hidden="true" />, title: "Oferta limitada", desc: "Producción local aún insuficiente para cubrir el mercado." },
            { icon: <CheckCircle size={20} aria-hidden="true" />, title: "Alto potencial de rentabilidad", desc: "Negocio escalable con baja saturación." },
          ].map((f, i) => (
            <FadeIn key={f.title} delay={i * 0.12}>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "#f0ebe0", color: "#C8572A" }}>{f.icon}</div>
                <div>
                  <h4 className="text-[#1a1208] mb-1" style={{ fontSize: "1rem", fontWeight: 600 }}>{f.title}</h4>
                  <p className="text-[#888] text-xs leading-relaxed">{f.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="mt-6 text-center">
            <p className="text-[#1a1208] inline-block px-4 py-2" style={{ fontSize: "1rem", fontWeight: 700 }}>
              🔥 Hoy es el mejor momento para iniciar en la producción de hongos en el Perú.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ background: "#0f0a05" }} className="py-10 px-5 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <img src={imgMycoAndes1} alt="MycoAndes" className="h-8 w-auto object-contain" loading="lazy" />
            </div>
            <p className="text-white/30 text-xs leading-relaxed max-w-xs">
              Empresa peruana especializada en cultivo de hongos comestibles y funcionales, inóculos, extractos y formación técnica en micología andina.
            </p>
            <p className="text-white/20 text-[10px] mt-2">© 2026 MycoAndes. Todos los derechos reservados.</p>
          </div>

          {/* Links */}
          <nav aria-label="Navegación footer">
            <div className="flex flex-wrap gap-3 sm:gap-5">
              {[
                { label: "Inóculos", href: "#productos" },
                { label: "Extractos", href: "#extractos" },
                { label: "Pasantías", href: "#pasantias" },
                { label: "Mercado Peruano", href: "#roi" },
                { label: "WhatsApp", href: "https://wa.me/51900246403" },
              ].map((l) => (
                <a key={l.label} href={l.href} className="text-white/40 text-xs hover:text-white/80 transition-colors">
                  {l.label}
                </a>
              ))}
            </div>
          </nav>

          {/* Social */}
          <div className="flex gap-3">
            <a href="#" aria-label="Facebook de MycoAndes" className="w-8 h-8 rounded-full flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all">
              <Facebook size={16} />
            </a>
            <a href="#" aria-label="Instagram de MycoAndes" className="w-8 h-8 rounded-full flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all">
              <Instagram size={16} />
            </a>
            <a
              href="https://wa.me/51900246403"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp de MycoAndes"
              className="w-8 h-8 rounded-full flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all"
            >
              <WaIcon size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [catalogoOpen, setCatalogoOpen] = useState(false);

  return (
    <div style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <SEOHead />
      <CatalogoModal open={catalogoOpen} onClose={() => setCatalogoOpen(false)} />
      <Navbar onOpenCatalogo={() => setCatalogoOpen(true)} />
      <main>
        <Hero onOpenCatalogo={() => setCatalogoOpen(true)} />
        <ProcessSection />
        <ProductsSection />
        <ExtractosSection />
        <PasantiasSection />
        <ROISection />
      </main>
      <Footer />
    </div>
  );
}
