import heroBgImg from "figma:asset/9c4cbe22ce2d747f9a9a2962d0585c6062e5f2ed.png";
import mycoAndesLogo from "figma:asset/294ee00a8682cdc481c282433e3f61b6e53edc95.png";
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
  ShoppingCart,
  Filter,
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
  Twitter,
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

// ─── Images ────────────────────────────────────────────────────────────────
const HERO_BG = heroBgImg;
const IMG_SEMILLA =
  "https://images.unsplash.com/photo-1622370387370-3eec28a387c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxveXN0ZXIlMjBtdXNocm9vbSUyMHNwb3JlcyUyMHNlZWRzfGVufDF8fHx8MTc3NTU3NzU3nww&ixlib=rb-4.1.0&q=80&w=400";
const IMG_COSECHA =
  "https://images.unsplash.com/photo-1770429939069-2f649afea536?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXJ2ZXN0aW5nJTIwbXVzaHJvb21zJTIwaGFuZHN8ZW58MXx8fHwxNzc1NTc3NTc1fDA&ixlib=rb-4.1.0&q=80&w=400";
const IMG_EMPAQUE =
  "https://images.unsplash.com/photo-1774709781920-cc80f33001d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNocm9vbSUyMHBhY2thZ2luZyUyMGV4cG9ydCUyMHByZW1pdW18ZW58MXx8fHwxNzc1NTc3NTc2fDA&ixlib=rb-4.1.0&q=80&w=400";
const IMG_LIONS_MANE =
  "https://images.unsplash.com/photo-1767606924632-81355485785f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaW9uJTI3cyUyMG1hbmUlMjBtdXNocm9vbSUyMHdoaXRlfGVufDF8fHx8MTc3NTU3NzU3OXww&ixlib=rb-4.1.0&q=80&w=400";
const IMG_SUSTRATO =
  "https://images.unsplash.com/photo-1542492604-cb7a37ff65f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNocm9vbSUyMHN1YnN0cmF0ZSUyMG15Y2VsaXVtJTIwYmxvY2t8ZW58MXx8fHwxNzc1NTc3NTgwfDA&ixlib=rb-4.1.0&q=80&w=400";
const IMG_SCIENTIST =
  "https://images.unsplash.com/photo-1695252095050-9b5818930169?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbnRpc3QlMjByZXNlYXJjaGVyJTIwbXVzaHJvb20lMjBncmVlbmhvdXNlfGVufDF8fHx8MTc3NTU3NzU4MHww&ixlib=rb-4.1.0&q=80&w=800";
const IMG_JAR =
  "https://images.unsplash.com/photo-1579742627217-9f8bda40080e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxveXN0ZXIlMjBtdXNocm9vbXMlMjBqYXIlMjBjdWx0aXZhdGlvbiUyMGdvbGRlbnxlbnwxfHx8fDE3NzU1Nzc1ODF8MA&ixlib=rb-4.1.0&q=80&w=400";
const IMG_INDOOR_FARM =
  "https://images.unsplash.com/photo-1762889278403-1d1a57d9a587?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNocm9vbSUyMGZhcm0lMjBpbmRvb3IlMjBncm93aW5nJTIwc2V0dXB8ZW58MXx8fHwxNzc1NTc3NTgxfDA&ixlib=rb-4.1.0&q=80&w=400";
const IMG_EXTRACTO_POLVO =
  "https://images.unsplash.com/photo-1566216867955-5b2e8c77e45f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNocm9vbSUyMHBvd2RlciUyMGV4dHJhY3QlMjBsYWJvcmF0b3J5JTIwZHJ5aW5nfGVufDF8fHx8MTc3NjM5NzAwOHww&ixlib=rb-4.1.0&q=80&w=1080";
const IMG_TINTURA =
  "https://images.unsplash.com/photo-1775576144823-a2a7c17cffbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZXJiYWwlMjB0aW5jdHVyZSUyMGFsY29ob2wlMjBleHRyYWN0aW9uJTIwZGFyayUyMGJvdHRsZXxlbnwxfHx8fDE3NzYzOTcwMDh8MA&ixlib=rb-4.1.0&q=80&w=1080";

// ─── Animation helpers ──────────────────────────────────────────────────────
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
  const isInView = useInView(ref, {
    once: true,
    margin: "-80px",
  });
  const dirMap = {
    up: { y: 40 },
    left: { x: -40 },
    right: { x: 40 },
    none: {},
  };
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...dirMap[direction] }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

// ─── WhatsApp SVG helper ──────────────────────────────────────────────────────
function WaIcon({ size = 16 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" style={{ flexShrink: 0 }}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.561 4.14 1.535 5.873L.057 23.428a.75.75 0 0 0 .916.916l5.555-1.478A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.718 9.718 0 0 1-4.953-1.355l-.355-.211-3.684.979.979-3.684-.211-.355A9.718 9.718 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
    </svg>
  );
}

// ─── Catalogo Modal Data ──────────────────────────────────────────────────────
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
    icon: <Leaf size={16} />,
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
    icon: <TrendingUp size={16} />,
    waMsg: "Hola%20%F0%9F%91%8B%20MycoAndes%2C%20estoy%20interesado%20en%20el%20KIT%20EMPRENDEDOR%20para%20producir%20y%20vender%20hongos.",
    featured: false,
  },
  {
    id: 3,
    num: "03",
    name: "COMBO PRODUCTOR",
    tagline: "Solución completa",
    includes: ["Inóculo", "Insumos básicos", "Bitácora", "Asesoría"],
    extra: [],
    price: "Consultar",
    badge: "🔥 RECOMENDADO",
    accentColor: "#f4a46a",
    badgeBg: "rgba(200,87,42,0.18)",
    icon: <Package size={16} />,
    waMsg: "Hola%20%F0%9F%91%8B%20MycoAndes%2C%20me%20interesa%20el%20COMBO%20PRODUCTOR%20%F0%9F%94%A5%20(soluci%C3%B3n%20completa).%20%C2%BFCu%C3%A1l%20me%20conviene%20m%C3%A1s%3F",
    featured: true,
  },
  {
    id: 4,
    num: "04",
    name: "SUSCRIPCIÓN DE INÓCULOS",
    tagline: "Producción continua",
    includes: ["Entrega mensual", "Descuento por volumen"],
    extra: [],
    price: "Consultar / mes",
    badge: "Mensual",
    accentColor: "#c4a7fa",
    badgeBg: "rgba(74,30,106,0.15)",
    icon: <Repeat size={16} />,
    waMsg: "Hola%20%F0%9F%91%8B%20MycoAndes%2C%20quiero%20informaci%C3%B3n%20sobre%20la%20SUSCRIPCI%C3%93N%20MENSUAL%20DE%20IN%C3%93CULOS%20%F0%9F%8D%84.",
    featured: false,
  },
  {
    id: 5,
    num: "05",
    name: "PACK DE INSUMOS",
    tagline: "Reposición rápida",
    includes: ["Guantes", "Bolsas", "Alcohol"],
    extra: [],
    price: "Consultar",
    badge: "Insumos",
    accentColor: "#a8d86a",
    badgeBg: "rgba(90,122,46,0.15)",
    icon: <ShoppingBag size={16} />,
    waMsg: "Hola%20%F0%9F%91%8B%20MycoAndes%2C%20necesito%20el%20PACK%20DE%20INSUMOS.%20%C2%BFQu%C3%A9%20incluye%20y%20cu%C3%A1l%20es%20el%20precio%3F",
    featured: false,
  },
  {
    id: 6,
    num: "06",
    name: "BITÁCORA DEL CULTIVADOR",
    tagline: "Controla tu producción",
    includes: ["Registro técnico", "Seguimiento de cultivos"],
    extra: [],
    price: "Consultar",
    badge: "Control",
    accentColor: "#f0c97a",
    badgeBg: "rgba(106,74,30,0.15)",
    icon: <BookOpen size={16} />,
    waMsg: "Hola%20%F0%9F%91%8B%20MycoAndes%2C%20me%20interesa%20la%20BIT%C3%81CORA%20DEL%20CULTIVADOR%20para%20controlar%20mi%20producci%C3%B3n.",
    featured: false,
  },
  {
    id: 7,
    num: "07",
    name: "CURSO + KIT",
    tagline: "Aprende + produce",
    includes: ["Taller práctico", "Kit incluido"],
    extra: [],
    price: "Consultar",
    badge: "Capacitación",
    accentColor: "#6ab0f4",
    badgeBg: "rgba(30,60,106,0.15)",
    icon: <GraduationCap size={16} />,
    waMsg: "Hola%20%F0%9F%91%8B%20MycoAndes%2C%20quiero%20informaci%C3%B3n%20sobre%20el%20CURSO%20%2B%20KIT%20%F0%9F%8D%84.%20Me%20gustar%C3%ADa%20aprender%20y%20producir.",
    featured: false,
  },
];

