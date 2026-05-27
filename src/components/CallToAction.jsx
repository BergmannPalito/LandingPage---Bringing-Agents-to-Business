import { ArrowRight } from 'lucide-react'
import './CallToAction.css'

function CallToAction() {
  const subject = encodeURIComponent('Anfrage zu einem Angebot von „Bringing Agents to Business"')
  const body = encodeURIComponent(
    `Sehr geehrter Herr Prof. Dr. Buxmann,

mein Name ist [Ihr Name] und ich bin [Ihre Position] bei [Unternehmen/Institution].

Ich interessiere mich für ein Angebot im Rahmen Ihrer Initiative „Bringing Agents to Business" - konkret für:

- [ ] Executive Briefing
- [ ] Vorträge & Keynotes
- [ ] Workshop
- [ ] Sonstiges: ___

Kurze Beschreibung unserer Ausgangslage:
[Bitte beschreiben Sie hier kurz Ihr Interesse, Ihren Use Case oder Ihre Fragestellung]

Mit freundlichen Grüßen
[Ihr Name]
[Unternehmen/Institution]
[Telefonnummer (optional)]`
  )

  return (
    <section className="cta" id="contact">
      <div className="container">
        <div className="cta-box">
          <h2>Den nächsten Schritt für AI Agents klären</h2>
          <p>
            Ob Executive Briefing, Vortrag oder Workshop -
            wir helfen dabei, Potenziale, Risiken und Umsetzungsschritte greifbar zu machen.
          </p>
          <a href={`mailto:peter.buxmann@tu-darmstadt.de?subject=${subject}&body=${body}`} className="cta-button no-text-decoration">
            Angebot besprechen <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
