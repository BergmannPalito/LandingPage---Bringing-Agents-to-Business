import { GraduationCap, BrainCircuit, Scale, Building2 } from 'lucide-react'
import { partners } from '../data'
import './Partners.css'

const partnerIcons = {
  tud: GraduationCap,
  genow: BrainCircuit,
  momentum: Scale,
}

function Partners() {
  return (
    <section className="partners" id="partners">
      <div className="container">
        <div className="text-center">
          <span className="section-label">
            <Building2 size={14} /> Die Partner
          </span>
          <h2 className="section-title">Drei Partner. Drei Stärken.</h2>
          <p className="section-subtitle margin-auto">
            Vom Use Case über die technische Umsetzung bis zum rechtssicheren Produktivbetrieb.
          </p>
        </div>
        <div className="partners-grid">
          {partners.map((p) => {
            const Icon = partnerIcons[p.cls]
            return (
              <div className="partner-card" key={p.name}>
                <div className={`partner-logo partner-logo-${p.cls}`}>
                  <Icon size={28} />
                </div>
                <h3>{p.name}</h3>
                <div className="partner-type">{p.type}</div>
                <p className="partner-desc">{p.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Partners
