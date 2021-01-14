import * as React from 'react'
import * as ReactDOM from 'react-dom'

const App = () => {
  return (
    <div>
      <div id="header">
        <h1>Software Developer</h1>
        <h3>Patrick Daly</h3>
        <h6>pgldaly@gmail.com</h6>
      </div>
      <div id="slideshow">
        <div id="slide_0" class="slides"><img src='https://wallpaperaccess.com/full/36296.jpg'></img></div>
        <div id="slide_1" class="slides"><img src='https://wallpaperaccess.com/full/36296.jpg'></img></div>
      </div>
    </div>
  );
}


ReactDOM.render(
  <div className="App">
    <App/>
  </div>,
  document.getElementById('root')
);
