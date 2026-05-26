import { ArrowRight } from 'lucide-react'
import './CallToAction.css'

function CallToAction() {
  const subject = encodeURIComponent('Anfrage zur Initiative „Bringing Agents to Business"')
  const body = encodeURIComponent(
    `Sehr geehrter Herr Prof. Dr. Buxmann,

mein Name ist [Ihr Name] und ich bin [Ihre Position] bei [Unternehmen/Institution].

Ich interessiere mich für eine Zusammenarbeit im Rahmen Ihrer Initiative „Bringing Agents to Business" – konkret für:

- [ ] Forschungspartnerschaft
- [ ] Workshop
- [ ] Gemeinsames Projekt
- [ ] Sonstiges: ___

Kurze Beschreibung meines Anliegens:
[Bitte beschreiben Sie hier kurz Ihr Interesse oder Ihre Idee]

Mit freundlichen Grüßen
[Ihr Name]
[Unternehmen/Institution]
[Telefonnummer (optional)]`
  )

  return (
    <section className="cta" id="contact">
      <div className="container">
        <div className="cta-box">
          <h2>Gemeinsam AI Agents in die Praxis bringen</h2>
          <p>
            Ob Forschungspartnerschaft, Workshop oder gemeinsames Projekt —
            lassen Sie uns die Zukunft der KI-Agenten gemeinsam gestalten.
          </p>
          <a href={`mailto:peter.buxmann@tu-darmstadt.de?subject=${subject}&body=${body}`} className="cta-button no-text-decoration">
            Kontakt aufnehmen <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
