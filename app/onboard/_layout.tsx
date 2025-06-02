import { Stack } from "expo-router";

export default function OnBoardLayout(){
    return(
        <Stack screenOptions={{headerShown:false}}>
            <Stack.Screen name="onboarding" options={{headerShown:false}}/> 
        </Stack>
    )
}