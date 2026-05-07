import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Главная", href: "/" },
  { label: "Выбрать авто", href: "/auto" },
  { label: "Условия", href: "/usloviya" },
  { label: "Trade-In", href: "/trade-in" },
  { label: "Premium", href: "/premium" },
  { label: "Продать авто", href: "/vikup" },
  { label: "Контакты", href: "/contacts" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location]);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
          background: scrolled
            ? "rgba(10,10,15,0.92)"
            : "transparent",
          backdropFilter: scrolled ? "blur(24px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", height: 72 }}>
          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none", flexShrink: 0 }}>
            <span style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 900, fontSize: 18, letterSpacing: "-0.02em" }}>
              <span style={{ background: "linear-gradient(135deg,#FFD700,#FFA500)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>РАССРОЧКА</span>
              <span style={{ color: "#fff", marginLeft: 8 }}>АВТО</span>
            </span>
          </Link>

          {/* Desktop links */}
          <div style={{ flex: 1, display: "flex", justifyContent: "center", gap: 4, alignItems: "center" }} className="hide-mobile">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  textDecoration: "none",
                  fontFamily: "'Manrope', sans-serif",
                  fontWeight: 500,
                  fontSize: 13,
                  letterSpacing: "0.02em",
                  padding: "8px 14px",
                  borderRadius: 8,
                  color: location === l.href ? "#FFD700" : "rgba(255,255,255,0.75)",
                  background: location === l.href ? "rgba(255,215,0,0.08)" : "transparent",
                  transition: "all 0.2s",
                }}
                onMouseEnter={e => { if (location !== l.href) (e.target as HTMLElement).style.color = "#fff"; }}
                onMouseLeave={e => { if (location !== l.href) (e.target as HTMLElement).style.color = "rgba(255,255,255,0.75)"; }}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* CTA + Phone */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }} className="hide-mobile">
            <a href="tel:+78126027322" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 6, color: "rgba(255,255,255,0.8)", fontFamily: "'Manrope', sans-serif", fontSize: 14, fontWeight: 600 }}>
              <Phone size={14} />
              +7 (812) 602-73-22
            </a>
            <Link href="/zayavka">
              <button className="btn-gold" style={{ padding: "10px 22px", borderRadius: 50, fontSize: 12 }}>
                ЗАЯВКА
              </button>
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            className="hide-desktop"
            onClick={() => setMenuOpen(v => !v)}
            style={{ marginLeft: "auto", background: "none", border: "none", color: "#fff", cursor: "pointer", padding: 8 }}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 999,
          background: "rgba(10,10,15,0.98)",
          backdropFilter: "blur(24px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 8,
          transition: "opacity 0.3s, transform 0.3s",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "all" : "none",
          transform: menuOpen ? "translateY(0)" : "translateY(-8px)",
        }}
      >
        {navLinks.map((l, i) => (
          <Link
            key={l.href}
            href={l.href}
            style={{
              textDecoration: "none",
              fontFamily: "'Unbounded', sans-serif",
              fontWeight: 600,
              fontSize: 20,
              color: location === l.href ? "#FFD700" : "#fff",
              padding: "14px 40px",
              transition: `opacity 0.3s ${i * 0.05}s`,
              opacity: menuOpen ? 1 : 0,
            }}
          >
            {l.label}
          </Link>
        ))}
        <div style={{ marginTop: 24, display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
          <a href="tel:+78126027322" style={{ color: "#FFD700", fontFamily: "'Manrope', sans-serif", fontSize: 20, fontWeight: 700, textDecoration: "none" }}>
            +7 (812) 602-73-22
          </a>
          <Link href="/zayavka">
            <button className="btn-gold" style={{ padding: "16px 40px", borderRadius: 50, fontSize: 14 }}>
              ОНЛАЙН ЗАЯВКА
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
