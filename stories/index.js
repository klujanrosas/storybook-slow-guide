import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Button from '../components/Button'

storiesOf('Button', module)
  .add('with Dashed Border', () => (
    <Button
      color='orange'
      dashed
    />
  ))
  .add('with Dotted Border', () => (
    <Button
      color='blue'
      dotted
    />
  ))
  .add('with Controls', () => (
    <Button
      showControls
      color='green'
      dashed
    />
  ))