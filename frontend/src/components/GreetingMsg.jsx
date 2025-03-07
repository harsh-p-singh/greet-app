import { useState } from "react";

function Greeting() {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const getGreeting = async () => {
        if (!name) {
            setMessage("Please enter a name.");
            return;
        }

        try {
            const response = await fetch(`http://localhost:8000/api/greet?name=${name}`);
            const data = await response.json();
            setMessage(data.message || data.error);
        } catch (error) {
          console.log(error);
          
            setMessage("Error fetching data.");
        }
    };

    return (
        <div className="greeting-container">
            <input 
                type="text" 
                placeholder="Enter your name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                className="input-field"
            />
            <button onClick={getGreeting} className="button">Get Greeting</button>
            <p className="message">{message}</p>
        </div>
    );
}

export default Greeting;
