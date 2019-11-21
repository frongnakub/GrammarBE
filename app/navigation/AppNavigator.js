import { createSwitchNavigator, createAppContainer } from 'react-navigation';


import Login from '../screens/Login';
import Register from '../screens/Register'
import Profile from '../screens/Profile';
import MenuScreen from '../screens/MenuScreen';
import MenuBar from '../screens/MenuBar';
import Tenses from '../screens/LessonTenses';
import TestStart from '../screens/PreTestScreen';
import TestStart2 from '../screens/PreTestScreen1';

//TEST
import PretestQuestions from '../screens/PreTestQuestions';
import PretestQuestions2 from '../screens/PreTestQuestions2';
import PosttestQuestion from '../screens/PostTestQuestions';

//RESULT
import ResultScreen from '../screens/ResultScreen';
import ResultScreen2 from '../screens/ResultScreen2';
import ResultScreen3 from '../screens/ResultScreen3';

//EXCERCISE
import PresentSimpleExercise from '../exercises/PresentSimple';
import PresentContinuousExercise from '../exercises/PresentContinuous'
import PresentPerfectExercise from '../exercises/PresentPerfect'
import PresentPerfectContinuousExercise from '../exercises/PresentPerfectContinuous'
import PastSimpleExercise from '../exercises/PastSimple'
import PastContinuousExercise from '../exercises/PastContinuous'
import PastPerfectExercise from '../exercises/PastPerfect'
import PastPerfectContinuousExercise from '../exercises/PastPerfectContinuous'
import FutureSimpleExercise from '../exercises/FutureSimple'
import FutureContinuousExercise from '../exercises/FutureContinuous'
import FuturePerfectExercise from '../exercises/FuturePerfect'
import FuturePerfectContinuousExercise from '../exercises/FuturePerfectContinuous'
import ArticleExercise from '../exercises/Article'
import SingularPluralExercise from '../exercises/Singular&Plural'
import PronounExercise from '../exercises/Pronoun'
import PrepositionExercise from '../exercises/Preposition'
import AuxiliaryExercise from '../exercises/AuxiliaryVerb'
import AdverbExercise from '../exercises/Adverb'
import AdjectiveExercise from '../exercises/Adjective'
import ConjunctionExercise from '../exercises/Conjunction'
import GerundExercise from '../exercises/Infinitive&Gerund'
import ParticipleExercise from '../exercises/Participle'
import ComparisonExercise from '../exercises/Comparison'
import ActivePassiveExercise from '../exercises/Active&Passive'
import IfClauseExercise from '../exercises/If-clause'


//LESSON
import PresentSimple from '../contents/PresentSimple';
import PresentContinuous from '../contents/PresentContinuous'
import PresentPerfect from '../contents/PresentPerfect'
import PresentPerfectContinuous from '../contents/PresentPerfectContinuous'
import PastSimple from '../contents/PastSimple'
import PastContinuous from '../contents/PastContinuous'
import PastPerfect from '../contents/PastPerfect'
import PastPerfectContinuous from '../contents/PastPerfectContinuous'
import FutureSimple from '../contents/FutureSimple'
import FutureContinuous from '../contents/FutureContinuous'
import FuturePerfect from '../contents/FuturePerfect'
import FuturePerfectContinuous from '../contents/FuturePerfectContinuous'
import Article from '../contents/Article'
import SingularPlural from '../contents/Singular&Plural'
import Pronoun from '../contents/Pronoun'
import Preposition from '../contents/Preposition'
import Auxiliary from '../contents/AuxiliaryVerb'
import Adverb from '../contents/Adverb'
import Adjective from '../contents/Adjective'
import Conjunction from '../contents/Conjunction'
import Gerund from '../contents/Infinitive&Gerund'
import Participle from '../contents/Participle'
import Comparison from '../contents/Comparison'
import ActivePassive from '../contents/Active&Passive'
import IfClause from '../contents/If-clause'


const MainNavigator = createSwitchNavigator({
    Logged: {screen: Login},
    Regis: {screen: Register},
    Profile: {screen: Profile},
    TestStart: {screen: TestStart},
    TestStart2: {screen: TestStart2},

    Menu: {screen: MenuScreen},
    MenuBar: {screen: MenuBar},
    Tenses: {screen: Tenses},

    PosttestQuestion: {screen: PosttestQuestion},
    PretestQuestions: {screen: PretestQuestions},
    PretestQuestions2: {screen: PretestQuestions2},

    ResultScreen: {screen: ResultScreen},
    ResultScreen2: {screen: ResultScreen2},
    ResultScreen3: {screen: ResultScreen3},

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
    Adjective: {screen: Adjective},
    AdjectiveExercise: {screen: AdjectiveExercise},
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
    
});

const App = createAppContainer(MainNavigator);

export default App;

