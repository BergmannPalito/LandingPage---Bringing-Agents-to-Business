import { BrainCircuit, Scale, TrendingUp, Sparkles } from 'lucide-react'
import './Problem.css'

function Problem() {
  return (
    <section className="problem" id="problem">
      <div className="container">
        <span className="section-label">
          <Sparkles size={14} /> Die Herausforderung
        </span>
        <h2 className="section-title">Warum scheitern so viele<br />Agenten-Projekte?</h2>
        <p className="section-subtitle">
          Die Herausforderungen sind nicht nur technischer Natur. Im deutschen Mittelstand ist die
          rechtliche Unsicherheit das am häufigsten genannte Hemmnis für die KI-Adoption.
        </p>

        <div className="problem-grid">
          <div className="problem-card">
            <div className="problem-card-icon problem-card-icon-tech">
              <BrainCircuit size={24} color="var(--color-genow)" />
            </div>
            <h3>Technische Umsetzung</h3>
            <p>Wie kann man Agentensysteme technisch umsetzen und für welche Use Cases sind diese sinnvoll einsetzbar?</p>
          </div>
          <div className="problem-card">
            <div className="problem-card-icon problem-card-icon-legal">
              <Scale size={24} color="var(--color-momentum)" />
            </div>
            <h3>Rechtliche Anforderungen</h3>
            <p>Welche rechtlichen Anforderungen müssen erfüllt werden, insbesondere im Kontext von AI Act und DSGVO?</p>
          </div>
          <div className="problem-card">
            <div className="problem-card-icon problem-card-icon-business">
              <TrendingUp size={24} color="var(--color-tud)" />
            </div>
            <h3>Vom Pilot zur Produktion</h3>
            <p>Wie gelingt der Übergang von Pilotprojekten in den produktiven Einsatz und wie skaliert man erfolgreich?</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Problem
