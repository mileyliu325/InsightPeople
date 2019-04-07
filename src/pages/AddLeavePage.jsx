import React, { Component } from "react";

import { connect } from 'react-redux'

class AddLeave extends Component {
  render() {
    return (
    <div>
      AddLeave
      {this.props.myUserType}
    </div>)
  }
}

function mapStateToProps(state) {
    return {
        myUserType: state.user.userType,
    }
}

export default connect(mapStateToProps)(AddLeave);
