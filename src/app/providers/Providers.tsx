import React from 'react';
import { BrowserRouter } from 'react-router-dom';

type Props = {
  children: React.ReactNode;
};

export default function Providers({ children }: Props) {
  return <BrowserRouter>{children}</BrowserRouter>;
}
