import PeopleListItem from './PeopleListItem'
import { Link } from 'react-router-dom'

function PeopleList(props) {
  const { people, edit } = props

  return (
    <ul>
      {people.map((person, index) => (
        <Link key={index} to={"/view/"+person.id/*.value*/}><PeopleListItem person={person} edit={edit}/></Link>
      ))}
    </ul>
  )
}

export default PeopleList
