const baseTheme = {
  breakpoints: ['0', '400px', '900px', '1200px'],
  space: ['0', '8px', '16px', '24px', '32px', '40px', '48px', '56px', '64px'],
  fonts: {
    heading: 'Poppins, system-ui, sans-serif',
    body: 'Poppins, system-ui, sans-serif'
  }
};

export const darkTheme = {
  colors: {
    primary: {
      light: '#21262D',
      main: '#0d1117'
    },
    secondary: {
      main: '#010409'
    },
    background: '#010409',
    navBar: '#161b22',
    navBarInput: '#21262D',
    border: '#30363d',
    text: {
      primary: '#c9d1d9',
      secondary: '#8b949e',
      link: '#58a6ff'
    },
    error: {
      main: '#f85149'
    },
    success: {
      main: '#238636'
    }
  },
  ...baseTheme
};

export const lightTheme = {
  colors: {
    primary: {
      light: '#f6f8fa',
      main: '#f6f8fa'
    },
    secondary: {
      main: '#fff'
    },
    background: '#fff',
    navBar: '#24292f',
    navBarInput: 'transparent',
    border: 'rgba(27, 31, 36, 0.15)',
    text: {
      primary: '#24292f',
      secondary: '#57606a',
      link: '#0969da'
    },
    error: {
      main: '#cf222e'
    },
    success: {
      main: '#2da44e'
    }
  },
  ...baseTheme
};
