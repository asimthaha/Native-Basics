import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { Component, useState } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import Animated, { FadeInLeft, FadeInUp } from "react-native-reanimated";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigation();
  return (
    <KeyboardAvoidingView className="bg-teal-500 h-full w-full">
      <StatusBar style="light" />
      <View className="flex-row justify-around w-screen absolute">
        <Animated.Image
          entering={FadeInUp.delay(200).duration(1000).springify().damping(3)}
          source={require("../assets/light.png")}
          className="h-[225] w-[90]"
        />
        <Animated.Image
          entering={FadeInUp.delay(300).duration(1000).springify().damping(3)}
          source={require("../assets/light.png")}
          className="h-[160] w-[65]"
        />
      </View>

      <View className="h-full w-full flex justify-center pt-40 pb-10">
        <View className="flex items-center">
          <Text className="text-white font-blod tracking-wider text-3xl">
            LOGIN
          </Text>
        </View>
        <View className="flex items-center mx-4 space-y-4">
          <Animated.View
            entering={FadeInLeft.delay(200)}
            className="bg-black/20 p-5 rounded-2xl w-full"
          >
            <TextInput
              onChange={(text) => setEmail(text)}
              placeholder="Email"
              placeholderTextColor={"white"}
            />
          </Animated.View>
          <Animated.View
            entering={FadeInLeft.delay(400)}
            className="bg-black/20 p-5 rounded-2xl w-full"
          >
            <TextInput
              onChange={(text) => setPassword(text)}
              placeholder="Password"
              placeholderTextColor={"white"}
              secureTextEntry
            />
          </Animated.View>
          <Animated.View entering={FadeInLeft.delay(600)} className="w-full">
            <TouchableOpacity className="w-full bg-teal-400 p-3 rounded-2xl mb-3">
              <Text className="text-xl font-bold text-white text-center">
                Login
              </Text>
            </TouchableOpacity>
          </Animated.View>
          <Animated.View
            entering={FadeInLeft.delay(800)}
            className="flex-row justify-center"
          >
            <Text className="text-xl font-bold text-white text-center">
              Don't have an account?
            </Text>
            <TouchableOpacity onPress={() => navigate.push("Register")}>
              <Text className="text-xl font-bol text-center">Register</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
