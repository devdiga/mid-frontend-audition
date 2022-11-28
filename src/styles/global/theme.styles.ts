const baseTheme = {
  breakpoints: ['0', '400px', '900px', '1200px'],
  space: ['0', '4px', '8px', '12px', '16px', '24px', '32px', '40px', '48px'],
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
    background: {
      main: '#010409',
      contrast: '#c9d1d9',
      image: '/img/background-dark.jpeg'
    },
    navBar: '#010409',
    navBarInput: '#21262D',
    border: '#30363d',
    button: {
      main: '#0969da',
      hover: '#0949da'
    },
    text: {
      primary: '#c9d1d9',
      secondary: '#8b949e',
      link: '#58a6ff',
      contrast: '#010409'
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
      light: '#eee',
      main: '#f6f8fa'
    },
    secondary: {
      main: '#fff'
    },
    background: {
      main: '#fff',
      contrast: '#24292f',
      image: ''
    },
    navBar: '#010409',
    navBarInput: 'transparent',
    border: 'rgba(27, 31, 36, 0.15)',
    button: {
      main: '#0969da',
      hover: '#0949da'
    },
    text: {
      primary: '#24292f',
      secondary: '#57606a',
      link: '#0969da',
      contrast: '#fff'
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
