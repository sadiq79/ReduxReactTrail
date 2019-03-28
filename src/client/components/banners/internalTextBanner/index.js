import React, { Component } from 'react'

export default class InternalTextBanner extends Component {
    constructor(props) {
        super(props);
    }
  render() {
    return (
      <div className={`topBanner_textOverlay banner_wrap ${this.props.wrapperClass}`}>
        <h1>
            {this.props.Heading}
        </h1>
        
      </div>
    )
  }
}
