var React = require('react');

var WeatherMessage = ({location, temp}) => {
  return (
    <p>
    In {location} it is currently {temp} degrees outside.
    </p>
  );
};

module.exports = WeatherMessage;
