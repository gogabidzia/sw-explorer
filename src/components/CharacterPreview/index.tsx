import { ArrowBackIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Center,
  Heading,
  HStack,
  Input,
  Stack,
  StackDivider,
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Character } from '@/src/external/swapi';

type CharacterPreviewProps = {
  character: Character;
  onCharacterUpdate: (updatedCharacter: Character) => any;
};

const CharacterPreview = ({ character, onCharacterUpdate }: CharacterPreviewProps) => {
  const [editMode, setEditMode] = useState(false);

  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm<Character>({
    defaultValues: character,
  });

  const onSubmit = (updatedCharacter: Character) => {
    onCharacterUpdate(updatedCharacter);

    setEditMode(false);
  };

  const values = getValues();

  return (
    <>
      <Center>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Card w={'md'}>
            <CardHeader>
              {!editMode ? (
                <Heading size={'lg'} data-testid={'character-name-text'}>
                  {values.name}
                </Heading>
              ) : (
                <Input
                  {...register('name', { required: true })}
                  errorBorderColor={'red.300'}
                  isInvalid={!!errors.name}
                  placeholder={'Enter Name'}
                  data-testid={'character-name-input'}
                />
              )}
            </CardHeader>
            <CardBody>
              <Stack divider={<StackDivider />} mb={4} spacing={2}>
                <Box>
                  <Heading size={'xs'} textTransform={'uppercase'}>
                    Height
                  </Heading>
                  {!editMode ? (
                    <Text fontSize={'sm'} data-testid={'character-height-text'}>
                      {values.height} cm
                    </Text>
                  ) : (
                    <Input
                      {...register('height', { required: true })}
                      errorBorderColor={'red.300'}
                      isInvalid={!!errors.height}
                      placeholder={'Enter Height (cm)'}
                      data-testid={'character-height-input'}
                    />
                  )}
                </Box>
                <Box>
                  <Heading size={'xs'} textTransform={'uppercase'}>
                    Mass
                  </Heading>
                  {!editMode ? (
                    <Text fontSize={'sm'} data-testid={'character-mass-text'}>
                      {values.mass} kg
                    </Text>
                  ) : (
                    <Input
                      {...register('mass', { required: true })}
                      errorBorderColor={'red.300'}
                      isInvalid={!!errors.mass}
                      placeholder={'Enter Mass (kg)'}
                      data-testid={'character-mass-input'}
                    />
                  )}
                </Box>
              </Stack>
              <HStack justify={'space-between'}>
                {!editMode ? (
                  <Button
                    colorScheme={'blue'}
                    onClick={() => {
                      setEditMode(true);
                    }}
                    data-testid={'character-edit-button'}
                  >
                    Edit
                  </Button>
                ) : (
                  <Button
                    colorScheme={'blue'}
                    onClick={handleSubmit(onSubmit)}
                    data-testid={'character-save-button'}
                  >
                    Save
                  </Button>
                )}
                <Link href={'/'}>
                  <HStack data-testid={'character-back-button'}>
                    <ArrowBackIcon boxSize={5} />
                    <Text>Back to list</Text>
                  </HStack>
                </Link>
              </HStack>
            </CardBody>
          </Card>
        </form>
      </Center>
    </>
  );
};

export default CharacterPreview;
