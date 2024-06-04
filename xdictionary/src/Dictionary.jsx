import { useState } from "react";
import "./Dictionary.css";



const data = [
    
        { word: "React", meaning: "A JavaScript library for building user interfaces." },
    
        { word: "Component", meaning: "A reusable building block in React." },
    
        { word: "State", meaning: "An object that stores data for a component." }
    
];


export default function Dictionary(){
    
    const[input, setInput] = useState("");
    const[defination, setDefination] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const text = input.toLowerCase();

        const response = data.find((value) => text === value.word.toLowerCase());

        setDefination(response ? response.meaning : "Word not found in the dictionary.");
    }

    return(
        <div className="container">
            <h1>Dictionary App</h1>
            <div className="form" onSubmit={handleSubmit}>
                <form>
                    <input type="text" placeholder="Search for a word..." onChange={(e) => setInput(e.target.value)} />
                    <button type="submit">Search</button>
                </form>
            </div>
            <h3>Definition:</h3>
            {defination && (
                <div className="defination">{defination}</div>
            )}
        </div>
    );
    
};