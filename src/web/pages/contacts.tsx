import { Link } from "wouter";
import { Phone, MapPin, Clock, Send, Mail } from "lucide-react";
import TiltCard from "../components/TiltCard";
import { useReveal } from "../hooks/useReveal";

export default function ContactsPage() {
  const ref = useReveal();

  return (
    <div ref={ref} style={{ background: "#0a0a0f", minHeight: "100vh", paddingTop: 72 }}>
      <section style={{ padding: "80px 24px 60px", background: "linear-gradient(180deg, #0d0d16 0%, #0a0a0f 100%)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div className="reveal" style={{ marginBottom: 8 }}>
            <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 13 }}>
              <Link href="/" style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>Главная</Link> / Контакты
            </span>
          </div>
          <h1 className="reveal" style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 900, fontSize: "clamp(28px, 4vw, 60px)", letterSpacing: "-0.02em", marginBottom: 16 }}>
            <span className="text-gold-gradient">Контакты</span>
          </h1>
          <p className="reveal" style={{ color: "rgba(255,255,255,0.55)", fontSize: 17, maxWidth: 520, lineHeight: 1.7 }}>
            Работаем без выходных. Звонки принимаем 24/7.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px 80px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 32, marginBottom: 48 }}>
          {/* Main contact */}
          <TiltCard className="reveal glass-card" style={{ borderRadius: 24, padding: "48px 40px" }}>
            <div style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 700, fontSize: 13, color: "rgba(255,255,255,0.4)", letterSpacing: "0.08em", marginBottom: 32 }}>СВЯЗАТЬСЯ С НАМИ</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
              <a href="tel:+78126027322" style={{ display: "flex", alignItems: "flex-start", gap: 20, textDecoration: "none" }}>
                <div style={{ width: 52, height: 52, borderRadius: 14, background: "rgba(255,215,0,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Phone size={22} color="#FFD700" />
                </div>
                <div>
                  <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, marginBottom: 4, fontFamily: "'Unbounded', sans-serif", letterSpacing: "0.05em" }}>ТЕЛЕФОН</div>
                  <div style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 800, fontSize: 24, color: "#fff" }}>+7 (812) 602-73-22</div>
                  <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, marginTop: 4 }}>Звонки принимаем 24/7</div>
                </div>
              </a>

              <div style={{ display: "flex", alignItems: "flex-start", gap: 20 }}>
                <div style={{ width: 52, height: 52, borderRadius: 14, background: "rgba(255,215,0,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <MapPin size={22} color="#FFD700" />
                </div>
                <div>
                  <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, marginBottom: 4, fontFamily: "'Unbounded', sans-serif", letterSpacing: "0.05em" }}>АДРЕС</div>
                  <div style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 16, color: "#fff", lineHeight: 1.5 }}>
                    Белоостровская 17к2<br />
                    БЦ «Авантаж», офис 405
                  </div>
                  <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, marginTop: 4 }}>
                    7-10 мин пешком от м. Чёрная речка или Лесная
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: 20 }}>
                <div style={{ width: 52, height: 52, borderRadius: 14, background: "rgba(255,215,0,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Clock size={22} color="#FFD700" />
                </div>
                <div>
                  <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, marginBottom: 4, fontFamily: "'Unbounded', sans-serif", letterSpacing: "0.05em" }}>РЕЖИМ РАБОТЫ</div>
                  <div style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 16, color: "#fff" }}>10:00 — 19:00</div>
                  <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, marginTop: 4 }}>Без выходных</div>
                </div>
              </div>
            </div>
          </TiltCard>

          {/* Messengers */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <TiltCard className="reveal reveal-delay-1" style={{ background: "linear-gradient(135deg, rgba(0,136,204,0.15) 0%, rgba(0,136,204,0.05) 100%)", border: "1px solid rgba(0,136,204,0.25)", borderRadius: 24, padding: "32px 36px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
                <div style={{ width: 48, height: 48, borderRadius: 14, background: "rgba(0,136,204,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Send size={22} color="#29A0D8" />
                </div>
                <div>
                  <div style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 700, fontSize: 16 }}>Telegram</div>
                  <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 13 }}>Самый быстрый ответ</div>
                </div>
              </div>
              <div style={{ display: "flex", gap: 12 }}>
                <a href="https://t.me/rassrochka_auto" target="_blank" rel="noreferrer"
                  style={{ flex: 1, padding: "12px", borderRadius: 50, background: "rgba(0,136,204,0.2)", border: "1px solid rgba(0,136,204,0.3)", color: "#fff", textDecoration: "none", fontFamily: "'Manrope', sans-serif", fontWeight: 600, fontSize: 13, textAlign: "center", transition: "all 0.2s" }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "rgba(0,136,204,0.35)"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "rgba(0,136,204,0.2)"}
                >
                  Канал
                </a>
                <a href="https://t.me/rassrochka_auto" target="_blank" rel="noreferrer"
                  style={{ flex: 1, padding: "12px", borderRadius: 50, background: "rgba(41,160,216,0.25)", border: "1px solid rgba(41,160,216,0.4)", color: "#fff", textDecoration: "none", fontFamily: "'Manrope', sans-serif", fontWeight: 600, fontSize: 13, textAlign: "center", transition: "all 0.2s" }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "rgba(41,160,216,0.4)"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "rgba(41,160,216,0.25)"}
                >
                  Написать
                </a>
              </div>
            </TiltCard>

            <TiltCard className="reveal reveal-delay-2 glass-card" style={{ borderRadius: 24, padding: "32px 36px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
                <div style={{ width: 48, height: 48, borderRadius: 14, background: "rgba(255,215,0,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Mail size={22} color="#FFD700" />
                </div>
                <div>
                  <div style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 700, fontSize: 16 }}>МАХ</div>
                  <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 13 }}>Канал и чат</div>
                </div>
              </div>
              <div style={{ display: "flex", gap: 12 }}>
                <a href="https://max.ru/id253607294403_biz" target="_blank" rel="noreferrer"
                  style={{ flex: 1, padding: "12px", borderRadius: 50, background: "rgba(255,215,0,0.08)", border: "1px solid rgba(255,215,0,0.2)", color: "#fff", textDecoration: "none", fontFamily: "'Manrope', sans-serif", fontWeight: 600, fontSize: 13, textAlign: "center", transition: "all 0.2s" }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "rgba(255,215,0,0.15)"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "rgba(255,215,0,0.08)"}
                >
                  Канал
                </a>
                <a href="https://max.ru/u/f9LHodD0cOLskHI7rXmnMcj6LeZ9jFY0P1eRKmpzmn9q_V3vl0ddbUu0cP4" target="_blank" rel="noreferrer"
                  style={{ flex: 1, padding: "12px", borderRadius: 50, background: "rgba(255,215,0,0.12)", border: "1px solid rgba(255,215,0,0.25)", color: "#FFD700", textDecoration: "none", fontFamily: "'Manrope', sans-serif", fontWeight: 600, fontSize: 13, textAlign: "center", transition: "all 0.2s" }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "rgba(255,215,0,0.2)"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "rgba(255,215,0,0.12)"}
                >
                  Написать
                </a>
              </div>
            </TiltCard>

            {/* Big CTA */}
            <TiltCard className="reveal reveal-delay-3" style={{ background: "linear-gradient(135deg,#FFD700,#FFA500)", borderRadius: 24, padding: "36px" }}>
              <div style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 900, fontSize: 32, color: "#0a0a0f", marginBottom: 4 }}>+7 (812) 602-73-22</div>
              <div style={{ color: "rgba(0,0,0,0.6)", fontSize: 14, marginBottom: 20 }}>Звонки 24/7</div>
              <a href="tel:+78126027322">
                <button style={{ background: "#0a0a0f", color: "#FFD700", border: "none", padding: "14px 32px", borderRadius: 50, fontFamily: "'Unbounded', sans-serif", fontWeight: 700, fontSize: 13, cursor: "pointer", transition: "all 0.2s" }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = "scale(1.03)"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = "scale(1)"}
                >
                  ПОЗВОНИТЬ СЕЙЧАС
                </button>
              </a>
            </TiltCard>
          </div>
        </div>

        {/* Map placeholder */}
        <TiltCard className="reveal glass-card" style={{ borderRadius: 24, overflow: "hidden", height: 320, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 16 }}>
          <MapPin size={48} color="rgba(255,215,0,0.3)" />
          <div style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 700, fontSize: 18, textAlign: "center" }}>
            Белоостровская 17к2, БЦ «Авантаж», офис 405
          </div>
          <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 14, textAlign: "center" }}>
            7-10 минут пешком от м. Чёрная речка или Лесная
          </div>
          <a
            href="https://yandex.ru/maps/?text=Белоостровская+17к2+Санкт-Петербург"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            <button className="btn-gold" style={{ padding: "12px 28px", borderRadius: 50, fontSize: 13 }}>
              Открыть на карте
            </button>
          </a>
        </TiltCard>
      </div>
    </div>
  );
}
