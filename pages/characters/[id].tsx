import { Box, Center, Text, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import Page from '@/src/components/Page';
import CharacterPreview from '@/src/components/CharacterPreview';
import { useCharacter } from '@/src/hooks/useCharacter';
import Loadable from '@/src/components/Loadable';
import { selectAllCharacters } from '@/src/store/characters/selectors';
import { updateCharacter } from '@/src/store/characters/slice';
import { Character } from '@/src/external/swapi';

const CharacterPage = () => {
  const router = useRouter();
  const id = router.query.id as string;

  const { character, isLoading, error } = useCharacter({
    id,
  });

  const dispatch = useDispatch();

  const allCharacters = useSelector(selectAllCharacters);
  const characterFromStore = allCharacters[id];

  const handleCharacterUpdate = (updatedCharacter: Character) => {
    dispatch(updateCharacter(updatedCharacter));
  };

  return (
    <Page>
      <Box mt={5}>
        {error ? (
          <Center>
            <VStack>
              <Text color={'tomato'}>Error Loading Character</Text>
              <Link href={'/'}>Go Back</Link>
            </VStack>
          </Center>
        ) : (
          <Loadable isLoading={isLoading}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              {character && (
                <CharacterPreview
                  character={characterFromStore || character}
                  onCharacterUpdate={handleCharacterUpdate}
                />
              )}
            </motion.div>
          </Loadable>
        )}
      </Box>
    </Page>
  );
};

export default CharacterPage;
