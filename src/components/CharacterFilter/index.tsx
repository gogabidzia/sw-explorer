import { SearchIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';

type CharacterFilterProps = {
  onSearchTermChange: (term: string) => any;
};

const CharacterFilter = ({ onSearchTermChange }: CharacterFilterProps) => {
  return (
    <InputGroup>
      <InputLeftElement pointerEvents={'none'}>
        <SearchIcon color={'gray.300'} />
      </InputLeftElement>
      <Input
        type={'tel'}
        placeholder={'Search for cool guys'}
        data-testid={'character-filter-input'}
        onChange={(e) => {
          onSearchTermChange(e.target.value);
        }}
      />
    </InputGroup>
  );
};

export default CharacterFilter;
