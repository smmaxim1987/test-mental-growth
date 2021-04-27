import React from 'react'
import { useStyles } from './useStyles'
import clsx from 'clsx'

export interface TitleProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Title: React.FC<TitleProps> = ({ children, className }) => {
  const classes = useStyles({})
  return <div className={clsx(classes.root, className)}>{children}</div>
}
