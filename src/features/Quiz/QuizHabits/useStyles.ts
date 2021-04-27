import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(
  {
    root: {},
    title: {
      marginBottom: 38,
    },
    items: {
      display: 'flex',
      marginLeft: -16,
      marginRight: -16,
    },
    item: {
      paddingLeft: 16,
      paddingRight: 16,
    },
    itemText: {
      fontSize: 15,
      textAlign: 'center',
      color: '#161616',
    },
    itemIcon: {
      width: 55,
      height: 55,
      marginBottom: 32,
    },
    itemActive: {
      outline: '1px solid red',
    },
    itemWrap: {
      width: 188,
      height: 188,
      backgroundColor: '#FFFFFF',
      boxShadow: '0px 4px 44px rgba(151, 151, 151, 0.25)',
      borderRadius: 32,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      cursor: 'pointer',
    },
  },
  { name: 'QuizHabitsStyles' }
)
