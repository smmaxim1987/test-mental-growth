import { createStyles, makeStyles } from '@material-ui/core'

export const useGlobalStyles = makeStyles(() =>
  createStyles({
    '@global': {
      html: {
        '-webkit-font-smoothing': 'antialiased',
        '-moz-osx-font-smoothing': 'grayscale',
        height: '100%',
        width: '100%',
      },
      body: {
        height: '100%',
        width: '100%',
        fontFamily: 'SFProText',
        backgroundColor: '#F2F2F2',
      },
      'html, body': {
        margin: 0,
        padding: 0,
      },
      '*, *::before, *::after': {
        boxSizing: 'inherit',
      },
    },
  })
)