// ─── Catalogo Modal Component ─────────────────────────────────────────────────
function CatalogoModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="catalogo-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6"
          style={{
            background: "rgba(0,0,0,0.62)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          }}
          onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 24 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl"
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
              className="sticky top-0 z-10 flex items-center justify-between px-6 py-4"
              style={{
                background: "linear-gradient(180deg, #1a1208 80%, rgba(26,18,8,0) 100%)",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(200,87,42,0.18)", border: "1px solid rgba(200,87,42,0.35)" }}
                >
                  <span style={{ fontSize: "1.1rem" }}>🍄</span>
                </div>
                <div>
                  <p className="text-white/35 text-[10px] tracking-widest uppercase">MycoAndes · Versión Comercial</p>
                  <h2
                    className="text-white"
                    style={{ fontSize: "clamp(1rem, 2.2vw, 1.25rem)", fontWeight: 800, lineHeight: 1.2 }}
                  >
                    🛒 CATÁLOGO MYCOANDES
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
            <div className="px-6 pt-3 pb-1">
              <p className="text-white/35 text-xs leading-relaxed">
                Elige el producto ideal para tu nivel y objetivos. Cada botón te conecta directamente con nuestro equipo en WhatsApp 📲
              </p>
            </div>

            {/* Grid */}
            <div className="px-6 pb-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-3">
              {catalogoItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col rounded-xl overflow-hidden relative group"
                  style={{
                    background: item.featured
                      ? "linear-gradient(135deg, rgba(200,87,42,0.14) 0%, rgba(200,87,42,0.06) 100%)"
                      : "rgba(255,255,255,0.04)",
                    border: item.featured
                      ? "1px solid rgba(200,87,42,0.45)"
                      : "1px solid rgba(255,255,255,0.08)",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "0 14px 36px rgba(0,0,0,0.45)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                  }}
                >
                  {/* Featured ribbon */}
                  {item.featured && (
                    <div
                      className="absolute top-0 right-0 px-3 py-1 text-[9px] font-black tracking-widest text-white uppercase"
                      style={{ background: "#C8572A", borderRadius: "0 0.75rem 0 0.5rem" }}
                    >
                      🔥 RECOMENDADO
                    </div>
                  )}

                  <div className="p-4 flex flex-col flex-1">
                    {/* Top row */}
                    <div className="flex items-center gap-2 mb-2.5">
                      <span className="text-[10px] font-black tracking-widest" style={{ color: "rgba(255,255,255,0.18)" }}>
                        {item.num}
                      </span>
                      <div
                        className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: item.badgeBg, color: item.accentColor, border: `1px solid ${item.accentColor}33` }}
                      >
                        {item.icon}
                      </div>
                      {!item.featured && (
                        <span
                          className="ml-auto text-[9px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wide"
                          style={{ background: item.badgeBg, color: item.accentColor, border: `1px solid ${item.accentColor}33` }}
                        >
                          {item.badge}
                        </span>
                      )}
                    </div>

                    {/* Name */}
                    <h3 className="text-white mb-1 leading-snug" style={{ fontSize: "0.82rem", fontWeight: 800 }}>
                      {item.name}
                    </h3>

                    {/* Tagline */}
                    <p className="mb-3" style={{ fontSize: "0.7rem", color: item.accentColor, fontStyle: "italic" }}>
                      👉 {item.tagline}
                    </p>

                    {/* Includes */}
                    <div className="flex-1 mb-3 space-y-1.5">
                      {item.includes.map((inc, i) => (
                        <div key={i} className="flex items-start gap-1.5">
                          <CheckCircle size={10} style={{ color: "#7dd68a", flexShrink: 0, marginTop: 2 }} />
                          <span className="text-white/60 text-[11px] leading-snug">{inc}</span>
                        </div>
                      ))}
                      {item.extra.map((ex, i) => (
                        <div key={i} className="flex items-start gap-1.5">
                          <span className="text-white/25 text-[10px]" style={{ marginTop: 1 }}>•</span>
                          <span className="text-white/38 text-[10px] leading-snug italic">{ex}</span>
                        </div>
                      ))}
                    </div>

                    {/* Price */}
                    <div
                      className="flex items-center gap-1.5 mb-3 px-2.5 py-1.5 rounded-lg"
                      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
                    >
                      <span className="text-white/35 text-[10px]">💰 Precio:</span>
                      <span className="text-[11px] font-bold" style={{ color: item.featured ? "#f4a46a" : item.accentColor }}>
                        {item.price}
                      </span>
                    </div>

                    {/* CTA */}
                    <a
                      href={`https://wa.me/51993663792?text=${item.waMsg}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-white text-[11px] font-bold hover:opacity-90 active:scale-95 transition-all w-full justify-center"
                      style={{
                        background: item.featured ? "#C8572A" : "rgba(200,87,42,0.22)",
                        border: item.featured ? "none" : "1px solid rgba(200,87,42,0.4)",
                        boxShadow: item.featured ? "0 4px 18px rgba(200,87,42,0.38)" : "none",
                      }}
                    >
                      <WaIcon size={13} />
                      Consultar por WhatsApp 📲
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div
              className="px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3"
              style={{ borderTop: "1px solid rgba(255,255,255,0.06)", background: "rgba(0,0,0,0.2)" }}
            >
              <div className="flex items-center gap-2">
                <Leaf size={12} style={{ color: "#7dd68a" }} />
                <span className="text-white/35 text-[10px]">
                  Respuesta en menos de 24 h · Asesoría personalizada incluida
                </span>
              </div>
              <a
                href="https://wa.me/51993663792?text=Hola%20%F0%9F%91%8B%20gracias%20por%20escribir%20a%20MycoAndes%20%F0%9F%8D%84%0AElige%20una%20opci%C3%B3n%3A%0A1%EF%B8%8F%E2%83%A3%20Empezar%20desde%20cero%0A2%EF%B8%8F%E2%83%A3%20Producir%20a%20nivel%20negocio%0A3%EF%B8%8F%E2%83%A3%20Comprar%20insumos%0A4%EF%B8%8F%E2%83%A3%20Capacitaci%C3%B3n"
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
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setOpen(false);
    if (href === "#catalogo") {
      onOpenCatalogo();
      return;
    }
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const id = href.replace("#", "");
    const target = document.getElementById(id);
    if (!target) return;
    const navHeight = navRef.current?.offsetHeight ?? 0;
    const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const navItems = [
    { label: "Asistencia técnica", href: "#proceso", isCatalogo: false },
    { label: "Inóculos", href: "#productos", isCatalogo: false },
    { label: "Extractos", href: "#extractos", isCatalogo: false },
    { label: "Pasantías", href: "#pasantias", isCatalogo: false },
    { label: "Gestión de Granja", href: "#roi", isCatalogo: false },
    { label: "Catálogo MycoAndes", href: "#catalogo", isCatalogo: true },
  ];

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(15,10,5,0.95)"
          : "rgba(15,10,5,0.85)",
        backdropFilter: "blur(10px)",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.08)"
          : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col">

        {/* ── Main bar: Logo · Nav (desktop) · CTA ── */}
        <div className="flex items-center justify-between h-16 sm:h-22">

          {/* Logo */}
          <button onClick={() => scrollToSection("#")} className="flex items-center gap-2 flex-shrink-0">
            <img src={mycoAndesLogo} alt="MycoAndes" className="h-10 sm:h-38 w-auto" style={{ filter: "brightness(0) invert(1)" }} />
          </button>

          {/* Desktop nav links */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              item.isCatalogo ? (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                  className="text-xs tracking-wider uppercase cursor-pointer transition-all"
                  style={{
                    color: "#f4a46a",
                    border: "1px solid rgba(200,87,42,0.45)",
                    borderRadius: "5px",
                    padding: "3px 10px",
                    background: "rgba(200,87,42,0.1)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "rgba(200,87,42,0.22)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "rgba(200,87,42,0.1)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "#f4a46a";
                  }}
                >
                  🍄 {item.label}
                </a>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                  className="text-white/70 hover:text-white text-xs tracking-wider uppercase transition-colors cursor-pointer"
                >
                  {item.label}
                </a>
              )
            ))}
          </nav>

          {/* CTA — visible en todos los tamaños */}
          <a
            href="https://wa.me/51993663792?text=Hola%20estoy%20interesado(a)%20en"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded text-white text-[10px] sm:text-xs tracking-wider uppercase border border-white/30 hover:bg-white/10 transition-colors flex-shrink-0"
          >
            <WaIcon size={13} />
            Reservar Ahora
          </a>
        </div>

        {/* ── Mobile nav links strip (debajo del logo) ── */}
        <nav
          className="md:hidden flex overflow-x-auto gap-5 pb-2"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
              className="text-[10px] tracking-wider uppercase whitespace-nowrap flex-shrink-0 transition-colors cursor-pointer pb-0.5"
              style={item.isCatalogo ? { color: "#f4a46a", fontWeight: 700 } : { color: "rgba(255,255,255,0.65)" }}
            >
              {item.isCatalogo ? `🍄 ${item.label}` : item.label}
            </a>
          ))}
        </nav>

      </div>
    </nav>
  );
}

// ─── Hero ────────────────────────────────────────────────────────────────────
function Hero({ onOpenCatalogo }: { onOpenCatalogo: () => void }) {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "#0f0a05" }}
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={HERO_BG}
          alt="Hongos"
          className="w-full h-full object-cover opacity-50"
          style={{ objectPosition: "center" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(10,6,2,0.65) 40%, rgba(10,6,2,0.15) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 pt-20 pb-16">
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
            style={{
              background: "#1e4a2a",
              color: "#6edd8c",
              border: "1px solid #2d6640",
            }}
          >
            Mico-Tecnología Avanzada
          </motion.span>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-white mb-5"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              lineHeight: 1.15,
              fontWeight: 600,
            }}
          >
            Aprende, produce y escala tu cultivo de hongos con{" "}
            <em
              className="not-italic"
              style={{
                color: "#C8572A",
                fontStyle: "italic",
                fontFamily: "Georgia, serif",
              }}
            >
              MycoAndes
            </em>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-white/60 mb-8 max-w-sm"
            style={{ lineHeight: 1.6, fontSize: "0.9rem" }}
          >
            Produce HONGOS con técnologia validada en campo
            Capacitación práctica y
            experiencias en campo.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-3"
          >
            <a
              href="#productos"
              onClick={(e) => {
                e.preventDefault();
                const target = document.getElementById("productos");
                const nav = document.querySelector("nav");
                const navHeight = nav ? (nav as HTMLElement).offsetHeight : 0;
                if (target) {
                  const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
                  window.scrollTo({ top, behavior: "smooth" });
                }
              }}
              className="px-5 py-2.5 rounded text-white text-sm font-medium hover:opacity-90 transition-opacity"
              style={{ background: "#C8572A" }}
            >
              Ver Productos
            </a>
            <a
              href="#pasantias"
              onClick={(e) => {
                e.preventDefault();
                const target = document.getElementById("pasantias");
                const nav = document.querySelector("nav");
                const navHeight = nav ? (nav as HTMLElement).offsetHeight : 0;
                if (target) {
                  const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
                  window.scrollTo({ top, behavior: "smooth" });
                }
              }}
              className="px-5 py-2.5 rounded text-white text-sm border border-white/30 hover:bg-white/10 transition-colors"
            >
              Conocer Pasantías
            </a>
            {/* Trigger 2 → Catálogo Modal */}
            <button
              onClick={onOpenCatalogo}
              className="px-5 py-2.5 rounded text-sm font-medium transition-all active:scale-95"
              style={{
                color: "#f4a46a",
                border: "1px solid rgba(200,87,42,0.45)",
                background: "rgba(200,87,42,0.08)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "rgba(200,87,42,0.18)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "rgba(200,87,42,0.08)";
              }}
            >
              Catálogo Completo 🍄
            </button>
          </motion.div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 flex flex-wrap gap-6"
        >
          {[
           
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div
                className="text-white font-bold"
                style={{ fontSize: "1.6rem" }}
              >
                {s.value}
              </div>
              <div className="text-white/50 text-xs tracking-wide">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40"
      >
        <div className="w-px h-8 bg-white" />
        <div className="w-1.5 h-1.5 rounded-full bg-white" />
      </motion.div>
    </section>
  );
}

// ─── Process Section ─────────────────────────────────────────────────────────
const processSteps = [
  {
    num: "01",
    icon: <Leaf size={22} />,
    title: "BASE DE UNA PRODUCCIÓN EXITOSA",
    subtitle: "Inóculos de alta calidad genética",
    desc: "Utilizamos inóculos seleccionados que garantizan un alto rendimiento, resistencia y uniformidad en tu cultivo.",
    benefit: "El punto de partida para una producción rentable.",
    img: IMG_SEMILLA,
  },
  {
    num: "02",
    icon: <FlaskConical size={22} />,
    title: "OPTIMIZACIÓN Y ACOMPAÑAMIENTO TÉCNICO",
    subtitle: "Crecimiento controlado y eficiente",
    desc: "Te acompañamos desde la incubación hasta el desarrollo del cultivo, aplicando buenas prácticas para maximizar tu producción y reducir pérdidas.",
    benefit: "No produces solo, produces con respaldo.",
    img: IMG_INDOOR_FARM,
  },
  {
    num: "03",
    icon: <Scissors size={22} />,
    title: "PRODUCCIÓN RENTABLE Y DE CALIDAD",
    subtitle: "Cosechas consistentes y competitivas",
    desc: "Implementamos técnicas que aseguran fructificaciones uniformes, saludables y listas para el mercado.",
    benefit: "Más producción, mejor calidad, mayor ingreso.",
    img: IMG_COSECHA,
  },
  {
    num: "04",
    icon: <Package size={22} />,
    title: "LISTO PARA EL MERCADO",
    subtitle: "Empaque y valorización del producto",
    desc: "Te guiamos en procesos de empaque y manejo postcosecha para asegurar calidad, trazabilidad y mejor presentación comercial.",
    benefit: "Tu producto listo para venderse mejor.",
    img: IMG_EMPAQUE,
  },
];

function ProcessSection() {
  const valueProps = [
    {
      icon: <Users2 size={15} />,
      title: "ACOMPAÑAMIENTO TÉCNICO REAL",
      desc: "Estamos contigo en cada paso del proceso.",
    },
    {
      icon: <TrendingUp size={15} />,
      title: "RESULTADOS COMPROBADOS",
      desc: "Productores que aumentan su rendimiento y rentabilidad.",
    },
    {
      icon: <Shield size={15} />,
      title: "CALIDAD Y CONFIANZA GARANTIZADA",
      desc: "Inóculos seleccionados y procesos con altos estándares.",
    },
    {
      icon: <Leaf size={15} />,
      title: "SOSTENIBILIDAD Y RESPETO",
      desc: "Cuidamos el entorno para un cultivo responsable.",
    },
  ];

  return (
    <section
      id="proceso"
      style={{ background: "#f5f0e8" }}
      className="py-12 sm:py-14 px-4 sm:px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* ── Header ── */}
        <FadeIn>
          <div className="text-center mb-8">
            <h2
              className="text-[#1a1208]"
              style={{
                fontSize: "clamp(1.2rem, 2.8vw, 1.9rem)",
                fontWeight: 900,
                lineHeight: 1.2,
              }}
            >PROCESO PRODUCTIVO: <span style={{ color: "#C8572A" }}><span className="italic">De la siembra al mercado</span></span></h2>
            <p
              className="mt-1 text-[#5a4a30]"
              style={{
                fontSize: "clamp(0.8rem, 1.4vw, 0.95rem)",
                fontFamily: "Georgia, serif",
                fontStyle: "italic",
              }}
            >🌿 con resultados reales 🌿</p>
            <p
              className="mt-2 text-[#6b5c3e] max-w-lg mx-auto leading-relaxed"
              style={{ fontSize: "0.75rem" }}
            >
              Acompañamos cada etapa del cultivo de hongos para asegurar una producción
              eficiente, rentable y de alta calidad.
            </p>
          </div>
        </FadeIn>

        {/* ── 4 Steps ── */}
        <div className="relative">
          {/* Dashed connecting line — desktop only */}
          

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-6 lg:gap-x-5">
            {processSteps.map((step, i) => (
              <FadeIn key={step.num} delay={i * 0.1}>
                <div className="flex flex-col h-full">

                  {/* ① Icon circle */}
                  <div className="relative z-10 flex items-center mb-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center border-2 bg-white flex-shrink-0"
                      style={{
                        borderColor: "#C8572A",
                        color: "#C8572A",
                        boxShadow: "0 2px 10px rgba(200,87,42,0.15)",
                      }}
                    >
                      {step.icon}
                    </div>
                  </div>

                  {/* ② Number + Title + Subtitle — fixed min-height so images align */}
                  <div
                    className="flex items-start gap-2 mb-3"
                    style={{ minHeight: "3rem" }}
                  >
                    <span
                      className="flex-shrink-0 text-[#C8572A]"
                      style={{ fontSize: "2.4rem", fontWeight: 900, lineHeight: 1 }}
                    >
                      {step.num}
                    </span>
                    <div>
                      <h3
                        className="text-[#1a1208] leading-tight"
                        style={{ fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.01em" }}
                      >
                        {step.title}
                      </h3>
                      <p
                        className="mt-0.5"
                        style={{ fontSize: "0.65rem", color: "#C8572A", fontStyle: "italic" }}
                      >
                        {step.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* ③ Image with > arrow */}
                  <div className="relative mb-3 flex-shrink-0">
                    <div className="rounded-lg overflow-hidden" style={{ height: "9rem" }}>
                      <img
                        src={step.img}
                        alt={step.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    {i < processSteps.length - 1 && (
                      <div
                        className="hidden lg:flex absolute top-1/2 -right-3.5 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-white items-center justify-center"
                        style={{
                          border: "1px solid rgba(200,87,42,0.25)",
                          boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
                        }}
                      >
                        <ChevronRight size={13} style={{ color: "#C8572A" }} />
                      </div>
                    )}
                  </div>

                  {/* ④ Description */}
                  <p
                    className="text-[#5a4a30] leading-relaxed mb-2"
                    style={{ fontSize: "0.68rem" }}
                  >
                    {step.desc}
                  </p>

                  {/* ⑤ Benefit */}
                  <div
                    className="flex items-start gap-1.5 mt-auto rounded-md px-2.5 py-1.5"
                    style={{ background: "#edf7f1" }}
                  >
                    <CheckCircle
                      size={12}
                      style={{ color: "#2d7a3c", flexShrink: 0, marginTop: 1 }}
                    />
                    <p
                      className="text-[#2a5c30] leading-snug"
                      style={{ fontSize: "0.65rem", fontWeight: 700 }}
                    >
                      {step.benefit}
                    </p>
                  </div>

                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* ── Bottom value props ── */}
        <FadeIn delay={0.3}>
          <div
            className="mt-7 rounded-xl overflow-hidden relative shadow-sm"
            style={{
              background: "white",
              border: "1px solid #e8e0d4",
            }}
          >
            <div className="grid grid-cols-2 lg:grid-cols-4">
              {valueProps.map((vp, i) => (
                <div
                  key={vp.title}
                  className="flex items-start gap-2 p-3.5 sm:p-4"
                  style={{
                    borderRight: i < 3 ? "1px solid #f0ebe0" : "none",
                  }}
                >
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "#e8f5ec", color: "#2d7a3c" }}
                  >
                    {vp.icon}
                  </div>
                  <div>
                    <p
                      className="text-[#1a1208] mb-0.5 leading-tight"
                      style={{ fontSize: "0.9rem", fontWeight: 800, letterSpacing: "0.04em" }}
                    >
                      {vp.title}
                    </p>
                    <p className="text-[#888] leading-relaxed" style={{ fontSize: "0.62rem" }}>
                      {vp.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Mushroom medallion */}
            <div
              className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full overflow-hidden items-center justify-center border-4 border-white z-10 shadow-md bg-[#00000000]"
            >
              <img
                src={imgMycoAndes1}
                alt="Hongo funcional"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </FadeIn>

        {/* ── Bottom banner ── */}
        <FadeIn delay={0.4}>
          <div
            className="mt-3 rounded-lg py-2.5 px-5 flex items-center justify-center gap-2 flex-wrap"
            style={{ background: "#3d4a2e" }}
          >
            <Leaf size={13} style={{ color: "#7dd68a", flexShrink: 0 }} />
            <p className="text-center" style={{ fontSize: "0.75rem" }}>
              <span className="text-white" style={{ fontWeight: 700 }}>
                NO SOLO VENDEMOS INÓCULOS.{" "}
              </span>
              <span style={{ color: "#f4a46a", fontWeight: 700 }}>
                FORMAMOS PRODUCTORES DE HONGOS EXITOSOS.
              </span>
            </p>
            <Leaf size={13} style={{ color: "#7dd68a", flexShrink: 0 }} />
          </div>
        </FadeIn>

      </div>
    </section>
  );
}

// ─── Products Section ────────────────────────────────────────────────────────
const allProducts = [
  {
    id: 4,
    name: "Inóculo de Seta Ostra Blanca",
    scientificName: "Pleurotus ostreatus",
    price: 25.0,
    currency: "PEN",
    img: imgOstraBlanco,
    tags: ["Semilla", "Blanco"],
    trustTags: ["⭐ Alto rendimiento", "👨‍🌾 Ideal para iniciantes", "🔬 Validado en campo"],
    badge: "Más vendido",
    badgeColor: "#C8572A",
    desc: "Ideal para productores que buscan rápida colonización, alta productividad y fácil manejo en cultivo.",
    benefit: "Alta tasa de producción y excelente adaptación climática",
    category: "semillas",
  },
  {
    id: 5,
    name: "Inóculo de Seta Rosada",
    scientificName: "Pleurotus djamor var. salmoneostramineus",
    price: 30.0,
    currency: "PEN",
    img: imgSetaRosada,
    tags: ["Semilla", "Rosada"],
    trustTags: ["⭐ Alto rendimiento", "🌸 Mercado diferenciado", "🔬 Validado en campo"],
    badge: null,
    badgeColor: null,
    desc: "Ideal para productores que buscan diferenciarse con una especie visualmente atractiva y de alta demanda en mercados gourmet.",
    benefit: "Alta demanda en restaurantes y mercados especializados",
    category: "semillas",
  },
  {
    id: 6,
    name: "Inóculo de Seta Rey",
    scientificName: "Pleurotus eryngii",
    price: 35.0,
    currency: "PEN",
    img: imgSetaRey,
    tags: ["Semilla", "Gourmet"],
    trustTags: ["💎 Mayor valor comercial", "🔬 Validado en campo", "👨‍🌾 Recomendado para productores"],
    badge: "Premium",
    badgeColor: "#8B4513",
    desc: "La especie más cotizada del mercado. Ideal para productores que apuntan al sector gourmet con alto retorno por kilogramo.",
    benefit: "Mayor precio de venta por kg producido en el mercado local",
    category: "semillas",
  },
  {
    id: 7,
    name: "Inóculo de Shiitake",
    scientificName: "Lentinula edodes",
    price: 35.0,
    currency: "PEN",
    img: imgShiitake,
    tags: ["Semilla", "Medicinal"],
    trustTags: ["🌿 Especie medicinal", "🔬 Validado en campo", "👨‍🌾 Recomendado para productores"],
    badge: "Medicinal",
    badgeColor: "#5a7a2e",
    desc: "Especie medicinal de alto valor. Ideal para productores que buscan diversificar con hongos funcionales de creciente demanda.",
    benefit: "Reconocido por sus propiedades funcionales y alta demanda sostenida",
    category: "semillas",
  },
  {
    id: 8,
    name: "Pleurotus citrinopileatus (Ostra Amarilla)",
    scientificName: "Pleurotus citrinopileatus",
    price: 30.0,
    currency: "PEN",
    img: imgAmarilla,
    tags: ["Semilla", "Amarilla"],
    trustTags: ["⭐ Alto rendimiento", "🌿 Especie exótica", "🔬 Validado en campo"],
    badge: null,
    badgeColor: null,
    desc: "Ideal para productores que buscan rápida colonización, alta productividad y fácil manejo en cultivo andino.",
    benefit: "Alta tasa de producción y excelente adaptación al clima andino",
    category: "semillas",
  },
  {
    id: 9,
    name: "Inóculo de Seta Ostra Gris",
    scientificName: "Pleurotus ostreatus var. gris",
    price: 25.0,
    currency: "PEN",
    img: imgOstraGris,
    tags: ["Semilla", "Gris"],
    trustTags: ["⭐ Máxima adaptabilidad", "👨‍🌾 Ideal para iniciantes", "🔬 Validado en campo"],
    badge: null,
    badgeColor: null,
    desc: "La especie más resistente y versátil. Ideal para cualquier nivel de experiencia y condición climática.",
    benefit: "Máxima adaptabilidad y resistencia en condiciones de campo",
    category: "semillas",
  },
  {
    id: 10,
    name: "Inóculo de Champiñón",
    scientificName: "Agaricus bisporus",
    price: 0,
    currency: "",
    img: imgChampignon,
    tags: ["Semilla", "Blanco"],
    trustTags: ["⭐ Clásico del mercado", "🍄 Alta demanda", "🔬 Validado en campo"],
    badge: "Nuevo",
    badgeColor: "#C8572A",
    desc: "El hongo más conocido y consumido a nivel mundial. Ideal para productores que buscan volumen y rotación constante en el mercado local.",
    benefit: "Consumo masivo garantizado y rotación rápida",
    category: "semillas",
  },
];

const categories = [
  "Todos",
  "semillas",
  "sustratos",
  "insumos",
];

function ProductsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  const sorted = [...allProducts];
  const total = sorted.length;
  const safeIndex = total > 0 ? ((currentIndex % total) + total) % total : 0;
  const product = sorted[safeIndex];

  // Preload ALL product images on mount so switching is instant
  useEffect(() => {
    sorted.forEach((p, i) => {
      const img = new window.Image();
      img.src = p.img;
      img.onload = () => {
        setLoadedImages((prev) => new Set(prev).add(i));
      };
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goTo = (next: number, direction: 1 | -1) => {
    setDir(direction);
    setCurrentIndex(((next % total) + total) % total);
  };

  if (!product) return null;

  return (
    <section
      id="productos"
      className="relative h-[100dvh] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Stacked background layers — all rendered, only active one visible */}
      {sorted.map((p, i) => (
        <div
          key={p.id + "-bg"}
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${p.img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(28px) brightness(0.45) saturate(1.4)",
            transform: "scale(1.12)",
            opacity: i === safeIndex ? 1 : 0,
            transition: "opacity 0.6s ease",
            willChange: "opacity",
          }}
        />
      ))}
      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(10,6,2,0.25)" }}
      />

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col items-center px-4 py-6 sm:py-8">

        {/* Header */}
        <FadeIn>
          <div className="text-center mb-5">
            <h2
              className="text-white"
              style={{
                fontSize: "clamp(1.15rem, 2.5vw, 1.75rem)",
                fontWeight: 700,
                lineHeight: 1.3,
              }}
            >
              INÓCULOS MycoAndes: La Base de tu Rentabilidad
            </h2>
            <p className="text-white/65 text-sm mt-1.5">
              Elige el inóculo ideal para iniciar o escalar tu producción
            </p>
          </div>
        </FadeIn>

        {/* Carousel */}
        <div className="relative w-full max-w-4xl flex items-center justify-center">

          {/* Left arrow */}
          <button
            onClick={() => goTo(currentIndex - 1, -1)}
            className="absolute left-0 z-20 flex items-center justify-center rounded-full transition-all hover:scale-110"
            style={{
              width: 44, height: 44,
              background: "rgba(255,255,255,0.12)",
              border: "1.5px solid rgba(255,255,255,0.25)",
              color: "rgba(255,255,255,0.85)",
              backdropFilter: "blur(8px)",
            }}
            aria-label="Anterior"
          >
            <ChevronRight size={20} style={{ transform: "rotate(180deg)" }} />
          </button>

          {/* Card */}
          <div className="w-full px-12 sm:px-14">
            <motion.div
              key={product.id}
              initial={{ opacity: 0, x: dir * 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="w-full rounded-2xl overflow-hidden flex flex-col sm:flex-row group"
              style={{
                background: "rgba(255,255,255,0.09)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.18)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
              }}
            >
              {/* Image */}
              <div className="relative sm:w-5/12 h-44 sm:h-auto overflow-hidden flex-shrink-0">
                {sorted.map((p, i) => (
                  <img
                    key={p.id}
                    src={p.img}
                    alt={p.name}
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{
                      opacity: i === safeIndex ? 1 : 0,
                      transition: "opacity 0.4s ease",
                      willChange: "opacity",
                      transform: i === safeIndex ? "scale(1)" : "scale(1.03)",
                      transitionProperty: "opacity, transform",
                      transitionDuration: "0.5s",
                    }}
                    loading="eager"
                    decoding="async"
                  />
                ))}
                {product.badge && (
                  <span
                    className="absolute top-3 left-3 px-2 py-0.5 rounded text-white text-[10px] font-semibold tracking-wide uppercase z-10"
                    style={{ background: (product as any).badgeColor! }}
                  >
                    {product.badge}
                  </span>
                )}
                {/* Counter */}
                <div
                  className="absolute bottom-3 left-3 px-2.5 py-1 rounded text-white text-[11px] font-medium z-10"
                  style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(6px)" }}
                >
                  {safeIndex + 1} / {total}
                </div>
              </div>

              {/* Content */}
              <div className="sm:w-7/12 p-5 sm:p-7 flex flex-col justify-between">
                <div>
                  {/* Trust tags */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {(product as any).trustTags?.map((tag: string) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-full text-[10px] font-medium"
                        style={{ background: "rgba(200,87,42,0.2)", color: "#f4a46a", border: "1px solid rgba(200,87,42,0.3)" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {/* Name */}
                  <h3
                    className="text-white mb-0.5"
                    style={{ fontSize: "clamp(0.95rem, 2.2vw, 1.2rem)", fontWeight: 700, lineHeight: 1.3 }}
                  >
                    {product.name}
                  </h3>
                  <p className="text-white/45 text-[11px] mb-2 italic">
                    {(product as any).scientificName}
                  </p>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {product.desc}
                  </p>
                  {/* Benefit line */}
                  <div className="flex items-center gap-1.5 mt-2.5">
                    <TrendingUp size={13} style={{ color: "#7dd68a", flexShrink: 0 }} />
                    <span className="text-[11px]" style={{ color: "#7dd68a" }}>
                      {(product as any).benefit}
                    </span>
                  </div>
                </div>

                <div className="mt-4">
                  {/* CTA Button */}
                  <a
                    href={`https://wa.me/51993663792?text=Hola,%20quiero%20este%20inóculo:%20${encodeURIComponent(product.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-7 py-3 rounded-lg text-white text-sm font-semibold hover:opacity-90 active:scale-95 transition-all w-full sm:w-auto justify-center"
                    style={{ background: "#C8572A", boxShadow: "0 4px 18px rgba(200,87,42,0.4)" }}
                  >
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style={{ flexShrink: 0 }}>
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.561 4.14 1.535 5.873L.057 23.428a.75.75 0 0 0 .916.916l5.555-1.478A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.718 9.718 0 0 1-4.953-1.355l-.355-.211-3.684.979.979-3.684-.211-.355A9.718 9.718 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
                    </svg>
                    Quiero este inóculo
                  </a>
                  {/* Value-add lines */}
                  <div className="flex flex-col gap-1 mt-3">
                    <span className="text-[11px] text-white/55 flex items-center gap-1.5">
                      <CheckCircle size={11} style={{ color: "#7dd68a", flexShrink: 0 }} />
                      Incluye asesoría básica de uso
                    </span>
                    <span className="text-[11px] text-white/55 flex items-center gap-1.5">
                      <CheckCircle size={11} style={{ color: "#7dd68a", flexShrink: 0 }} />
                      Recomendaciones técnicas iniciales
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right arrow */}
          <button
            onClick={() => goTo(currentIndex + 1, 1)}
            className="absolute right-0 z-20 flex items-center justify-center rounded-full transition-all hover:scale-110"
            style={{
              width: 44, height: 44,
              background: "rgba(255,255,255,0.12)",
              border: "1.5px solid rgba(255,255,255,0.25)",
              color: "rgba(255,255,255,0.85)",
              backdropFilter: "blur(8px)",
            }}
            aria-label="Siguiente"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-5">
          {sorted.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > currentIndex ? 1 : -1)}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === safeIndex ? 22 : 8,
                height: 8,
                background: i === safeIndex ? "#C8572A" : "rgba(255,255,255,0.35)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Extractos Section ───────────────────────────────────────────────────────
const extractoSteps = [
  {
    num: "01",
    icon: <Wind size={22} />,
    title: "Deshidratación y Molienda",
    desc: "Los cuerpos fructíferos se secan a temperaturas controladas (40–55 °C) para preservar sus compuestos bioactivos. Luego se trituran hasta obtener un polvo fino que aumenta el área de contacto con el solvente.",
    tag: "Biomasa",
    tagColor: "#5a3e1b",
    tagBg: "#f0ebe0",
  },
  {
    num: "02",
    icon: <Droplets size={22} />,
    title: "Extracción Acuosa",
    desc: "El polvo se somete a decocción en agua caliente (70–100 °C) para romper las paredes de quitina y liberar los beta-glucanos, los principales compuestos asociados al soporte inmunológico y adaptogénico.",
    tag: "Beta-Glucanos",
    tagColor: "#1e4a6a",
    tagBg: "#e0f0f8",
  },
  {
    num: "03",
    icon: <FlaskConical size={22} />,
    title: "Extracción Alcohólica",
    desc: "Maceración en etanol de alta pureza para disolver compuestos liposolubles como triterpenos y esteroles, inaccesibles por vía acuosa. Proceso esencial para Reishi y Melena de León.",
    tag: "Triterpenos",
    tagColor: "#4a1e6a",
    tagBg: "#f0e0f8",
  },
  {
    num: "04",
    icon: <Layers size={22} />,
    title: "Doble Extracción — Espectro Completo",
    desc: "Estándar de oro de la industria. Los líquidos acuoso y alcohólico se combinan y concentran para crear un extracto en polvo de hasta 10:1, capturando el perfil bioactivo total del hongo funcional.",
    tag: "Extracto 10:1",
    tagColor: "#6a1e1e",
    tagBg: "#f8e0e0",
  },
];

function ExtractosSection() {
  return (
    <section
      id="extractos"
      className="relative overflow-hidden py-20 px-4 sm:px-6"
      style={{ background: "#0f0a05" }}
    >
      {/* Fondo difuminado */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `url(${IMG_EXTRACTO_POLVO})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(50px) saturate(0.5)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(15,10,5,0.90) 0%, rgba(15,10,5,0.62) 50%, rgba(15,10,5,0.93) 100%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <FadeIn>
          <div className="mb-14">
            <span
              className="inline-block px-3 py-1 rounded text-xs tracking-widest uppercase mb-4"
              style={{
                background: "#1e2a1a",
                color: "#7dd68a",
                border: "1px solid #2d4030",
              }}
            >
              Línea de Valor Agregado · Bienestar &amp; Nutrición Funcional
            </span>
            <h2
              className="text-white mb-4"
              style={{
                fontSize: "clamp(1.5rem, 3.5vw, 2.4rem)",
                fontWeight: 700,
                lineHeight: 1.25,
              }}
            >
              Extractos de hongos:{" "}
              <span style={{ color: "#C8572A" }}>el siguiente nivel</span> del valor micológico
            </h2>
            <p
              className="text-white/60 max-w-2xl"
              style={{ fontSize: "0.9rem", lineHeight: 1.7 }}
            >
              Transforma el conocimiento del cultivo en productos de alto valor con aplicaciones en salud, bienestar y nutrición.
            </p>
          </div>
        </FadeIn>

        {/* Species cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12">
          {[
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
          ].map((s, i) => (
            <FadeIn key={s.name} delay={i * 0.1}>
              <div
                className="rounded-2xl p-6 flex flex-col h-full hover:-translate-y-1 transition-transform duration-300"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <div className="text-3xl mb-3">{s.emoji}</div>
                <span
                  className="inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wide mb-3 self-start"
                  style={{ background: s.focusBg, color: s.focusColor, border: `1px solid ${s.focusColor}33` }}
                >
                  {s.focus}
                </span>
                <h3 className="text-white mb-0.5" style={{ fontWeight: 700, fontSize: "1.05rem" }}>
                  {s.name}
                </h3>
                <p className="text-white/40 text-[11px] italic mb-2">{s.scientific}</p>
                <p className="text-white/60 text-xs leading-relaxed flex-1 mb-4">{s.desc}</p>
                <div className="flex items-center justify-between mt-auto flex-wrap gap-2 mb-5">
                  <span
                    className="text-[10px] px-2 py-0.5 rounded"
                    style={{ background: "rgba(200,87,42,0.15)", color: "#f4a46a", border: "1px solid rgba(200,87,42,0.25)" }}
                  >
                    {s.tag}
                  </span>
                  <span className="text-white/35 text-[10px]">{s.format}</span>
                </div>
                {/* WhatsApp CTA */}
                <a
                  href={`https://wa.me/51993663792?text=Hola,%20quiero%20informacion%20sobre%20el%20extracto%20de%20${encodeURIComponent(s.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-white text-xs font-semibold hover:opacity-90 active:scale-95 transition-all w-full justify-center"
                  style={{ background: "#C8572A", boxShadow: "0 4px 14px rgba(200,87,42,0.3)" }}
                >
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" style={{ flexShrink: 0 }}>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.561 4.14 1.535 5.873L.057 23.428a.75.75 0 0 0 .916.916l5.555-1.478A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.718 9.718 0 0 1-4.953-1.355l-.355-.211-3.684.979.979-3.684-.211-.355A9.718 9.718 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
                  </svg>
                  Consultar por WhatsApp
                </a>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Mensaje clave */}
        <FadeIn delay={0.2}>
          <div
            className="rounded-2xl px-8 py-6 mb-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-8"
            style={{
              background: "rgba(200,87,42,0.1)",
              border: "1px solid rgba(200,87,42,0.3)",
            }}
          >
            <div className="text-4xl flex-shrink-0">🧬</div>
            <div>
              <p className="text-white mb-1" style={{ fontWeight: 700, fontSize: "clamp(1rem, 2vw, 1.2rem)", lineHeight: 1.4 }}>
                No solo producimos hongos.{" "}
                <span style={{ color: "#f4a46a" }}>Desarrollamos productos de alto valor a partir del micelio.</span>
              </p>
              <p className="text-white/50 text-xs leading-relaxed mt-1">
                Del cultivo al producto final: MycoAndes integra toda la cadena de valor del micelio.
              </p>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}

// ─── Pasantías Section ────────────────────────────────────────────────────────
const pasantiaFeatures = [
  {
    title: "🔬 Ecosistema Completo",
    desc: "Gestión integral de la cadena de valor: desde el inóculo hasta la comercialización.",
  },
  {
    title: "🧬 Tecnología de Inóculos",
    desc: "Formación técnica avanzada en laboratorio para la producción de semillas de alta calidad.",
  },
  {
    title: "⚗️ Valor Agregado",
    desc: "Aprende a transformar cosechas en extractos funcionales y productos premium.",
  },
  {
    title: "📈 Estrategia de Negocio",
    desc: "Modelos validados para escalar tu producción y maximizar la rentabilidad operativa.",
  },
];

function PasantiasSection() {
  return (
    <section
      id="pasantias"
      className="relative overflow-hidden min-h-screen flex items-center"
    >
      <div className="flex flex-col lg:flex-row min-h-screen w-full">
        {/* Left – image */}
        <div className="relative w-full lg:w-1/2 min-h-[400px] lg:h-auto overflow-hidden">
          <img
            src={imgNuevaPasantia}
            alt="Pasantía técnica MycoAndes"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(30,60,40,0) 0%, rgba(30,60,40,0.1) 50%, rgba(30,60,40,1) 100%)",
            }}
          />
        </div>

        {/* Right – content */}
        <div
          className="w-full lg:w-1/2 flex items-center px-8 sm:px-12 py-14"
          style={{ background: "#1e3c28" }}
        >
          <div className="max-w-lg">
            <FadeIn direction="right">
              <span className="inline-block px-3 py-1 rounded text-[10px] tracking-widest uppercase mb-4"
                style={{
                  background: "#2d6640",
                  color: "#6edd8c",
                  border: "1px solid #3d8c55",
                }}
              >
                Formación Profesional
              </span>
              <h2
                className="text-white mb-6"
                style={{
                  fontSize: "clamp(1.6rem, 3.8vw, 2.8rem)",
                  fontWeight: 800,
                  lineHeight: 1.15,
                }}
              >
                Domina la <span className="text-[#f4a46a]">Cadena de Valor</span> del Reino Fungi
              </h2>
            </FadeIn>

            <FadeIn delay={0.1} direction="right">
              <p className="text-white/80 mb-10 text-base leading-relaxed">
                Nuestras pasantías no son solo cursos técnicos; son una inmersión total en el ecosistema MycoAndes. Aprende a gestionar desde la pureza del inóculo hasta la comercialización de productos funcionales.
              </p>
            </FadeIn>

            <div className="space-y-6 mb-12">
              {pasantiaFeatures.map((f, i) => (
                <FadeIn
                  key={f.title}
                  delay={0.15 + i * 0.1}
                  direction="right"
                >
                  <div className="flex items-start gap-4 group">                    
                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#f4a46a] group-hover:scale-125 transition-transform" />
                    <div>
                      <p className="text-white text-base font-bold mb-1">
                        {f.title}
                      </p>
                      <p className="text-white/60 text-sm leading-relaxed">
                        {f.desc}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
            
              <FadeIn delay={0.5} direction="right">
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <a
                  href="https://wa.me/51993663792?text=Hola%2C%20estoy%20interesado(a)%20en%20reservar%20una%20Pasan%C3%ADa%20de%20Inmersi%C3%B3n%20en%20MycoAndes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto text-center px-8 py-4 rounded text-white text-sm font-bold uppercase tracking-wider hover:brightness-110 transition-all shadow-lg"
                  style={{ background: "#C8572A" }}
                >
                  Postular a Pasantía
                </a>
                <p className="text-white/40 text-[11px] italic max-w-[200px] text-center sm:text-left">
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

// ─── ROI Section ─────────────────────────────────────────────────────────────
// ─── Market Section ─────────────────────────────────────────────────────────────
const roiData = [
  { label: "Perú", value: 50, color: "#d9cfc0", desc: "50 g" },
  { label: "Brasil", value: 160, color: "#d9cfc0", desc: "160 g" },
  { label: "Argentina", value: 200, color: "#d9cfc0", desc: "200 g" },
  { label: "Chile", value: 300, color: "#d9cfc0", desc: "300 g" },
  { label: "México", value: 1000, color: "#C8572A", desc: "1 kg" },
];

function AnimatedHorizontalBar({
  label,
  value,
  color,
  desc,
  delay,
}: {
  label: string;
  value: number;
  color: string;
  desc: string;
  delay: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const maxVal = 1000;

  return (
    <div ref={ref} className="flex items-center gap-4 w-full mb-5">
      <div className="w-16 text-right text-sm font-medium text-[#1a1208]">
        {label}
      </div>
      <div className="flex-1 flex items-center h-6">
        <motion.div
          initial={{ width: 0 }}
          animate={
            isInView
              ? { width: `${(value / maxVal) * 100}%` }
              : { width: 0 }
          }
          transition={{ duration: 0.8, delay, ease: "easeOut" }}
          className="h-full rounded-r"
          style={{ background: color, minWidth: "4px" }}
        />
        <span className="ml-3 text-xs font-bold text-[#888]">
          {desc}
        </span>
      </div>
    </div>
  );
}

function ROISection() {
   return (
    <section
      id="roi"
      className="min-h-screen flex items-center py-10 px-4 sm:px-6"
      style={{ background: "#f7f3ec" }}
    >
      <div className="max-w-7xl mx-auto w-full">
        <FadeIn>
          <div className="text-center mb-4">
            <h2
              className="text-[#1a1208]"
              style={{
                fontSize: "clamp(1.4rem, 3.5vw, 2.2rem)",
                fontWeight: 700,
              }}
            >
              El mercado de hongos en el Perú:<br className="hidden sm:block" /> una oportunidad en crecimiento
            </h2>
            <p className="text-[#888] text-sm mt-2 max-w-xl mx-auto">
              Mientras el consumo de hongos crece en Latinoamérica, el Perú
              mantiene uno de los niveles más bajos, abriendo una oportunidad
              única para nuevos productores.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div
            className="mt-4 rounded-2xl overflow-hidden border border-[#e8e0d4]"
            style={{
              background: "white",
              boxShadow: "0 4px 30px rgba(0,0,0,0.06)",
            }}
          >
            <div className="flex flex-col lg:flex-row">
              {/* Chart area */}
              <div className="flex-1 p-6 sm:p-8">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3
                      className="text-[#1a1208]"
                      style={{
                        fontSize: "2rem",
                        fontWeight: 600,
                      }}
                    >
                      CONSUMO PER CÁPITA COMPARADO
                    </h3>
                  </div>
                </div>

                <div className="flex flex-col justify-center px-2 py-4">
                  {roiData.map((d, i) => (
                    <AnimatedHorizontalBar
                      key={d.label}
                      label={d.label}
                      value={d.value}
                      color={d.color}
                      desc={d.desc}
                      delay={i * 0.08}
                    />
                  ))}
                </div>
              </div>

              {/* Stats panel */}
              <div
                className="lg:w-110 p-6 sm:p-1 flex flex-col justify-between"
                style={{
                  background: "#1a1208",
                  borderLeft: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div>
                  <p className="text-[#C8572A] text-xs tracking-wider uppercase font-bold mb-3">
                    🚀 Mercado en Expansión
                  </p>
                  <div
                    className="text-white mb-6"
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: 700,
                      lineHeight: 1.3,
                    }}
                  >
                    Alta demanda + baja oferta = <span className="text-[#C8572A]">oportunidad real de negocio</span>
                  </div>

                  <div className="mt-6 space-y-4">
                    <div className="border-t border-white/10 pt-4">
                      <p className="text-white/40 text-[10px] uppercase tracking-wider mb-2">
                        📈 Indicadores clave
                      </p>
                      <ul className="text-white/80 text-sm space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-[#C8572A]">•</span> Consumo en crecimiento sostenido
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#C8572A]">•</span> Baja producción nacional
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#C8572A]">•</span> Mercado aún poco desarrollado
                        </li>
                      </ul>
                    </div>
                    
                    <div className="border-t border-white/10 pt-4">
                      <p className="text-white/40 text-[10px] uppercase tracking-wider mb-1">
                        🎯 Oportunidad
                      </p>
                      <p className="text-white font-medium text-sm leading-relaxed">
                        Ingresar hoy permite posicionarse antes de la expansión del mercado.
                      </p>
                    </div>
                  </div>
                </div>
                <a
                    href="https://wa.me/51993663792?text=Hola%2C%20estoy%20interesado(a)%20en%20esta%20oportunidad%20de%20MycoAndes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-7 py-3 rounded-lg text-white text-sm font-semibold hover:opacity-90 active:scale-95 transition-all w-full sm:w-auto justify-center"
                    style={{ background: "#C8572A", boxShadow: "0 4px 18px rgba(200,87,42,0.4)" }}
                  >
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style={{ flexShrink: 0 }}>
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.561 4.14 1.535 5.873L.057 23.428a.75.75 0 0 0 .916.916l5.555-1.478A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.718 9.718 0 0 1-4.953-1.355l-.355-.211-3.684.979.979-3.684-.211-.355A9.718 9.718 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
                    </svg>
                    Quiero aprovechar esta oportunidad                                  
                </a>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Feature row */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              icon: <TrendingUp size={20} />,
              title: "Demanda creciente",
              desc: "Mayor interés en alimentos saludables y sostenibles.",
            },
            {
              icon: <Star size={20} />,
              title: "Oferta limitada",
              desc: "Producción local aún insuficiente para cubrir el mercado.",
            },
            {
              icon: <CheckCircle size={20} />,
              title: "Alto potencial de rentabilidad",
              desc: "Negocio escalable con baja saturación.",
            },
          ].map((f, i) => (
            <FadeIn key={f.title} delay={i * 0.12}>
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "#f0ebe0",
                    color: "#C8572A",
                  }}
                >
                  {f.icon}
                </div>
                <div>
                  <h4
                    className="text-[#1a1208] mb-1"
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: 600,
                    }}
                  >
                    {f.title}
                  </h4>
                  <p className="text-[#888] text-xs leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Cierre */}
        <FadeIn delay={0.4}>
          <div className="mt-5 text-center">
            <h3 
              className="text-[#1a1208] inline-block px-4 py-2"
              style={{
                fontSize: "1.1rem",
                fontWeight: 700,
              }}
            >
              🔥 Hoy es el mejor momento para iniciar en la producción de hongos en el Perú.
            </h3>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer
      style={{ background: "#0f0a05" }}
      className="py-10 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          {/* Logo */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center"
                style={{ background: "#C8572A" }}
              >
                <Leaf size={14} className="text-white" />
              </div>
              <span
                className="text-white tracking-[0.15em] uppercase text-sm"
                style={{ fontFamily: "serif" }}
              >
                Hongos MycoAndes
              </span>
            </div>
            <p className="text-white/30 text-xs">
              © 2026 Hongos MycoAndes. Scientific
              Excellence in Mycology.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-4 sm:gap-6">
            {[
              "Privacy Policy",
              "Terms of Service",
              "Reservar Ahora",
              "Contact Us",
            ].map((l) => (
              <a
                key={l}
                href="#"
                className="text-white/40 text-xs hover:text-white/80 transition-colors"
              >
                {l}
              </a>
            ))}
          </div>

          {/* Social */}
          <div className="flex gap-3">
            {[
              <Facebook key="fb" size={16} />,
              <Instagram key="ig" size={16} />,
              <Twitter key="tw" size={16} />,
            ].map((icon, i) => (
              <a
                key={i}
                href="#"
                className="w-8 h-8 rounded-full flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all"
              >
                {icon}
              </a>
            ))}
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
    <div
      style={{
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      <CatalogoModal open={catalogoOpen} onClose={() => setCatalogoOpen(false)} />
      <Navbar onOpenCatalogo={() => setCatalogoOpen(true)} />
      <Hero onOpenCatalogo={() => setCatalogoOpen(true)} />
      <ProcessSection />
      <ProductsSection />
      <ExtractosSection />
      <PasantiasSection />
      <ROISection />
      <Footer />
    </div>
  );
}