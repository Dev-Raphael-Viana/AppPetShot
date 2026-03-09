import React, { useState } from 'react';
import {
    Dimensions,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

const { width } = Dimensions.get('window');

// Cores do tema
const COLORS = {
  background: '#E6F2FA', 
  primary: '#3C91E6', 
  secondary: '#FF8C00', 
  darkText: '#0B3C6E', 
  lightText: '#007BFF', 
  greyText: '#6C757D', 
  white: '#FFFFFF',
  googleRed: '#DB4437', 
  facebookBlue: '#4267B2', 
};

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
       <StatusBar barStyle="dark-content" backgroundColor={COLORS.background} />

      <View style={styles.innerContainer}>
        <View style={styles.headerContainer}>
          <View style={styles.logoCircle}>
            <Text style={{ fontSize: 40 }}>🐾</Text>
          </View>

          <Text style={styles.logoText}>
            <Text style={{color: COLORS.primary}}>AMIGO</Text>
            <Text style={{color: COLORS.secondary}}> PET</Text>
          </Text>

          <Text style={styles.logoTagline}>Seu Pet, Nosso Cuidado!</Text>
          <Text style={styles.titleText}>Bem-vindo!</Text>
          <Text style={styles.subtitleText}>
            Entre na sua conta para cuidar do seu pet.
          </Text>
        </View>

        <View style={styles.formContainer}>
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>E-mail</Text>
            <View style={styles.inputWrapper}>
              <Text style={styles.inputIcon}>✉</Text>
              <TextInput
                style={styles.textInput}
                placeholder="exemplo@email.com"
                placeholderTextColor={COLORS.greyText}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Senha</Text>
            <View style={styles.inputWrapper}>
              <Text style={styles.inputIcon}>🔒</Text>
              <TextInput
                style={styles.textInput}
                placeholder="••••••••"
                placeholderTextColor={COLORS.greyText}
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!passwordVisible}
              />

              <TouchableOpacity
                onPress={() => setPasswordVisible(!passwordVisible)}
                style={styles.eyeIconWrapper}
              >
                <Text style={styles.eyeIcon}>{passwordVisible ? '👁' : '👁‍🗨'}</Text>
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity style={styles.forgotPasswordButton}>
            <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.enterButton}>
          <Text style={styles.enterButtonText}>ENTRAR</Text>
        </TouchableOpacity>

        <View style={styles.registerContainer}>
          <Text style={styles.registerText}>Não tem uma conta?</Text>
          <TouchableOpacity>
            <Text style={styles.registerLinkText}>Cadastre-se aqui!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  innerContainer: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logoCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    marginBottom: 10,
  },
  logoImage: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  logoText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  logoTagline: {
    fontSize: 12,
    color: COLORS.greyText,
    marginBottom: 20,
  },
  titleText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: COLORS.darkText,
    marginBottom: 5,
  },
  subtitleText: {
    fontSize: 14,
    color: COLORS.greyText,
    textAlign: 'center',
  },
  formContainer: {
    width: '100%',
    marginBottom: 20,
  },
  inputGroup: {
    marginBottom: 15,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.darkText,
    marginBottom: 5,
    marginLeft: 5,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 25,
    paddingHorizontal: 15,
    height: 50,
    elevation: 1,
  },
  inputIcon: {
    fontSize: 18,
    color: COLORS.greyText,
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    color: COLORS.darkText,
    height: '100%',
  },
  eyeIconWrapper: {
    padding: 5,
  },
  eyeIcon: {
    fontSize: 18,
    color: COLORS.greyText,
  },
  forgotPasswordButton: {
    alignSelf: 'flex-end',
  },
  forgotPasswordText: {
    fontSize: 12,
    color: COLORS.lightText,
    textDecorationLine: 'underline',
  },
  enterButton: {
    width: '100%',
    height: 55,
    backgroundColor: COLORS.secondary,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    marginBottom: 25,
  },
  enterButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#D0D0D0',
  },
  dividerText: {
    fontSize: 12,
    color: COLORS.greyText,
    paddingHorizontal: 10,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 30,
  },
  socialButtonCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 15,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  registerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  registerText: {
    fontSize: 14,
    color: COLORS.darkText,
    marginRight: 5,
  },
  registerLinkText: {
    fontSize: 14,
    color: COLORS.lightText,
    textDecorationLine: 'underline',
    fontWeight: '600',
  },
});

export default LoginScreen;