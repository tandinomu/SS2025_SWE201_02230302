// /home/tandinomu/Desktop/SS2025_SWE201_02230302/Practical_1/components/ui/PaginationDots.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';

interface PaginationDotsProps {
  activeIndex: number;
  count?: number;
}

const PaginationDots: React.FC<PaginationDotsProps> = ({ activeIndex, count = 3 }) => {
  return (
    <View style={styles.container}>
      {Array.from({ length: count }).map((_, index) => (
        <View
          key={index}
          style={[
            styles.dot,
            index === activeIndex && styles.activeDot,
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ddd',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#00AA13', // Gojek green color
  },
});

export default PaginationDots;