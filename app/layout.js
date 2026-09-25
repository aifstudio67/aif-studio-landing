import './globals.css';

export const metadata = {
  title: 'AIF Studio — сайты, которые ведут к диалогу',
  description:
    'AIF Studio проектирует и запускает корпоративные сайты и лендинги для бизнеса.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
