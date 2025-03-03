import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import Button from '../../components/ui/Button';
import PaginationDots from '../../components/ui/PaginationDots';

export default function ThirdOnboardingScreen() {
  const router = useRouter();

  const handleLogin = () => {
    // In a real app, this would handle login
    console.log('Login pressed');
  };

  const handleSignup = () => {
    // In a real app, this would handle signup
    console.log('Signup pressed');
  };

  const handlePrevious = () => {
    router.back();
  };

  return (
    <View style={styles.container}>
      {/* Header with logo and language selector */}
      <View style={styles.header}>
        <Image
          source={require('../../assets/images/Gojek Logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <TouchableOpacity style={styles.languageButton}>
          <Text style={styles.languageText}>English</Text>
        </TouchableOpacity>
      </View>

      {/* Main content */}
      <View style={styles.content}>
        <Image
          source={require('../../assets/images/third.jpg')}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.title}>Rides for all</Text>
        <Text style={styles.description}>Up to three stops with every trip – perfect for travel with friends and family.</Text>
      </View>

      {/* Pagination dots */}
      <PaginationDots activeIndex={2} />

      {/* Buttons */}
      <View style={styles.buttonsContainer}>
        <Button title="Log in" onPress={handleLogin} />
        <Button title="I'm new, sign me up" variant="outline" onPress={handleSignup} />
        <Text style={styles.termsText}>
          By logging in or registering, you agree to our{' '}
          <Text style={styles.termsLink}>Terms of service</Text> and{' '}
          <Text style={styles.termsLink}>Privacy policy</Text>.
        </Text>
      </View>

      {/* Back button */}
      <View style={styles.backButtonContainer}>
        <Button 
          title="Back" 
          variant="outline"
          onPress={handlePrevious} 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 20,
  },
  logo: {
    width: 100,
    height: 30,
  },
  languageButton: {
    padding: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: '#f5f5f5',
  },
  languageText: {
    fontSize: 14,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    lineHeight: 24,
  },
  buttonsContainer: {
    padding: 16,
    paddingBottom: 40,
  },
  termsText: {
    textAlign: 'center',
    fontSize: 12,
    color: '#888',
    marginTop: 16,
    lineHeight: 18,
  },
  termsLink: {
    color: '#00AA13',
  },
  backButtonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    width: 100,
  }
});