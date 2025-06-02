import { useRouter } from "expo-router";
import { MotiImage } from "moti";
import {
  Dimensions,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const imageLogo = require("@/assets/images/good food logo.jpg");
const { width, height } = Dimensions.get("window");
export default function WelcomeScreen() {
  const router = useRouter();
  return (
    <View style={styles.containerBackground}>
      <View>
        <MotiImage source={imageLogo} style={[styles.logo]}
            from={{opacity: 0.6, scale: 0.9, rotate: "-2deg"}}
            animate={{opacity: 1, scale: 0.95, rotate:"2deg"}}
            // exit={{opacity: 0, scale: 0.5}}
            transition={{
               loop: true,
               type:"timing",
               duration: 1000,
               repeatReverse: true,
            }}
        />

        <TouchableOpacity 
            // optional : 
            onPress={()=>{
                router.replace("../onboard/")
            }}
        style={[
            styles.containerBtn,
            styles.btnWhite
        ]}>
          <Text style={[styles.textBtn, styles.textBlack]}>Login</Text>
        </TouchableOpacity>

         <TouchableOpacity style={[
            styles.containerBtn,
            styles.btnBlack
        ]}>
          <Text style={[styles.textBtn, styles.textWhite]}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#121212",
  },
  logo: {
    width: width * 0.7,
    height: width * 0.7,
    borderRadius: (width* 0.7)/2
    // borderRadius: 20
  },
  containerBtn: {
   
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    borderWidth: 1,
    marginTop: 15,

    ...Platform.select({
      ios: {
       
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 3,
      },
      android:{
        elevation: 4
      }
    }),
  },
  btnWhite:{
    backgroundColor: "#f2f2f2",
    borderColor: "#e0e0e0",

    ...Platform.select({
        ios:{
             shadowColor: "#000",
        }
    })
  },
   btnBlack:{
    backgroundColor: "#000",
    borderColor: "#111",

    ...Platform.select({
        ios:{
             shadowColor: "#000",
        }
    })
  },
  textBtn: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: 500,
  },
  textWhite:{
    color:"#fff"
  },
  textBlack:{
    color:"#000"
  }
});
