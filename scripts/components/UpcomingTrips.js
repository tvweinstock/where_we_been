/*
  UpcomingTrips
*/

import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import h from '../helpers';

var UpcomingTrips = React.createClass({
  renderOrder : function(key) {
    var trip = this.props.trips[key];
    var count = this.props.upcomingtrips[key];
    var removeButton = <button onClick={this.props.removeFromUpcomingTrips.bind(null, key)}>&times;</button>
    
    if(!trip) {
      return <li key={key}> This place has been visited! {removeButton}</li>
    }
    return (
            <li key={key}>
              <span>
                <CSSTransitionGroup component="span" transitionName="count"
                transitionLeaveTimeout={250} transitionEnterTimeout={250}>
                  <span key={count}>{count}</span>
                </CSSTransitionGroup>
                {trip.name}{removeButton}
              </span>
            </li>)
  },
  render : function(){
    var upcomingTripsIds = Object.keys(this.props.upcomingtrips);
    var total = upcomingTripsIds.reduce((prevTotal, key)=> {
      var trip = this.props.trips[key];
      var count = this.props.upcomingtrips[key];
      var isUndiscovered = trip && trip.status === 'undiscovered';
      
      if(trip && isUndiscovered) {
        return prevTotal + (count || 0);
      }
      return prevTotal;
    }, 0);
    return (
      <div className="upcomingtrips-wrap">
        <h2 className="upcomingtrips-title">Your Upcoming Trips</h2>
        <CSSTransitionGroup 
          className="upcomingtrips" 
          component="ul" 
          transitionName="upcomingtrips"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}>
          {upcomingTripsIds.map(this.renderOrder)}
          <li className="total">
            <strong>Total:</strong>
            {total}
          </li>
        </CSSTransitionGroup>
      </div>
    )
  },
  propTypes : {
    trips : React.PropTypes.object.isRequired,
    upcomingtrips : React.PropTypes.object.isRequired,
    removeFromUpcomingTrips : React.PropTypes.func.isRequired
  }
});

export default UpcomingTrips;
