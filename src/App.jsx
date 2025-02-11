import { useState, useEffect } from 'react'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import PersonProfile from './pages/PersonProfile'
import EditProfile from './pages/PersonProfile/editProfile'

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])

  const [people, setPeople] = useState([])

  const url = 'https://randomuser.me/api/?results=50';
  
  useEffect(() => 
  {
    const fetchUsers = async () => 
    {
      const response = await fetch(url);
      const jsonData = await response.json();

      jsonData.results.map((p, index)=> {
        p.id = index;
        p.wage = 100;
      });

      setPeople(jsonData.results);
    };

    fetchUsers();
  }, []);
  
  return (

    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li><Link to ="/">Dashboard</Link></li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route
          path="/"
          element={<Dashboard hiredPeople={hiredPeople} people={people}></Dashboard>}
        />

        <Route
          path="/view/:id"
          element={<PersonProfile persons={people} hiredPeople={hiredPeople} setHiredPeople={setHiredPeople}></PersonProfile>}
        />

        <Route
          path="/edit/:id"
          element={<EditProfile persons={people} hiredPeople={hiredPeople} setHiredPeople={setHiredPeople}></EditProfile>}
        />

      </Routes>
    </>
  )
}
