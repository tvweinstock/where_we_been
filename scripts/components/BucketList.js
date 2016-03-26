
/*
  BucketList
*/
import React from 'react';
import AddTripForm from './AddTripForm';

var BucketList = React.createClass({
  renderBucketList : function(key) {
   var linkState = this.props.linkState;
    return (
      <div className="trip-edit" key={key}>
        <input type="text" valueLink={linkState('trips.'+ key +'.name')}/>
        <input type="text" valueLink={linkState('trips.'+ key +'.country')}/>
        <select valueLink={linkState('trips.'+ key +'.status')}>
          <option value="discovered">Déjà Vu!</option>
          <option value="undiscovered">Never been visited!</option>
        </select>
        <textarea valueLink={linkState('trips.'+ key +'.desc')}></textarea>
        <input type="text" valueLink={linkState('trips.'+ key +'.image')}/>
        <button onClick={this.props.removeTrip.bind(null, key)}>Remove Trip</button>
      </div>
    )
  },
  render : function(){
    return (
      <div>
        <h2>Places to go</h2>
        {Object.keys(this.props.trips).map(this.renderBucketList)}
        <AddTripForm {...this.props} />
        <button onClick={this.props.loadSamples}>Load Sample Trips</button>
      </div>
    )
  },
  propTypes : {
    addTrip : React.PropTypes.func.isRequired,
    loadSamples : React.PropTypes.func.isRequired,
    trips : React.PropTypes.object.isRequired,
    linkState : React.PropTypes.func.isRequired,
    removeTrip : React.PropTypes.func.isRequired
  }
});


export default BucketList;