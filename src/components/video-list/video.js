import React from 'react';
import PropTypes from 'prop-types';

export default function Video(props) {
  return (
    <div className='video'>
      <h2>{props.title}</h2>
      <div className='videoContainer'>
        <iframe
          src={props.url}
          title={props.title}
          frameborder="0"
          allowFullScreen
        ></iframe>
      </div>
      <div>{props.author}</div>
      <hr/>
      <div>
        View Count: {props.viewCount}
      </div>
    </div>
  )
}

Video.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  viewCount: PropTypes.number.isRequired,
}