import { connect } from 'react-redux'

import {
  closeImportKeystoreAccountModal,
  setImportKeystoreAccountData,
  setImportKeystoreAccountPassword,
  setImportKeystoreAccountPasswordConfirm,
  setImportKeystoreAccountKnownDerivationPath,
  setImportKeystoreAccountCustomDerivationPath,
  setImportKeystoreAccountCurrentStep,
} from 'routes/JWallet/modules/modals/importKeystoreAccount'

import ImportKeystoreAccountModal from './ImportKeystoreAccountModal'

const mapStateToProps = ({ importKeystoreAccountModal, keystore }) => {
  const { currentStep, totalSteps } = importKeystoreAccountModal
  const { isCreating, currentAccount } = keystore

  return {
    ...importKeystoreAccountModal,
    modalName: 'import-keystore-account',
    modalTitle: i18n('modals.importAccount.title'),
    topLineFullness: `${100 * (currentStep / totalSteps)}%`,
    isInitialized: !!currentAccount.id.length,
    isButtonLoading: isCreating,
    isCreating,
  }
}

const mapDispatchToProps = {
  closeImportKeystoreAccountModal,
  setImportKeystoreAccountData,
  setImportKeystoreAccountPassword,
  setImportKeystoreAccountPasswordConfirm,
  setImportKeystoreAccountKnownDerivationPath,
  setImportKeystoreAccountCustomDerivationPath,
  setImportKeystoreAccountCurrentStep,
}

export default connect(mapStateToProps, mapDispatchToProps)(ImportKeystoreAccountModal)
