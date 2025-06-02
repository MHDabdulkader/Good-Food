import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import {MotiImage} from "moti"
import { useEffect, useState } from "react";
import { useRouter } from "expo-router";
const imageLogo=  require("@/assets/images/good food logo.jpg");
const {width, height} = Dimensions.get("window")
export default function FirstScreen(){
    const [nextpageLoading, setNextpageLoading] = useState<boolean> (false);
    const router = useRouter();
    useEffect(()=>{

        const timer = setTimeout(()=>{
            setNextpageLoading(true);
            router.push("/launch/welcome");
        }, 2000)

        return () =>{
            
            clearTimeout(timer);
        }
    }, [nextpageLoading])

    return (
        // the background container full 
        <View style={styles.containerBackground}>
            <View>
                <MotiImage 
                    source={imageLogo} 
                    style={styles.logo}
                    from ={{opacity: 0, scale: 0.5}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{type:"spring", damping:10}}
                />
            
            </View>
        </View>
    )
}

const styles =StyleSheet.create({
    containerWithSafeArea:{

    },
    containerBackground:{
        flex: 1,
        justifyContent:'center',
        alignItems:"center",
        backgroundColor:"#FFF",
    },
    logo:{
        width: width*0.7,
        height: height*0.3,
        borderRadius: 20
    }
})