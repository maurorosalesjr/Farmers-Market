import React from "react";
import PropTypes from "prop-types";

function MarketInfo(props){
  return (
    <React.Fragment>
      <h3>{props.day} -- {props.hours}</h3>
      <h4><em>{props.location}</em> -- {props.booth}</h4>
    </React.Fragment>
  );
}

MarketInfo.PropTypes = {
  day: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  booth: PropTypes.string
};

export default MarketInfo