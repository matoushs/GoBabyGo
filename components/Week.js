import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Agenda } from 'react-native-calendars';
import { TouchableHighlight } from 'react-native-gesture-handler';
import moment from "moment";

import Colors from '../constants/Colors';
import Day from './Day';

const Week = () => {
    const [events, setEvents] = useState({
        '2022-09-26': [
            {
                name: 'Full body yoga',
                tag: 'yoga',
                duration: '60 minutes',
                description: 'full body yoga - 60 minutes',
                height: 95
            }
        ],
        '2022-09-27': [
            {
                name: '8km Easy Run',
                tag: 'am-run',
                duration: '8 km',
                description: 'easy run',
                height: 95
            },
            {
                name: '11km Speed',
                tag: 'speed',
                duration: '11 km',
                description: '3 km easy warm-up, 6 x 2:00 repeats @ 10 km pace, 3 km cool-down',
                height: 120
            }
        ],
        '2022-09-28': [
            {
                name: 'Core Work',
                tag: 'core',
                duration: '30 minutes',
                description: 'stair-steppers, mountain climbers, ab work',
                height: 95
            },
            {
                name: '12km Tempo Run',
                tag: 'tempo',
                duration: '12 km',
                description: '4 km easy warm-up, 4 x 1:00 tempo, 4 km cool-down',
                height: 95
            }
        ],
        '2022-09-29': [
            {
                name: '12km Hill Run',
                tag: 'hills',
                duration: '12 km',
                description: '3 km easy warm-up, 4 x 1:00 hills, 3 km cool-down',
                height: 95
            },
            {
                name: 'Core Work',
                tag: 'core',
                duration: '30 minutes',
                description: 'stair-steppers, mountain climbers, ab work',
                height: 95
            }
        ],
        '2022-09-30': [
            {
                name: '7km Easy Run',
                tag: 'easy',
                duration: '7 km',
                description: 'easy, relaxed distance',
                height: 95
            }
        ],
        '2022-10-01': [
            {
                name: '28km Long Run',
                tag: 'long',
                duration: '28 km',
                description: 'marathon pace',
                height: 95
            },
        ],
        '2022-10-02': [
            {
                name: '15km Long Run',
                tag: 'long-again',
                duration: '15 km',
                description: 'marathon pace',
                height: 95
            },
        ]
    });
    var today = moment().format('YYYY-MM-DD');

    const long = {key: 'long', color: Colors.flamingo, selectedDotColor: 'yellow'};
    const speed = {key: 'speed', color: Colors.cinnamon, selectedDotColor: 'red'};
    const hills = {key: 'hills', color: Colors.navy, selectedDotColor: 'blue'};
    const easy = {key: 'easy', color: Colors.pea, selectedDotColor: 'green'};
    const workout = {key: 'workout', color: Colors.gold, selectedDotColor: 'orange'};
    const yoga = {key: 'yoga', color: Colors.prussian, selectedDotColor: 'purple'};

    const [markedDates, setMarkedDates] = useState({
      '2022-09-26': {dots: [yoga]},
      '2022-09-27': {dots: [easy, workout]},
      '2022-09-28': {dots: [easy, yoga, hills]},
      '2022-09-29': {dots: [speed, yoga]},
      '2022-09-30': {dots: [easy, workout]},
      '2022-10-01': {dots: [easy]},
      '2022-10-02': {dots: [long]},
    });
    const styles = StyleSheet.create({
        item: {
          backgroundColor: 'transparent',
          flex: 1,
          fontSize: 20,
          fontWeight: '700',
          padding: 10,
          margin: 10
        },
        emptyDate: {
          height: 15,
          flex:1,
          paddingTop: 30
        }
    })
    const rowHasChanged = (r1, r2) => {
        return r1.name !== r2.name;
    }
    const renderEmptyDate = () => {
        return (
            <View style={styles.emptyDate}>
                <Text>This is empty date!</Text>
            </View>
        );
    }
    const handlePress = () => {
        console.log('Something got pressed')
    }
    const renderItem = item => {
        return (
            <TouchableHighlight 
                style={[styles.item, {height: item.height}]}
                onPress={handlePress}
                key={`${item.name}`}
            >
                <Text>{item.name}</Text>
            </TouchableHighlight>
        );
    }
    const theme = {
        dotColor: Colors.cinnamon,
        selectedDayBackgroundColor: Colors.alabaster,
        agendaTodayColor: Colors.flamingo, // font color date/day day list
        backgroundColor: Colors.alabaster, // background color day list 
        selectedDayBackgroundColor: Colors.prussian, // background color week list
    };

    return (
        <Agenda
            current={today}
            firstDay={1}
            items={events}
            // loadItemsForMonth={loadItems}
            markingType={'multi-dot'}
            markedDates={markedDates}
            renderItem={renderItem}
            renderEmptyDate={renderEmptyDate}
            rowHasChanged={rowHasChanged}
            // selected={'2022-09-26'}
            showOnlySelectedDayItems={true}
            theme={theme}
        />
    );
}

export default Week;

// const loadItems = day => {
//     timeToString = time => {
//         const date = new Date(time);
//         return date.toISOString().split('T')[0];
//     }
//     setTimeout(() => {
//         for (let i = 0; i < 2; i++) {
//             const time = day.timestamp + i * 24 * 60 * 60 * 1000;
//             const strTime = timeToString(time);
//             if (!events[strTime]) {
//                 events[strTime] = [];
//                 const numItems = Math.floor(Math.random() * 5);
//                 for (let j = 0; j < numItems; j++) {
//                     events[strTime].push({
//                         name: 'Item for ' + strTime,
//                         height: Math.max(50, Math.floor(Math.random() * 150))
//                     });
//                 }
//             }
//         }
//         const newItems = {};
//         Object.keys(events).forEach(key => {newItems[key] = events[key];});
//         setEvents(newItems);
//     }, 1000);
// }