import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles'
import { theme, useGlobalStyles } from '@shared/theme'
import { QuizPage } from '@pages'
import './assets/fonts'

export const App: React.FC = () => {
  useGlobalStyles()
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route path='/quiz/:slug' component={QuizPage} />
          <Redirect path='*' to='/quiz/engaging' />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  )
}

render(<App />, document.querySelector('#root'))
