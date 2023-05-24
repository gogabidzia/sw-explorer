import { Center, Container, Heading, Image } from '@chakra-ui/react';
import Head from 'next/head';
import { PageProps } from './types';

const Page = ({ children }: PageProps) => {
  return (
    <>
      <Head>
        <title>Star Wars Explorer</title>
      </Head>
      <Container p={5} maxW={'container.xl'}>
        <Heading>
          <Center data-testid={'header-text'}>
            <Image src={'/yoda.png'} alt={'yoda'} h={50} />
            Star Wars Character List
          </Center>
        </Heading>
        {children}
      </Container>
    </>
  );
};

export default Page;
