import { useState } from "react";
import { Link } from "wouter";
import { CheckCircle, ArrowRight, Clock, TrendingUp, DollarSign } from "lucide-react";
import TiltCard from "../components/TiltCard";
import { useReveal } from "../hooks/useReveal";

export default function VikupPage() {
  const ref = useReveal();
  const [form, setForm] = useState({ make: "", model: "", year: "", phone: "" });
  const [sent, setSent] = useState(false);
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement>) => setForm(v => ({ ...v, [k]: e.target.value }));

  return (
    <div ref={ref} style={{ background: "#0a0a0f", minHeight: "100vh", paddingTop: 72 }}>
      <section style={{ padding: "80px 24px 60px", background: "linear-gradient(180deg, #0d0d16 0%, #0a0a0f 100%)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div className="reveal" style={{ marginBottom: 8 }}>
            <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 13 }}>
              <Link href="/" style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>Главная</Link> / Продать авто
            </span>
          </div>
          <h1 className="reveal" style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 900, fontSize: "clamp(28px, 4vw, 60px)", letterSpacing: "-0.02em", marginBottom: 16 }}>
            Продать <span className="text-gold-gradient">свой авто</span>
          </h1>
          <p className="reveal" style={{ color: "rgba(255,255,255,0.55)", fontSize: 17, maxWidth: 520, lineHeight: 1.7 }}>
            Выкупим за наличные. Цена на 10% выше, чем при продаже через Авито или AUTO.ru
          </p>
        </div>
      </section>

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px 80px" }}>
        {/* Options */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, marginBottom: 64 }}>
          <TiltCard className="reveal glass-card" style={{ borderRadius: 24, padding: "40px 36px", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg,#FFD700,#FFA500)" }} />
            <div style={{ width: 52, height: 52, borderRadius: 14, background: "rgba(255,215,0,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFD700", marginBottom: 24 }}>
              <Clock size={26} />
            </div>
            <h3 style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 800, fontSize: 20, marginBottom: 16 }}>Выкуп за 30 минут</h3>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 14, lineHeight: 1.7, marginBottom: 24 }}>
              Мы проверим и оценим ваш автомобиль, после чего предложим нашу цену. Если устроит — получите деньги в течение получаса.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {["Быстрая оценка на месте", "Деньги сразу", "Без торга и затяжек"].map((f, i) => (
                <div key={i} style={{ display: "flex", gap: 10, alignItems: "center", color: "rgba(255,255,255,0.7)", fontSize: 14 }}>
                  <CheckCircle size={14} color="#FFD700" />
                  {f}
                </div>
              ))}
            </div>
          </TiltCard>

          <TiltCard className="reveal reveal-delay-1 glass-card" style={{ borderRadius: 24, padding: "40px 36px", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg,#FFA500,#FFD700)" }} />
            <div style={{ width: 52, height: 52, borderRadius: 14, background: "rgba(255,215,0,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFD700", marginBottom: 24 }}>
              <TrendingUp size={26} />
            </div>
            <h3 style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 800, fontSize: 20, marginBottom: 16 }}>Продажа за вашу цену</h3>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 14, lineHeight: 1.7, marginBottom: 24 }}>
              Вы сами оцениваете авто и оставляете его у нас в парке. Реализуем напрямую или в рассрочку. Продаём 2-3 авто ежедневно.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {["Ваша цена — ваши условия", "Широкая база покупателей", "Быстрая реализация"].map((f, i) => (
                <div key={i} style={{ display: "flex", gap: 10, alignItems: "center", color: "rgba(255,255,255,0.7)", fontSize: 14 }}>
                  <CheckCircle size={14} color="#FFD700" />
                  {f}
                </div>
              ))}
            </div>
          </TiltCard>
        </div>

        {/* Price advantage */}
        <TiltCard className="reveal" style={{ background: "linear-gradient(135deg, rgba(255,215,0,0.08) 0%, rgba(255,100,0,0.05) 100%)", border: "1px solid rgba(255,215,0,0.2)", borderRadius: 24, padding: "40px", marginBottom: 64, display: "flex", alignItems: "center", gap: 32, flexWrap: "wrap" }}>
          <div style={{ width: 72, height: 72, borderRadius: 20, background: "linear-gradient(135deg,#FFD700,#FFA500)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <DollarSign size={36} color="#0a0a0f" />
          </div>
          <div>
            <div style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 900, fontSize: "clamp(20px, 2.5vw, 32px)", marginBottom: 8 }}>
              На <span className="text-gold-gradient">10% выше</span> рынка
            </div>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 16, lineHeight: 1.6, maxWidth: 500 }}>
              Мы выкупаем автомобили дороже, чем Авито и AUTO.ru, потому что сразу реализуем их в нашем каталоге.
            </p>
          </div>
        </TiltCard>

        {/* Form */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 40 }}>
          <TiltCard className="reveal glass-card" style={{ borderRadius: 24, padding: "40px 36px" }}>
            <h2 style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Оценить авто</h2>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, marginBottom: 28 }}>Заполните форму — рассчитаем стоимость и свяжемся с вами</p>
            {!sent ? (
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                  { k: "make", label: "МАРКА", ph: "Toyota, BMW, Kia..." },
                  { k: "model", label: "МОДЕЛЬ", ph: "Camry, X5, Sportage..." },
                  { k: "year", label: "ГОД ВЫПУСКА", ph: "2018" },
                  { k: "phone", label: "ТЕЛЕФОН *", ph: "+7 (___) ___-__-__" },
                ].map(f => (
                  <div key={f.k}>
                    <label style={{ display: "block", color: "rgba(255,255,255,0.45)", fontSize: 12, fontFamily: "'Unbounded', sans-serif", letterSpacing: "0.05em", marginBottom: 8 }}>{f.label}</label>
                    <input className="float-input" placeholder={f.ph} value={(form as any)[f.k]} onChange={set(f.k)} />
                  </div>
                ))}
                <button className="btn-gold" onClick={() => setSent(true)} style={{ marginTop: 8, padding: "16px", borderRadius: 50, fontSize: 14, display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
                  РАССЧИТАТЬ СТОИМОСТЬ <ArrowRight size={16} />
                </button>
              </div>
            ) : (
              <div style={{ textAlign: "center", padding: "20px 0" }}>
                <CheckCircle size={48} color="#FFD700" style={{ margin: "0 auto 16px" }} />
                <div style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 700, fontSize: 20, marginBottom: 8 }}>Заявка принята!</div>
                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 14, lineHeight: 1.6 }}>Мы свяжемся с вами и озвучим цену в течение 30 минут.</p>
              </div>
            )}
          </TiltCard>

          <TiltCard className="reveal reveal-delay-1 glass-card" style={{ borderRadius: 24, padding: "40px 36px" }}>
            <h2 style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 800, fontSize: 22, marginBottom: 24 }}>Процесс продажи</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {[
                { n: "1", title: "Оставьте заявку", desc: "Укажите марку, модель и год. Мы перезвоним." },
                { n: "2", title: "Привезите авто", desc: "Осмотр и оценка занимает 30 минут." },
                { n: "3", title: "Получите деньги", desc: "Наличными или переводом сразу после сделки." },
              ].map(s => (
                <div key={s.n} style={{ display: "flex", gap: 20 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 12, background: "linear-gradient(135deg,#FFD700,#FFA500)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Unbounded', sans-serif", fontWeight: 900, fontSize: 16, color: "#0a0a0f", flexShrink: 0 }}>{s.n}</div>
                  <div>
                    <div style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 700, fontSize: 15, marginBottom: 4 }}>{s.title}</div>
                    <div style={{ color: "rgba(255,255,255,0.55)", fontSize: 14, lineHeight: 1.6 }}>{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </TiltCard>
        </div>
      </div>
    </div>
  );
}
