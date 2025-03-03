// /home/tandinomu/Desktop/SS2025_SWE201_02230302/Practical_1/components/ui/Button.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: 'primary' | 'outline';
}

const Button: React.FC<ButtonProps> = ({ 
  title, 
  onPress, 
  variant = 'primary',
  style, 
  ...rest 
}) => {
  return (
    <TouchableOpacity 
      style={[
        styles.button, 
        variant === 'outline' ? styles.outlineButton : styles.primaryButton,
        style
      ]} 
      onPress={onPress}
      {...rest}
    >
      <Text 
        style={[
          styles.text, 
          variant === 'outline' ? styles.outlineText : styles.primaryText
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 30,
    padding: 16,
    alignItems: 'center',
    marginVertical: 8,
  },
  primaryButton: {
    backgroundColor: '#00AA13', // Gojek green
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#00AA13',
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
  primaryText: {
    color: '#FFFFFF',
  },
  outlineText: {
    color: '#00AA13',
  },
});

export default Button;