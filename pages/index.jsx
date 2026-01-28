import { useEffect, useState } from "react";
import theme from "../theme.json";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="container">
      <div className="overlay" />

      <main className="content">
        <img
          src="/logo-no-background.jpeg"
          alt="MegaBuy Global"
          className="logo"
        />

        <h1 className="headline">
          <span className="primary">{theme.brand.taglinePrimary}</span>
          <span className="accent">{theme.brand.taglineSecondary}</span>
        </h1>

        <p className="description">{theme.brand.description}</p>

        <div className="buttons">
          {theme.buttons.map((btn) => (
            <a
              key={btn.label}
              href={btn.action}
              className={`btn ${btn.style}`}
            >
              {btn.label}
            </a>
          ))}
        </div>

        <p className="countdown">
          Launching <strong>1 March 2026</strong>
        </p>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          background: radial-gradient(
            circle at top,
            ${theme.colors.gradientStart},
            ${theme.colors.background}
          );
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          color: ${theme.colors.primaryText};
          font-family: system-ui, -apple-system, BlinkMacSystemFont;
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            transparent,
            ${theme.colors.background}
          );
          opacity: 0.6;
        }

        .content {
          position: relative;
          text-align: center;
          max-width: 720px;
          padding: 2rem;
          animation: fadeIn 1.2s ease forwards;
        }

        .logo {
          width: 120px;
          margin: 0 auto 2rem;
        }

        .headline {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1rem;
        }

        .primary {
          display: block;
          opacity: 0;
          animation: slideUp 1s ease forwards;
        }

        .accent {
          display: block;
          color: ${theme.colors.accentText};
          opacity: 0;
          animation: slideUp 1s ease forwards;
          animation-delay: 0.3s;
          text-shadow: 0 0 20px rgba(177, 18, 38, 0.5);
        }

        .description {
          color: #b5b5b5;
          margin: 1.5rem auto 2.5rem;
          max-width: 520px;
        }

        .buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn {
          padding: 0.8rem 1.6rem;
          border-radius: 10px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.25s ease;
        }

        .btn.primary {
          background: ${theme.colors.buttonPrimary};
          color: white;
        }

        .btn.primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(177, 18, 38, 0.4);
        }

        .btn.secondary {
          border: 1px solid #333;
          color: white;
          background: transparent;
        }

        .btn.secondary:hover {
          background: #111;
        }

        .countdown {
          margin-top: 3rem;
          font-size: 0.9rem;
          color: #888;
        }

        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
