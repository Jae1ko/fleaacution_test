import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Article from '~/screen/Article';

const Stack = createNativeStackNavigator();

export default function ArticleStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                options={{ headerShown: false }}
                name="Article"
                component={Article}
            />
        </Stack.Navigator>
    );
}
