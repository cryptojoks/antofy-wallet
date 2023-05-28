import React from 'react'
import { Tooltip } from 'react-tooltip'
import Icon from '../Icon'
import Button from '../Button'
import AndroidQrCode from './qrcode-get-wallet.png'

import './GetWalletActions.scss'

function GetWallet() {
  return (
    <div className="Wallet-actions">
      <div className="Banner-actions">
        <Tooltip
          id="registerTip"
          data-tooltip-place="top"
          variant="light"
          className="QqCodeTooltip"
          content={<img src={AndroidQrCode} alt="" />}
        />
        <Button
          className="Button-circle Button-nowrap"
          text="Google Play"
          icon="google-play"
          link="https://play.google.com/store/apps/" yellow newTab />
        <Button
          className="Button-circle Button-nowrap"
          text="App Store"
          icon="app-store"
          link="https://itunes.apple.com/app/" yellow newTab />
        <div className="sm-hidden" role="button" data-tooltip-id="registerTip">
          <Icon name="qr-code" />
        </div>
      </div>
      <div className="Banner-links">
        <Button
          className="Button-circle Button-download"
          text="APK file"
          icon="android"
          link="https://github.com/antofy/antofy-wallet-android/" newTab />
        <Button
          className="Button-circle Button-download"
          text="Github"
          icon="github"
          link="https://github.com/antofy" newTab />
        <Button
          className="Button-circle Button-download"
          text="Gitlab"
          icon="gitlab"
          link="https://gitlab.com/antofy" newTab />
      </div>
    </div>
  )
}

export default GetWallet
