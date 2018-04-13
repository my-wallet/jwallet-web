// @flow

import React from 'react'

import handle from 'utils/eventHandlers/handle'
import isMnemonicType from 'utils/keystore/isMnemonicType'
import { JButton, JInput } from 'components/base'
import { DerivationPath, Expandable } from 'components'

const DataStep = ({
  setData,
  setKnownDerivationPath,
  setCustomDerivationPath,
  setPrevStep,
  setNextStep,
  validFields,
  invalidFields,
  data,
  knownDerivationPath,
  customDerivationPath,
  walletType,
  selectedDerivationPathType,
}: Props) => (
  <div className='form'>
    <JInput
      onChange={setData}
      value={data}
      name='import-wallet-data'
      errorMessage={invalidFields.data}
      successMessage={validFields.data}
      placeholder={i18n('routes.importWallet.placeholder.data')}
    />
    {isMnemonicType(walletType) && (
      <Expandable title='Advanced' color='white'>
        <DerivationPath
          setKnownDerivationPath={handle(setKnownDerivationPath)}
          setCustomDerivationPath={setCustomDerivationPath}
          knownDerivationPath={knownDerivationPath}
          customDerivationPath={customDerivationPath}
          errorMessage={invalidFields.customDerivationPath}
          selectedDerivationPathType={selectedDerivationPathType}
        />
      </Expandable>
    )}
    <div className='actions'>
      <JButton
        onClick={setPrevStep}
        text={i18n('routes.importWallet.buttonTitle.prevStep')}
        color='white'
        iconSize='small'
        iconName='arrow'
        minimal
        transparent
      />
      <JButton
        onClick={setNextStep}
        text={i18n('routes.importWallet.buttonTitle.nextStep')}
        color='blue'
        large
        right
      />
    </div>
  </div>
)

type Props = {
  setData: (data: string) => Dispatch,
  setKnownDerivationPath: (knownDerivationPath: string) => Dispatch,
  setCustomDerivationPath: (customDerivationPath: string) => Dispatch,
  setPrevStep: () => Dispatch,
  setNextStep: () => Dispatch,
  validFields: Object,
  invalidFields: Object,
  data: string,
  knownDerivationPath: string,
  customDerivationPath: string,
  walletType: ?WalletType,
  selectedDerivationPathType: 'known' | 'custom'
}

DataStep.defaultProps = {
  setData: () => {},
  setKnownDerivationPath: () => {},
  setCustomDerivationPath: () => {},
  setPrevStep: () => {},
  setNextStep: () => {},
  validFields: {},
  invalidFields: {},
  data: '',
  knownDerivationPath: '',
  customDerivationPath: '',
  walletType: undefined,
  selectedDerivationPathType: 'custom',
}

export default DataStep