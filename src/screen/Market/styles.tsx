import { StyleSheet, Dimensions } from 'react-native';

const { width: LIST_WIDTH, height: LIST_HEIGHT } = Dimensions.get('screen');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    scrollContainer: {
        height: LIST_WIDTH * 1.5,
    },
});

export default styles;
