import { StyleSheet, Dimensions } from 'react-native';

const { width: LIST_WIDTH } = Dimensions.get('window');

const width = LIST_WIDTH / 2;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
    },
    headerArea: {
        height: 56,
        borderWidth: 1,
        justifyContent: 'center',
    },
    auctionItems: {
        width: width,
        marginRight: 16,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'grey',
    },
    scrollViewContent: {
        paddingVertical: 16,
    },
    indicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default styles;
