import { lazy, Suspense, useState } from "react";
import { Link } from "wouter";
import { CheckCircle, Star, ArrowRight, Shield, Clock, Users, Car, TrendingUp, ChevronRight, Send, PhoneCall } from "lucide-react";
import CountUp from "../components/CountUp";
import TiltCard from "../components/TiltCard";
import { useReveal } from "../hooks/useReveal";

const HeroCanvas = lazy(() => import("../components/HeroCanvas"));

const benefits = [
  "Кредитная история не важна",
  "Срок до 36 месяцев",
  "Первый взнос от 20%",
  "Не нужно одобрение банка",
  "Гражданство любой страны",
  "Свой парк автомобилей",
  "Не нужно КАСКО",
  "Без справок с работы",
];

const stats = [
  { value: 14, suffix: "", label: "Лет на рынке" },
  { value: 500, suffix: "+", label: "Авто в собственности" },
  { value: 200000, suffix: "+", label: "Подписчиков в соц. сетях" },
  { value: 1000, suffix: "+", label: "Клиентов выкупили авто" },
];

const features = [
  {
    icon: <Shield size={28} />,
    title: "Все авто в нашей собственности",
    desc: "Никакого лизинга. Все автомобили полностью выкуплены — ваш транспорт защищён от любых рисков.",
  },
  {
    icon: <CheckCircle size={28} />,
    title: "Без банков и БКИ",
    desc: "Мы не отправляем заявки и не проверяем кредитную историю. Одобрение только от нас, напрямую.",
  },
  {
    icon: <Clock size={28} />,
    title: "Решение за 30 минут",
    desc: "Быстрое рассмотрение без бюрократии. Приезжайте, выбирайте авто и уезжайте в тот же день.",
  },
  {
    icon: <Users size={28} />,
    title: "Любой статус клиента",
    desc: "Судимости, банкротство, СНГ — нам не важно. Достаточно 18+ и водительского удостоверения.",
  },
  {
    icon: <Car size={28} />,
    title: "Авто под заказ",
    desc: "Не нашли нужное в наличии? Подберём под вас. Широкая сеть поставщиков по всей России.",
  },
  {
    icon: <TrendingUp size={28} />,
    title: "Защита от приставов",
    desc: "На время рассрочки авто оформлено на нас — его не могут забрать приставы или поделить при разводе.",
  },
];

const testimonials = [
  {
    name: "Александр К.",
    city: "Санкт-Петербург",
    text: "Брал уже третий автомобиль здесь. Быстро, честно, без нервов. После двух отказов банков — отличная альтернатива.",
    rating: 5,
  },
  {
    name: "Камила Р.",
    city: "Москва",
    text: "Гражданка Казахстана, банки отказывали везде. Здесь всё оформили за день. Уже полгода езжу, всё отлично.",
    rating: 5,
  },
  {
    name: "Дмитрий В.",
    city: "Санкт-Петербург",
    text: "После банкротства думал, что авто в рассрочку — это нереально. Оказалось — реально! Спасибо команде.",
    rating: 5,
  },
];

const faq = [
  {
    q: "Какой минимальный первоначальный взнос?",
    a: "От 20% от стоимости автомобиля. Минимальная сумма взноса — от 100 000 рублей.",
  },
  {
    q: "Нужно ли гражданство РФ?",
    a: "Нет. Принимаем граждан любой страны, включая все страны СНГ.",
  },
  {
    q: "Могут ли забрать авто приставы?",
    a: "Нет. На время рассрочки автомобиль оформлен на нашу компанию, а не на вас.",
  },
  {
    q: "Как происходит переоформление после выплаты?",
    a: "Сразу после последнего платежа мы переоформляем автомобиль на вас. Всё по договору.",
  },
  {
    q: "Можно ли взять авто под заказ?",
    a: "Да. Если нужного авто нет в наличии — мы подберём под ваши параметры и бюджет.",
  },
];

