import React from 'react'
import Slider from '../Slider'
import CardApproved from '../Card/CardApproved'
import Container from '../Container'

function OpenSource() {
  return (
    <Container>
      <div className="Section-space-top Section-space-bottom">
        <div className="Page-header-text text-center pb-3 text-gradient fw-normal">
          Open Source
        </div>
        <p className="Page-info-text text-center py-3 mb-5 text-grey">
          Use a wallet with a fully open code that meets stated specifications.
        </p>
        <Slider slidesToScroll={4} slidesToShow={4}>
          <CardApproved
            by="Bitcoin"
            title="Approved By Bitcoin.org"
            info={
              <>
                Antofy has been <a href="https://bitcoin.org/" target="_blank"
                                                  rel="noopener noreferrer" className="color-link">Bitcoin.org</a>, one of the leading informational
                resources for Bitcoin,
                and recommended for both new and experienced users alike.
              </>
            } />
          <CardApproved
            by="Certik"
            title="Audited By Certik"
            info={
              <>
                Antofy will be audited by <a href="https://www.certik.org/" target="_blank" rel="noopener noreferrer"
                                              className="color-link">Certik.org</a> both iOS and Android versions of the app will be checked for
                potential backdoors and vulnerabilities. No major or minor issues were found.
              </>
            } />
          <CardApproved
            by="Immunefi"
            title="Audited By Immunefi"
            info={
              <>
                Antofy will be audited by <a href="https://immunefi.com/" target="_blank" rel="noopener noreferrer"
                                              className="color-link">Immunefi.com</a> both iOS and Android versions of the app will be checked for
                potential backdoors and vulnerabilities. No major or minor issues were found.
              </>
            } />
          <CardApproved
            by="WalletScrutiny"
            title="Approved By Wallet Scrutiny"
            info={
              <>
                The <a href="https://walletscrutiny.com/" target="_blank" rel="noopener noreferrer"
                       className="color-link">WalletScrutiny.com</a> verifies that cryptocurrency wallets are indeed using the same publicly open
                code they claim to. Antofy is verifiably open source wallet.
              </>
            } />
        </Slider>
      </div>
    </Container>
  )
}

export default OpenSource
