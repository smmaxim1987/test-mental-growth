import React, { ReactNode } from 'react'
import { Container } from '@material-ui/core'
import { useStyles } from './useStyles'

export interface QuizLayoutTemplate {
  header: ReactNode
}

export const QuizLayoutTemplate: React.FC<QuizLayoutTemplate> = ({ header, children }) => {
  const classes = useStyles()
  return (
    <section className={classes.root}>
      <header className={classes.head}>
        <Container>{header}</Container>
      </header>
      <main className={classes.body}>
        <Container>{children}</Container>
      </main>
    </section>
  )
}
