import React, { useState } from 'react';
import '../styles/Analyze.css';

const Analyze = () => {
  const [url, setUrl] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate analysis
    setResult(`Results for ${url}: Passed`);
  };

  return (
    <div>
      <h2>Analyze Your Website</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="url"
          placeholder="Enter website URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
        <button type="submit">Analyze</button>
      </form>
      {result && <p>{result}</p>}
    </div>
  );
};

export default Analyze;
