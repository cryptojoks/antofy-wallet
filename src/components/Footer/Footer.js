import React from 'react'

import Icon from '../Icon/Icon'
import Container from '../Container/Container'
import { ReactComponent as Logo } from './HSlogo.svg'

import './Footer.scss'

class Footer extends React.Component {
  onClickHome = () => {
    if (window.location.pathname === '/') {
      window.scrollTo(0, 0)
    }
  }

  render() {
    return (
      <header className="Footer">
        <Container>
          <div className="Divider" />

          <div className="Footer-bottom">
            <a href="https://antofy.com" target="_blank" rel="noopener noreferrer">
              <Logo className="Logo" />

              <div className="Logo-icon">
                <Icon name="logo" fill="#05C46B" viewBox="0 0 40 40" size="40" />
              </div>
            </a>

            <span>@ 2023 Antofy Labs LLC. </span>
          </div>
        </Container>
      </header>
    )
  }
}

export default Footer
