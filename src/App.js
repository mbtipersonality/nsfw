import './App.css'
import React from 'react'
import search1 from './search'

function App() {
  const handleClick = () => {
    // const randSearch = search[Math.floor(Math.random() * (1266 - 1 + 1) + 1 )]
    const search2 = JSON.parse(localStorage.getItem('selfhelp'))
    if(!search2){
      localStorage.setItem('selfhelp', JSON.stringify(search1))
      return
    }
    const randSearch = search2[Math.floor(Math.random() * (search2.length - 1 + 1) + 1 )]

    const newSelfhelp = search2.filter(item => item !== randSearch)
    localStorage.setItem('selfhelp', JSON.stringify(newSelfhelp))
    window.location = `https://www.google.com/search?q=site%3Agoodreads.com+popular+${randSearch}+books&sca_esv=e84d3365b4113c52&ei=Ypr4Z-vhOPKf4-EPy5LsgAQ&ved=0ahUKEwjrmoCOks-MAxXyzzgGHUsJG0AQ4dUDCBA&uact=5&oq=site%3Agoodreads.com+popular+a+books&gs_lp=Egxnd3Mtd2l6LXNlcnAiInNpdGU6Z29vZHJlYWRzLmNvbSBwb3B1bGFyIGEgYm9va3NIgiZQsgJY1h9wAngAkAEAmAGcAqAB6xaqAQYwLjIuMTG4AQPIAQD4AQGYAgCgAgCYAwCIBgGSBwCgB8kEsgcAuAcA&sclient=gws-wiz-serp`
  }
  return (
    <div className='App' onClick={handleClick}>
      <h1>Click Anywhere</h1>
    </div>
  )
}

export default App
