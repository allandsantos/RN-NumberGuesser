import { Dimensions } from 'react-native';
const _WIDTH = Dimensions.get('window').width;
const _HEIGHT = Dimensions.get('window').height;

export default {
    header: _HEIGHT > 600 ? 18 : 14,
    label: _HEIGHT > 600 ? 16 : 14,
    title: _HEIGHT > 600 ? 24 : 18,
}