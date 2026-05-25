import { CheckCircle2, Sparkles } from 'lucide-react'
import { perspectives } from '../data'
import './Approach.css'

function Approach() {
  return (
    <section className="approach" id="approach">
      <div className="container">
        <span className="section-label">
          <Sparkles size={14} /> Unser Ansatz
        </span>
        <h2 className="section-title">Drei Perspektiven.<br />Eine Lösung.</h2>
        <p className="section-subtitle">
          Organisationen dabei unterstützen, AI Agents sicher, wirtschaftlich sinnvoll und
          regulatorisch konform in den produktiven Einsatz zu bringen.
        </p>
        <div className="perspectives-grid">
          {perspectives.map((p) => (
            <div className={`perspective-card ${p.cls}`} key={p.number}>
              <div className="perspective-number">{p.number}</div>
              <h3>{p.title}</h3>
              <p>{p.subtitle}</p>
              <ul className="perspective-list">
                {p.items.map((item, i) => (
                  <li key={i}>
                    <CheckCircle2 size={16} className="perspective-list-icon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Approach
