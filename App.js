import React, { Component } from 'react';
import { Text,View,StyleSheet } from 'react-native';
import { LoginButton, AccessToken, LoginManager } from 'react-native-fbsdk';
import { ShareApi } from 'react-native-fbsdk';

import AppNavigator from './app/navigation/AppNavigator';


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
      <AppNavigator />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
  },
});


// import { createSwitchNavigator, createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';

// import Login from './app/screens/Login';
// import Register from './app/screens/Register'
// import Profile from './app/screens/Profile';
// import MenuScreen from './app/screens/MenuScreen';
// import MenuBar from './app/screens/MenuBar';
// import Tenses from './app/screens/LessonTenses';
// import TestStart from './app/screens/PreTestScreen';


// //TEST
// import PretestQuestions from './app/screens/PreTestQuestions';
// import PretestQuestions2 from './app/screens/PreTestQuestions2';
// import PosttestQuestion from './app/screens/PostTestQuestions';

// //RESULT
// import ResultScreen from './app/screens/ResultScreen';
// import ResultScreen2 from './app/screens/ResultScreen2';
// import ResultScreen3 from './app/screens/ResultScreen3';

// //EXCERCISE
// import PresentSimpleExercise from './app/exercises/PresentSimple';
// import PresentContinuousExercise from './app/exercises/PresentContinuous'
// import PresentPerfectExercise from './app/exercises/PresentPerfect'
// import PresentPerfectContinuousExercise from './app/exercises/PresentPerfectContinuous'
// import PastSimpleExercise from './app/exercises/PastSimple'
// import PastContinuousExercise from './app/exercises/PastContinuous'
// import PastPerfectExercise from './app/exercises/PastPerfect'
// import PastPerfectContinuousExercise from './app/exercises/PastPerfectContinuous'
// import FutureSimpleExercise from './app/exercises/FutureSimple'
// import FutureContinuousExercise from './app/exercises/FutureContinuous'
// import FuturePerfectExercise from './app/exercises/FuturePerfect'
// import FuturePerfectContinuousExercise from './app/exercises/FuturePerfectContinuous'
// import ArticleExercise from './app/exercises/Article'
// import SingularPluralExercise from './app/exercises/Singular&Plural'
// import PronounExercise from './app/exercises/Pronoun'
// import PrepositionExercise from './app/exercises/Preposition'
// import AuxiliaryExercise from './app/exercises/AuxiliaryVerb'
// import AdverbExercise from './app/exercises/Adverb'
// import AdjectiveExercise from './app/exercises/Adjective'
// import ConjunctionExercise from './app/exercises/Conjunction'
// import GerundExercise from './app/exercises/Infinitive&Gerund'
// import ParticipleExercise from './app/exercises/Participle'
// import ComparisonExercise from './app/exercises/Comparison'
// import ActivePassiveExercise from './app/exercises/Active&Passive'
// import IfClauseExercise from './app/exercises/If-clause'


// //LESSON
// import PresentSimple from './app/contents/PresentSimple';
// import PresentContinuous from './app/contents/PresentContinuous'
// import PresentPerfect from './app/contents/PresentPerfect'
// import PresentPerfectContinuous from './app/contents/PresentPerfectContinuous'
// import PastSimple from './app/contents/PastSimple'
// import PastContinuous from './app/contents/PastContinuous'
// import PastPerfect from './app/contents/PastPerfect'
// import PastPerfectContinuous from './app/contents/PastPerfectContinuous'
// import FutureSimple from './app/contents/FutureSimple'
// import FutureContinuous from './app/contents/FutureContinuous'
// import FuturePerfect from './app/contents/FuturePerfect'
// import FuturePerfectContinuous from './app/contents/FuturePerfectContinuous'
// import Article from './app/contents/Article'
// import SingularPlural from './app/contents/Singular&Plural'
// import Pronoun from './app/contents/Pronoun'
// import Preposition from './app/contents/Preposition'
// import Auxiliary from './app/contents/AuxiliaryVerb'
// import Adverb from './app/contents/Adverb'
// import Adjective from './app/contents/Adjective'
// import Conjunction from './app/contents/Conjunction'
// import Gerund from './app/contents/Infinitive&Gerund'
// import Participle from './app/contents/Participle'
// import Comparison from './app/contents/Comparison'
// import ActivePassive from './app/contents/Active&Passive'
// import IfClause from './app/contents/If-clause'


