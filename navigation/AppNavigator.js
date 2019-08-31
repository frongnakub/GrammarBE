import { createSwitchNavigator, createAppContainer } from 'react-navigation';

// import Login from '../screens/Login';
import HomeScreen from '../screens/HomeScreen';
import MenuScreen from '../screens/MenuScreen';
import PreTestScreen from '../screens/PreTestScreen';
// import Questions from '../screens/Question';
// import ResultScreen from '../screens/ResultScreen';
import LessonScreen from '../screens/LessonScreen';
import GameScreen from '../screens/GameScreen';
import PostTestScreen from '../screens/PostTestScreen';
import ForumScreen from '../screens/ForumScreen';
import PretestQuestions from '../screens/PreTestQuestions';

const MainNavigator = createSwitchNavigator({
    Home: {screen: HomeScreen},
    // Logged: {screen: Login},
    Menu: {screen: MenuScreen},
    Pretest: {screen: PreTestScreen},
    Lesson: {screen: LessonScreen},
    Game: {screen: GameScreen},
    Posttest: {screen: PostTestScreen},
    Forum: {screen: ForumScreen},
    PretestQuestions: {screen: PretestQuestions}
});

const App = createAppContainer(MainNavigator);

export default App;