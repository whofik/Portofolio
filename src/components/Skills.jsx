import '../styles/Skills.css'

function Skills() {
  const skillData = [
    { name: 'JavaScript', percent: 30 },
    { name: 'Python', percent: 5 },
    { name: 'Scraping Website', percent: 56 },
    { name: 'Vibe Code', percent: 100 },
    { name: 'Yapping', percent: 100 },
    { name: 'Turu', percent: 80 },
  ]

  return (
    <section id="skills" className="section skills">
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
