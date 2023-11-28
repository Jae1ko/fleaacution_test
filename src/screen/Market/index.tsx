import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, ScrollView, RefreshControl } from 'react-native';

import EventSource from 'react-native-sse';

import AcutionList from './AcutionList';

import { shuffleArray } from '../utils/shuffleArray';
import styles from './styles';

type AuctionEvent = 'sse.auction_viewed';

interface Props {}

const Market = ({}: Props) => {
    const [data, setData] = useState<Array<IAuction>>([]);
    const [refreshing, setRefreshing] = useState(false);

    const getData = (event: string) => {
        const auction = JSON.parse(event);

        setData(prev => {
            if (!prev.some(item => item.auctionId === auction.auctionId)) {
                return [...prev, auction];
            }
            return prev;
        });
    };

    const onRefresh = () => {
        setRefreshing(true);

        setTimeout(() => {
            setData(prev => {
                return shuffleArray(prev);
            });

            setRefreshing(false);
        }, 1000);
    };

    useEffect(() => {
        const url = new URL('https://api.fleaauction.world/v2/sse/event');
        const es = new EventSource<AuctionEvent>(url);

        es.addEventListener('sse.auction_viewed', (event: Event) => {
            getData(event.data);
        });

        return () => {
            es.removeAllEventListeners();
            es.close();
        };
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            >
                <View style={styles.scrollContainer}>
                    <AcutionList data={data} />
                    <AcutionList data={data} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Market;
