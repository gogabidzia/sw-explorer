import { Box, Button, HStack, Text } from '@chakra-ui/react';

type PaginationProps = {
  hasPrev: boolean;
  hasNext: boolean;
  currentPage: number;
  total: number;
  onPageChange: (page: number) => any;
};

const Pagination = ({ hasPrev, hasNext, currentPage, onPageChange, total }: PaginationProps) => {
  const lastPage = Math.floor(total / 10) + 1;

  return (
    <Box>
      <HStack align={'center'}>
        <Button
          colorScheme={'blue'}
          isDisabled={!hasPrev}
          onClick={() => {
            onPageChange(1);
          }}
        >
          &laquo;
        </Button>
        <Button
          colorScheme={'blue'}
          isDisabled={!hasPrev}
          onClick={() => {
            onPageChange(currentPage - 1);
          }}
        >
          &lsaquo;
        </Button>
        <Text>
          Page {currentPage} of {lastPage}
        </Text>
        <Button
          colorScheme={'blue'}
          isDisabled={!hasNext}
          onClick={() => {
            onPageChange(currentPage + 1);
          }}
        >
          &rsaquo;
        </Button>
        <Button
          colorScheme={'blue'}
          isDisabled={!hasNext}
          onClick={() => {
            onPageChange(lastPage);
          }}
        >
          &raquo;
        </Button>
      </HStack>
    </Box>
  );
};

export default Pagination;
