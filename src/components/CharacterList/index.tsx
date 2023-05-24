import { Box, Center, Grid, GridItem } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import CharacterCard from '../CharacterCard';
import { CharacterListType } from './types';

const CharacterList = ({ characters }: CharacterListType) => {
  const charactersAsArray = Object.values(characters);

  return (
    <Box mt={10} w={'100%'}>
      {charactersAsArray.length !== 0 ? (
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(5, 1fr)',
          }}
          gap={6}
          w={'100%'}
        >
          {charactersAsArray.map((character) => (
            <GridItem key={character.id} w={'100%'}>
              <motion.div
                style={{ height: '100%' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                <CharacterCard character={character} />
              </motion.div>
            </GridItem>
          ))}
        </Grid>
      ) : (
        <Center>No results...</Center>
      )}
    </Box>
  );
};

export default CharacterList;
