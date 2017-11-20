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
      <button className="button Previous item" onClick = {this._previous.bind(this)}>
      &lt;- Previous
      </button>);
    const nextButton = !hasNext ? "" : (
      <button className="button Next item" onClick = {this._next.bind(this)}>
      Next ->
      </button>);

    return (
      <div className="App">
        <Template
          title = {data.title}
          body = {data.body}
          img = {data.img}
          code_sample = {data.code_sample}
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
