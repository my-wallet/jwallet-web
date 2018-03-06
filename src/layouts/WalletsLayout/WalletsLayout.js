// @flow

import React from 'react'

const WalletsLayout = ({ children }: Props) => (
  <div>
    {
    /*
      <div>{'Aside'}</div>
      <div>{'Title'}</div>
      <div>{'ESC button'}</div>
    */
    }
    <div>{children}</div>
  </div>
)

type Props = {
  children?: Object,
}

WalletsLayout.defaultProps = {
  children: null,
}

export default WalletsLayout