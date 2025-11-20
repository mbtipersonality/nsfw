import './App.css'
import React from 'react'
import search1 from './search'

function App() {
  const handleClick = () => {
    
    const search2 = JSON.parse(localStorage.getItem('nsfw'))

    if(search2){
      const randSearch = search2[Math.floor(Math.random() * (search2.length - 1 + 1) + 1 )]
      const newNsfw = search2.filter(item => item !== randSearch)
      localStorage.setItem('nsfw', JSON.stringify(newNsfw))
      window.location = `https://www.reddit.com/r/{randSearch}`
    }
    else {
      localStorage.setItem('nsfw', JSON.stringify(search1))
    }
  }
  return (
    <div className='App' onClick={handleClick}>
      <h1>Click Anywhere</h1>
    </div>
  )
}

export default App
