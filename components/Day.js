import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faDumbbell, faGaugeHigh, faMountainSun, faPersonRunning } from '@fortawesome/free-solid-svg-icons';

import Colors from '../constants/Colors';

const Workout = props => {
    return (
      <View style={styles.workout}>
          <Text style={styles.distance}>{props.distance}</Text>
          <Text>{props.description}</Text>
      </View>
    )
}
const SpeedRun = props => {
  return (
      <View style={styles.task}>
          <FontAwesomeIcon style={styles.speedIcon} size={50} icon={faGaugeHigh} />
          <Workout description={props.description} distance={props.distance} />
      </View>
  )
}
const HillRun = props => {
  return (
      <View style={styles.task}>
          <FontAwesomeIcon style={styles.hillIcon} size={50} icon={faMountainSun} />
          <Workout description={props.description} distance={props.distance} />
      </View>
  )
}
const EasyRun = props => {
  return (
      <View style={styles.task}>
          <FontAwesomeIcon style={styles.easyIcon} size={50} icon={faPersonRunning} />
          <Workout description={props.description} distance={props.distance} />
      </View>
  )
}
const CoreWorkout = props => {
    return (
        <View style={styles.task}>
            <FontAwesomeIcon style={styles.coreIcon} size={50} icon={faDumbbell} />
            <Workout description={props.description} distance={props.distance} />
        </View>
    )
}

const Day = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.today}>Today, September 22</Text>
            <View style={styles.taskList}>
                <SpeedRun 
                  distance={'8km Speed'}
                  description={'3km warmup, 2x2:00 10km pace, 3km cooldown'} />
                <HillRun 
                  distance={'10km Hills'}
                  description={'2km warmup, 2x2:00 10% grade, 3km cooldown'} />
                <EasyRun 
                  distance={'8km Easy'}
                  description={'Marathon pace'} />
                <CoreWorkout 
                  distance={'Core Workout'}
                  description={'Situps, Pushups, Mountain Climbers'} />
            </View> 
            <View style={styles.container}></View>
        </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    today: {
      padding: 20,
      fontSize: 18,
      fontWeight: 'bold',
      backgroundColor: Colors.pea,
      color: Colors.prussian,
    },
    taskList: {
      flex: 2,
      color: Colors.navy,
    },
    task: {
      flex: 1,
      flexDirection: 'row',
      borderBottomWidth: 2,
      borderBottomColor: Colors.alabaster,
    },
    workout: {  
      flex: 3,
    },
    distance: {
      fontSize: 22,
      fontWeight: 'bold',
    },
    speedIcon: {
      margin: 20, 
      color: Colors.flamingo,      
    },
    hillIcon: {
      margin: 20, 
      color: Colors.mint,      
    },
    coreIcon: {
      margin: 20, 
      color: Colors.alabaster,      
    },
    easyIcon: {
      margin: 20, 
      color: Colors.navy,      
    },
});
export default Day;