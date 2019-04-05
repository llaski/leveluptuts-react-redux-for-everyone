import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleMessage } from "./actions";
import { bindActionCreators } from "redux";

class Toggle extends Component {
  render() {
    return (
      <div>
        {this.props.messageVisibility && <p>Stuff</p>}
        <button
          onClick={() => {
            this.props.toggleMessage();
          }}
        >
          Toggle Me
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  messageVisibility: state.toggle.messageVisibility
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ toggleMessage }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Toggle);
