import { useState } from "react";
import { Link } from "wouter";
import { CheckCircle, ArrowRight, Send } from "lucide-react";
import TiltCard from "../components/TiltCard";
import { useReveal } from "../hooks/useReveal";

export default function ZayavkaPage() {
  const ref = useReveal();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", phone: "", city: "", downPayment: "", carWish: "", monthlyBudget: "", comment: "",
  });

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(v => ({ ...v, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div ref={ref} style={{ background: "#0a0a0f", minHeight: "100vh", paddingTop: 72 }}>
      <section style={{ padding: "80px 24px 60px", background: "linear-gradient(180deg, #0d0d16 0%, #0a0a0f 100%)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div className="reveal" style={{ marginBottom: 8 }}>
            <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 13 }}>
              <Link href="/" style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>Главная</Link> / Заявка
            </span>
          </div>
          <h1 className="reveal" style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 900, fontSize: "clamp(28px, 4vw, 60px)", letterSpacing: "-0.02em", marginBottom: 16 }}>
            Онлайн <span className="text-gold-gradient">заявка</span>
          </h1>
          <p className="reveal" style={{ color: "rgba(255,255,255,0.55)", fontSize: 17, maxWidth: 520, lineHeight: 1.7 }}>
            Заполните форму — менеджер свяжется в течение 30 минут и подберёт оптимальные условия.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px 80px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 40, alignItems: "start" }}>
          {/* Form */}
          {!submitted ? (
            <TiltCard className="reveal glass-card" style={{ borderRadius: 28, padding: "48px 40px" }}>
              <form onSubmit={submit}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}>
                  <div>
                    <label style={{ display: "block", color: "rgba(255,255,255,0.45)", fontSize: 12, fontFamily: "'Unbounded', sans-serif", letterSpacing: "0.05em", marginBottom: 8 }}>ИМЯ *</label>
                    <input className="float-input" required placeholder="Ваше имя" value={form.name} onChange={set("name")} />
                  </div>
                  <div>
                    <label style={{ display: "block", color: "rgba(255,255,255,0.45)", fontSize: 12, fontFamily: "'Unbounded', sans-serif", letterSpacing: "0.05em", marginBottom: 8 }}>ТЕЛЕФОН *</label>
                    <input className="float-input" required placeholder="+7 (___) ___-__-__" value={form.phone} onChange={set("phone")} type="tel" />
                  </div>
                </div>
                <div style={{ marginBottom: 20 }}>
                  <label style={{ display: "block", color: "rgba(255,255,255,0.45)", fontSize: 12, fontFamily: "'Unbounded', sans-serif", letterSpacing: "0.05em", marginBottom: 8 }}>ГОРОД *</label>
                  <input className="float-input" required placeholder="Из какого вы города?" value={form.city} onChange={set("city")} />
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}>
                  <div>
                    <label style={{ display: "block", color: "rgba(255,255,255,0.45)", fontSize: 12, fontFamily: "'Unbounded', sans-serif", letterSpacing: "0.05em", marginBottom: 8 }}>ПЕРВЫЙ ВЗНОС</label>
                    <input className="float-input" placeholder="Сумма в рублях" value={form.downPayment} onChange={set("downPayment")} />
                  </div>
                  <div>
                    <label style={{ display: "block", color: "rgba(255,255,255,0.45)", fontSize: 12, fontFamily: "'Unbounded', sans-serif", letterSpacing: "0.05em", marginBottom: 8 }}>ЕЖЕМЕСЯЧНЫЙ БЮДЖЕТ</label>
                    <input className="float-input" placeholder="₽/мес." value={form.monthlyBudget} onChange={set("monthlyBudget")} />
                  </div>
                </div>
                <div style={{ marginBottom: 20 }}>
                  <label style={{ display: "block", color: "rgba(255,255,255,0.45)", fontSize: 12, fontFamily: "'Unbounded', sans-serif", letterSpacing: "0.05em", marginBottom: 8 }}>ЖЕЛАЕМЫЙ АВТОМОБИЛЬ</label>
                  <input className="float-input" placeholder="Марка, модель или просто опишите" value={form.carWish} onChange={set("carWish")} />
                </div>
                <div style={{ marginBottom: 32 }}>
                  <label style={{ display: "block", color: "rgba(255,255,255,0.45)", fontSize: 12, fontFamily: "'Unbounded', sans-serif", letterSpacing: "0.05em", marginBottom: 8 }}>ДОПОЛНИТЕЛЬНО</label>
                  <textarea className="float-input" placeholder="Любая важная информация..." value={form.comment} onChange={set("comment") as any} rows={3} style={{ resize: "vertical" }} />
                </div>
                <button type="submit" className="btn-gold" style={{ width: "100%", padding: "18px", borderRadius: 50, fontSize: 15, display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
                  ОТПРАВИТЬ ЗАЯВКУ <ArrowRight size={18} />
                </button>
                <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 12, textAlign: "center", marginTop: 16 }}>
                  Нажимая кнопку, вы соглашаетесь на обработку персональных данных
                </p>
              </form>
            </TiltCard>
          ) : (
            <TiltCard className="reveal glass-card" style={{ borderRadius: 28, padding: "80px 40px", textAlign: "center" }}>
              <div style={{ width: 72, height: 72, borderRadius: "50%", background: "rgba(255,215,0,0.1)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
                <CheckCircle size={36} color="#FFD700" />
              </div>
              <h2 style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 800, fontSize: 28, marginBottom: 16 }}>
                Заявка отправлена!
              </h2>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 16, lineHeight: 1.7, maxWidth: 400, margin: "0 auto 32px" }}>
                Наш менеджер свяжется с вами в течение 30 минут. Также можно написать напрямую в Telegram.
              </p>
              <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
                <a href="https://t.me/rassrochka_auto" target="_blank" rel="noreferrer">
                  <button className="btn-outline" style={{ padding: "14px 32px", borderRadius: 50, fontSize: 13, display: "flex", alignItems: "center", gap: 8 }}>
                    <Send size={15} /> Telegram
                  </button>
                </a>
                <Link href="/auto">
                  <button className="btn-gold" style={{ padding: "14px 32px", borderRadius: 50, fontSize: 13 }}>
                    Смотреть авто
                  </button>
                </Link>
              </div>
            </TiltCard>
          )}

          {/* Sidebar */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <TiltCard className="reveal reveal-delay-1 glass-card" style={{ borderRadius: 20, padding: 28 }}>
              <div style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 700, fontSize: 15, marginBottom: 20, color: "#FFD700" }}>Что будет дальше?</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                  { n: "1", text: "Менеджер перезвонит в течение 30 минут" },
                  { n: "2", text: "Подберём подходящий автомобиль" },
                  { n: "3", text: "Согласуем условия и график платежей" },
                  { n: "4", text: "Оформим договор и вы уедете на авто" },
                ].map(s => (
                  <div key={s.n} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                    <div style={{ width: 28, height: 28, borderRadius: "50%", background: "rgba(255,215,0,0.15)", border: "1px solid rgba(255,215,0,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Unbounded', sans-serif", fontWeight: 700, fontSize: 12, color: "#FFD700", flexShrink: 0 }}>{s.n}</div>
                    <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 14, lineHeight: 1.5, paddingTop: 4 }}>{s.text}</span>
                  </div>
                ))}
              </div>
            </TiltCard>

            <TiltCard className="reveal reveal-delay-2 glass-card" style={{ borderRadius: 20, padding: 28 }}>
              <div style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 700, fontSize: 15, marginBottom: 16, color: "#FFD700" }}>Нужные документы</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {["Паспорт", "Водительское удостоверение", "Первоначальный взнос"].map((d, i) => (
                  <div key={i} style={{ display: "flex", gap: 10, alignItems: "center", color: "rgba(255,255,255,0.7)", fontSize: 14 }}>
                    <CheckCircle size={14} color="#FFD700" />
                    {d}
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 16, padding: 14, background: "rgba(255,215,0,0.06)", borderRadius: 12, color: "rgba(255,255,255,0.6)", fontSize: 13, lineHeight: 1.6 }}>
                Никаких справок о доходах или НДФЛ не требуется!
              </div>
            </TiltCard>

            <TiltCard className="reveal reveal-delay-3" style={{ background: "linear-gradient(135deg,#FFD700,#FFA500)", borderRadius: 20, padding: 28 }}>
              <div style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 700, fontSize: 15, marginBottom: 8, color: "#0a0a0f" }}>Звоните 24/7</div>
              <a href="tel:+78126027322" style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 900, fontSize: 20, color: "#0a0a0f", textDecoration: "none", display: "block" }}>
                +7 (812) 602-73-22
              </a>
            </TiltCard>
          </div>
        </div>
      </div>
    </div>
  );
}