export default function HomePage() {
  const sectionRef = useReveal();

  return (
    <div ref={sectionRef} style={{ overflowX: "hidden" }}>
      {/* ── HERO ───────────────────────────────────────────── */}
      <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden", background: "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(255,165,0,0.07) 0%, transparent 70%), #0a0a0f" }}>
        <Suspense fallback={null}>
          <HeroCanvas />
        </Suspense>

        {/* Gradient overlays */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(10,10,15,0.2) 0%, rgba(10,10,15,0.5) 70%, rgba(10,10,15,1) 100%)", zIndex: 1 }} />
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255,215,0,0.04) 0%, transparent 70%)", zIndex: 1 }} />

        <div style={{ position: "relative", zIndex: 2, maxWidth: 1280, margin: "0 auto", padding: "120px 24px 80px", width: "100%" }}>
          {/* Badge */}
          <div className="reveal" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,215,0,0.1)", border: "1px solid rgba(255,215,0,0.25)", borderRadius: 50, padding: "8px 20px", marginBottom: 32 }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#FFD700" }} className="pulse-gold" />
            <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: 13, fontWeight: 600, color: "#FFD700", letterSpacing: "0.05em" }}>
              КРУПНЕЙШАЯ КОМПАНИЯ В РОССИИ • С 2013 ГОДА
            </span>
          </div>

          <h1
            className="reveal reveal-delay-1"
            style={{
              fontFamily: "'Unbounded', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(36px, 6vw, 88px)",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              marginBottom: 28,
              maxWidth: 900,
            }}
          >
            <span style={{ color: "#fff" }}>АВТОМОБИЛИ<br />В РАССРОЧКУ </span>
            <span className="text-gold-gradient">БЕЗ БАНКА</span>
          </h1>

          <p className="reveal reveal-delay-2" style={{ color: "rgba(255,255,255,0.65)", fontSize: "clamp(16px, 2vw, 20px)", lineHeight: 1.7, maxWidth: 560, marginBottom: 48, fontFamily: "'Manrope', sans-serif" }}>
            Даём авто на лучших условиях. Кредитная история не важна. Первый взнос от 20%, срок до 36 месяцев.
          </p>

          <div className="reveal reveal-delay-3" style={{ display: "flex", flexWrap: "wrap", gap: 16, marginBottom: 64 }}>
            <Link href="/zayavka">
              <button className="btn-gold" style={{ padding: "18px 40px", borderRadius: 50, fontSize: 15, display: "flex", alignItems: "center", gap: 10 }}>
                ОНЛАЙН ЗАЯВКА <ArrowRight size={18} />
              </button>
            </Link>
            <Link href="/auto">
              <button className="btn-outline" style={{ padding: "18px 40px", borderRadius: 50, fontSize: 15 }}>
                СМОТРЕТЬ АВТО
              </button>
            </Link>
          </div>

          {/* Quick benefits grid */}
          <div className="reveal reveal-delay-4" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12, maxWidth: 900 }}>
            {benefits.map((b) => (
              <div key={b} style={{ display: "flex", alignItems: "center", gap: 10, color: "rgba(255,255,255,0.75)", fontSize: 13, fontFamily: "'Manrope', sans-serif" }}>
                <CheckCircle size={15} color="#FFD700" style={{ flexShrink: 0 }} />
                {b}
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
          <div style={{ width: 1, height: 48, background: "linear-gradient(to bottom, rgba(255,215,0,0.5), transparent)", animation: "fadeInUp 1.5s ease infinite" }} />
        </div>
      </section>

      {/* ── MARQUEE ─────────────────────────────────────────── */}
      <div style={{ background: "linear-gradient(135deg, #FFD700, #FFA500)", padding: "16px 0", overflow: "hidden" }}>
        <div className="marquee-track">
          {Array(6).fill(null).map((_, i) => (
            <span key={i} style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 700, fontSize: 13, color: "#0a0a0f", letterSpacing: "0.1em", flexShrink: 0 }}>
              РАССРОЧКА БЕЗ БАНКА&nbsp;&nbsp;•&nbsp;&nbsp;С 2013 ГОДА&nbsp;&nbsp;•&nbsp;&nbsp;ПЕРВЫЙ ВЗНОС ОТ 20%&nbsp;&nbsp;•&nbsp;&nbsp;СРОК ДО 36 МЕС&nbsp;&nbsp;•&nbsp;&nbsp;БЕЗ КАСКО&nbsp;&nbsp;•&nbsp;&nbsp;БЕЗ СПРАВОК&nbsp;&nbsp;•
            </span>
          ))}
        </div>
      </div>

      {/* ── STATS ───────────────────────────────────────────── */}
      <section className="section-padding" style={{ background: "#0a0a0f", position: "relative" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, rgba(255,215,0,0.3), transparent)" }} />
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 2 }}>
            {stats.map((s, i) => (
              <TiltCard key={i} className="reveal" style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 20,
                padding: "40px 32px",
                textAlign: "center",
              }}>
                <div style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 900, fontSize: "clamp(40px, 4vw, 64px)", lineHeight: 1, marginBottom: 12, background: "linear-gradient(135deg,#FFD700,#FFA500)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  <CountUp end={s.value} suffix={s.suffix} />
                </div>
                <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, fontFamily: "'Manrope', sans-serif", fontWeight: 500 }}>
                  {s.label}
                </div>
              </TiltCard>
            ))}
          </div>

          <div className="reveal" style={{ marginTop: 32, textAlign: "center" }}>
            <TiltCard style={{ display: "inline-block", background: "rgba(255,215,0,0.05)", border: "1px solid rgba(255,215,0,0.15)", borderRadius: 20, padding: "24px 48px" }}>
              <div style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 900, fontSize: "clamp(24px, 3vw, 40px)", background: "linear-gradient(135deg,#FFD700,#FFA500)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginBottom: 8 }}>
                от 100 000 ₽
              </div>
              <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 14 }}>Минимальный первоначальный взнос</div>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* ── WHY US ──────────────────────────────────────────── */}
      <section className="section-padding" style={{ background: "linear-gradient(180deg, #0a0a0f 0%, #0d0d16 100%)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <div className="reveal" style={{ textAlign: "center", marginBottom: 80 }}>
            <div style={{ display: "inline-block", background: "rgba(255,215,0,0.08)", border: "1px solid rgba(255,215,0,0.2)", borderRadius: 50, padding: "6px 20px", marginBottom: 20 }}>
              <span style={{ color: "#FFD700", fontSize: 12, fontFamily: "'Unbounded', sans-serif", fontWeight: 600, letterSpacing: "0.1em" }}>ПОЧЕМУ МЫ</span>
            </div>
            <h2 style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 900, fontSize: "clamp(28px, 4vw, 52px)", letterSpacing: "-0.02em", marginBottom: 20 }}>
              Не просто рассрочка —<br /><span className="text-gold-gradient">честный бизнес</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 17, maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>
              Мы берём на себя все риски, работаем с теми кому отказали банки, и оформляем всё прозрачно и по договору.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {features.map((f, i) => (
              <TiltCard
                key={i}
                className="reveal glass-card"
                style={{
                  borderRadius: 24,
                  padding: "36px 32px",
                  cursor: "default",
                  transitionDelay: `${i * 0.08}s`,
                }}
              >
                <div style={{ width: 56, height: 56, borderRadius: 16, background: "rgba(255,215,0,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFD700", marginBottom: 24 }}>
                  {f.icon}
                </div>
                <h3 style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 700, fontSize: 16, marginBottom: 12, lineHeight: 1.4 }}>{f.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 14, lineHeight: 1.7 }}>{f.desc}</p>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ──────────────────────────────────────── */}
      <section className="section-padding" style={{ background: "#0a0a0f" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <TiltCard
            className="reveal"
            style={{
              background: "linear-gradient(135deg, rgba(255,215,0,0.08) 0%, rgba(255,100,0,0.05) 100%)",
              border: "1px solid rgba(255,215,0,0.2)",
              borderRadius: 32,
              padding: "clamp(40px, 6vw, 80px)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div style={{ position: "absolute", top: -60, right: -60, width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,215,0,0.08) 0%, transparent 70%)" }} />
            <div style={{ position: "relative", zIndex: 1, display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 40 }}>
              <div>
                <div style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 900, fontSize: "clamp(24px, 3vw, 44px)", lineHeight: 1.1, marginBottom: 16 }}>
                  Готовы оформить<br /><span className="text-gold-gradient">рассрочку сегодня?</span>
                </div>
                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 16, maxWidth: 480, lineHeight: 1.7 }}>
                  Подпишитесь на наш Telegram-канал, чтобы первым узнавать о новых поступлениях, или оставьте заявку прямо сейчас.
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "flex-start" }}>
                <Link href="/zayavka">
                  <button className="btn-gold" style={{ padding: "18px 40px", borderRadius: 50, fontSize: 15, display: "flex", alignItems: "center", gap: 10 }}>
                    ОСТАВИТЬ ЗАЯВКУ <ArrowRight size={18} />
                  </button>
                </Link>
                <a href="https://t.me/rassrochka_auto" target="_blank" rel="noreferrer"
                  style={{ display: "flex", alignItems: "center", gap: 10, color: "#FFD700", fontFamily: "'Manrope', sans-serif", fontSize: 14, fontWeight: 600, textDecoration: "none" }}>
                  <Send size={16} />
                  Перейти в Telegram канал
                </a>
              </div>
            </div>
          </TiltCard>
        </div>
      </section>

      {/* ── REVIEWS ─────────────────────────────────────────── */}
      <section className="section-padding" style={{ background: "#0d0d16" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <div className="reveal" style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ display: "inline-block", background: "rgba(255,215,0,0.08)", border: "1px solid rgba(255,215,0,0.2)", borderRadius: 50, padding: "6px 20px", marginBottom: 20 }}>
              <span style={{ color: "#FFD700", fontSize: 12, fontFamily: "'Unbounded', sans-serif", fontWeight: 600, letterSpacing: "0.1em" }}>ОТЗЫВЫ</span>
            </div>
            <h2 style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 900, fontSize: "clamp(24px, 3.5vw, 48px)", letterSpacing: "-0.02em" }}>
              Нам <span className="text-gold-gradient">доверяют</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {testimonials.map((t, i) => (
              <TiltCard
                key={i}
                className={`reveal glass-card reveal-delay-${i + 1}`}
                style={{ borderRadius: 24, padding: 32 }}
              >
                <div style={{ display: "flex", gap: 4, marginBottom: 20 }}>
                  {Array(t.rating).fill(null).map((_, j) => (
                    <Star key={j} size={16} fill="#FFD700" color="#FFD700" />
                  ))}
                </div>
                <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 15, lineHeight: 1.7, marginBottom: 24, fontStyle: "italic" }}>
                  "{t.text}"
                </p>
                <div>
                  <div style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 15 }}>{t.name}</div>
                  <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 13 }}>{t.city}</div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────── */}
      <section className="section-padding" style={{ background: "#0a0a0f" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 24px" }}>
          <div className="reveal" style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ display: "inline-block", background: "rgba(255,215,0,0.08)", border: "1px solid rgba(255,215,0,0.2)", borderRadius: 50, padding: "6px 20px", marginBottom: 20 }}>
              <span style={{ color: "#FFD700", fontSize: 12, fontFamily: "'Unbounded', sans-serif", fontWeight: 600, letterSpacing: "0.1em" }}>FAQ</span>
            </div>
            <h2 style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 900, fontSize: "clamp(24px, 3.5vw, 48px)", letterSpacing: "-0.02em" }}>
              Частые <span className="text-gold-gradient">вопросы</span>
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {faq.map((f, i) => (
              <FaqItem key={i} q={f.q} a={f.a} delay={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT STRIP ───────────────────────────────────── */}
      <section style={{ background: "#111118", padding: "48px 24px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 24 }}>
          <div>
            <div style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 700, fontSize: 13, color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em", marginBottom: 8 }}>СВЯЗАТЬСЯ С НАМИ</div>
            <a href="tel:+78126027322" style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 900, fontSize: "clamp(24px, 3vw, 40px)", color: "#fff", textDecoration: "none", display: "flex", alignItems: "center", gap: 16 }}>
              <PhoneCall size={32} color="#FFD700" />
              +7 (812) 602-73-22
            </a>
            <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 14, marginTop: 4 }}>Звонить можно 24/7</div>
          </div>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a href="https://t.me/rassrochka_auto" target="_blank" rel="noreferrer">
              <button className="btn-outline" style={{ padding: "14px 32px", borderRadius: 50, fontSize: 13, display: "flex", alignItems: "center", gap: 8 }}>
                <Send size={15} /> Telegram
              </button>
            </a>
            <Link href="/zayavka">
              <button className="btn-gold" style={{ padding: "14px 32px", borderRadius: 50, fontSize: 13, display: "flex", alignItems: "center", gap: 8 }}>
                ОСТАВИТЬ ЗАЯВКУ <ChevronRight size={15} />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

// FAQ Accordion item
function FaqItem({ q, a, delay }: { q: string; a: string; delay: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`reveal reveal-delay-${delay + 1} glass-card`}
      style={{ borderRadius: 16, overflow: "hidden", cursor: "pointer" }}
      onClick={() => setOpen(v => !v)}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "22px 28px" }}>
        <span style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 600, fontSize: 15, flex: 1, paddingRight: 20 }}>{q}</span>
        <ChevronRight size={18} color="#FFD700" style={{ flexShrink: 0, transform: open ? "rotate(90deg)" : "none", transition: "transform 0.3s" }} />
      </div>
      {open && (
        <div style={{ padding: "0 28px 22px", color: "rgba(255,255,255,0.6)", fontSize: 14, lineHeight: 1.7, borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 18 }}>
          {a}
        </div>
      )}
    </div>
  );
}


