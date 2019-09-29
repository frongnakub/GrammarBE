import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import Login from '../screens/Login';
import HomeScreen from '../screens/HomeScreen';
import MenuScreen from '../screens/MenuScreen';
import PreTestScreen from '../screens/PreTestScreen';
import Profile from '../screens/Profile';
import ResultScreen from '../screens/ResultScreen';
import ResultScreen2 from '../screens/ResultScreen2';
import LessonScreen from '../screens/LessonScreen';
import GameScreen from '../screens/GameScreen';
import PostTestScreen from '../screens/PostTestScreen';
import ForumScreen from '../screens/ForumScreen';
import PretestQuestions from '../screens/PreTestQuestions';
import PretestQuestions2 from '../screens/PreTestQuestions2';
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
import FutureSimple from '../contents/FutureSimple'
import FutureSimpleExercise from '../exercises/FutureSimple'
import FutureContinuous from '../contents/FutureContinuous'
import FutureContinuousExercise from '../exercises/FutureContinuous'
import FuturePerfect from '../contents/FuturePerfect'
import FuturePerfectExercise from '../exercises/FuturePerfect'
import FuturePerfectContinuous from '../contents/FuturePerfectContinuous'
import FuturePerfectContinuousExercise from '../exercises/FuturePerfectContinuous'
import Article from '../contents/Article'
import ArticleExercise from '../exercises/Article'
import SingularPlural from '../contents/Singular&Plural'
import SingularPluralExercise from '../exercises/Singular&Plural'
import Pronoun from '../contents/Pronoun'
import PronounExercise from '../exercises/Pronoun'
import Preposition from '../contents/Preposition'
import PrepositionExercise from '../exercises/Preposition'
import Auxiliary from '../contents/AuxiliaryVerb'
import AuxiliaryExercise from '../exercises/AuxiliaryVerb'
import Adverb from '../contents/Adverb'
import AdverbExercise from '../exercises/Adverb'
import Conjunction from '../contents/Conjunction'
import ConjunctionExercise from '../exercises/Conjunction'
import Gerund from '../contents/Infinitive&Gerund'
import GerundExercise from '../exercises/Infinitive&Gerund'
import Participle from '../contents/Participle'
import ParticipleExercise from '../exercises/Participle'
import Comparison from '../contents/Comparison'
import ComparisonExercise from '../exercises/Comparison'
import ActivePassive from '../contents/Active&Passive'
import ActivePassiveExercise from '../exercises/Active&Passive'
import IfClause from '../contents/If-clause'
import IfClauseExercise from '../exercises/If-clause'
import Tenses from '../screens/LessonTenses';
import Register from '../screens/Register'

const MainNavigator = createSwitchNavigator({
    Logged: {screen: Login},
    Profile: {screen: Profile},
    Home: {screen: HomeScreen},
    Menu: {screen: MenuScreen},
    Pretest: {screen: PreTestScreen},
    Lesson: {screen: LessonScreen},
    Game: {screen: GameScreen},
    ResultScreen: {screen: ResultScreen},
    ResultScreen2: {screen: ResultScreen2},
    Posttest: {screen: PostTestScreen},
    Forum: {screen: ForumScreen},
    PretestQuestions: {screen: PretestQuestions},
    PretestQuestions2: {screen: PretestQuestions2},
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
    FutureSimple: {screen: FutureSimple},
    FutureSimpleExercise: {screen: FutureSimpleExercise},
    FutureContinuous: {screen: FutureContinuous},
    FutureContinuousExercise: {screen: FutureContinuousExercise},
    FuturePerfect: {screen: FuturePerfect},
    FuturePerfectExercise: {screen: FuturePerfectExercise},
    FuturePerfectContinuous: {screen: FuturePerfectContinuous},
    FuturePerfectContinuousExercise: {screen: FuturePerfectContinuousExercise},
    Article: {screen: Article},
    ArticleExercise: {screen: ArticleExercise},
    SingularPlural: {screen: SingularPlural},
    SingularPluralExercise: {screen: SingularPluralExercise},
    Pronoun: {screen: Pronoun},
    PronounExercise: {screen: PronounExercise},
    Preposition: {screen: Preposition},
    PrepositionExercise: {screen: PrepositionExercise},
    Auxiliary: {screen: Auxiliary},
    AuxiliaryExercise: {screen: AuxiliaryExercise},
    Adverb: {screen: Adverb},
    AdverbExercise: {screen: AdverbExercise},
    Conjunction: {screen: Conjunction},
    ConjunctionExercise: {screen: ConjunctionExercise},
    Gerund: {screen: Gerund},
    GerundExercise: {screen: GerundExercise},
    Participle: {screen: Participle},
    ParticipleExercise: {screen: ParticipleExercise},
    Comparison: {screen: Comparison},
    ComparisonExercise: {screen: ComparisonExercise},
    ActivePassive: {screen: ActivePassive},
    ActivePassiveExercise: {screen: ActivePassiveExercise},
    IfClause: {screen: IfClause},
    IfClauseExercise: {screen: IfClauseExercise},
    Tenses: {screen: Tenses},
    Regis: {screen: Register},
});

const App = createAppContainer(MainNavigator);

export default App;


// import { createSwitchNavigator, createAppContainer } from 'react-navigation';

// import HomeScreen from '../screens/HomeScreen';
// import PresentSimpleExercise from '../exercises/PresentSimple';


// const MainNavigator = createSwitchNavigator({
// Home: {screen: HomeScreen},
// PresentSimpleExercise: {screen: PresentSimpleExercise},
// });

// const App = createAppContainer(MainNavigator);
// export default App;