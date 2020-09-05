import React from 'react';
import Head from 'next/head';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '../src/Link'

import Button from '../src/Components/Button';

export default function Index() {
  return (
    <Container maxWidth="sm">
      <Head>
        <title>Home Page</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <Box my={4} component={"section"}>
        <Typography align="center" color="secondary" variant="h1" component="h1" gutterBottom>
          NextJs Starter
        </Typography>
        <Typography align="center" color="secondary" variant="h3" component="h2" gutterBottom>
          with dependences Typescript, ReactJs, Material UI, Styeld Components
        </Typography>
        <Box my={4} component={"article"} display="flex" justifyContent="space-between">
          <Link href="/about">
            <Button buttonText="About page!" />
          </Link>
          <Link href="/bananinha">
            <Button buttonText="Bananinha page!" />
          </Link>
          <Link href="/blaus">
            <Button buttonText="Blaus page!" />
          </Link>
        </Box>
      </Box>
    </Container>
  );
}
