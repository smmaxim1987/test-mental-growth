import React, { useMemo } from 'react'
import { LinearProgress, ButtonBase } from '@material-ui/core'
import { useStyles } from './useStyles'
import { ArrayLeftIcon } from '@assets/icons'

export interface Stepper {
  size: number
  current: number
  onBack: () => void
}

export const Stepper: React.FC<Stepper> = ({ size, current, onBack }) => {
  const hasBtnBack = current !== 1
  const classes = useStyles({ hasBtnBack })
  const percent: number = useMemo(() => ((current - 1) * 100) / (size - 1), [size, current])
  return (
    <div className={classes.root}>
      <div className={classes.head}>
        {hasBtnBack && (
          <ButtonBase className={classes.backBtn} onClick={onBack}>
            <ArrayLeftIcon /> back
          </ButtonBase>
        )}
        <div className={classes.steps}>
          {current}/{size}
        </div>
      </div>
      <LinearProgress className={classes.progress} variant='determinate' value={percent} />
    </div>
  )
}
