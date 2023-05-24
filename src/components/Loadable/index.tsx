import { Center, Spinner } from '@chakra-ui/react';
import { LoadableProps } from './types';

const Loadable = ({ isLoading, children }: LoadableProps) => {
  return isLoading ? (
    <Center>
      <Spinner size={'lg'} />
    </Center>
  ) : (
    <>{children}</>
  );
};

export default Loadable;
