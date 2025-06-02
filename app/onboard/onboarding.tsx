import { useRouter } from "expo-router";
import { MotiImage } from "moti";
import { useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  SafeAreaView,
  //   SafeAreaProvider,
  //   SafeAreaInsetsContext,
  //   useSafeAreaInsets,
} from "react-native-safe-area-context";

const { width, height } = Dimensions.get("window");
const ScreenData = [
   {
    backgroundImageURL: require("@/assets/images/screen1bg.png"),
    iconURL: require("@/assets/images/screen1icon.png"),
    title: "Order for Food",
    subtitle:
      "Lorem ipsum dolor sit amet, conse ctetur  adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    btnText: "Next",
  }, {
    backgroundImageURL: require("@/assets/images/screen2bg.png"),
    iconURL: require("@/assets/images/screen2icon.png"),
    title: "Easy Payment",
    subtitle:
      "Lorem ipsum dolor sit amet, conse ctetur  adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    btnText: "Next",
  },
   {
    backgroundImageURL: require("@/assets/images/screen3bg.png"),
    iconURL: require("@/assets/images/screen3icon.png"),
    title: "Easy Payment",
    subtitle:
      "Lorem ipsum dolor sit amet, conse ctetur  adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    btnText: "Get Started",
  },
];

export default function OnBoardingScreen() {
  const [screenIndex, setScreenIndex] = useState<number> (0);
  const Ref = useRef<FlatList<any>>(null);
  const router = useRouter();
    const handleNext=()=>{
        if(screenIndex < ScreenData.length -1){
            Ref.current?.scrollToIndex({index: screenIndex+1});
            // setScreenIndex(screenIndex+1);
        }
        else{
            router.replace("/auth/login")
        }
    }

  // console.log(keys[screenIndex], data)
  return (
    <FlatList
        ref={Ref}
        data={ScreenData}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator= {false}
        onMomentumScrollEnd={(e)=>{
            const index = Math.round(e.nativeEvent.contentOffset.x / width)
            setScreenIndex(index);
        }}
        keyExtractor={(_, idx) => idx.toString()}
        renderItem={({item})=>(
            <ImageBackground
                source={item.backgroundImageURL}
                style={styles.background}
                resizeMode="cover"
            >
                <View style={styles.contentContainer}>
                    <MotiImage source={item.iconURL} style={styles.iconImage}/>
                    <Text style={{fontSize: 24, marginTop: 10, fontWeight: 600, textAlign: 'center'}}>{item.title}</Text>
                    <Text style={{fontSize: 18, marginTop: 10, fontWeight: 400,textAlign:"center"}}>{item.subtitle}</Text>

                    <View style={styles.navibtnContainer}>
                        {
                            ScreenData.map((_,idx)=>(
                                <TouchableOpacity 
                                    key={idx}
                                    onPress={()=>{
                                        Ref.current?.scrollToIndex({index:idx})
                                        setScreenIndex(idx)
                                    }}

                                    style={[
                                        styles.navibtn,
                                        idx === screenIndex && styles.navibtnActive
                                    ]}
                                />
                            ))
                        }
                    </View>

                    <TouchableOpacity 
                        onPress={handleNext}
                        style={styles.btnContainer}
                    >
                        <Text style={{color: "white", fontSize: 24}}>{item.btnText}</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )}
    
    />

  );
}

const styles = StyleSheet.create({
  background:{
    width,
    height,
    justifyContent: "flex-end"
  },
  contentContainer:{
    height: 400,
    backgroundColor:"white",
    borderTopRightRadius: 20,
     borderTopLeftRadius: 20,
    //  paddingHorizontal: 10
    padding: 20,
    // marginTop: 20,
     alignItems:"center"
  },
  iconImage:{
    // marginTop: 20
    width: 50, 
    height: 50
  },
  navibtnContainer:{
    flexDirection:"row",
    gap: 5,
    marginTop: 20
  },
  navibtn:{
    width: 30, 
    height: 10,
    backgroundColor:"gray"
  },
  navibtnActive:{
    backgroundColor:"black"
  },
  btnContainer:{
    marginTop: 20,
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 40,
    backgroundColor:"black",
    justifyContent:"center",
    alignItems:'center'
  }
});
