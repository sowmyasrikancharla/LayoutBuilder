// Write your code here
import {Component} from 'react'
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

class Body extends Component {
  render() {
    return (
      <ConfigurationContext.Consumer>
        {value => {
          const {showContent, showLeftNavbar, showRightNavbar} = value
          console.log(showContent)
          return (
            <div className="body-con">
              {showLeftNavbar ? (
                <div className="left-nav-con">
                  <h1 className="body-head">Left Navbar Menu</h1>
                  <ul>
                    <li className="item">Item 1</li>
                    <li className="item">Item 2</li>
                    <li className="item">Item 3</li>
                    <li className="item">Item 4</li>
                  </ul>
                </div>
              ) : null}
              {showContent ? (
                <div className="content-con">
                  <h1 className="body-head">Content</h1>
                  <p>
                    Lorem ipsum dolor sit amet. Ea quisquam excepturi qui neque
                    quam cum perspiciatis internos quo facilis voluptatibus et
                    rerum placeat. Aut expedita voluptates ut dolor numquam et
                    culpa vitae est laborum quam eum architecto earum et
                    voluptatem accusantium nam molestiae voluptate! Ut eligendi
                    tempore et accusamus voluptatibus quo eaque dicta qui
                    cupiditate consequatur sit veritatis neque ex dignissimos
                    omnis At enim nemo? Ut deleniti iure rem omnis consectetur
                    sit optio voluptatum.
                  </p>
                </div>
              ) : null}
              {showRightNavbar ? (
                <div className="left-nav-con">
                  <h1 className="body-head">Right Navbar</h1>
                  <div className="box">Ad 1</div>
                  <div className="box">Ad 2</div>
                </div>
              ) : null}
            </div>
          )
        }}
      </ConfigurationContext.Consumer>
    )
  }
}

export default Body
