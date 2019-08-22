import React from 'react';
import VideoList from './components/video-list';

import './App.css';

export default function App() {
  const videos = [
    {
      url: 'https://www.youtube.com/embed/pD_T02kcLWI',
      title: 'Building Pausable Timer Component Timer in React JS',
      author: 'Mark Tellez',
      viewCount: 0,
    },
    {
      url: 'https://www.youtube.com/embed/3ohRNCa1Yau',
      title: 'Building a CryptoCard React JS Component for Live Crypto Currency Dashboard',
      author: 'Mark Tellez',
      viewCount: 11,
    }
  ]

  return (
    <div
      className="page-container"
    >
      <VideoList videos={videos} />
    </div>
  )
}