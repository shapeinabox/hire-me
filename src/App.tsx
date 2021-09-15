import { CssBaseline } from '@mui/material';
import React from 'react';
import ErrorBoundary from './shared/ErrorBoundary/ErrorBoundary';
import Children from './pages/Children/Children'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#5C39A1',
    }
  }
})

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Children />
      </ThemeProvider>
    </ErrorBoundary >
  );
}

export default App;
