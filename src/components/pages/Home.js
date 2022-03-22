import React from 'react';
import './home.css';

function Home() {
  const paragraph = `
  Math magicians is a demo site that uses REACT.js 
  to render a Single-Page-Application. We used Math 
  as a topic to create components that allow users to 
  interact with a calculator and make basic operations, 
  or read math-related quotes. Each component is displayed 
  on its own "page". Please have fun and inspect the app to 
  find possible improvements! You can comment and collaborate 
  using Github's repo: 
  https://github.com/alef-garrido/react-spa-math-magicians. 
  Hope you like it!
    `;
  return (
    <div className="home--container">
      <h2>Welcome to our page</h2>
      <p>{paragraph}</p>
    </div>
  );
}

export default Home;
