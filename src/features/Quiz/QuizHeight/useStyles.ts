import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(
  {
    root: {
      minWidth: 350,
    },
    title: {
      marginBottom: 32,
    },
    form: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
    },
    swith: {
      marginBottom: 60,
    },
    textarea: {
      borderBottom: '3px solid #235864',
      width: 100,
      height: 100,
      appereance: 'none',
      WebkitAppearance: 'none',
      fontFamily: 'NewYorkExtraLargeBold',
      fontWeight: 'bold',
      fontSize: 67.1143,
      textAlign: 'center',
      color: '#C2CDD0',
      backgroundColor: 'transparent',
      resize: 'none',
      border: 'none',
      '&:hover, &:focus': {
        outline: 'none',
        boxShadow: 'none',
      },
    },
    buttonContinue: {
      backgroundImage: 'linear-gradient(266.08deg, #FF522C 4.28%, #FF3C8B 87.63%)',
      opacity: 1,
      boxShadow: '0px 9px 40px rgba(255, 0, 88, 0.21), 0px 1.12694px 5.00862px rgba(255, 0, 88, 0.105)',
      borderRadius: 20,
      fontWeight: 'bold',
      fontSize: 17,
      textAlign: 'center',
      color: '#FFFFFF',
      minHeight: 68,
      width: '100%',
      display: 'block',
      marginTop: 87,
      transition: 'opacity .4s ease-in-out',
      '&[disabled]': {
        opacity: 0.33,
      },
    },
  },
  { name: 'QuizHeightStyles' }
)
