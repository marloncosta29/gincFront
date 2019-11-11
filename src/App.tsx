import React from 'react';
import { Provider } from 'react-redux'
import store from './store'
import { DivContainer } from './styles/styles'
import AppBarTop from './components/AppBar/AppBar'
import MenuBar from './components/MenuBar/MenuBar'
import Main from './components/Main/Main'
import { CssBaseline } from '@material-ui/core';
const App: React.FC = () => {

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Provider store={store}>
      <DivContainer>
        <CssBaseline />
        <AppBarTop handleDrawerToggle={handleDrawerToggle} >
          <Main />
        </AppBarTop>
        <MenuBar handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen} />
      </DivContainer>
    </Provider>
  );
}

export default App;
