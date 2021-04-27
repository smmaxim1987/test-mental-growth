import { makeStyles } from '@material-ui/core/styles'

interface iProps {
  hasBtnBack: boolean
}

export const useStyles = makeStyles(
  {
    root: {},
    head: {
      display: 'flex',
      justifyContent: ({ hasBtnBack }: iProps) => (hasBtnBack ? 'space-between' : 'flex-end'),
      color: '#235864',
    },
    backBtn: {
      fontWeight: 'bold',
      fontSize: 15,
      '& svg': {
        maxWidth: 8,
        marginRight: 10,
      },
    },
    steps: {
      fontWeight: 'bold',
      fontSize: 14,
    },
    progress: {
      marginTop: 13,
      backgroundColor: '#D8DFE0',
      '& .MuiLinearProgress-bar': {
        backgroundColor: '#2EA68C',
      },
    },
  },
  { name: 'StepperStyles' }
)
