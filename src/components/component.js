import React from 'react'

import PropTypes from 'prop-types'

import './component.css'

const AppComponent = (props) => {
  return (
    <div className="component-container">
      <div className="component-blog-post-card">
        <div className="component-container1">
          <span className="component-text">{props.text}</span>
          <span className="component-text1">{props.text1}</span>
          <span className="component-text2">{props.text2}</span>
          <div className="component-container2">
            <div className="component-profile">
              <img
                alt={props.image_alt}
                src={props.image_src}
                image_src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTYyNjQzMTMwMw&amp;ixlib=rb-1.2.1&amp;h=1200"
                className="component-image"
              />
              <span className="component-text3">{props.text4}</span>
            </div>
            <span className="component-text4">{props.text3}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

AppComponent.defaultProps = {
  text1: 'Lorem ipsum dolor sit amet',
  image_alt: 'profile',
  image_src:
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTYyNjQzMTMwMw&ixlib=rb-1.2.1&h=1200',
  text4: 'Jon Doe',
  text: 'ENTERPRISE',
  text2:
    'Lorem ipsum dolor sit amet, consectetur, adipiscing elit. Sed non volutpat turpis.  ​ Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor. Lorem  ​​ ipsum dolor sit amet, consectetur adipiscing elit.',
  text3: '5 min read',
}

AppComponent.propTypes = {
  text1: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  text4: PropTypes.string,
  text: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
}

export default AppComponent
