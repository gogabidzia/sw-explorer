import { Center, Spinner } from '@chakra-ui/react';
import { ReactNode } from 'react';

type LoadableProps = {
  children: ReactNode;
  isLoading: boolean;
};

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
