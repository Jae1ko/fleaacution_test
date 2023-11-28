import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Mypage from '~/screen/Mypage';

const Stack = createNativeStackNavigator();

export default function MypageStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                options={{ headerShown: false }}
                name="Mypage"
                component={Mypage}
            />
        </Stack.Navigator>
    );
}
