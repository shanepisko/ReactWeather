var React = require('react');

var WeatherMessage = ({location, temp}) => {
  return (
    <h3 className="text-center">
    In {location} it is currently {temp} degrees outside.
  </h3>
  );
};

module.exports = WeatherMessage;
