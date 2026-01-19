import skills from "../data/skills"

export default function MyComputer() {
  return (
    <div className="explorer">
      {skills.map((group, index) => (
        <div key={index} className="disk">
          <strong>{group.title}</strong>
          <ul>
            {group.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
