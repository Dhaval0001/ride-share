import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
    axios.get(baseUrl)
      .then(res => setMessage(res.data))
      .catch(err => console.error(err));
  }, []);

  return <h1>{message || "Loading..."}</h1>;
}

export default App;
