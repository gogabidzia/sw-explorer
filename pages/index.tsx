import { Center, Text, VStack } from '@chakra-ui/react';
import Page from '@/src/components/Page';
import CharacterList from '@/src/components/CharacterList';
import { useCharacters } from '@/src/hooks/useCharacters';
import Loadable from '@/src/components/Loadable';
import CharacterFilter from '@/src/components/CharacterFilter';
import Pagination from '@/src/components/Pagination';

const HomePage = () => {
  const { characters, isLoading, pageData, filters, error, onSearchTermChange, onPageChange } =
    useCharacters();

  return (
    <Page>
      <VStack p={5} spacing={5}>
        <CharacterFilter onSearchTermChange={onSearchTermChange} />
        {error ? (
          <Center>
            <Text color={'tomato'}>Error loading data</Text>
          </Center>
        ) : (
          <Loadable isLoading={isLoading}>
            <CharacterList characters={characters} />
          </Loadable>
        )}
        <Pagination
          hasPrev={pageData.hasPrev}
          hasNext={pageData.hasNext}
          total={pageData.total}
          currentPage={filters.page}
          onPageChange={onPageChange}
        />
      </VStack>
    </Page>
  );
};

export default HomePage;
