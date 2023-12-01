import React, { useEffect, useState } from "react"
import {useSearchParams} from "react-router-dom"
import Header from "./components/Header"
import Side from "./components/side"
import Cards from "./components/cards"
import axios from "axios"
export default function App() {
 
  
  const [searchParams, setSearchParams] = useSearchParams()
  const [data, setData] = useState([])
  const catFilter = searchParams.get("category")

  
  React.useEffect(() => {
    axios.get('https://newsapi.org/v2/top-headlines?country=us&category='+catFilter+'&apiKey=ec4810ca37fd45728e97017e6fdba1b1')
      .then((response) => {
setData(response.data.articles)
      })
  }, [searchParams])
  
  

  function handleCatChange(key, value) {
    setSearchParams(prevParams => {
        if (value === null) {
            prevParams.delete(key)
        } else {
            prevParams.set(key, value)
        }
        return prevParams
    })
}
  
      const cardss=data.map(item => {
          return(
        <Cards
          key={item.id}
          {...item}
        />
          )
      }) 
  return (
    <div className="SB">
    
      <Side toggle={handleCatChange}  />
      <div className="HB">
        <Header />
        { cardss}
      </div>
</div>

  )
            
    
}


