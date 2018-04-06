// @flow

import React from 'react'

import { ModalHeader, PasswordStep } from 'components'

import FormStep from './FormStep'
import { STEPS } from '../modules/editWallet'

const EditWallet = (props: Props) => (
  <div className='content-wrapper'>
    <div className='modal-header-wrapper'>
      <ModalHeader title='Edit wallet' color='white' />
    </div>
    <div className='content'>
      {(props.currentStep === STEPS.FORM) && <FormStep {...props} />}
      {(props.currentStep === STEPS.PASSWORD) && <PasswordStep {...props} color='blue' />}
    </div>
  </div>
)

type Props = {
  setName: (name: string) => Dispatch,
  setKnownDerivationPath: (knownDerivationPath: string) => Dispatch,
  setCustomDerivationPath: (customDerivationPath: string) => Dispatch,
  setPassword: (password: Password) => Dispatch,
  setNextStep: () => Dispatch,
  validFields: Object,
  invalidFields: Object,
  name: string,
  knownDerivationPath: string,
  customDerivationPath: string,
  password: Password,
  currentStep: Index,
  walletType?: WalletType,
  selectedDerivationPathType: 'custom' | 'known'
}

EditWallet.defaultProps = {
  walletType: undefined,
}

export default EditWallet