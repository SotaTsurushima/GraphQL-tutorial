import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { gql, useQuery } from "@apollo/client"

const BOOKS = gql`
  query {
    test {
      title
      author
    }
  }
`

function Books() {
  const { loading, error, data } = useQuery(BOOKS)
  if(loading) return <p>loading</p>
  if(error) return <p>error!!</p>

  return data.test.map(({title, author}) => 
    <div key={title}>
      <p>
        {author} : {title}
      </p>
    </div>)
}

function App() {
  return (
    <div className="App">
      <h2>graphQL Client</h2>
      <Books />
    </div>
  )
}

export default App