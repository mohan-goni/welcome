import './index.css'
import {Component} from 'react'

class Welcome extends Component {
  state = {
    text: 'Subscribe',
  }

  onChangeSubscribe = () => {
    this.setState(prevState => ({
      text: prevState.text === 'Subscribe' ? 'Subscribed' : 'Subscribe',
    }))
  }

  render() {
    const {text} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading"> Welcome</h1>
        <p className="description">Thank you! Happy Learning</p>
        <button
          type="button"
          className="subscribe"
          onClick={this.onChangeSubscribe}
        >
          {text}
        </button>
      </div>
    )
  }
}
export default Welcome
