import { useState, useEffect } from 'react'
import { useParams, useNavigate } from "react-router-dom";
import HireForm from './components/HireForm'

function PersonProfile(props) {
  const [person, setPerson] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const { persons, hiredPeople, setHiredPeople } = props;

  useEffect(() => {
    if (persons && id) {
      setPerson(persons.find((p) => p.id == id));
    }
  }, [persons, id]);

  console.log(persons);
  if (!person) return <p>Loading...</p>

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} hiredPeople={hiredPeople} setHiredPeople={setHiredPeople}/>
    </article>
  )
}

export default PersonProfile
