import { useState } from "react";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, Car, DollarSign } from "lucide-react";
import TiltCard from "../components/TiltCard";
import { useReveal } from "../hooks/useReveal";

export default function TradeInPage() {
  const ref = useReveal();
  const [form, setForm] = useState({ phone: "" });
  const [sent, setSent] = useState(false);
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement>) => setForm(v => ({ ...v, [k]: e.target.value }));

  return (
    <div ref={ref} style={{ background: "#0a0a0f", minHeight: "100vh", paddingTop: 72 }}>
      <section style={{ padding: "80px 24px 60px", background: "linear-gradient(180deg, #0d0d16 0%, #0a0a0f 100%)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div className="reveal" style={{ marginBottom: 8 }}>
            <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 13 }}>
              <Link href="/" style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>Главная</Link> / Trade-In
            </span>
          </div>
          <h1 className="reveal" style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 900, fontSize: "clamp(28px, 4vw, 60px)", letterSpacing: "-0.02em", marginBottom: 16 }}>
            Trade-<span className="text-gold-gradient">In</span>
          </h1>
          <p className="reveal" style={{ color: "rgba(255,255,255,0.55)", fontSize: 17, maxWidth: 520, lineHeight: 1.7 }}>
            Сдайте свой автомобиль в зачёт покупки нового. Принимаем любые автомобили.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px 80px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, marginBottom: 64 }}>
          {[
            { icon: <Car size={28} />, title: "Принимаем любые авто", desc: "Любой год, пробег, состояние. Оценим честно и быстро." },
            { icon: <DollarSign size={28} />, title: "Выгодный зачёт", desc: "Стоимость вашего авто идёт в счёт первоначального взноса." },
            { icon: <CheckCircle size={28} />, title: "Быстрое оформление", desc: "Весь процесс в один день. Приехали — уехали на новом авто." },
          ].map((f, i) => (
            <TiltCard key={i} className={`reveal glass-card reveal-delay-${i + 1}`} style={{ borderRadius: 20, padding: "32px 28px" }}>
              <div style={{ width: 52, height: 52, borderRadius: 14, background: "rgba(255,215,0,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFD700", marginBottom: 20 }}>{f.icon}</div>
              <div style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 700, fontSize: 16, marginBottom: 10 }}>{f.title}</div>
              <div style={{ color: "rgba(255,255,255,0.55)", fontSize: 14, lineHeight: 1.7 }}>{f.desc}</div>
            </TiltCard>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 40, alignItems: "start" }}>
          <TiltCard className="reveal glass-card" style={{ borderRadius: 24, padding: "40px 36px" }}>
            <h2 style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 800, fontSize: 24, marginBottom: 24 }}>Оставить заявку</h2>
            {!sent ? (
              <div>
                <div style={{ marginBottom: 20 }}>
                  <label style={{ display: "block", color: "rgba(255,255,255,0.45)", fontSize: 12, fontFamily: "'Unbounded', sans-serif", letterSpacing: "0.05em", marginBottom: 8 }}>ВАШ ТЕЛЕФОН *</label>
                  <input className="float-input" placeholder="+7 (___) ___-__-__" value={form.phone} onChange={set("phone")} type="tel" />
                </div>
                <button className="btn-gold" onClick={() => setSent(true)} style={{ width: "100%", padding: "16px", borderRadius: 50, fontSize: 14, display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
                  ОТПРАВИТЬ ЗАЯВКУ <ArrowRight size={16} />
                </button>
              </div>
            ) : (
              <div style={{ textAlign: "center", padding: "20px 0" }}>
                <CheckCircle size={48} color="#FFD700" style={{ margin: "0 auto 16px" }} />
                <div style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 700, fontSize: 20, marginBottom: 8 }}>Заявка принята!</div>
                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 14 }}>Мы свяжемся с вами в ближайшее время.</p>
              </div>
            )}
          </TiltCard>

          <TiltCard className="reveal reveal-delay-2 glass-card" style={{ borderRadius: 24, padding: "40px 36px" }}>
            <h2 style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 800, fontSize: 24, marginBottom: 24 }}>Как это работает?</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {[
                "Оставьте заявку — менеджер свяжется с вами",
                "Привезите авто на оценку. Осмотр занимает 30 минут",
                "Стоимость вашего авто идёт в первоначальный взнос",
                "Выбирайте новый автомобиль из нашего каталога",
                "Оформляем договор и вы уезжаете на новом авто",
              ].map((step, i) => (
                <div key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <div style={{ width: 28, height: 28, borderRadius: "50%", background: "rgba(255,215,0,0.15)", border: "1px solid rgba(255,215,0,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Unbounded', sans-serif", fontWeight: 700, fontSize: 12, color: "#FFD700", flexShrink: 0 }}>{i + 1}</div>
                  <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 14, lineHeight: 1.5, paddingTop: 4 }}>{step}</span>
                </div>
              ))}
            </div>
          </TiltCard>
        </div>
      </div>
    </div>
  );
}
