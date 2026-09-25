import LeadForm from '../components/LeadForm';

const cases = [
  {
    title: 'Клиника косметологии',
    category: 'Корпоративный сайт',
    description: 'Подача услуг, навигация для пациентов и адаптация под мобильный экран.',
    image: '/portfolio/clinic.png',
    className: 'case-card--coral',
  },
  {
    title: 'Ремонт чиллеров',
    category: 'B2B-сервис',
    description: 'Сайт сервисной компании с ясной структурой услуг и первого обращения.',
    image: '/portfolio/chiller.png',
    className: 'case-card--blue',
  },
  {
    title: 'Торговый дом «Август»',
    category: 'Поставщик продуктов',
    description: 'Корпоративный сайт для оптовой торговли продуктами питания.',
    image: '/portfolio/august-food.png',
    className: 'case-card--orange',
  },
  {
    title: 'Good Kitchen',
    category: 'Сервис питания',
    description: 'Сайт услуги для корпоративных обедов с доставкой.',
    image: '/portfolio/good-kitchen.png',
    className: 'case-card--green',
  },
];

const services = [
  ['Корпоративный сайт', 'Когда важно объяснить сложную услугу и привести к диалогу.'],
  ['Лендинг услуги', 'Когда нужен один сильный маршрут от первого экрана к обращению.'],
  ['Редизайн и структура', 'Когда бизнес вырос, а текущий сайт больше не помогает продавать.'],
  ['Разработка на Next.js', 'Когда нужна быстрая, адаптивная и поддерживаемая основа сайта.'],
];

