import React from 'react'
import { useStylesMain } from './Main.styles'
import Routes from '../../pages'

export default function Main() {
  const classes = useStylesMain()
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Routes />
    </main>
  )
}