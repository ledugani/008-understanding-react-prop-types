import React from 'react';
import Video from './video';
import PropTypes from 'prop-types';

import './styles.css'

export default function VideoList(props) {
  return (
    <ul className='videos'>
      {
        props.videos.map(video =>
          <li>
            <Video {...video} />
          </li>)
      }
    </ul>
  )
}

VideoList.propTypes = {
  videos: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    viewCount: PropTypes.number.isRequired,
  }))
}