import React from 'react'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'

export default function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link
        color="inherit"
        href="https://github.com/wtlin1228/material-ui-dashboard"
      >
        wtlin1228
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}
