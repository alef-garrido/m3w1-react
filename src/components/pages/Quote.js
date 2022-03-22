import React, { useState, useEffect } from 'react';

function Quote() {
  const [quote, setQuote] = useState({
    text: 'loading, please wait...',
    author: '',
  });

  useEffect(() => {
    fetch('https://random-math-quote-api.herokuapp.com/')
      .then((response) => response.json())
      .then((data) => {
        setQuote({
          text: data.quote,
          author: data.author,
        });
      });
  }, []);

  return (
    <div className="quote--container">
      <h3>{quote.text}</h3>
      <p>{quote.author}</p>
    </div>
  );
}

export default Quote;
