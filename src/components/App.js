import React, { useState, useEffect } from 'react';

const App = () => {
  const [error, setError] = useState(null);
  const [dogImageUrl, setDogImageUrl] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(res => res.json())
      .then(
        (result) => {
          setDogImageUrl(result.message);
          setLoading(false); 
        },
        (error) => {
          setError(error);
          setLoading(false);
        }
      );
  }, []); // Empty dependencies array to run effect only once on mount

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <img src={dogImageUrl} alt="A Random Dog" />
      )}
    </div>
  );
};

export default App;

