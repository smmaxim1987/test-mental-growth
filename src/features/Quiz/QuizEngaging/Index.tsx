import React from 'react'
import { useStyles } from './useStyles'
import { Title } from '@shared/ui'
import { ReturnIcon, AproveIcon } from '@assets/icons'
import clsx from 'clsx'

export interface QuizEngagingProps {
  onClick: (value: string) => void
  value: string
}

export const QuizEngaging: React.FC<QuizEngagingProps> = ({ onClick, value }) => {
  const classes = useStyles()

  const items = [
    { icon: <AproveIcon />, text: 'Compiling plan of program' },
    { icon: <ReturnIcon />, text: 'Is this statement describes you?' },
  ]

  return (
    <div className={classes.root}>
      <Title className={classes.title}>
        Engaging your
        <br /> program
      </Title>

      <div className={classes.items}>
        {items.map(item => (
          <div
            key={item.text}
            className={clsx(classes.item, value === item.text && classes.itemActive)}
            onClick={() => onClick(item.text)}
          >
            <div className={classes.itemIcon}>{item.icon}</div>
            <div className={classes.itemText}>{item.text}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
