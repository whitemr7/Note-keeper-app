import React from "react";
import Heading from "./Heading";
import Note from "./body";

import notes from "./index";

function create_card(props){
    return(
        <Note info={props.content}/>
    )

}


function App (){
    return (
        <div>
        
        <Heading />
        <div className="Container">
        {notes.map(create_card)}
        </div>
        </div>
    )
}

export default App;