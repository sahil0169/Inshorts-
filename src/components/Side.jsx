import React from "react"

export default function Side(props) {

    function Bar() { 
        return (
            <div className="Side4">
                <div className="Side3">
            <h3 onClick={props.handleclicker("General")}>General</h3>
            <h3>Entertainment</h3>
            <h3>Business</h3>
            <h3>Health</h3>
            <h3>Sports</h3>
            <h3>Technology</h3>
          
        </div>
            </div>
            
        )
    }
    const [count, setCount] = React.useState(false)
    return (

        <div className="Side1">
            <button className="Side2" onClick={()=>setCount(prevCount=>!prevCount)}>MENU</button>
            { count==true && Bar()}    
        </div>
    )
}
