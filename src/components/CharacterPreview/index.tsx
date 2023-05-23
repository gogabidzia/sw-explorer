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
import { useDispatch } from 'react-redux';
import { Character } from '@/src/external/swapi';
import { updateCharacter } from '@/src/store/characters/slice';

type CharacterPreviewProps = {
  character: Character;
};

const CharacterPreview = ({ character }: CharacterPreviewProps) => {
  const dispatch = useDispatch();
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
    dispatch(updateCharacter(updatedCharacter));

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
                <Heading size={'lg'}>{values.name}</Heading>
              ) : (
                <Input
                  {...register('name', { required: true })}
                  errorBorderColor={'red.300'}
                  isInvalid={!!errors.name}
                  placeholder={'Enter Name'}
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
                    <Text fontSize={'sm'}>{values.height} cm</Text>
                  ) : (
                    <Input
                      {...register('height', { required: true })}
                      errorBorderColor={'red.300'}
                      isInvalid={!!errors.height}
                      placeholder={'Enter Height (cm)'}
                    />
                  )}
                </Box>
                <Box>
                  <Heading size={'xs'} textTransform={'uppercase'}>
                    Mass
                  </Heading>
                  {!editMode ? (
                    <Text fontSize={'sm'}>{values.mass} kg</Text>
                  ) : (
                    <Input
                      {...register('mass', { required: true })}
                      errorBorderColor={'red.300'}
                      isInvalid={!!errors.mass}
                      placeholder={'Enter Mass (kg)'}
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
                  >
                    Edit
                  </Button>
                ) : (
                  <Button colorScheme={'blue'} onClick={handleSubmit(onSubmit)}>
                    Save
                  </Button>
                )}
                <Link href={'/'}>
                  <HStack>
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
