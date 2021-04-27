import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(
  {
    root: {},
    title: {
      marginBottom: 49,
    },
    items: {
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'left',
    },
    item: {
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
      '& + &': {
        marginTop: 20,
      },
    },
    itemText: {
      fontSize: 15,
      color: '#235864',
    },
    itemIcon: {
      width: 20,
      height: 20,
      marginRight: 11,
    },
    itemActive: {
      outline: '1px solid red',
    },
  },
  { name: 'QuizEngagingStyles' }
)
