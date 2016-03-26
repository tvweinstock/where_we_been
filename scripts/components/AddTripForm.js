/*
  Add Trip Form
  <AddTripForm />
*/

import React from 'react';

var AddTripForm = React.createClass({
  createTrip : function(event) {
    // stop form from submitting
    event.preventDefault();
    // take  data from form and create an object
    var trip = {
      name : this.refs.name.value,
      country : this.refs.country.value,
      status : this.refs.status.value,
      desc : this.refs.desc.value,
      image : this.refs.image.value
    }
    // add the trip to the bucketlist
    this.props.addTrip(trip);
    this.refs.tripForm.reset();
  },
  render : function() {
    return (
      <form className="trip-edit" ref="tripForm" onSubmit={this.createTrip}>
        <input type="text" ref="name" placeholder="City Name"/>
        <input type="text" ref="country" placeholder="Country Name" />
        <select ref="status">
          <option value="available">New Country!</option>
          <option value="unavailable">Déjà vu!</option>
        </select>
        <textarea type="text" ref="desc" placeholder="Desc"></textarea>
        <input type="text" ref="image" placeholder="URL to Image" />
        <button type="submit">+ Add Item </button>
      </form>
    )
  }
});

export default AddTripForm;