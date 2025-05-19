import { transform } from "@babel/core";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Alert,
  ImageBackground,
  TouchableOpacity,
  Text,
  Animated,
} from "react-native";
const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);
export default function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const onLogin = () => {
    Alert.alert("Credentials", `${name} + ${password} ${email}`);
  };

  const animateValue = new Animated.Value(100);
  const color = animateValue.interpolate({
    inputRange: [0, 100],
    outputRange: ["#FF6C00", "#FF6fff"],
  });
  Animated.timing(animateValue, {
    toValue: 0,
    duration: 5000,
    useNativeDriver: true,
  }).start();
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ImageBackground
          source={require("./assets/backGround.jpg")}
          resizeMode="cover"
          style={styles.image}
        >
          <View style={styles.whiteBox}>
            <View style={styles.form}>
              <Text style={styles.text}>Реєстрація</Text>
              <TextInput
                value={name}
                onChangeText={setName}
                placeholder="Логін"
                style={styles.input}
                placeholderTextColor="#333"
              />
              <TextInput
                value={name}
                onChangeText={setEmail}
                placeholder="Адреса електронної пошти"
                style={styles.input}
                placeholderTextColor="#333"
              />
              <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder="Пароль"
                secureTextEntry
                style={styles.input}
                placeholderTextColor="#333"
              />
              <AnimatedTouchable
                style={{
                  ...styles.button,
                  backgroundColor: color,
                }}
                onPress={onLogin}
              >
                <Text style={styles.btn}>Зареєстуватися</Text>
              </AnimatedTouchable>
              <Text style={styles.textLogin}>Вже є акаунт? Увійти</Text>
            </View>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    marginBottom: 25,
    color: "#212121",
    textAlign: "center",
    fontWeight: 500,
    fontSize: 30,
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
  form: {
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 20,
    paddingRight: 20,
  },
  input: {
    color: "#BDBDBD",
    width: 343,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    marginBottom: 10,
    borderRadius: 6,
  },
  button: {
    width: 343,
    height: 44,
    marginTop: 30,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  whiteBox: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: "auto",
    paddingTop: 70,
    paddingBottom: 50,
  },
  textLogin: {
    color: "#1B4371",
    fontWeight: 400,
    marginTop: 10,
  },
});
