
import React, { useState, useEffect } from 'react';
const baseURL = "https://dev.to/api/tags";

const TagListAPI = () => {
    const [tags, setTags] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); // Use null for error state
    useEffect(() => {
        const fetchTags = async () => {
            try {
                const response = await fetch(baseURL);
                console.log(response);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const json = await response.json();
                console.log("json",json);
                setTags(json);
            } catch (err) {
                setError(`Fetch error: ${err.message}`);
                console.error('Fetch error:', err);
            } finally {
                setLoading(false);
            }
        };
        fetchTags();
    }, []); // Empty dependency array ensures this runs once after initial render
    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    return (
        <div className='flex gap-2'>
            {tags.map(tag => (
                <p key={tag.name} className='px-2 rounded-full text-center h-7' style={{ backgroundColor: tag.bg_color_hex, color: tag.text_color_hex }}>
                    {tag.name}
                </p>
            ))}
        </div>
    );
}

export default TagListAPI;
