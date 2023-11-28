import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '~/screen/Home';

const Stack = createNativeStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
        </Stack.Navigator>
    );
}
