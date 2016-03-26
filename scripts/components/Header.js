/*
  Header
*/

import React from 'react';

var Header = React.createClass({
  render : function(){
    return (
      <header className="top">
        <h1>Places to go</h1>
        <h3 className="tagline"> {this.props.tagline} </h3>
      </header>
    )
  }, 
  propTypes : {
    tagline : React.PropTypes.string.isRequired
  }
});

export default Header;