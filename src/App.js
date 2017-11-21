import React, { Component } from 'react';
import './App.css';
import Template from './Template.js';
import schema from './schema.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageIdx: 0
    };
  }
  _previous() {
    this.setState({
      pageIdx: this.state.pageIdx - 1
    });
  }
  _next() {
    this.setState({
      pageIdx: this.state.pageIdx + 1
    });
  }
  render() {
    const pages = schema["pages"];
    const data = pages[this.state.pageIdx];
    const hasPrevious = this.state.pageIdx > 0;
    const hasNext = this.state.pageIdx + 1 < pages.length;

    const prevButton = !hasPrevious ? "" : (
      <button className="Previous item" onClick = {this._previous.bind(this)}>
      &lt;- Previous
      </button>);
    const nextButton = !hasNext ? "" : (
      <button className="Next item" onClick = {this._next.bind(this)}>
      Next ->
      </button>);

    return (
      <div className="App">
        <Template
          title = {data.title}
          description = {data.description}
          img = {data.img}
          codeSample = {data.code_sample}
          urlPlaceholder = {data.url_placeholder}
        />
        <div className="Footer">
          {prevButton}
          {nextButton}
        </div>
      </div>
    );
  }
}

export default App;
