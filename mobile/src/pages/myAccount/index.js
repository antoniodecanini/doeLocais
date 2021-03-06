import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

export default function SignUp() {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [password, setPassword] = useState("");

  function openDrawer() {
    navigation.toggleDrawer();
  }

  function handleSubmit() {
    console.log("Salvando");
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.btnAccount} onPress={openDrawer}>
          <FontAwesome name="user" style={styles.iconUser}></FontAwesome>
        </TouchableOpacity>

        <Text style={styles.txtHeader}>Minha conta</Text>
      </View>

      <View style={styles.signUpFirst}>
        <View style={styles.signUpContainer}>
          <View>
            <View style={styles.signUpFieldContainer}>
              <Text style={styles.signUpTxt}>Nome</Text>
              <TextInput
                style={styles.signUpInputs}
                placeholder="João"
                value={name}
                onChangeText={(text) => setName(text)}
              />
            </View>

            <View style={styles.signUpFieldContainer}>
              <Text style={styles.signUpTxt}>Sobrenome</Text>
              <TextInput
                style={styles.signUpInputs}
                placeholder="Silva"
                value={surname}
                onChangeText={(text) => setSurname(text)}
              />
            </View>

            <View style={styles.signUpFieldContainer}>
              <Text style={styles.signUpTxt}>Email</Text>
              <TextInput
                style={styles.signUpInputs}
                placeholder="exemplo@exemplo.com"
                value={email}
                onChangeText={(text) => setEmail(text)}
              />
            </View>

            <View style={styles.signUpFieldContainer}>
              <Text style={styles.signUpTxt}>Whatsapp</Text>
              <TextInput
                style={styles.signUpInputs}
                placeholder="(99) 99999-9999"
                value={whatsapp}
                onChangeText={(text) => setWhatsapp(text)}
              />
            </View>

            <View style={styles.signUpFieldContainer}>
              <Text style={styles.signUpTxt}>Senha</Text>
              <TextInput
                style={styles.signUpInputs}
                placeholder="********"
                value={password}
                onChangeText={(text) => setPassword(text)}
              />
            </View>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.btnSignUp} onPress={handleSubmit}>
        <Text style={styles.btnSignUpText}>Salvar alterações</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}
