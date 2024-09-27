'use client'; 
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import store from '../../src/store';

interface Props {
  children: ReactNode;
}

const ReduxProvider: React.FC<Props> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
