import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Market from '~/screen/Market';

const Stack = createNativeStackNavigator();

export default function MarketStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                options={{ headerShown: false }}
                name="Market"
                component={Market}
            />
        </Stack.Navigator>
    );
}
