var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>Welcome to the about page</p>
      <ul>
        <li>
          <a href="http://facebook.github.io/react">React</a> - this is the framework used to build this app
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - this is what we use to search the weather
        </li>
      </ul>
    </div>
  );
};

module.exports = About;
