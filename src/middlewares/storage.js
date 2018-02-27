// @flow

import { keystore, storage } from 'services'
import * as createWallet from 'routes/Wallets/routes/CreateWallet/modules/createWallet'
import * as removeWallet from 'routes/Wallets/routes/RemoveWallet/modules/removeWallet'
import * as changeWalletPassword from 'routes/Wallets/routes/ChangeWalletPassword/modules/changeWalletPassword' // eslint-disable-line max-len

export const set = () => (next: Next) => (action: FSA) => {
  const { type }: FSA = action

  switch (type) {
    case createWallet.CREATE_SUCCESS:
    case changeWalletPassword.CHANGE_PASSWORD_SUCCESS:
    case removeWallet.REMOVE_SUCCESS: {
      storage.setKeystore(keystore.serialize())
      break
    }

    default: break
  }

  return next(action)
}