import { useState } from "react";
import { Link } from "wouter";
import { Filter, ArrowRight, Car, Fuel, Settings, Calendar } from "lucide-react";
import TiltCard from "../components/TiltCard";
import { useReveal } from "../hooks/useReveal";

const cars = [
  { id: 1, make: "Toyota", model: "Camry", year: 2019, price: 1850000, monthly: 38000, engine: "2.5 бензин", transmission: "Автомат", color: "Белый", category: "sedan" },
  { id: 2, make: "Hyundai", model: "Solaris", year: 2021, price: 1200000, monthly: 25000, engine: "1.6 бензин", transmission: "Автомат", color: "Серебристый", category: "sedan" },
  { id: 3, make: "Kia", model: "Sportage", year: 2020, price: 2100000, monthly: 44000, engine: "2.0 бензин", transmission: "Автомат", color: "Чёрный", category: "suv" },
  { id: 4, make: "Volkswagen", model: "Polo", year: 2022, price: 1050000, monthly: 22000, engine: "1.6 бензин", transmission: "Механика", color: "Синий", category: "sedan" },
  { id: 5, make: "Nissan", model: "X-Trail", year: 2019, price: 2400000, monthly: 50000, engine: "2.5 бензин", transmission: "Вариатор", color: "Белый", category: "suv" },
  { id: 6, make: "BMW", model: "5 Series", year: 2020, price: 3800000, monthly: 80000, engine: "2.0 бензин", transmission: "Автомат", color: "Чёрный", category: "premium" },
  { id: 7, make: "Mercedes", model: "E-Class", year: 2019, price: 4200000, monthly: 88000, engine: "2.0 бензин", transmission: "Автомат", color: "Серебристый", category: "premium" },
  { id: 8, make: "Skoda", model: "Octavia", year: 2021, price: 1650000, monthly: 34000, engine: "1.4 бензин", transmission: "Автомат", color: "Серый", category: "sedan" },
  { id: 9, make: "Renault", model: "Duster", year: 2022, price: 1400000, monthly: 29000, engine: "2.0 бензин", transmission: "Механика", color: "Оранжевый", category: "suv" },
];

const categories = [
  { id: "all", label: "Все" },
  { id: "sedan", label: "Седаны" },
  { id: "suv", label: "Внедорожники" },
  { id: "premium", label: "Премиум" },
];

