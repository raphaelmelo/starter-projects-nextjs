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
        <title> About Page </title>
        <meta name="author" content="" />
        <meta name="description" content="Meta Tags de descrição da página Blaus and Bleus" />
        <meta name="keywords" content="palavras-chave, sobre, a, página, devem, ser, adicionadas.(não precisa de muitas rs)" />
      </Head>

      <Box my={4}>
        <Typography align="center" color="secondary" variant="h2" component="h1" gutterBottom>
          Next.js with TypeScript - About Page
      </Typography>
      </Box>
      <Link href="/">
        <Button buttonText="Home page!" />
      </Link>

    </Container>
  );
}
