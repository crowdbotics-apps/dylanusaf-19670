import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList92204Navigator from '../features/ArticleList92204/navigator';
import ArticleList92203Navigator from '../features/ArticleList92203/navigator';
import ArticleList92202Navigator from '../features/ArticleList92202/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList92204: { screen: ArticleList92204Navigator },
ArticleList92203: { screen: ArticleList92203Navigator },
ArticleList92202: { screen: ArticleList92202Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
