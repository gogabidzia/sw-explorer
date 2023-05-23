import { ReactNode } from 'react';
import { Center, Container, Heading, Image } from '@chakra-ui/react';
import Head from 'next/head';

type PageProps = {
  children: ReactNode;
};

const Page = ({ children }: PageProps) => {
  return (
    <>
      <Head>
        <title>Star Wars Explorer</title>
      </Head>
      <Container p={5} maxW={'container.xl'}>
        <Heading>
          <Center>
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
