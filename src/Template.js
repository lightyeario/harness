import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Template.css';
import images from './images.js';

class Template extends Component {
  render() {
  	const img = this.props.img ? <img src={images[this.props.img]} className="img" alt="img" /> : null;
  	let body = [];
  	for (let i = 0; i < this.props.body.length; i++) {
  		body.push(<p key={i}>{this.props.body[i]}</p>);
  	}

  	return (<div>
  		<header className="Top">
        {img}
        <h1 className="title">{this.props.title}</h1>
      </header>
      <div className="Body">
        {body}
      </div>
    </div>);
  }
}

Template.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.arrayOf(PropTypes.string).isRequired,
  img: PropTypes.string
};

export default Template;