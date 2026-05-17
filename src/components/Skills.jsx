import { Helmet } from 'react-helmet-async'
import { skillData, siteUrl, author } from '../constants/settings'
import '../styles/Skills.css'

function Skills() {
  const skillsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${siteUrl}/#skills`,
    "name": `Skills ${author.fullName}`,
    "description": `Daftar keahlian dan bahasa pemrograman yang dikuasai ${author.fullName}`,
    "url": `${siteUrl}/#skills`,
    "itemListElement": skillData.map((skill, index) => ({
      "@type": "DefinedTerm",
      "position": index + 1,
      "name": skill.name,
      "termCode": skill.name
    }))
  }

  return (
    <section id="skills" className="section skills">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(skillsSchema)}
        </script>
      </Helmet>
      <h2 className="section-title">My Skills</h2>
      <div className="skills-container">
        <div className="skills-grid">
          {skillData.slice(0, 3).map((skill) => (
            <div key={skill.name} className="skill-item">
              <span className="skill-name">{skill.name}</span>
              <div className="progress-bar">
                <div className="progress" style={{ width: `${skill.percent}%` }}></div>
              </div>
              <span className="skill-percent">{skill.percent}%</span>
            </div>
          ))}
        </div>
        <div className="skills-grid">
          {skillData.slice(3).map((skill) => (
            <div key={skill.name} className="skill-item">
              <span className="skill-name">{skill.name}</span>
              <div className="progress-bar">
                <div className="progress" style={{ width: `${skill.percent}%` }}></div>
              </div>
              <span className="skill-percent">{skill.percent}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
