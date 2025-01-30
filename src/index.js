import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { Routes } from './Routes';
import { ChakraProvider } from '@chakra-ui/react';
import { HashRouter } from 'react-router-dom';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <ColorModeScript />
    <ChakraProvider>
      <HashRouter>
        <Routes />
      </HashRouter>
    </ChakraProvider>
  </StrictMode>
);
