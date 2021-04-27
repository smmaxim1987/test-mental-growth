import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(
  {
    root: {
      background: '#235864',
      borderRadius: 32,
      minWidth: 138,
      height: 44,
      display: 'flex',
      border: '2px solid #235864',
    },
    switch: {
      flexBasis: '50%',
      borderRadius: 38,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 'bold',
      fontSize: 15,
      color: '#fff',
      cursor: 'pointer',
      transition: 'background .2s ease-in-out',
    },
    switchActive: {
      backgroundColor: '#fff',
      color: '#235864',
      cursor: 'default',
    },
  },
  { name: 'SwitchStyles' }
)
