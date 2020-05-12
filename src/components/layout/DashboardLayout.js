import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'

import useAppBar from './hooks/useAppBar'
import MyDrawer from './MyDrawer'
import Copyright from '../Copyright'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}))

export default function DashboardLayout({ children }) {
  const classes = useStyles()
  const [open, AppBar, setOpen] = useAppBar({ defaultOpen: true })

  return (
    <div className={classes.root}>
      <AppBar />
      <MyDrawer open={open} handleDrawerClose={() => setOpen(false)} />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          {children}
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  )
}
