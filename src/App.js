import { useState } from 'react'
import './App.css';
import styled from 'styled-components'
import {people} from './data/data'
import {arraySearchProduct} from './utils'

function App() {
  const [population, setPopulation] = useState(people)

  const handleOnChange = async (e) => {
    let value = e.target.value;
    if (value.length > 2) {
      
      let search = await arraySearchProduct(population, value);
      console.log('search ', search)
      setPopulation(search)
    } else {
      setPopulation(people)
    }
    
}

  return (
    <div className="App">
      <Search type="text" name="search" id="search" placeholder="Search Filter" onChange={handleOnChange}/>
      <Container name="container">
        {population.map(person => (
        <Card key={person.guid}>
          <p>Name: {person.name}</p>
          <p>Age: {person.age}</p>
          <p>Gender: {person.gender}</p>
          <p>Address: {person.address}</p>
        </Card>
        ))}
      </Container>
    </div>
  );
}



export default App;


const Container = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr 1fr;
  margin-bottom: 2em;
  justify-items: center;
  overflow-y: auto;
  height: calc(100vh - 5em);
`

const Card = styled.div`
  display: block;
  width: 20em;
  height: 10em;
  border-radius: 4px;
  background-color: #424242;
  color: #fff;
  margin: 1em;
`

const Search = styled.input`
color: #fff;
width: 100%;
border: 0;
height: 1.1876em;
margin: 0;
display: block;
margin: 1em auto;
width: 40em;
padding: 6px 0 7px;
min-width: 0;
background-color: #424242;
box-sizing: content-box;
animation-name: mui-auto-fill-cancel;
letter-spacing: inherit;
animation-duration: 10ms;
-webkit-tap-highlight-color: transparent;
`