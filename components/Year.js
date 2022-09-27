import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import moment from "moment";

import Colors from '../constants/Colors';
import {CalendarList} from 'react-native-calendars';

const renderHeader = date => {
    const header = date.toString('MMMM yyyy');
    const [month, year] = header.split(' ');
    const textStyle = styles.headerText;

    return (
        <View style={styles.header}>
            <Text style={{marginLeft: 5, ...textStyle}}>{`${month}`}</Text>
            <Text style={{marginRight: 5, ...textStyle}}>{year}</Text>
        </View>
    );
}

const long = {key: 'long', color: Colors.flamingo, selectedDotColor: 'yellow'};
const speed = {key: 'speed', color: Colors.cinnamon, selectedDotColor: 'red'};
const hills = {key: 'hills', color: Colors.navy, selectedDotColor: 'blue'};
const easy = {key: 'easy', color: Colors.pea, selectedDotColor: 'green'};
const workout = {key: 'workout', color: Colors.gold, selectedDotColor: 'orange'};
const yoga = {key: 'yoga', color: Colors.prussian, selectedDotColor: 'purple'};

const Year = () => {
    const [markedDates, setMarkedDates] = useState({
      '2022-09-26': {dots: [yoga], selected: false, color: Colors.flamingo},
      '2022-09-27': {dots: [easy, workout], selected: false, color: Colors.cinnamon},
      '2022-09-28': {dots: [easy, yoga, hills], selected: false, color: Colors.alabaster},
      '2022-09-29': {dots: [speed, yoga], selected: false, color: Colors.mint},
      '2022-09-30': {dots: [easy, workout]},
      '2022-10-01': {dots: [easy]},
      '2022-10-02': {dots: [long]},
    });
    return (
        <CalendarList
            testID={'calendarList'}
            current={'2022-09-25'}
            pastScrollRange={24}
            futureScrollRange={24}
            renderHeader={renderHeader}
            markedDates={markedDates}
            theme={{
              'stylesheet.calendar.header': {
                dayHeader: {
                  color: Colors.navy,
                  fontWeight: '700'
                }
              },
              'stylesheet.day.basic': {
                today: {
                  borderColor: Colors.mandarin,
                  borderWidth: 0.8
                },
                todayText: {
                  color: Colors.prussian,
                  fontWeight: '800'
                }
              }
            }}
        />
    )
}

const styles = StyleSheet.create({
    headerText: {
      fontSize: 18,
      fontWeight: 'bold',
      paddingTop: 10,
      paddingBottom: 10,
      color: Colors.prussian,
      paddingRight: 5
    },
    header: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
      marginTop: 10,
      marginBottom: 10
    },
    day: {
        flex: 1,
        padding: 10,
        backgroundColor: Colors.prussian,
        color: Colors.paleGrey,
    },
});

export default Year;