
import React from 'react'
import Grid from '@material-ui/core/Grid'
import PropTypes from 'prop-types'
import Icon from '@material-ui/core/Icon'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(4),
    textAlign: 'left',
    fontSize: '1em',
    marginBottom: '1em',
  },
  icon: {
    verticalAlign: 'middle',
    marginRight: '0.5em',
  },
  title: {
    textAlign: 'left',
    fontSize: '1.4em',
    fontWeight: 500,
    lineHeight: '1.5em',
  },
  label: {
    textAlign: 'left',
  },
  value: {
    textAlign: 'right',
    fontWeight: '500',
  },
}))
export default function DetailsCard(props) {
  const { details: { icon, name, items } } = props
  const classes = useStyles()
  return (
    <Paper className={classes.paper}>
      <Grid container spacing={2}>
        <Grid item xs={12} className={classes.title}>
          <Icon className={classes.icon}>{icon}</Icon>{name}
        </Grid>
        { items.map((item) => (
          <React.Fragment key={item.name}>
            <Grid item xs={6} className={classes.label}>{item.name}</Grid>
            <Grid item xs={6} className={classes.value}>{item.value}</Grid>
          </React.Fragment>
        ))}
      </Grid>
    </Paper>
  )
}

DetailsCard.detailsType = PropTypes.shape({
  icon: PropTypes.string,
  name: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.string,
    }),
  ),
})

DetailsCard.propTypes = {
  details: DetailsCard.detailsType.isRequired,
}
