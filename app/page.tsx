export default function Home() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind",
    "Адаптивная верстка",
    "Продуктовые страницы",
    "Мобилография",
  ];

  return (
    <main className="relative overflow-hidden">
      
      {/* blobs */}
      <div className="blob pink one"></div>
      <div className="blob pink two"></div>

      {/* HERO */}
      <section className="px-6 py-40">
        <div className="paper max-w-5xl mx-auto">
          <p className="hand text-sm opacity-70 mb-4">
            frontend developer
          </p>

          <h1 className="text-7xl font-semibold mb-6 leading-tight">
  Ale
</h1>
<p className="hand text-xl mb-6 opacity-80">
  frontend · creative · clean
</p>
          <p className="text-lg max-w-xl mb-10">
            Создаю современные, аккуратные интерфейсы и продуктовые страницы,
            ориентированные на пользователя.
          </p>

         <a href="#contact" className="btn">
  <span className="transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1">
    Связаться
  </span>
</a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="px-6 mt-32">
        <div className="paper max-w-4xl mx-auto">
         <p className="hand opacity-70 mb-2">
  немного обо мне
</p>
<h2 className="text-3xl mb-6">Обо мне</h2>

          <p className="mb-4">
            Мне 15 лет, я frontend-разработчик с опытом более 2 лет.
            Работаю аккуратно, осознанно и на результат.
          </p>

          <p className="opacity-80">
            Работаю с современным стеком, быстро обучаюсь и всегда довожу
            проекты до логического и качественного результата.
          </p>

          <div className="grid grid-cols-3 gap-6 mt-10 text-sm">
            <div>
              <p className="opacity-60">Опыт</p>
              <p>2+ года</p>
            </div>
            <div>
              <p className="opacity-60">Специализация</p>
              <p>Frontend</p>
            </div>
            <div>
              <p className="opacity-60">Языки</p>
              <p>RU / EN / UZ</p>
            </div>
          </div>
        </div>
      </section>

{/* SKILLS */}
<section className="px-6 mt-32">
  <div className="paper max-w-5xl mx-auto">
    <h2 className="text-3xl mb-10">Навыки</h2>

    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "14px",
      }}
    >
      {skills.map((skill, i) => (
        <span
          key={skill}
          style={{
            background: "#ffffff",
            padding: "10px 18px",
            borderRadius: "14px",
            boxShadow: "0 6px 14px rgba(36, 36, 37, 0.1)",
            fontSize: "14px",
            lineHeight: 1.2,
            transform:
              i % 3 === 0
                ? "rotate(-0.6deg)"
                : i % 3 === 1
                ? "rotate(0.4deg)"
                : "rotate(-0.2deg)",
          }}
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
</section>

      {/* CONTACT */}
      <section id="contact" className="px-6 mt-32 pb-40">
        <div className="paper max-w-4xl mx-auto">
          <h2 className="text-3xl mb-4">Контакты</h2>

          <p className="mb-6">
            Готов обсудить проект или сотрудничество.
            Отвечаю быстро и по делу.
          </p>

        <a
  href="https://t.me/celviof"
  target="_blank"
  className="btn"
  style={{ textDecoration: "none" }}
>
  <span className="hand">Написать в Telegram</span>
</a>
        </div>
      </section>
    </main>
  );
}