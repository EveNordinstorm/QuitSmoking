import React from "react";
import { View, Text, TouchableOpacity } from 'react-native';

interface CounterProps {
    title:string;
    value: string;
    onReset?: () => void;
    isCircle?: boolean;
}

const Counter: React.FC<CounterProps> = ({
    title,
    value,
    onReset,
    isCircle = false,
}) => {

    const splitValues = value.split(",").map((v) => v.trim());

    return (
        <View className="w-full bg-purple p-4 mb-4 rounded-lg shadow">
      <Text className="text-2xl font-bold text-center text-white mb-2">
        {title}
      </Text>
      <View
        className={`relative flex items-center justify-center ${
          isCircle ? "w-40 h-40 mx-auto" : ""
        }`}
      >
        {isCircle && (
          <View className="absolute w-full h-full rounded-full border-4 border-white" />
        )}
        {splitValues.map((line, index) => (
          <Text
            key={index}
            className="text-xl text-white text-center mb-1"
          >
            {line}
          </Text>
        ))}
      </View>
      
      {onReset && (
        <TouchableOpacity
          onPress={onReset}
          className="bg-orange py-2 px-4 rounded-full mt-4"
        >
          <Text className="text-white text-center font-bold uppercase">
            Reset Counter
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Counter;
