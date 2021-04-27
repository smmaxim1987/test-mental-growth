import React from 'react'
import { useStyles } from './useStyles'
import clsx from 'clsx'

type valueType = number | string

export interface SwitchProps extends React.HTMLAttributes<HTMLElement> {
  switchLeft: valueType
  switchRight: valueType
  currentValue: valueType
  onSwitch: (value: valueType) => void
}

export const Switch: React.FC<SwitchProps> = ({ switchLeft, switchRight, currentValue, onSwitch, className }) => {
  const classes = useStyles({})
  const isActive = (switchValue: valueType) => switchValue === currentValue
  const handleChange = (switchValue: valueType) => !isActive(switchValue) && onSwitch(switchValue)

  return (
    <div className={clsx(classes.root, className)}>
      <div
        className={clsx(classes.switch, isActive(switchLeft) && classes.switchActive)}
        onClick={() => handleChange(switchLeft)}
      >
        {switchLeft}
      </div>
      <div
        className={clsx(classes.switch, isActive(switchRight) && classes.switchActive)}
        onClick={() => handleChange(switchRight)}
      >
        {switchRight}
      </div>
    </div>
  )
}
