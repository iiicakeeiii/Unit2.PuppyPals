import {puppyList} from "./data.js";
import {useState} from "react";
import "./App.css"

function App() {
    const [puppies, setPuppies] = useState(puppyList)
    const [featPupId, setFeatPupId] = useState(null);
    const featuredPup = puppies.find((pup) => pup.id === featPupId);

    return (
    <div className="App">
        {
            puppies.map((puppy) => {
                return (
                    <p className="border " onClick={()=> {
                        // some logic here
                        setFeatPupId(puppy.id)
                        console.log("puppy id: ", puppy.id); ///delete
                    }} key={puppy.id}>{puppy.name}
                    </p>
                );
            })
        }
        {featPupId && (
            <div className="card border">
                <h2>{featuredPup.name}</h2>
                <ul>
                    <li>Age: {featuredPup.age}</li>
                    <li>Email: {featuredPup.email}</li>
                </ul>
            </div>
        )}
    </div>
  )
}

export default App
