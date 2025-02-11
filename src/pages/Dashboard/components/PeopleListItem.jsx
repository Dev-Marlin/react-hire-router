import { Link } from 'react-router-dom'
import './edit.css'
function PeopleListItem(props) {
  const { person, edit } = props

  return (
    <li>
      <h3>
        {person.name.first} {person.name.last}
      </h3>
      {person.wage && <p>Wage: £{person.wage}</p>}
      {edit && <Link className="editButton" to={`/edit/${person.id}`}>Edit</Link>}
    </li>
  )
}

export default PeopleListItem
