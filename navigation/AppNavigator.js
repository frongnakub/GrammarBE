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
import PastS from '../content/PastSim';
import PerS from '../content/PersentSim';
import Tenses from '../screens/LessonTenses';
import TopBar from '../components/TopBar';

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
    PastS: {screen: PastS},
    PerS: {screen: PerS},
    Tenses: {screen: Tenses},
    TopBar: {screen: TopBar},
});

const App = createAppContainer(MainNavigator);

export default App;