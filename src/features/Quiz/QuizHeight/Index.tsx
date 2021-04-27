import React, { useEffect, useState } from 'react'
import { useStyles } from './useStyles'
import { Title, Switch } from '@shared/ui'
import { ButtonBase } from '@material-ui/core'
import { QuizHeightUnit } from '@shared/interfaces'

export interface QuizHeightProps {
  onSubmit: (value: string) => void
  value: number
  unitValue: string
}

export const QuizHeight: React.FC<QuizHeightProps> = ({ onSubmit, value = 0, unitValue = QuizHeightUnit.ft }) => {
  const classes = useStyles()

  const [height, setHeight] = useState<number>(0)
  const [unit, setUnit] = useState<string>(QuizHeightUnit.ft)

  useEffect(() => {
    value && setHeight(value)
    unitValue && setUnit(unitValue)
  }, [value, unitValue])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit(`${height} ${unit}`)
  }

  return (
    <div className={classes.root}>
      <Title className={classes.title}>Your height</Title>
      <form className={classes.form} onSubmit={handleSubmit}>
        <Switch
          onSwitch={value => {
            setHeight(0)
            setUnit(String(value))
          }}
          switchLeft={QuizHeightUnit.ft}
          switchRight={QuizHeightUnit.cm}
          currentValue={unit}
          className={classes.swith}
        />

        <textarea
          className={classes.textarea}
          value={height}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setHeight(Number(e.target.value.replace(/[^\d]/g, '')))
          }
        />

        <ButtonBase disabled={height === 0} type='submit' className={classes.buttonContinue}>
          Continue
        </ButtonBase>
      </form>
    </div>
  )
}
