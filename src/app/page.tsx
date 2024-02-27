'use client'

import { Breadcrumbs, Button, Link, Switch, Typography } from '@mui/material'
import { FC } from 'react'
import {tss } from 'tss-react/mui';

const switchLabel = { inputProps: { 'aria-label': 'Switch demo' } }

const Home: FC = () => {
    const {classes} = useStyles();

  return (
    <main className={classes.main}>
      <Breadcrumbs>
        <Breadcrumbs aria-label='breadcrumb'>
          <Link color='inherit' href='/' underline='hover'>
            This starter
          </Link>
          <Link color='inherit' href='/' underline='hover'>
            Uses
          </Link>
          <Typography color='text.primary'>Material-UI and TSS</Typography>
        </Breadcrumbs>
      </Breadcrumbs>
      <Switch {...switchLabel} />
      <Button variant='contained'>I&apos;m a Material-UI button!</Button>
    </main>
  )
}

export default Home

const useStyles = tss.create(
{
    main: { display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' },
  }
)
