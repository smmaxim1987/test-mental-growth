import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(
  {
    root: {},
    title: {
      marginBottom: 24,
    },
    description: {
      fontSize: 15,
      lineHeight: '140%',
      textAlign: 'center',
      color: '#9A9B9E',
      maxWidth: 300,
      '& b': {
        color: '#FE5665',
        fontWeight: 'bold',
      },
    },
    chart: {
      marginTop: 40,
    },
  },
  { name: 'QuizResultStyles' }
)
