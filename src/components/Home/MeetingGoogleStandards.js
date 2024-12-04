import React, { useState } from "react";
import axios from "axios";
import "./MeetingGoogleStandards.css";

const MeetingGoogleStandards = () => {
    const [websiteURL, setWebsiteURL] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuggestions([]);

        try {
            const response = await axios.post("http://localhost:5000/api/evaluate-website", {
                websiteURL,
            });
            setSuggestions(response.data.suggestions);
        } catch (err) {
            setError("Error fetching results. Please try again later.");
        }
    };

    return (
        <div className="meeting-google-standards">
            <h2>Meeting Google Standards</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter website URL"
                    value={websiteURL}
                    onChange={(e) => setWebsiteURL(e.target.value)}
                />
                <button type="submit">Evaluate</button>
            </form>
            {error && <p className="error">{error}</p>}
            {suggestions.length > 0 && (
                <div className="results">
                    <h3>Suggestions:</h3>
                    <ul>
                        {suggestions.map((suggestion, index) => (
                            <li key={index}>{suggestion}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default MeetingGoogleStandards;
