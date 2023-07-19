import React from 'react'
import Container from '../Container'
import twitter from './twitter@3x.png'
import telegram from './telegram@3x.png'
import medium from './medium@3x.png'

import './Join.scss'

function Join() {
  return (
    <Container clipped={false}>
      <div className="Section-head Section-join Page-rtl">
        <div className="Page-content">
          <div className="Page-end">
            <div className="Section-text Join-section-text text-gradient">
              Join Antofy Labs
            </div>
            <div className="Section-info Join-section-info">
              Stay on top of Antofy happenings. Be the first to know about new features, user reported issues and things we work on!            </div>
          </div>
          <div className="Page-start">
            <div className="Join-icons">
              <div className="Join-icon">
                <a href="https://twitter.com/0xantofy" target="_blank" rel="noopener noreferrer">
                  <img className="Join-image" src={twitter} alt="Twitter" />
                </a>
              </div>
            <div className="Join-icon">
                <a href="https://medium.com/@antofy" target="_blank" rel="noopener noreferrer">
                  <img className="Join-image" src={medium} alt="medium" />
                </a>
              </div>
              <div className="Join-icon">
                <a href="https://t.me/antofylabs" target="_blank" rel="noopener noreferrer">
                  <img className="Join-image" src={telegram} alt="telegram" />
                </a>
              </div>
            </div>
        
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Join

