'use client';

import { useState } from 'react';

export default function LeadForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get('name');
    const phone = data.get('phone');
    const project = data.get('project');
    const subject = 'Заявка с сайта AIF Studio';
    const body = `Имя: ${name}\nТелефон: ${phone}\nЗадача: ${project}`;

    setSent(true);
    window.location.href = `mailto:pokul.ilya@yandex.ru?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="lead-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>
          <span>Как к вам обращаться</span>
          <input name="name" type="text" autoComplete="name" placeholder="Имя" required />
        </label>
        <label>
          <span>Телефон</span>
          <input name="phone" type="tel" autoComplete="tel" placeholder="+7 900 000-00-00" required />
        </label>
      </div>
      <label>
        <span>Коротко о задаче</span>
        <textarea
          name="project"
          rows="4"
          placeholder="Например: нужен новый сайт для B2B-компании"
          required
        />
      </label>
      <label className="consent">
        <input type="checkbox" required />
        <span>Согласен на обработку данных для ответа на обращение.</span>
      </label>
      <button className="button button--light" type="submit">
        Отправить задачу
        <ArrowIcon />
      </button>
      <p className="form-note">
        {sent
          ? 'Открываем ваше почтовое приложение с подготовленным письмом.'
          : 'Откроется ваше почтовое приложение с готовым письмом.'}
      </p>
    </form>
  );
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path d="M5 12h13M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
