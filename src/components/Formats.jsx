import {
  Mic,
  Briefcase,
  Lightbulb,
  Sparkles,
} from 'lucide-react'
import { formats } from '../data'
import './Formats.css'

const formatIcons = [
  Briefcase,
  Mic,
  Lightbulb,
]

function Formats() {
  return (
    <section className="formats" id="formats">
      <div className="container">
        <div className="text-center">
          <span className="section-label">
            <Sparkles size={14} /> Angebote
          </span>
          <h2 className="section-title">Was wir Interessierten anbieten</h2>
          <p className="section-subtitle margin-auto">
            Konkrete Formate, um Potenziale, Risiken und nächste Schritte für AI Agents zu klären.
          </p>
        </div>
        <div className="formats-grid">
          {formats.map((f, i) => {
            const Icon = formatIcons[i]
            return (
              <div className={`format-card format-card-${i + 1}`} key={f.title}>
                <div className="format-card-top">
                  <div className="format-icon"><Icon size={24} /></div>
                  <span className="format-number">0{i + 1}</span>
                </div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Formats
