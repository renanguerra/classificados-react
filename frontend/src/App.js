import React, { useEffect, useState } from 'react'
import axios from 'axios'

import './App.css';

import Header from './components/header'
import Card from './components/card'

function App() {
  const [data, setData] = useState([])
  const [title, setTitle] = useState('')

  useEffect(()=>{
    axios.get('http://localhost:3333/index').then(res =>{
      setData(res.data)
    })
      
},[])

  async function search() {
    if (title===''){ //Verifica se o campo de pesquisa está vazio, se estiver, retorna todos os classificados
      axios.get('http://localhost:3333/index').then(res =>{
        setData(res.data)
      })
    }else{
      axios.get(`http://localhost:3333/search/${title}`).then(res =>{
        setData(res.data)
      })
    }
      
  }


  return (
    <>
      <Header >
        <input id='input-search' onChange={e => {setTitle(e.target.value)}} onKeyUp={search} type='text' placeholder='Pesquisar' className='header-input'/>
      </Header>

      <div className='main'>
        {data.map(classificados => <Card
              title={classificados.title}
              description={classificados.description}
              date={classificados.date}
              />)}
      </div>
    </>
  );
}

export default App;
