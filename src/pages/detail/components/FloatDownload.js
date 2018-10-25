import React, { PureComponent } from 'react';
import {
  FloatWrapper
} from '../style';

class Floatqr extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      display: 'block'
    };
    this.handleClose = this.handleClose.bind(this);
  }
  render() {
    return (
      <FloatWrapper display={this.state.display}>
        <div className='close' onClick={this.handleClose}>x</div>
      </FloatWrapper>
    )
  }
  handleClose() {
    this.setState({
      display: 'none'
    })
  }
}

export default Floatqr;