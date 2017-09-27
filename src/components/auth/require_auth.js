import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export default function (ComposedComponent) {
  class Authentication extends Component {
    componentWillMount() {
      if (!this.props.authenticated) {     
        this.props.history.push('/login');
      }
    }
  
    componentWillUpdate(nextProps) {
      console.log(nextProps.authenticated);
      if (!nextProps.authenticated) {
        this.props.history.push('/login');
      }
    }


    render() {
      return <ComposedComponent  {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.auth.authenticate };
  }

  return connect(mapStateToProps)(Authentication);
}