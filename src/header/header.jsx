import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(() => ({
  logo: {
    textAlign: 'center',
    marginBottom: '1.5em',
    marginTop: '1em',
  },
}))
function Header() {
  const classes = useStyles()
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} className={classes.logo}>
        <Link to="/"><img alt="Barley Town Brewery" className="logo-image" src="/bt-logo-black.png" /></Link>
      </Grid>
    </Grid>
  )
}

export default Header
