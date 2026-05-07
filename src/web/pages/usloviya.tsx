import { useState } from "react";
import { Link } from "wouter";
import { CheckCircle, AlertTriangle, ArrowRight, Shield, XCircle } from "lucide-react";
import TiltCard from "../components/TiltCard";
import { useReveal } from "../hooks/useReveal";

export default function UsloviyaPage() {
  const ref = useReveal();
  const [form, setForm] = useState({ price: "", downPayment: "", term: "12" });
  const [result, setResult] = useState<{ monthly: number; overpay: number; total: number } | null>(null);

  const calculate = () => {
    const price = parseFloat(form.price.replace(/\s/g, ""));
    const dp = parseFloat(form.downPayment.replace(/\s/g, ""));
    const term = parseInt(form.term);
    if (!price || !dp || price <= 0 || dp <= 0 || dp >= price) return;
    const rate = 0.25; // 25% annual
    const principal = price - dp;
    const monthlyRate = rate / 12;
    const monthly = Math.round(principal * monthlyRate * Math.pow(1 + monthlyRate, term) / (Math.pow(1 + monthlyRate, term) - 1));
    const total = monthly * term + dp;
    const overpay = total - price;
    setResult({ monthly, overpay, total });
  };

  return (
    <div ref={ref} style={{ background: "#0a0a0f", minHeight: "100vh", paddingTop: 72 }}>
      {/* Hero */}
      <section style={{ padding: "80px 24px 60px", background: "linear-gradient(180deg, #0d0d16 0%, #0a0a0f 100%)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div className="reveal" style={{ marginBottom: 8 }}>
            <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 13 }}>
              <Link href="/" style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>Главная</Link> / Условия рассрочки
            </span>
          </div>
          <h1 className="reveal" style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 900, fontSize: "clamp(28px, 4vw, 60px)", letterSpacing: "-0.02em", marginBottom: 16 }}>
            Условия <span className="text-gold-gradient">рассрочки</span>
          </h1>
          <p className="reveal" style={{ color: "rgba(255,255,255,0.55)", fontSize: 17, maxWidth: 560, lineHeight: 1.7 }}>
            Честно и прозрачно о том, как работает рассрочка без банка.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px 80px" }}>
        {/* Main conditions grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24, marginBottom: 64 }}>
          {[
            { title: "Первоначальный взнос", value: "от 20%", sub: "Минимум 100 000 рублей" },
            { title: "Срок рассрочки", value: "до 36 мес.", sub: "6, 12, 18, 24 или 36 месяцев" },
            { title: "Возраст клиента", value: "от 18 лет", sub: "+ водительское удостоверение" },
            { title: "Гражданство", value: "Любое", sub: "Все страны СНГ и другие" },
          ].map((c, i) => (
            <TiltCard key={i} className={`reveal glass-card reveal-delay-${i + 1}`} style={{ borderRadius: 20, padding: "32px 28px" }}>
              <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, fontFamily: "'Unbounded', sans-serif", letterSpacing: "0.05em", marginBottom: 12 }}>{c.title.toUpperCase()}</div>
              <div style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 900, fontSize: 32, background: "linear-gradient(135deg,#FFD700,#FFA500)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginBottom: 8 }}>{c.value}</div>
              <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 14 }}>{c.sub}</div>
            </TiltCard>
          ))}
        </div>

        {/* What is it section */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 32, marginBottom: 64 }} className="reveal">
          <div style={{ gridColumn: "1 / -1" }}>
            <h2 style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 900, fontSize: "clamp(22px, 3vw, 40px)", marginBottom: 32, letterSpacing: "-0.02em" }}>
              Что такое <span className="text-gold-gradient">рассрочка без банка?</span>
            </h2>
          </div>
          <TiltCard className="glass-card" style={{ borderRadius: 20, padding: 32 }}>
            <div style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 700, fontSize: 16, marginBottom: 16, color: "#FFD700" }}>Для кого это:</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                "С плохой или нулевой кредитной историей",
                "Без гражданства РФ (граждане СНГ — да)",
                "С судимостями или после банкротства",
                "С постоянными отказами банков",
                "Всем, кому нужна защита от приставов",
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <CheckCircle size={16} color="#FFD700" style={{ flexShrink: 0, marginTop: 2 }} />
                  <span style={{ color: "rgba(255,255,255,0.75)", fontSize: 14, lineHeight: 1.5 }}>{item}</span>
                </div>
              ))}
            </div>
          </TiltCard>
          <TiltCard className="glass-card" style={{ borderRadius: 20, padding: 32 }}>
            <div style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 700, fontSize: 16, marginBottom: 16, color: "#FFD700" }}>Ключевое отличие:</div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 20, padding: "16px", background: "rgba(255,215,0,0.06)", borderRadius: 12, border: "1px solid rgba(255,215,0,0.15)" }}>
              <Shield size={24} color="#FFD700" style={{ flexShrink: 0 }} />
              <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 14, lineHeight: 1.6 }}>
                <strong>Все авто в нашей собственности</strong> — не в лизинге, не в залоге. Никакой третьей стороны, которая может забрать машину.
              </p>
            </div>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 14, lineHeight: 1.6 }}>
              Пока вы платите рассрочку — авто оформлено на нас. После выкупа — мы переоформляем его на вас. Всё по договору, просто и надёжно.
            </p>
          </TiltCard>
        </div>

        {/* No banks block */}
        <TiltCard className="reveal" style={{ background: "linear-gradient(135deg, rgba(229,57,53,0.06) 0%, rgba(255,215,0,0.04) 100%)", border: "1px solid rgba(229,57,53,0.2)", borderRadius: 24, padding: "40px", marginBottom: 64 }}>
          <div style={{ display: "flex", gap: 20, alignItems: "flex-start", flexWrap: "wrap" }}>
            <Shield size={40} color="#FFD700" style={{ flexShrink: 0, marginTop: 4 }} />
            <div>
              <div style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 800, fontSize: 20, marginBottom: 12 }}>Никаких банков</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {[
                  "Мы не отправляем заявки в банки",
                  "Не проверяем кредитную историю",
                  "Не передаём информацию третьим лицам",
                  "Одобрение только от нас",
                  "Договор напрямую с собственником автомобиля",
                  "Информация о сделке не уходит в БКИ",
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: 10, alignItems: "center", color: "rgba(255,255,255,0.75)", fontSize: 14 }}>
                    <CheckCircle size={14} color="#4CAF50" style={{ flexShrink: 0 }} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </TiltCard>

        {/* Geography */}
        <TiltCard className="reveal glass-card" style={{ borderRadius: 24, padding: 40, marginBottom: 64 }}>
          <div style={{ display: "flex", gap: 16, marginBottom: 20, alignItems: "center" }}>
            <AlertTriangle size={24} color="#FFD700" />
            <div style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 800, fontSize: 20 }}>География</div>
          </div>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <div style={{ flex: 1, minWidth: 260 }}>
              <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, marginBottom: 12, fontFamily: "'Unbounded', sans-serif", letterSpacing: "0.05em" }}>ВРЕМЕННО НЕ РАБОТАЕМ</div>
              {["Калининград", "СКФО (кроме Ставропольского Края)"].map((r, i) => (
                <div key={i} style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 8, color: "rgba(255,255,255,0.6)", fontSize: 14 }}>
                  <XCircle size={14} color="#E53935" />
                  {r}
                </div>
              ))}
            </div>
            <div style={{ flex: 1, minWidth: 260, background: "rgba(76,175,80,0.06)", border: "1px solid rgba(76,175,80,0.15)", borderRadius: 16, padding: 20 }}>
              <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, marginBottom: 12, fontFamily: "'Unbounded', sans-serif", letterSpacing: "0.05em" }}>ВАЖНО</div>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 14, lineHeight: 1.6 }}>
                Прописка в СКФО — не проблема, если автомобиль используется в другом регионе.
              </p>
            </div>
          </div>
        </TiltCard>

        {/* Calculator */}
        <div className="reveal" style={{ marginBottom: 64 }}>
          <h2 style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 900, fontSize: "clamp(22px, 3vw, 40px)", marginBottom: 32, letterSpacing: "-0.02em" }}>
            Калькулятор <span className="text-gold-gradient">рассрочки</span>
          </h2>
          <TiltCard className="glass-card" style={{ borderRadius: 24, padding: "40px 36px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20, marginBottom: 24 }}>
              <div>
                <label style={{ display: "block", color: "rgba(255,255,255,0.5)", fontSize: 12, fontFamily: "'Unbounded', sans-serif", letterSpacing: "0.05em", marginBottom: 8 }}>СТОИМОСТЬ АВТО (₽)</label>
                <input className="float-input" placeholder="1 500 000" value={form.price} onChange={e => setForm(v => ({ ...v, price: e.target.value }))} />
              </div>
              <div>
                <label style={{ display: "block", color: "rgba(255,255,255,0.5)", fontSize: 12, fontFamily: "'Unbounded', sans-serif", letterSpacing: "0.05em", marginBottom: 8 }}>ПЕРВЫЙ ВЗНОС (₽)</label>
                <input className="float-input" placeholder="300 000" value={form.downPayment} onChange={e => setForm(v => ({ ...v, downPayment: e.target.value }))} />
              </div>
              <div>
                <label style={{ display: "block", color: "rgba(255,255,255,0.5)", fontSize: 12, fontFamily: "'Unbounded', sans-serif", letterSpacing: "0.05em", marginBottom: 8 }}>СРОК (МЕС.)</label>
                <select className="float-input" value={form.term} onChange={e => setForm(v => ({ ...v, term: e.target.value }))}>
                  {["6", "12", "18", "24", "36"].map(t => <option key={t} value={t}>{t} месяцев</option>)}
                </select>
              </div>
            </div>
            <button className="btn-gold" onClick={calculate} style={{ padding: "14px 40px", borderRadius: 50, fontSize: 14 }}>
              РАССЧИТАТЬ
            </button>
            {result && (
              <div style={{ marginTop: 32, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16 }}>
                {[
                  { label: "Ежемесячный платёж", value: `${result.monthly.toLocaleString("ru")} ₽`, highlight: true },
                  { label: "Итоговая стоимость", value: `${result.total.toLocaleString("ru")} ₽` },
                  { label: "Переплата", value: `${result.overpay.toLocaleString("ru")} ₽` },
                ].map((r, i) => (
                  <div key={i} style={{ background: r.highlight ? "rgba(255,215,0,0.08)" : "rgba(255,255,255,0.03)", border: `1px solid ${r.highlight ? "rgba(255,215,0,0.25)" : "rgba(255,255,255,0.06)"}`, borderRadius: 16, padding: 20 }}>
                    <div style={{ color: "rgba(255,255,255,0.45)", fontSize: 12, marginBottom: 8 }}>{r.label}</div>
                    <div style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 800, fontSize: r.highlight ? 24 : 18, background: r.highlight ? "linear-gradient(135deg,#FFD700,#FFA500)" : "none", WebkitBackgroundClip: r.highlight ? "text" : "unset", WebkitTextFillColor: r.highlight ? "transparent" : "#fff", color: r.highlight ? "transparent" : "#fff" }}>
                      {r.value}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </TiltCard>
        </div>

        {/* CTA */}
        <TiltCard className="reveal" style={{ background: "rgba(255,215,0,0.05)", border: "1px solid rgba(255,215,0,0.15)", borderRadius: 24, padding: "48px", textAlign: "center" }}>
          <h3 style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 800, fontSize: "clamp(20px, 2.5vw, 32px)", marginBottom: 16 }}>
            Подошли условия?
          </h3>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 16, marginBottom: 32, maxWidth: 400, margin: "0 auto 32px" }}>
            Заполните заявку — наш менеджер свяжется с вами и подберёт оптимальный вариант.
          </p>
          <Link href="/zayavka">
            <button className="btn-gold" style={{ padding: "18px 48px", borderRadius: 50, fontSize: 15, display: "inline-flex", alignItems: "center", gap: 10 }}>
              ОСТАВИТЬ ЗАЯВКУ <ArrowRight size={18} />
            </button>
          </Link>
        </TiltCard>
      </div>
    </div>
  );
}
