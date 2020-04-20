import React, {useState} from 'react'
import { Dimensions } from 'react-native'


const ScreenSize = () => {
    const [currentDimension, setCurrentDimension] = useState({Width: Dimensions.get('window').width, Height: Dimensions.get('window').height});
    console.log(currentDimension);
    const updateLayout = () =>{
        setCurrentDimension({Width: Dimensions.get('window').width, Height: Dimensions.get('window').height});
    }
    Dimensions.addEventListener('change', updateLayout);

    console.log(currentDimension);
    return (currentDimension);
}

export default ScreenSize;
