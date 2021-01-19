import * as React from 'react'
import * as ReactDOM from 'react-dom'

const { useState, useEffect } = React;

function App() {
  const [counter, setCounter] = useState(0);
  
  const images = [
      "https://upload.wikimedia.org/wikipedia/commons/c/c9/Moon.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/7/78/Image.jpg",
      "https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (counter >= 2) {
        setCounter(0);
      } else {
        setCounter(counter => counter + 1);
      }
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  });

  return <div>
    <div id="header">
      <div class="left">
        <h1>Software Developer</h1>
        <h3>Patrick Daly</h3>
        <h6>pgldaly@gmail.com</h6>
      </div>
      <img class="right" src="https://assets.stickpng.com/images/588a6507d06f6719692a2d15.png"/>
    </div>
    <img src={images[counter]}></img>
  </div>;
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
