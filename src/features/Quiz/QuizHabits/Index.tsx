import React from 'react'
import { useStyles } from './useStyles'
import { QuizHabitsAnswer } from '@shared/interfaces'
import { Title } from '@shared/ui'
import { ImageNope, ImageWithSomeEffort, ImageYeah } from './img'
import clsx from 'clsx'

export interface QuizHabitsProps {
  onClick: (text: string) => void
  value: string
}

export const QuizHabits: React.FC<QuizHabitsProps> = ({ onClick, value }) => {
  const classes = useStyles()

  const items: QuizHabitsAnswer[] = [
    { img: ImageNope, text: 'Nope' },
    { img: ImageWithSomeEffort, text: 'With some effort' },
    { img: ImageYeah, text: 'Yeah' },
  ]

  const handleClick = ({ text }: QuizHabitsAnswer) => onClick(text)

  return (
    <div className={classes.root}>
      <Title className={classes.title}>
        Can you get into new
        <br />
        habits with ease?
      </Title>
      <div className={classes.items}>
        {items.map(item => (
          <div
            className={clsx(classes.item, value === item.text && classes.itemActive)}
            key={item.text}
            onClick={() => handleClick(item)}
          >
            <div className={classes.itemWrap}>
              <div className={classes.itemIcon} style={{ backgroundImage: `url(${item.img})` }} />
              <div className={classes.itemText}>{item.text}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
