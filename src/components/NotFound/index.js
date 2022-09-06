import {Link} from 'react-router-dom'
import './index.css'
import {AiFillHome} from 'react-icons/ai'
import {BsFillInfoCircleFill} from 'react-icons/bs'

import {Component} from 'react'

import Header from '../Header'

class Notfound extends Component {
  state = {iconStatus: false}

  iconClick = () => {
    this.setState(prev => ({iconStatus: !prev.iconStatus}))
  }

  render() {
    const {iconStatus} = this.state
    return (
      <div>
        <Header iconStatus={iconStatus} iconClicked={this.iconClick} />
        <div className="home-bg-card-sm">
          {iconStatus === false ? (
            <>
              <img
                className="nf-img"
                src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                alt="not found"
              />
              <h1>Lost Your Way?</h1>
              <p>
                Sorry, we cannot find that page. You will find lots to explore
                on the home page
              </p>
            </>
          ) : (
            <div className="h-a-btn-div">
              <Link to="/" className="h-a-btn">
                <AiFillHome className="h-a-icon" />
                Home
              </Link>
              <Link to="/about" className="h-a-btn">
                <BsFillInfoCircleFill className="h-a-icon" />
                About
              </Link>
            </div>
          )}
        </div>
      </div>
    )
  }
}
export default Notfound
