import { Link } from "wouter";
import { Phone, MapPin, Clock, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ background: "#070710", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "80px 24px 40px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 48, marginBottom: 64 }}>
          {/* Brand */}
          <div>
            <div style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 900, fontSize: 22, marginBottom: 16 }}>
              <span style={{ background: "linear-gradient(135deg,#FFD700,#FFA500)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>РАССРОЧКА</span>
              <span style={{ color: "#fff", marginLeft: 8 }}>АВТО</span>
            </div>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, lineHeight: 1.7, maxWidth: 260 }}>
              Крупнейшая компания в России по рассрочке автомобилей без участия банка. Работаем с 2013 года.
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
              <a href="https://t.me/rassrochka_auto" target="_blank" rel="noreferrer"
                style={{ width: 40, height: 40, borderRadius: 12, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", textDecoration: "none", transition: "all 0.2s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,215,0,0.15)"; (e.currentTarget as HTMLElement).style.borderColor = "#FFD700"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)"; }}
              >
                <Send size={16} />
              </a>
            </div>
          </div>

          {/* Nav */}
          <div>
            <div style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: "0.08em", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", marginBottom: 20 }}>Навигация</div>
            {[
              { label: "Выбрать авто", href: "/auto" },
              { label: "Условия рассрочки", href: "/usloviya" },
              { label: "Trade-In", href: "/trade-in" },
              { label: "Premium автомобили", href: "/premium" },
              { label: "Продать авто", href: "/vikup" },
              { label: "Онлайн заявка", href: "/zayavka" },
            ].map(l => (
              <Link key={l.href} href={l.href} style={{ display: "block", color: "rgba(255,255,255,0.6)", textDecoration: "none", fontSize: 14, padding: "6px 0", transition: "color 0.2s" }}
                onMouseEnter={e => (e.target as HTMLElement).style.color = "#FFD700"}
                onMouseLeave={e => (e.target as HTMLElement).style.color = "rgba(255,255,255,0.6)"}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Contacts */}
          <div>
            <div style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: "0.08em", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", marginBottom: 20 }}>Контакты</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <a href="tel:+78126027322" style={{ display: "flex", alignItems: "center", gap: 12, color: "#fff", textDecoration: "none", fontSize: 15, fontWeight: 600 }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(255,215,0,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Phone size={15} color="#FFD700" />
                </div>
                +7 (812) 602-73-22
              </a>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 12, color: "rgba(255,255,255,0.7)", fontSize: 14 }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(255,215,0,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                  <MapPin size={15} color="#FFD700" />
                </div>
                <span>Белоостровская 17к2<br />БЦ «Авантаж», офис 405<br />7-10 мин от м. Чёрная речка</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, color: "rgba(255,255,255,0.7)", fontSize: 14 }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(255,215,0,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Clock size={15} color="#FFD700" />
                </div>
                <span>Работаем без выходных<br />10:00 — 19:00 (звонки 24/7)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="glow-line" style={{ marginBottom: 32 }} />

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 13 }}>
            © 2013–{new Date().getFullYear()} Рассрочка Авто. Все права защищены.
          </p>
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 13 }}>
            Санкт-Петербург, Россия
          </p>
        </div>
      </div>
    </footer>
  );
}
