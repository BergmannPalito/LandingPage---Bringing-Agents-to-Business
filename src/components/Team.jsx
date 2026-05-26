import { useState, useEffect } from 'react'
import {
  Users,
  X,
  Mail,
  GraduationCap,
  Sparkles,
  Award,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react'
import { team } from '../data'
import './Team.css'

function TeamModal({ member, onClose }) {
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <X size={20} />
        </button>
        <div className="modal-header">
          <img
            src={member.photo}
            alt={member.name}
            className="modal-photo"
          />
          <div className="modal-header-info">
            <h3>{member.name}</h3>
            <div className="modal-role">{member.role}</div>
            <div className="modal-tags">
              {member.tags.map((tag) => (
                <span className={`team-tag ${tag.cls}`} key={tag.label}>{tag.label}</span>
              ))}
            </div>
            {member.details.contact && (
              <a
                href={`mailto:${member.details.contact}?subject=${encodeURIComponent(
                  `Kontaktanfrage über „Bringing Agents to Business" – ${member.name}`
                )}&body=${encodeURIComponent(
                  `Sehr geehrte/r ${member.name},\n\nmein Name ist [Ihr Name] von [Unternehmen/Institution].\n\nIch habe Ihr Profil auf der Seite „Bringing Agents to Business" gesehen und würde mich gerne mit Ihnen austauschen.\n\nMein Anliegen:\n[Bitte beschreiben Sie hier kurz Ihr Interesse]\n\nMit freundlichen Grüßen\n[Ihr Name]\n[Unternehmen/Institution]`
                )}`}
                className="modal-email"
              >
                <Mail size={14} /> {member.details.contact}
              </a>
            )}
          </div>
        </div>

        <div className="modal-body">
          <p className="modal-bio">{member.bio}</p>

          <div className="modal-section">
            <h4><GraduationCap size={16} /> Werdegang</h4>
            <p>{member.details.background}</p>
          </div>

          <div className="modal-section">
            <h4><Sparkles size={16} /> Forschungsschwerpunkte</h4>
            <ul>
              {member.details.research.map((r, i) => (
                <li key={i}><CheckCircle2 size={14} className="modal-list-icon" /> {r}</li>
              ))}
            </ul>
          </div>

          <div className="modal-section">
            <h4><Award size={16} /> Auszeichnungen & Highlights</h4>
            <ul>
              {member.details.achievements.map((a, i) => (
                <li key={i}><CheckCircle2 size={14} className="modal-list-icon" /> {a}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

function Team() {
  const [selectedMember, setSelectedMember] = useState(null)

  return (
    <>
      <section className="team" id="team">
        <div className="container">
          <div className="team-header">
            <span className="section-label">
              <Users size={14} /> Das Team
            </span>
            <h2 className="section-title">Die Menschen hinter der Initiative</h2>
            <p className="section-subtitle margin-auto">
              Forschende der TU Darmstadt, die an der Schnittstelle von KI und Business arbeiten.
              <br />
              <span className="team-hint-text">Klicken Sie auf eine Person für mehr Details.</span>
            </p>
          </div>
          <div className="team-grid">
            {team.map((member) => (
              <div
                className="team-card"
                key={member.name}
                onClick={() => setSelectedMember(member)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setSelectedMember(member)}
              >
                <img
                  src={member.photo}
                  alt={member.name}
                  className="team-photo"
                />
                <h4>{member.name}</h4>
                <div className="team-role">{member.role}</div>
                <div className="team-focus">{member.focus}</div>
                <div className="team-tags">
                  {member.tags.map((tag) => (
                    <span className={`team-tag ${tag.cls}`} key={tag.label}>{tag.label}</span>
                  ))}
                </div>
                <div className="team-card-hint">
                  <ExternalLink size={12} /> Profil ansehen
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedMember && (
        <TeamModal
          member={selectedMember}
          onClose={() => setSelectedMember(null)}
        />
      )}
    </>
  )
}

export default Team
