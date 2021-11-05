import React from 'react';
import PropTypes from 'prop-types';

export default function Display({ name }) {
    return (
    <>
      <div class="top" id="top-div">
        <h1>Hello</h1>
        <h2>my name is</h2>
      </div>
      <div class="middle" id="middle-div">
        <h3 id="name-output">{name}</h3>
      </div>
      <div class="bottom" id="bottom-div">

      </div>
    </>
    )
}

Display.propTypes = {};


