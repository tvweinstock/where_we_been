/* 
  Trip
  <Trip />
 */
import React from 'react';
import h from '../helpers';

var Trip = React.createClass({
  onButtonClick : function() {
    console.log("going to add the trip:", this.props.index);
    var key = this.props.index;
    this.props.addUpcomingTrip(key);
  },
  render : function() {
    var details = this.props.details;
    var isUndiscovered = (details.status === "undiscovered" ? true : false);
    var buttonText = (isUndiscovered ? "Add To Voyage List" : "Déjà Vu!")
    return (
      <li className="menu-trip">
        <img src={details.image} alt={details.name} />
        <h3 className="trip-name">
          {details.name}
          <span className="country">{details.country}</span>
        </h3>
        <p>{details.desc}</p>
        <button disabled={!isUndiscovered} onClick={this.onButtonClick}>{buttonText}</button>
      </li>
    )
  }
});

export default Trip;