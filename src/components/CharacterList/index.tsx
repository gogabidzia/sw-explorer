import { Box, GridItem, SimpleGrid } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import CharacterCard from '../CharacterCard';
import { CharacterMap } from '@/src/store/characters/slice';

type CharacterListType = {
  characters: CharacterMap;
};

const CharacterList = ({ characters }: CharacterListType) => {
  return (
    <Box mt={10} w={'100%'}>
      <SimpleGrid columns={5} gap={6} w={'100%'}>
        {Object.values(characters).map((character) => (
          <GridItem key={character.id} w={'100%'}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              <CharacterCard character={character} />
            </motion.div>
          </GridItem>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default CharacterList;
