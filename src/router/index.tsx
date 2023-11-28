import React from 'react';
import { Image, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStack from '~/router/Home';
import RecommendationStack from '~/router/Market';
import Article from '~/router/Article';
import Mypage from '~/router/Mypage';

const Tab = createBottomTabNavigator();

const Root = ({}) => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarLabelStyle: {
                    marginBottom: 8,
                    fontWeight: '700',
                },
                tabBarIconStyle: { display: 'none' },
            }}
        >
            <Tab.Screen name="홈" component={HomeStack} />
            <Tab.Screen name="마켓" component={RecommendationStack} />
            <Tab.Screen name="아티클" component={Article} />
            <Tab.Screen name="마이페이지" component={Mypage} />
        </Tab.Navigator>
    );
};

export default function index() {
    return (
        <NavigationContainer>
            <Root />
        </NavigationContainer>
    );
}
