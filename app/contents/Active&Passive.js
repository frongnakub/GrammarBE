import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import axios from 'axios';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';

import styles from '../styles/Style';
import FadeInView from '../screens/FadeInView';

export default class ActivePassive extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableHead: ['Tense', 'Structure', 'Example'],
            tableData: [
                ['Present Sim.', 'V.1', 'The thief breaks into the car.'],
                ['Present Cont.', 'is / am / are + V.ing', 'The secretary is preparing the timetable.'],
                ['Present Perf.', 'has / have \n+ V.3', 'He has recently been to Europe.'],
                ['Present Perf. Cont.', 'has / have + been + V.ing', 'We have been studying for years and years.'],
                ['Past Sim.', 'V.2', 'He ran very quickly yesterday.'],
                ['Past Cont.', 'was / were \n+ V.ing', 'When you came to my class to meet me, I was teaching my students.'],
                ['Past Perf.', 'had + V.3', 'We had been together for \n10 years.'],
                ['Past Perf. Cont.', 'had + been \n+ V.ing', 'Somchai had been drinking for \n40 years when he finally gave it up.'],
                ['Future Sim.', 'will / shall \n+ V.1', 'He will be a millionnaire soon.'],
                ['Future Cont.', 'will / shall \n+ be + V.ing', 'Bee, Sukrit will soon be singing \nfor us.'],
                ['Future Perf.', 'will / shall \n+ have + V.3', 'By the time you arrive I will have gone home.'],
                ['Future Perf. Cont.', 'will / shall \n+ have + been + V.ing', 'This time next week you will have been finishing \nthe course.'],
                ['Modal Verbs', 'can /could \n+ V.1', 'I can be a lady \nif I want to.']
            ],
            tableData1: [
                ['Present Sim.', 'is / am / are + V.3', 'The car is broken into.'],
                ['Present Cont.', 'is / am / are being + V.3', 'The time table is being prepared.'],
                ['Present Perf.', 'has / have been + V.3', 'The engine has been broken.'],
                ['Past Sim.', 'was / were \n+ V.3', 'The ring was stolen.'],
                ['Past Cont.', 'was / were being + V. 3', 'The house was being robbed when she arrived.'],
                ['Past Perf.', 'had been \n+ V.3', 'The house was dirty. It had not been cleaned for months.'],
                ['Future Sim.', 'will / shall be + V.3', 'Two million I.T. jobs will be unfilled in India by 2006.'],
                ['','is / am / are going to be + V.3','The car is going to be cleaned very soon.']
                ['Future Perf.', 'will / shall have been + V.3', 'The test will have been marked by next Tuesday.'],
                ['Modal Verbs', 'can /could be + V.3, etc.', 'The car could be broken into.']
            ],
            lessons: [],
            loading: true,
            index: 0,
        }
    }

    componentDidMount() {
        this.fetchLessonDetail()
        this.fetchProfile()
    }

    fetchLessonDetail() {
        axios.get("http://localhost:3003/active")
        .then(res => {
            this.setState({ lessons: res.data, loading: false })
        })
        .catch(err => {
            this.setState({ loading: false })
        })
    }

    fetchProfile() {
        //adb reverse tcp:3003 tcp:3003
        const username = this.state.username
        axios.get("http://localhost:3003/userData/"+ JSON.stringify(username))
        .then(res => {
            this.setState({ 
                profile: res.data, 
                loading: false,
            })
        })
        .catch(err => {
          this.setState({ loading: false })
        })
      }

    render() {
        const { lessons, loading, index, username } = this.state
        return (
        <ScrollView style={styles.container}>
            {
            loading ?
                <View >
                <FadeInView />
                </View>
                :
                    <View style={styles.wrapper}>
                    <View>
                        {
                        lessons.length === 0 ? <Text style={styles.welcome}>Try Again</Text> :
                            <View>
                                <View>
                                    <Text style={styles.headers}>Active and Passive Voice</Text>
                                        <Text style={styles.text}>{lessons[index].LessonDescription}</Text>
                                </View>
                                <View style={styles.bodyText}>
                                        <Text style={styles.headers2}>{'Active Verb Forms'}</Text>
                                </View>
                                <View style={styles.containerT}>
                                    <Table borderStyle={{borderWidth: 1}}>
                                        <Row data={this.state.tableHead} flexArr={[1.5, 2, 3]} style={styles.headT} textStyle={styles.textT}/>
                                        <TableWrapper style={styles.wrapperT}>
                                            <Rows data={this.state.tableData} flexArr={[1.5, 2, 3]} style={styles.rowT} textStyle={styles.textT}/>
                                        </TableWrapper>
                                    </Table>
                                    <Text>{'\n\n'}</Text>
                                </View>

                                <View style={styles.bodyText}>
                                        <Text style={styles.headers2}>{'Passive Verb Forms'}</Text>
                                </View>
                                <View style={styles.containerT}>
                                    <Table borderStyle={{borderWidth: 1}}>
                                        <Row data={this.state.tableHead} flexArr={[1.5, 2, 3]} style={styles.headT} textStyle={styles.textT}/>
                                        <TableWrapper style={styles.wrapperT}>
                                            <Rows data={this.state.tableData1} flexArr={[1.5, 2, 3]} style={styles.rowT} textStyle={styles.textT}/>
                                        </TableWrapper>
                                    </Table>  
                                </View>
                                <View style={styles.bodyText2}>
                                        <Text style={styles.headers2}>{'*Modal Verbs: can, could, may, might, shall, should, will, would, must, ought to, need, \nhave/had to, used to etc. '}</Text>
                                </View>
                                <TouchableOpacity onPress={() =>  this.props.navigation.navigate('ActivePassiveExercise',{username: username})}>
                                    <Text style={styles.menu}>Exercise</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() =>  this.props.navigation.navigate('Menu',{username: username})}>
                                    <Text style={styles.menu}>Back</Text>
                                </TouchableOpacity>
                            </View>
                        }
                    </View>
                    </View>
            }
        </ScrollView>
        );
    }
}