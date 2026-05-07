import { Link } from "wouter";
import { ArrowRight, Star, Car, Fuel, Settings, Calendar } from "lucide-react";
import TiltCard from "../components/TiltCard";
import { useReveal } from "../hooks/useReveal";

const premiumCars = [
  { id: 1, make: "BMW", model: "7 Series", year: 2021, price: 5800000, monthly: 120000, engine: "3.0 бензин", transmission: "Автомат", badge: "Бизнес-класс" },
  { id: 2, make: "Mercedes-Benz", model: "S-Class", year: 2020, price: 7200000, monthly: 150000, engine: "3.0 бензин", transmission: "Автомат", badge: "Флагман" },
  { id: 3, make: "Audi", model: "A8", year: 2021, price: 6400000, monthly: 133000, engine: "3.0 бензин", transmission: "Автомат", badge: "Люкс" },
  { id: 4, make: "Porsche", model: "Cayenne", year: 2020, price: 8500000, monthly: 175000, engine: "3.0 бензин", transmission: "Автомат", badge: "Sport" },
  { id: 5, make: "Range Rover", model: "Sport", year: 2021, price: 9200000, monthly: 190000, engine: "3.0 дизель", transmission: "Автомат", badge: "Внедорожник" },
  { id: 6, make: "Lexus", model: "LX 570", year: 2022, price: 11000000, monthly: 228000, engine: "5.7 бензин", transmission: "Автомат", badge: "Топ-класс" },
];

export default function PremiumPage() {
  const ref = useReveal();

  return (
    <div ref={ref} style={{ background: "#0a0a0f", minHeight: "100vh", paddingTop: 72 }}>
      {/* Hero */}
      <section style={{ padding: "80px 24px 60px", background: "linear-gradient(180deg, #0d0d14 0%, #0a0a0f 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -100, right: -100, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,215,0,0.06) 0%, transparent 70%)" }} />
        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative" }}>
          <div className="reveal" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,215,0,0.1)", border: "1px solid rgba(255,215,0,0.25)", borderRadius: 50, padding: "6px 18px", marginBottom: 24 }}>
            <Star size={14} fill="#FFD700" color="#FFD700" />
            <span style={{ color: "#FFD700", fontSize: 12, fontFamily: "'Unbounded', sans-serif", fontWeight: 600, letterSpacing: "0.08em" }}>PREMIUM</span>
          </div>
          <div className="reveal" style={{ marginBottom: 8 }}>
            <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 13 }}>
              <Link href="/" style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>Главная</Link> / Premium
            </span>
          </div>
          <h1 className="reveal" style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 900, fontSize: "clamp(28px, 4vw, 60px)", letterSpacing: "-0.02em", marginBottom: 16 }}>
            Премиальные <span className="text-gold-gradient">автомобили</span>
          </h1>
          <p className="reveal" style={{ color: "rgba(255,255,255,0.55)", fontSize: 17, maxWidth: 520, lineHeight: 1.7 }}>
            Бизнес-класс и люксовые автомобили в рассрочку без банка. Те же условия — другой уровень.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px 80px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 28 }}>
          {premiumCars.map((car, i) => (
            <TiltCard
              key={car.id}
              className={`reveal glass-card reveal-delay-${(i % 4) + 1}`}
              style={{ borderRadius: 24, overflow: "hidden" }}
              intensity={6}
            >
              <div style={{ height: 220, background: `linear-gradient(135deg, rgba(255,215,0,0.08) 0%, rgba(255,100,0,0.06) 100%)`, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                <Car size={90} color="rgba(255,215,0,0.25)" />
                <div style={{ position: "absolute", top: 12, right: 12, background: "linear-gradient(135deg,#FFD700,#FFA500)", color: "#0a0a0f", fontSize: 11, fontFamily: "'Unbounded', sans-serif", fontWeight: 700, padding: "4px 12px", borderRadius: 50 }}>
                  {car.badge}
                </div>
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 50%, rgba(10,10,15,0.3) 100%)" }} />
              </div>
              <div style={{ padding: "28px 32px" }}>
                <div style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 800, fontSize: 20, marginBottom: 6 }}>
                  {car.make} {car.model}
                </div>
                <div style={{ color: "rgba(255,255,255,0.45)", fontSize: 13, marginBottom: 24, display: "flex", gap: 20, flexWrap: "wrap" }}>
                  <span style={{ display: "flex", alignItems: "center", gap: 4 }}><Fuel size={12} />{car.engine}</span>
                  <span style={{ display: "flex", alignItems: "center", gap: 4 }}><Settings size={12} />{car.transmission}</span>
                  <span style={{ display: "flex", alignItems: "center", gap: 4 }}><Calendar size={12} />{car.year}</span>
                </div>
                <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 24 }}>
                  <div>
                    <div style={{ color: "rgba(255,255,255,0.35)", fontSize: 12, marginBottom: 4 }}>Стоимость</div>
                    <div style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 900, fontSize: 22, background: "linear-gradient(135deg,#FFD700,#FFA500)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                      {car.price.toLocaleString("ru")} ₽
                    </div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ color: "rgba(255,255,255,0.35)", fontSize: 12, marginBottom: 4 }}>В мес. от</div>
                    <div style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 17, color: "#fff" }}>
                      {car.monthly.toLocaleString("ru")} ₽
                    </div>
                  </div>
                </div>
                <Link href="/zayavka">
                  <button className="btn-gold" style={{ width: "100%", padding: "14px", borderRadius: 12, fontSize: 13, display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                    ОФОРМИТЬ РАССРОЧКУ <ArrowRight size={15} />
                  </button>
                </Link>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Bottom CTA */}
        <TiltCard className="reveal" style={{ marginTop: 48, background: "linear-gradient(135deg, rgba(255,215,0,0.06) 0%, rgba(255,100,0,0.04) 100%)", border: "1px solid rgba(255,215,0,0.15)", borderRadius: 24, padding: "48px 40px", textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
            <Star size={16} fill="#FFD700" color="#FFD700" />
            <span style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 700, fontSize: 13, color: "#FFD700", letterSpacing: "0.08em" }}>ЭКСКЛЮЗИВНЫЕ УСЛОВИЯ</span>
          </div>
          <div style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 800, fontSize: "clamp(20px, 2.5vw, 32px)", marginBottom: 16 }}>
            Нет нужного премиум-авто?
          </div>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 16, marginBottom: 32, maxWidth: 480, margin: "0 auto 32px" }}>
            Подберём под заказ. Работаем с редкими и эксклюзивными моделями по всей России и за рубежом.
          </p>
          <Link href="/zayavka">
            <button className="btn-gold" style={{ padding: "16px 48px", borderRadius: 50, fontSize: 14, display: "inline-flex", alignItems: "center", gap: 10 }}>
              ЗАЯВКА ПОД ЗАКАЗ <ArrowRight size={16} />
            </button>
          </Link>
        </TiltCard>
      </div>
    </div>
  );
}
