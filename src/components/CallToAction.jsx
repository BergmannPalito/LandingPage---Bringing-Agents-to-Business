import { ArrowRight } from 'lucide-react'
import './CallToAction.css'

function CallToAction() {
  return (
    <section className="cta" id="contact">
      <div className="container">
        <div className="cta-box">
          <h2>Gemeinsam AI Agents in die Praxis bringen</h2>
          <p>
            Ob Forschungspartnerschaft, Workshop oder gemeinsames Projekt —
            lassen Sie uns die Zukunft der KI-Agenten gemeinsam gestalten.
          </p>
          <a href="mailto:peter.buxmann@tu-darmstadt.de" className="cta-button no-text-decoration">
            Kontakt aufnehmen <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
