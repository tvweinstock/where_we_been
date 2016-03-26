/* 
  Travel Log 
  This will let us make <TravelLog/>
*/

import React from 'react';
import { History } from 'react-router';
import h from '../helpers';
import reactMixin from 'react-mixin';


class TravelLog extends React.Component {
  goToLog(event) {
    event.preventDefault();
    console.log(this)
    // get data from input
    var travellerId = this.refs.travellerId.value; 
    this.history.pushState(null, '/traveller/' + travellerId);
  }
  render() {
    console.log(this)
    return (
      <form className="travel-log-selector" onSubmit={this.goToLog.bind(this)}>
        <h2>Please enter a Traveller's Name</h2>
        <input type="text" ref="travellerId" defaultValue={h.getFunName()} />
        <input type="Submit" />
      </form>
    )
  }  
}

reactMixin.onClass(TravelLog, History)
export default TravelLog;