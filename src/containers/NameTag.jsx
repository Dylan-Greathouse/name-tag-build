import React, { Component } from 'react';
import Display from '../components/name-tag/Display';
import Controls from '../components/name-tag/Controls';

export default class NameTag extends Component {
  state = {
    name: '',
  };

 
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ name: e.target.value });
        
  };

  render() {
    const { name } = this.state;

    return (
      <>
        <Controls
          nameInput={name}
          nameChange={this.handleSubmit}
          onSubmit={this.handleSubmit}
        />
        <Display name={this.handleSubmit} />
      </>
    );
  }
}