export default function AutoPage() {
  const [cat, setCat] = useState("all");
  const [search, setSearch] = useState("");
  const ref = useReveal();

  const filtered = cars.filter(c =>
    (cat === "all" || c.category === cat) &&
    (`${c.make} ${c.model}`.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div ref={ref} style={{ background: "#0a0a0f", minHeight: "100vh", paddingTop: 72 }}>
      {/* Header */}
      <section style={{ padding: "80px 24px 60px", background: "linear-gradient(180deg, #0d0d16 0%, #0a0a0f 100%)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div className="reveal" style={{ marginBottom: 8, display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, fontFamily: "'Manrope', sans-serif" }}>
              <Link href="/" style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>Главная</Link> / Каталог
            </span>
          </div>
          <h1 className="reveal" style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 900, fontSize: "clamp(28px, 4vw, 60px)", letterSpacing: "-0.02em", marginBottom: 16 }}>
            Авто <span className="text-gold-gradient">в наличии</span>
          </h1>
          <p className="reveal" style={{ color: "rgba(255,255,255,0.55)", fontSize: 17, maxWidth: 520, lineHeight: 1.7 }}>
            Выберите автомобиль из нашего парка или оставьте заявку на покупку под заказ.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px 80px" }}>
        {/* Filters */}
        <div className="reveal" style={{ display: "flex", flexWrap: "wrap", gap: 16, marginBottom: 40, alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 50, padding: "4px 6px" }}>
            {categories.map(c => (
              <button key={c.id} onClick={() => setCat(c.id)} style={{
                padding: "8px 20px", borderRadius: 50, border: "none", cursor: "pointer", fontFamily: "'Manrope', sans-serif", fontWeight: 600, fontSize: 13,
                background: cat === c.id ? "linear-gradient(135deg,#FFD700,#FFA500)" : "transparent",
                color: cat === c.id ? "#0a0a0f" : "rgba(255,255,255,0.65)",
                transition: "all 0.2s",
              }}>
                {c.label}
              </button>
            ))}
          </div>
          <input
            className="float-input"
            placeholder="Поиск по марке или модели..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{ maxWidth: 300 }}
          />
          <div style={{ marginLeft: "auto", color: "rgba(255,255,255,0.4)", fontSize: 14, fontFamily: "'Manrope', sans-serif" }}>
            Найдено: <strong style={{ color: "#FFD700" }}>{filtered.length}</strong> авто
          </div>
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 24 }}>
          {filtered.map((car, i) => (
            <TiltCard
              key={car.id}
              className={`reveal glass-card reveal-delay-${(i % 5) + 1}`}
              style={{ borderRadius: 24, overflow: "hidden" }}
            >
              {/* Car image placeholder */}
              <div style={{ height: 200, background: `linear-gradient(135deg, rgba(255,215,0,0.06) 0%, rgba(255,100,0,0.04) 100%)`, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                <Car size={80} color="rgba(255,215,0,0.2)" />
                {car.category === "premium" && (
                  <div style={{ position: "absolute", top: 12, right: 12, background: "linear-gradient(135deg,#FFD700,#FFA500)", color: "#0a0a0f", fontSize: 11, fontFamily: "'Unbounded', sans-serif", fontWeight: 700, padding: "4px 12px", borderRadius: 50 }}>
                    PREMIUM
                  </div>
                )}
                <div style={{ position: "absolute", top: 12, left: 12, background: "rgba(10,10,15,0.7)", color: "#fff", fontSize: 12, fontFamily: "'Manrope', sans-serif", fontWeight: 600, padding: "4px 12px", borderRadius: 50, backdropFilter: "blur(8px)" }}>
                  {car.year}
                </div>
              </div>
              <div style={{ padding: "24px 28px" }}>
                <div style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 800, fontSize: 18, marginBottom: 4 }}>
                  {car.make} {car.model}
                </div>
                <div style={{ color: "rgba(255,255,255,0.45)", fontSize: 13, marginBottom: 20, display: "flex", gap: 16, flexWrap: "wrap" }}>
                  <span style={{ display: "flex", alignItems: "center", gap: 4 }}><Fuel size={12} />{car.engine}</span>
                  <span style={{ display: "flex", alignItems: "center", gap: 4 }}><Settings size={12} />{car.transmission}</span>
                  <span style={{ display: "flex", alignItems: "center", gap: 4 }}><Calendar size={12} />{car.year}</span>
                </div>
                <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 20 }}>
                  <div>
                    <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, marginBottom: 4 }}>Стоимость</div>
                    <div style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 800, fontSize: 20, background: "linear-gradient(135deg,#FFD700,#FFA500)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                      {car.price.toLocaleString("ru")} ₽
                    </div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, marginBottom: 4 }}>В мес. от</div>
                    <div style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 16, color: "#fff" }}>
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

        {/* Under order CTA */}
        <TiltCard className="reveal" style={{ marginTop: 48, background: "rgba(255,215,0,0.05)", border: "1px solid rgba(255,215,0,0.15)", borderRadius: 24, padding: "48px 40px", textAlign: "center" }}>
          <div style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 800, fontSize: "clamp(20px, 2.5vw, 32px)", marginBottom: 16 }}>
            Не нашли нужное авто?
          </div>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 16, marginBottom: 32, maxWidth: 480, margin: "0 auto 32px" }}>
            Оставьте заявку, и мы подберём автомобиль под ваши параметры и бюджет.
          </p>
          <Link href="/zayavka">
            <button className="btn-gold" style={{ padding: "16px 40px", borderRadius: 50, fontSize: 14 }}>
              ЗАЯВКА ПОД ЗАКАЗ
            </button>
          </Link>
        </TiltCard>
      </div>
    </div>
  );
}
