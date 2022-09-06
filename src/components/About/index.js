import {Link} from 'react-router-dom'
import './index.css'
import {AiFillHome} from 'react-icons/ai'
import {BsFillInfoCircleFill} from 'react-icons/bs'

import {Component} from 'react'

import Header from '../Header'

class About extends Component {
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
            <img
              src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
              alt="about"
            />
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
export default About
