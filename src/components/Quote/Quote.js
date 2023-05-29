import React from 'react'
import Container from '../Container'
import Zooko from './zooko.png'
import '../Quote/Quote.scss'

function Quote() {
  return (
    <Container>
      <div className="Section-space-top Section-space-bottom text-center d-flex justify-content-center">
        <div className="w-75">
          <p className="Quote-info-text text-gradient">
            “Antofy is the first multi-coin wallet that supports Bitcoin, Ethereum, and fully shielded Zcash, as well as other coins, and it has a strong, user-centric architecture in which the users own their own keys and their own privacy."
          </p>
          <div className="pt-4">
            <img src={Zooko} alt="Zooko Wilcox-O'Hearn" width="80" height="80" />
          </div>
          <p className="Quote-author-text pt-4">
            Philip Morris
          </p>
          <span className="Quote-author-info">
            CEO & chairman 
          </span>
        </div>
      </div>
    </Container>
  )
}

export default Quote
