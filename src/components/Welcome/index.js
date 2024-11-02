// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {
    isSubscribe: false,
    buttonText: 'Subscribe',
  }

  changeStatus = () => {
    const {isSubscribe} = this.state
    if (isSubscribe) {
      this.setState({
        isSubscribe: false,
        buttonText: 'Subscribe',
      })
    } else {
      this.setState({
        isSubscribe: true,
        buttonText: 'Subscribed',
      })
    }
  }

  render() {
    const {buttonText} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thank you! Happy Learning</p>
        <button className="button" onClick={this.changeStatus}>
          {buttonText}
        </button>
      </div>
    )
  }
}

export default Welcome
