import React, { useEffect, useState } from "react"
//import data from "./components/data"
import Header from "./components/Header"
import Side from "./components/side"
import Cards from "./components/cards"
import axios from "axios"
export default function App() {
 
  
  
  const [data, setData] = useState([])
  const [count, setCount] = React.useState(false)
  const [cat,changecat]=React.useState("general")
  const a =  'https://newsapi.org/v2/top-headlines?country=us&category='+cat+'&apiKey=ec4810ca37fd45728e97017e6fdba1b1'

  React.useEffect(() => {
    // axios.get("https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=ec4810ca37fd45728e97017e6fdba1b1")
    axios.get(a)
      .then((response) => {
setData(response.data.articles)
      })
  }, [cat])
  

  // fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=ec4810ca37fd45728e97017e6fdba1b1")
    //     .then(res => res.json())
    //     .then(data => console.log(data))

  function Bar() { 
    return (
        <div className="Side4">
            <div className="Side3">
        <h3 onClick={()=>changecat(prevcat=>prevcat="General")}>General</h3>
        <h3 onClick={()=>changecat(prevcat=>prevcat="entertainment")}>Entertainment</h3>
        <h3 onClick={()=>changecat(prevcat=>prevcat="business")}>Business</h3>
        <h3 onClick={()=>changecat(prevcat=>prevcat="health")}>Health</h3>
        <h3 onClick={()=>changecat(prevcat=>prevcat="sports")}>Sports</h3>
        <h3 onClick={()=>changecat(prevcat=>prevcat="technology")}>Technology</h3>
        <h3 onClick={()=>changecat(prevcat=>prevcat="science")}>Science</h3>
      
    </div>
        </div>
        
    )
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
    
      <div className="Side1">
            <button className="Side2" onClick={()=>setCount(prevCount=>!prevCount)}>MENU</button>
            { count==true && Bar()}    
        </div>
      <div className="HB">
        <Header />
        { cardss}
      </div>
</div>

  )
            
    
}

// import React from "react"
// export default function App() { console.log(1)
//     const [starWarsData, setStarWarsData] = React.useState({})
//     const [count, setCount] = React.useState(0)
//   React.useEffect(function () {
//       console.log(2)
//         fetch("https://swapi.dev/api/people/1")
//             .then(res => res.json())
//             .then(data => setStarWarsData(data))
//     },[])
    
//   return (
   
//     <div>
//        { console.log(3) }
//             <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
//             <h2>The count is {count}</h2>
//       <button onClick={() => setCount(prevCount => prevCount + 1)}>Add{ console.log(5) }</button>
//           { console.log(4) }
//     </div>
//   )
  
// }


