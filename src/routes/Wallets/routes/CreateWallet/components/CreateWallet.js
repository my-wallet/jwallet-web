// @flow

import React from 'react'
import classNames from 'classnames'

import { STEPS } from '../modules/createWallet'

import MnemonicStep from './MnemonicStep'
import MnemonicConfirmStep from './MnemonicConfirmStep'
import PasswordStep from './PasswordStep'
import AssetsStep from '../containers/AssetsStepContainer'

const CreateWallet = (props: Props) => (
  <div className={classNames('content', { '-assets': (props.currentStep === STEPS.ASSETS) })}>
    {(props.currentStep === STEPS.MNEMONIC) && <MnemonicStep {...props} />}
    {(props.currentStep === STEPS.CONFIRM) && <MnemonicConfirmStep {...props} />}
    {(props.currentStep === STEPS.PASSWORD) && <PasswordStep {...props} />}
    {(props.currentStep === STEPS.ASSETS) && <AssetsStep {...props} />}
  </div>
)

type Props = {
  setMnemonicConfirm: (mnemonicConfirm: string) => Dispatch,
  setName: (name: string) => Dispatch,
  setPassword: (password: Password) => Dispatch,
  setPasswordConfirm: (passwordConfirm: Password) => Dispatch,
  setNextStep: () => Dispatch,
  setPrevStep: () => Dispatch,
  goToHome: () => Dispatch,
  goToWallets: () => Dispatch,
  validFields: Object,
  invalidFields: Object,
  name: string,
  mnemonic: string,
  mnemonicConfirm: string,
  password: Password,
  passwordConfirm: Password,
  currentStep: Index,
}

export default CreateWallet