export default function Home() {
  return (
    <main>
      <header className="topbar container">
        <a className="brand" href="#top" aria-label="AIF Studio, на главную">
          <img src="/aif-logo.svg" alt="AIF" className="brand-logo" />
          <span className="brand-studio">studio</span>
        </a>
        <nav className="nav" aria-label="Основная навигация">
          <a href="#cases">Проекты</a>
          <a href="#process">Как работаем</a>
          <a href="#services">Услуги</a>
        </nav>
        <a className="header-cta" href="#contact">Обсудить задачу <ArrowIcon /></a>
      </header>

      <section className="hero container" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> AIF Studio · digital production</p>
          <h1>Сайт, который помогает клиенту сказать «да».</h1>
          <p className="hero-lead">
            Проектируем и запускаем корпоративные сайты и лендинги, где человеку сразу понятно: вы решаете его задачу и как начать разговор.
          </p>
          <div className="hero-actions">
            <a className="button button--primary" href="#contact">Обсудить проект <ArrowIcon /></a>
            <a className="text-link" href="#cases">Смотреть работы <ArrowIcon /></a>
          </div>
          <ul className="hero-tags" aria-label="Направления работы">
            <li>Стратегия</li><li>Дизайн</li><li>Разработка</li><li>SEO-основа</li>
          </ul>
        </div>
        <div className="hero-collage" aria-label="Избранные работы AIF Studio">
          <div className="collage-label">Выбранные<br />проекты <span>↘</span></div>
          <figure className="collage-main">
            <img src="/portfolio/august-food.png" alt="Проект торгового дома Август на экранах ноутбука и телефона" />
            <figcaption>01 / B2B и корпоративные сайты</figcaption>
          </figure>
          <figure className="collage-small collage-small--top">
            <img src="/portfolio/clinic.png" alt="Проект сайта клиники косметологии" />
          </figure>
          <figure className="collage-small collage-small--bottom">
            <img src="/portfolio/chiller.png" alt="Проект сайта сервиса по ремонту чиллеров" />
          </figure>
        </div>
      </section>

      <section className="problem-section" aria-labelledby="problem-title">
        <div className="container">
          <p className="section-kicker">01 / Сначала — задача клиента</p>
          <div className="split-heading">
            <h2 id="problem-title">Сильная услуга не должна теряться в непонятном сайте.</h2>
            <p>Посетитель не обязан разбираться, что вы делаете. Сайт должен быстро сориентировать, снять лишние вопросы и предложить следующий шаг.</p>
          </div>
          <div className="friction-grid">
            <article><span className="friction-number">01</span><h3>Неясно, с чего начать</h3><p>Важное сообщение прячется за общими фразами и перегруженным первым экраном.</p></article>
            <article><span className="friction-number">02</span><h3>Услуга выглядит как у всех</h3><p>Клиент не видит разницы, потому что на сайте нет понятного сценария и акцентов.</p></article>
            <article><span className="friction-number">03</span><h3>Заявка остаётся «на потом»</h3><p>Когда действие неочевидно, интерес не превращается в разговор с вашей командой.</p></article>
          </div>
        </div>
      </section>

      <section className="guide-section container" aria-labelledby="guide-title">
        <div className="guide-orbit" aria-hidden="true"><span>AIF</span><i /><b /></div>
        <div className="guide-content">
          <p className="section-kicker">02 / Роль AIF Studio</p>
          <h2 id="guide-title">Не набор блоков.<br />Понятный путь клиента.</h2>
          <p className="guide-lead">Берём на себя сложную часть: переводим задачу бизнеса в структуру, тексты и интерфейс, по которому легко двигаться.</p>
          <div className="guide-points">
            <div><CheckIcon /><span>Называем задачу клиента простыми словами</span></div>
            <div><CheckIcon /><span>Убираем всё, что отвлекает от решения</span></div>
            <div><CheckIcon /><span>Ведём к одному ясному действию</span></div>
          </div>
        </div>
      </section>

      <section className="cases-section" id="cases" aria-labelledby="cases-title">
        <div className="container">
          <div className="section-head section-head--dark">
            <div><p className="section-kicker">03 / В работе</p><h2 id="cases-title">Проекты говорят<br />предметно.</h2></div>
            <p>Показываем не абстрактные референсы, а реальные направления, с которыми работала студия.</p>
          </div>
          <div className="cases-grid">
            {cases.map((item, index) => (
              <article className={`case-card ${item.className}`} key={item.title}>
                <div className="case-image"><img src={item.image} alt={`Проект: ${item.title}`} /></div>
                <div className="case-info">
                  <span className="case-index">0{index + 1}</span>
                  <div><p>{item.category}</p><h3>{item.title}</h3><span className="case-description">{item.description}</span></div>
                  <span className="case-arrow"><ArrowIcon /></span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="process-section container" id="process" aria-labelledby="process-title">
        <div className="process-intro"><p className="section-kicker">04 / Без загадок</p><h2 id="process-title">Одна задача —<br />один следующий шаг.</h2></div>
        <ol className="process-list">
          <li><span>01</span><div><h3>Разбираем контекст</h3><p>Созваниваемся, смотрим на услугу, аудиторию и то, к чему сайт должен привести.</p></div></li>
          <li><span>02</span><div><h3>Собираем маршрут</h3><p>Формируем структуру, визуальную идею и сценарий, который ведёт к обращению.</p></div></li>
          <li><span>03</span><div><h3>Запускаем сайт</h3><p>Адаптируем под экраны, проверяем детали и передаём готовую основу для роста.</p></div></li>
        </ol>
      </section>

      <section className="services-section" id="services" aria-labelledby="services-title">
        <div className="container">
          <div className="section-head"><div><p className="section-kicker">05 / Чем можем помочь</p><h2 id="services-title">От первого экрана<br />до запуска.</h2></div><a className="text-link text-link--dark" href="#contact">Обсудить формат <ArrowIcon /></a></div>
          <div className="services-grid">
            {services.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <div className="container contact-grid">
          <div className="contact-copy">
            <p className="section-kicker section-kicker--light">06 / Следующий шаг</p>
            <h2 id="contact-title">Расскажите, что нужно изменить.</h2>
            <p>Опишите задачу в двух-трёх предложениях. Я отвечу и предложу, с чего начать.</p>
            <div className="direct-contacts">
              <a href="mailto:pokul.ilya@yandex.ru">pokul.ilya@yandex.ru <ArrowIcon /></a>
              <a href="tel:+79066689966">+7 906 668-99-66 <ArrowIcon /></a>
            </div>
          </div>
          <LeadForm />
        </div>
      </section>

      <footer className="footer container">
        <a className="brand" href="#top" aria-label="Наверх"><img src="/aif-logo.svg" alt="AIF" className="brand-logo" /><span className="brand-studio">studio</span></a>
        <p>© {new Date().getFullYear()} AIF Studio</p>
        <a href="mailto:pokul.ilya@yandex.ru">pokul.ilya@yandex.ru</a>
      </footer>
    </main>
  );
}

function ArrowIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><path d="M5 12h13M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function CheckIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" /><path d="m8.2 12.1 2.4 2.5 5.3-5.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
