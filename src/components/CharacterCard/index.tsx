import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Stack,
  StackDivider,
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';
import { Character } from '@/src/external/swapi';

type CharacterProps = {
  character: Character;
};

const CharacterCard = ({ character }: CharacterProps) => {
  return (
    <Link href={`/characters/${character.id}`}>
      <Card
        _hover={{ boxShadow: 'md' }}
        cursor={'pointer'}
        h={'100%'}
        data-testid={'character-card'}
      >
        <CardHeader>
          <Heading size={'md'} data-testid={'character-name'}>
            {character.name}
          </Heading>
        </CardHeader>
        <CardBody>
          <Stack divider={<StackDivider />}>
            <Box>
              <Heading size={'xs'} textTransform={'uppercase'}>
                Height
              </Heading>
              <Text fontSize={'sm'} data-testid={'character-height'}>
                {character.height} cm
              </Text>
            </Box>
            <Box>
              <Heading size={'xs'} textTransform={'uppercase'}>
                Eye Color
              </Heading>
              <Flex align={'center'}>
                <Text fontSize={'sm'} data-testid={'character-eyecolor'}>
                  {character.eye_color}
                </Text>
                <Box w={3} h={3} bg={character.eye_color} display={'inline-block'} ml={1} />
              </Flex>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </Link>
  );
};

export default CharacterCard;