// const MainNavigator = createStackNavigator({
//     Logged: {screen: Login},
//     Regis: {screen: Register},
//     Profile: {screen: Profile},
//     TestStart: {screen: TestStart},

//     Menu: {screen: MenuScreen},
//     MenuBar: {screen: MenuBar},
//     Tenses: {screen: Tenses},

//     PosttestQuestion: {screen: PosttestQuestion},
//     PretestQuestions: {screen: PretestQuestions},
//     PretestQuestions2: {screen: PretestQuestions2},

//     ResultScreen: {screen: ResultScreen},
//     ResultScreen2: {screen: ResultScreen2},
//     ResultScreen3: {screen: ResultScreen3},

//     PresentSimple: {screen: PresentSimple},
//     PresentSimpleExercise: {screen: PresentSimpleExercise},
//     PresentContinuous: {screen: PresentContinuous},
//     PresentContinuousExercise: {screen: PresentContinuousExercise},
//     PresentPerfect: {screen: PresentPerfect},
//     PresentPerfectExercise: {screen: PresentPerfectExercise},
//     PresentPerfectContinuous: {screen: PresentPerfectContinuous},
//     PresentPerfectContinuousExercise: {screen: PresentPerfectContinuousExercise},
//     PastSimple: {screen: PastSimple},
//     PastSimpleExercise: {screen: PastSimpleExercise},
//     PastContinuous: {screen: PastContinuous},
//     PastContinuousExercise: {screen: PastContinuousExercise},
//     PastPerfect: {screen: PastPerfect},
//     PastPerfectExercise: {screen: PastPerfectExercise},
//     PastPerfectContinuous: {screen: PastPerfectContinuous},
//     PastPerfectContinuousExercise: {screen: PastPerfectContinuousExercise},
//     FutureSimple: {screen: FutureSimple},
//     FutureSimpleExercise: {screen: FutureSimpleExercise},
//     FutureContinuous: {screen: FutureContinuous},
//     FutureContinuousExercise: {screen: FutureContinuousExercise},
//     FuturePerfect: {screen: FuturePerfect},
//     FuturePerfectExercise: {screen: FuturePerfectExercise},
//     FuturePerfectContinuous: {screen: FuturePerfectContinuous},
//     FuturePerfectContinuousExercise: {screen: FuturePerfectContinuousExercise},
//     Article: {screen: Article},
//     ArticleExercise: {screen: ArticleExercise},
//     SingularPlural: {screen: SingularPlural},
//     SingularPluralExercise: {screen: SingularPluralExercise},
//     Pronoun: {screen: Pronoun},
//     PronounExercise: {screen: PronounExercise},
//     Preposition: {screen: Preposition},
//     PrepositionExercise: {screen: PrepositionExercise},
//     Auxiliary: {screen: Auxiliary},
//     AuxiliaryExercise: {screen: AuxiliaryExercise},
//     Adverb: {screen: Adverb},
//     AdverbExercise: {screen: AdverbExercise},
//     Adjective: {screen: Adjective},
//     AdjectiveExercise: {screen: AdjectiveExercise},
//     Conjunction: {screen: Conjunction},
//     ConjunctionExercise: {screen: ConjunctionExercise},
//     Gerund: {screen: Gerund},
//     GerundExercise: {screen: GerundExercise},
//     Participle: {screen: Participle},
//     ParticipleExercise: {screen: ParticipleExercise},
//     Comparison: {screen: Comparison},
//     ComparisonExercise: {screen: ComparisonExercise},
//     ActivePassive: {screen: ActivePassive},
//     ActivePassiveExercise: {screen: ActivePassiveExercise},
//     IfClause: {screen: IfClause},
//     IfClauseExercise: {screen: IfClauseExercise},
    
// },
// {
//   initialRouteName: 'Logged',
//   defaultNavigationOptions: {
//       header:null
//   },
// }

// );

// const App = createAppContainer(MainNavigator);

// export default App;

