import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import Login from '../screens/Login';
import HomeScreen from '../screens/HomeScreen';
import MenuScreen from '../screens/MenuScreen';
// import QuizScreen from '../screens/QuizScreen';
// import Questions from '../screens/Question';
// import ResultScreen from '../screens/ResultScreen';

const MainNavigator = createSwitchNavigator({
    Home: {screen: HomeScreen},
    Logged: {screen: Login},
    Menu: {screen: MenuScreen},
});

const App = createAppContainer(MainNavigator);

export default App;