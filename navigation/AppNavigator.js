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
import PresentSimple from '../contents/PresentSimple';
import PresentSimpleExercise from '../exercises/PresentSimple';
import PresentContinuous from '../contents/PresentContinuous'
import PresentContinuousExercise from '../exercises/PresentContinuous'
import PresentPerfect from '../contents/PresentPerfect'
import PresentPerfectExercise from '../exercises/PresentPerfect'
import PresentPerfectContinuous from '../contents/PresentPerfectContinuous'
import PresentPerfectContinuousExercise from '../exercises/PresentPerfectContinuous'
import PastSimple from '../contents/PastSimple'
import PastSimpleExercise from '../exercises/PastSimple'
import PastContinuous from '../contents/PastContinuous'
import PastContinuousExercise from '../exercises/PastContinuous'
import PastPerfect from '../contents/PastPerfect'
import PastPerfectExercise from '../exercises/PastPerfect'
import PastPerfectContinuous from '../contents/PastPerfectContinuous'
import PastPerfectContinuousExercise from '../exercises/PastPerfectContinuous'
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
    PresentSimple: {screen: PresentSimple},
    PresentSimpleExercise: {screen: PresentSimpleExercise},
    PresentContinuous: {screen: PresentContinuous},
    PresentContinuousExercise: {screen: PresentContinuousExercise},
    PresentPerfect: {screen: PresentPerfect},
    PresentPerfectExercise: {screen: PresentPerfectExercise},
    PresentPerfectContinuous: {screen: PresentPerfectContinuous},
    PresentPerfectContinuousExercise: {screen: PresentPerfectContinuousExercise},
    PastSimple: {screen: PastSimple},
    PastSimpleExercise: {screen: PastSimpleExercise},
    PastContinuous: {screen: PastContinuous},
    PastContinuousExercise: {screen: PastContinuousExercise},
    PastPerfect: {screen: PastPerfect},
    PastPerfectExercise: {screen: PastPerfectExercise},
    PastPerfectContinuous: {screen: PastPerfectContinuous},
    PastPerfectContinuousExercise: {screen: PastPerfectContinuousExercise},
    Tenses: {screen: Tenses},
    TopBar: {screen: TopBar},
    Regis: {screen: Register}
});

const App = createAppContainer(MainNavigator);

export default App;