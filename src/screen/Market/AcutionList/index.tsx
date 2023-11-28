import React from 'react';
import { ScrollView, Text, View, ActivityIndicator } from 'react-native';

import { shuffleArray } from '~/screen/utils/shuffleArray';
import HorizontalScrollHeader from '~/screen/components/HorizontalScrollHeader';

import styles from './styles';

interface Props {
    data?: Array<Event>;
    auctionId: number;
    viewCount: number;
}
const Items = ({ auctionId, viewCount }: Props) => {
    return (
        <View style={styles.auctionItems}>
            <Text>{auctionId}</Text>
            <Text>{viewCount}</Text>
        </View>
    );
};

const AcutionList = ({ data }: Props) => {
    const shuffledArray = shuffleArray(data);

    return (
        <View style={styles.container}>
            <HorizontalScrollHeader>가로 스트롤 영역</HorizontalScrollHeader>
            {data?.length === 0 ? (
                <View style={styles.indicator}>
                    <ActivityIndicator size="large" />
                </View>
            ) : (
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.scrollViewContent}
                >
                    {shuffledArray.map((item: any, index: number) => {
                        return (
                            <Items
                                key={index}
                                auctionId={item.auctionId}
                                viewCount={item.viewCount}
                            />
                        );
                    })}
                </ScrollView>
            )}
        </View>
    );
};

export default React.memo(AcutionList);
