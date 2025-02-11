import { useState } from 'react'

function HireForm(props) {
  const {person, hiredPeople, setHiredPeople, edit} = props;
  const [wage, setWage] = useState(person.wage);

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="wage">Wage Offer</label>
      <input
        type="text"
        id="wage"
        name="wage"
        onChange={e => {if(edit){setWage(e.target.value)
                        person.wage = e.target.value}}
        }
        value={wage}
      />
      <button onClick={()=> {if(!hiredPeople.includes(person)) setHiredPeople([...hiredPeople, person])}} type="submit">Hire</button>
    </form>
  )
}

export default HireForm
