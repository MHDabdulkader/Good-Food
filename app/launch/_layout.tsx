import { Stack } from "expo-router";
import { View } from "react-native";

export default function launchLayout(){
    
    return (
    <Stack>
        <Stack.Screen name="first" options={{headerShown:false}}/>
        <Stack.Screen name="welcome" options={{headerShown:false}} />
    </Stack>
    )
}