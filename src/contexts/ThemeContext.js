import React, { Component, createContext } from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  state = {
    isLightTheme: true,
    light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
    dark: { syntax: '#ddd', ui: '#333', bg: '#555'}
  }
  toggleTheme= () => {
    this.setState({ isLightTheme: !this.state.isLightTheme });
  }
  render() {                        
    return (
      <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme}}>  
        {this.props.children}
      </ThemeContext.Provider>
  );              //data for different components, this ref to up component. Shows what comp covers
  }
}
 
export default ThemeContextProvider;