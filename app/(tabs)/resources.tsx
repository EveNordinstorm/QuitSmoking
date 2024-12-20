import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

const ResourcesScreen: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center', padding: 16 }}>
      <Image
        source={require('../../assets/images/abl-heart.png')}
        className="my-4"
        style={{
          width: '40%',
          height: undefined,
          aspectRatio: 1.5,
        }}
        resizeMode="contain"
      />

      <Text className="text-3xl font-bold text-purple mt-6 text-center">
        Need some motivation?
      </Text>

    </ScrollView>
  );
};

export default ResourcesScreen;
