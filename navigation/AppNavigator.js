import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import Login from '../screens/Login';
import HomeScreen from '../screens/HomeScreen';
import MenuScreen from '../screens/MenuScreen';
import PreTestScreen from '../screens/PreTestScreen';
import Profile from '../screens/Profile';
//import ResultScreen from '../screens/ResultScreen';
import LessonScreen from '../screens/LessonScreen';
import GameScreen from '../screens/GameScreen';
import PostTestScreen from '../screens/PostTestScreen';
import ForumScreen from '../screens/ForumScreen';
import PretestQuestions from '../screens/PreTestQuestions';
import PastSimple from '../contents/PastSimple';
import PresentSimple from '../contents/PresentSimple';
import Tenses from '../screens/LessonTenses';
import TopBar from '../components/TopBar';
import Register from '../screens/Register'

const MainNavigator = createSwitchNavigator({
    Logged: {screen: Login},
    Profile: {screen: Profile},
    Home: {screen: HomeScreen},
    Menu: {screen: MenuScreen},
    Pretest: {screen: PreTestScreen},
    Lesson: {screen: LessonScreen},
    Game: {screen: GameScreen},
    Posttest: {screen: PostTestScreen},
    Forum: {screen: ForumScreen},
    PretestQuestions: {screen: PretestQuestions},
    PastSimple: {screen: PastSimple},
    PresentSimple: {screen: PresentSimple},
    Tenses: {screen: Tenses},
    TopBar: {screen: TopBar},
    Regis: {screen: Register}
});

const App = createAppContainer(MainNavigator);

export default App;