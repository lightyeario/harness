import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Template.css';
import images from './images.js';
import CodeSamples from './code_samples.js';
import request from './request.js'

class Template extends Component {

  constructor(props) {
    super(props);
    this.state = this._newState(props);
  }

  _newState(props) {
    return {
      url: props.urlPlaceholder,
      testMessage: ""
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState(this._newState(nextProps));
  }

  _onChange(e) {
    const newUrl = e.target.value;
    this.setState({
      url: newUrl
    });
  }

  _runTest() {

  }

  _doFetch() {
    this.setState({
      testMessage: "Sending GET request to " + this.state.url
    });
    request(this.state.url, function(data) {
      this.setState({
        testMessage: "Response:\n" + JSON.stringify(data)
      });
      this._runTest()
    }.bind(this), function(error) {
      this.setState({
        testMessage: "Error:\n" + error
      });
    }.bind(this));
  }

  render() {
  	const img = this.props.img ? <img src={images[this.props.img]} className="img" alt="img" /> : null;
  	let description = [];
  	for (let i = 0; i < this.props.description.length; i++) {
  		description.push(<p key={i}>{this.props.description[i]}</p>);
  	}

    let codeSample = "";
    if (this.props.codeSample) {
      const CodeComponent = CodeSamples[this.props.codeSample]
      codeSample = (<div>
        <div className="CodeSample">
          <CodeComponent/>
        </div>
        <div>
          <form method="GET" action={this.props.stubEndpointPath}>
            <button type="submit">{"Download Sample Code"}</button>
          </form>
        </div>
      </div>);
    }

    let testing = "";
    if (this.state.url) {
      testing = (<div className="Testing">
        <div>
          {"Enter the URL for the endpoint you implemented:"}
        </div>
        <div className="Input">
          <input className="URL" id="url" value={this.state.url} onChange={this._onChange.bind(this)}/>
          <button style={{ marginLeft: 10 }} onClick={this._doFetch.bind(this)}>{"Test your endpoint"}</button>
        </div>
        <div>
          <pre>{this.state.testMessage}</pre>
        </div>
      </div>);
    }

  	return (<div>
  		<header className="Top">
        {img}
        <h1 className="title">{this.props.title}</h1>
      </header>
      <div className="Body">
        {description}
      </div>
      {codeSample}
      {testing}
    </div>);
  }
}

Template.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.arrayOf(PropTypes.string).isRequired,
  img: PropTypes.string,
  codeSample: PropTypes.string,
  urlPlaceholder: PropTypes.string,
  stubEndpointPath: PropTypes.string
};

export default Template;