/*
  App
*/

import React from 'react';

import Header from './Header';
import Trip from './Trip';
import UpcomingTrips from './UpcomingTrips';
import BucketList from './BucketList';

import Catalyst from 'react-catalyst';

// Firebase
import Rebase from 're-base';
var base = Rebase.createClass('https://where-we-been.firebaseio.com/');



var App = React.createClass({
  mixins: [Catalyst.LinkedStateMixin],
  getInitialState : function() {
    return {
      trips : {},
      upcomingtrips : {}
    }
  },
  componentDidMount : function() {
    base.syncState(this.props.params.travellerId + '/trips', {
      context : this,
      state : 'trips'
    });
    
    var localStorageRef = localStorage.getItem('upcomingtrips-' + this.props.params.travellerId);
    
    if(localStorageRef) {
      // update our component to reflect what is in localStorage
      this.setState({
        upcomingtrips : JSON.parse(localStorageRef)
      });
    }
    
  },
  componentWillUpdate : function(nextProps, nextState) {
    localStorage.setItem('upcomingtrips-' + this.props.params.travellerId, 
    JSON.stringify(nextState.upcomingtrips));
    
  },
  addUpcomingTrip : function(key) {
    this.state.upcomingtrips[key] = this.state.upcomingtrips[key] + 1 || 1;
    this.setState({ upcomingtrips : this.state.upcomingtrips });
  },
  removeFromUpcomingTrips : function(key) {
    delete this.state.upcomingtrips[key];
    this.setState({
      upcomingtrips: this.state.upcomingtrips
    });
  },
  addTrip : function(trip) {
    var timestamp = (new Date()).getTime();
    // update the state object
    this.state.trips['trip-' + timestamp] = trip;
    // set the state
    this.setState({ trips : this.state.trips });
  },
  removeTrip : function(key) {
    if(confirm("Are you sure you want to remove this trip?")) {
      this.state.trips[key] = null;
      this.setState({
        trips : this.state.trips
      });
    }
  },
  loadSamples : function() {
    this.setState({
      trips : require("../sample-trips")
    });
  },
  renderTrip : function(key){
    return <Trip key={key} index={key} details={this.state.trips[key]} addUpcomingTrip={this.addUpcomingTrip}/>
  },
  render : function() {
    return (
      <div className="where-we-been">
        <div className="menu">
          <Header tagline="Track Your Adventures" />
          <ul className="list-of-trips">
            {Object.keys(this.state.trips).map(this.renderTrip)}
          </ul>
        </div>
        <UpcomingTrips trips={this.state.trips} upcomingtrips={this.state.upcomingtrips} removeFromUpcomingTrips={this.removeFromUpcomingTrips} />
        <BucketList addTrip={this.addTrip} loadSamples={this.loadSamples} trips={this.state.trips} linkState={this.linkState} removeTrip={this.removeTrip} />
        
      </div>
    )
  }
});

export default App;