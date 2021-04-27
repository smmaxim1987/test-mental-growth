import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(
  {
    root: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
    },
    stepper: {
      maxWidth: 380,
      width: '100%',
      marginBottom: 50,
    },
    content: {},
  },
  { name: 'QuizPageStyles' }
)
