import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings189566Navigator from '../features/Settings189566/navigator';
import NotificationList2189561Navigator from '../features/NotificationList2189561/navigator';
import SignIn21189560Navigator from '../features/SignIn21189560/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings189566: { screen: Settings189566Navigator },
NotificationList2189561: { screen: NotificationList2189561Navigator },
SignIn21189560: { screen: SignIn21189560Navigator },

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
