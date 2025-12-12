import React from "react"; 
import MessageCard from "./MessageCard";

function App(){
    return(
        <div>
            <MessageCard title="Book1" message="This is Book1"/>
            <MessageCard title="Book2" message="This is Book2"/>
            <MessageCard title="Book3" message="This is Book3"/>
        </div>
    );
}
export default App;