import {
  FileText,
  Users,
  Mic,
  Briefcase,
  Code2,
  Lightbulb,
  Wrench,
  BookOpen,
  Sparkles,
} from 'lucide-react'
import { formats } from '../data'
import './Formats.css'

const formatIcons = [
  FileText,
  Users,
  Mic,
  Briefcase,
  Code2,
  Lightbulb,
  Wrench,
  BookOpen,
]

function Formats() {
  return (
    <section className="formats" id="formats">
      <div className="container">
        <div className="text-center">
          <span className="section-label">
            <Sparkles size={14} /> Zusammenarbeit
          </span>
          <h2 className="section-title">Formen der Zusammenarbeit</h2>
          <p className="section-subtitle margin-auto">
            Mehrere Wege, wie unsere Kooperation Wirkung entfalten kann.
          </p>
        </div>
        <div className="formats-grid">
          {formats.map((f, i) => {
            const Icon = formatIcons[i]
            return (
              <div className="format-card" key={f.title}>
                <div className="format-icon"><Icon size={28} /></div>
                <h4>{f.title}</h4>
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
