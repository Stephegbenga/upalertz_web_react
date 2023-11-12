import React from 'react'

import PropTypes from 'prop-types'

import './blog-post-card.css'

const BlogPostCard = (props) => {
  return (
    <div className="blog-post-card-blog-post-card">
      <div className="blog-post-card-container">
        <span className="blog-post-card-text">{props.text}</span>
        <span className="blog-post-card-text1">{props.text1}</span>
        <span className="blog-post-card-text2">{props.text2}</span>
        <div className="blog-post-card-container1">
          <div className="blog-post-card-profile">
            <img
              alt={props.image_alt}
              src={props.image_src}
              image_src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTYyNjQzMTMwMw&amp;ixlib=rb-1.2.1&amp;h=1200"
              className="blog-post-card-image"
            />
            <span className="blog-post-card-text3">{props.text4}</span>
          </div>
          <span className="blog-post-card-text4">{props.text3}</span>
        </div>
      </div>
    </div>
  )
}

BlogPostCard.defaultProps = {
  text3: '5 min read',
  image_src:
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTYyNjQzMTMwMw&ixlib=rb-1.2.1&h=1200',
  text4: 'Jon Doe',
  text: 'ENTERPRISE',
  text2:
    'Lorem ipsum dolor sit amet, consectetur, adipiscing elit. Sed non volutpat turpis.  ​ Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor. Lorem  ​​ ipsum dolor sit amet, consectetur adipiscing elit.',
  text1: 'Lorem ipsum dolor sit amet',
  image_alt: 'profile',
}

BlogPostCard.propTypes = {
  text3: PropTypes.string,
  image_src: PropTypes.string,
  text4: PropTypes.string,
  text: PropTypes.string,
  text2: PropTypes.string,
  text1: PropTypes.string,
  image_alt: PropTypes.string,
}

export default BlogPostCard
