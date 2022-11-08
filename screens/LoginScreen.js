import React, {Component} from 'react';
import { Text, View} from 'react-native';

export default class LoginScreen extends Component{

    signInWithGoogleAsync = async () => {
        try {
          const result = await Google.logInAsync({
            behaviour: "web",
            androidClientId:
              "732617011479-nhfk3v9rlqlj5dvmcp7ti4eser9uf8ke.apps.googleusercontent.com",
            iosClientId:
              "732617011479-ofvr3c4k5c8pqckd30j345ahk2gbou7u.apps.googleusercontent.com",        scopes: ["profile", "email"]
          });
    
          if (result.type === "success") {
            this.onSignIn(result);
            return result.accessToken;
          } else {
            return { cancelled: true };
          }
        } catch (e) {
          console.log(e.message);
          return { error: true };
        }
      };

      render() {
        if (!this.state.fontsLoaded) {
          return <AppLoading />;
        } else {
          return (
            <View style={styles.container}>
              <SafeAreaView style={styles.droidSafeArea} />
              <View style={styles.appTitle}>
                <Image
                  source={require("../assets/logo.png")}
                  style={styles.appIcon}
                ></Image>
                <Text style={styles.appTitleText}>{`Spectagram/nApp`}</Text>
              </View>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => this.signInWithGoogleAsync()}
                >
                  <Image
                    source={require("../assets/google_icon.png")}
                    style={styles.googleIcon}
                  ></Image>
                  <Text style={styles.googleText}>Sign in with Google</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }
      }
    }

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: "#15193c"
        },
        droidSafeArea: {
          marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
        },
        appTitle: {
          flex: 0.4,
          justifyContent: "center",
          alignItems: "center"
        },
        appIcon: {
          width: RFValue(130),
          height: RFValue(130),
          resizeMode: "contain"
        },
        appTitleText: {
          color: "white",
          textAlign: "center",
          fontSize: RFValue(40),
          fontFamily: "Bubblegum-Sans"
        },
        buttonContainer: {
          flex: 0.3,
          justifyContent: "center",
          alignItems: "center"
        },
        button: {
          width: RFValue(250),
          height: RFValue(50),
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          borderRadius: RFValue(30),
          backgroundColor: "white"
        },
        googleIcon: {
          width: RFValue(30),
          height: RFValue(30),
          resizeMode: "contain"
        },
        googleText: {
          color: "black",
          fontSize: RFValue(20),
          fontFamily: "Bubblegum-Sans"
        },
      });
      