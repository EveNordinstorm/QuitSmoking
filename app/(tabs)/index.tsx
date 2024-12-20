import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import Counter from '@/components/Counter';

const Index: React.FC = () => {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [time, setTime] = useState<{ diffDays: number; diffMins: number; diffSecs: number }>({
    diffDays: 0, diffMins: 0, diffSecs: 0,
  })

  const cigsPerDay = 10; // Would be collected on sign up

  const calculateTimeDifference = () => {
    const now = new Date();
    const diffMs = now.getTime() - startDate.getTime();
    return {
      diffDays: Math.floor(diffMs / (1000 * 60 * 60 * 24)),
      diffMins: Math.floor(diffMs / (1000 * 60)) % 60,
      diffSecs: Math.floor(diffMs / 1000) % 60,
    };
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(calculateTimeDifference());
    }, 1000);

    return () => clearInterval(interval);
  }, [startDate]);

  const calculateCigsAvoided = (days: number) => days * cigsPerDay;

  const { diffDays, diffMins, diffSecs } = time;
  const cigsAvoided = calculateCigsAvoided(diffDays);

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center', padding: 16 }}>
      <Image
        source={require('../../assets/images/abl-a-better-life.png')}
        className="mt-14 mb-4"
        style={{
          width: '50%',
          height: undefined,
          aspectRatio: 1.5,
        }}
        resizeMode="contain"
      />

      <Text className="text-5xl font-bold text-lightBlue mt-6 text-center">
        Hello, Eve
      </Text>

      <Text className="text-2xl text-blue mb-6 text-center">
        Welcome to your Dashboard!
      </Text>

      <Counter
      title="Smoke Free Counter"
      value={`${diffDays} days, ${diffMins} minutes, ${diffSecs} seconds`}
      onReset={() => setStartDate(new Date())}
      isCircle={true}
      />

      <Counter
      title="Cigarettes Avoided"
      value={`${cigsAvoided} cigarettes`}
      />

      <View className='bg-blue w-full rounded-lg mt-6 p-5'>
      <Text className="text-3xl font-bold text-white text-center">
        Achievements
      </Text>
      
      </View>
      


    </ScrollView>
  );
};

export default Index;
