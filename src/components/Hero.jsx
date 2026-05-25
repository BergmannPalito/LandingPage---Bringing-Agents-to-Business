import { ChevronRight } from 'lucide-react'
import './Hero.css'

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg" />
      <div className="hero-grid" />
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-orb hero-orb-3" />
      <div className="hero-content container">
        <div className="hero-top">
          <div className="hero-text">
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              Eine Initiative von TU Darmstadt, Genow.AI & Momentum
            </div>
            <h1>
              <span className="gradient-text">Bringing Agents</span>
              <br />
              to Business
            </h1>
            <p className="hero-subtitle">
              79% der Unternehmen haben KI-Agenten adoptiert, aber nur 11%
              betreiben sie produktiv. Wir verbinden Forschung, Technologie
              und Recht, um diese Lücke zu schließen.
            </p>
            <div className="hero-actions">
              <a href="#approach" className="cta-button no-text-decoration">
                Unser Ansatz <ChevronRight size={18} />
              </a>
              <a href="#team" className="cta-button-secondary no-text-decoration">
                Das Team
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-visual-card">
              <div className="hero-visual-quote">
                <span className="hero-visual-quote-mark">"</span>
                <p>All of us are going to be managers of infinite minds.</p>
                <span className="hero-visual-quote-author">Satya Nadella</span>
                <span className="hero-visual-quote-role">CEO Microsoft — Davos 2026</span>
              </div>
              <div className="hero-visual-stats">
                <div className="hero-visual-stat">
                  <span className="hero-visual-stat-value">79%</span>
                  <span className="hero-visual-stat-label">adoptiert</span>
                </div>
                <div className="hero-visual-stat-divider" />
                <div className="hero-visual-stat">
                  <span className="hero-visual-stat-value">11%</span>
                  <span className="hero-visual-stat-label">produktiv</span>
                </div>
                <div className="hero-visual-stat-divider" />
                <div className="hero-visual-stat">
                  <span className="hero-visual-stat-value">3</span>
                  <span className="hero-visual-stat-label">Perspektiven</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-partners">
          <span className="hero-partners-label">Eine Kooperation von</span>
          <div className="hero-partners-logos">
            <span className="hero-partner-name">TU Darmstadt</span>
            <span className="hero-partner-sep" />
            <span className="hero-partner-name">Genow.AI</span>
            <span className="hero-partner-sep" />
            <span className="hero-partner-name">Momentum</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
