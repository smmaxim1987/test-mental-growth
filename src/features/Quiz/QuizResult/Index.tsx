import React from 'react'
import { Title } from '@shared/ui'
import { useStyles } from './useStyles'

export const QuizResult: React.FC = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Title className={classes.title}>Your plan is ready!</Title>
      <div className={classes.description}>
        According to your <b>biological age (35)</b> and <b>ВMI (40,5)</b> the plan will include:
      </div>
      <div className={classes.chart}></div>
    </div>
  )
}
