import React from 'react';
import type { PropsWithChildren } from 'react';

import { Text, StyleSheet, View } from 'react-native';

type SectionProps = PropsWithChildren<{}>;

function HorizontalScrollHeader({ children }: SectionProps) {
    return (
        <View style={styles.headerArea}>
            <Text style={styles.title}>{children}</Text>
        </View>
    );
}

export default HorizontalScrollHeader;

const styles = StyleSheet.create({
    headerArea: {
        height: 56,
        justifyContent: 'center',
    },
    title: {
        fontSize: 16,
    },
});
