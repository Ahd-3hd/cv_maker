import React, { useRef, useEffect, useState } from "react";
import { Animated, View, Text } from "react-native";
import Styles from "./index.style";
import { useWindowDimensions } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const useCounter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCounter(counter + 1);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [counter]);

  return [counter];
};

export default function WizardCarousel() {
  const [counter] = useCounter();
  const { width } = useWindowDimensions();
  const { progress, questions } = useSelector((state: RootState) => state.cv);
  const counterValue = useRef(counter);

  const position = useRef(new Animated.Value(progress));

  useEffect(() => {
    counterValue.current = progress;
    Animated.timing(position.current, {
      toValue: -counterValue.current * width,
      useNativeDriver: true,
      duration: 700,
    }).start();
  }, [progress]);

  return (
    <View style={Styles.container}>
      {questions.map((entry, i) => {
        return (
          <Animated.View
            key={entry.question}
            style={[
              {
                ...Styles.animatedContainer,
                width: width,
              },
              {
                transform: [
                  {
                    translateX: position.current,
                  },
                ],
              },
            ]}
          >
            <View style={Styles.cardContent}>
              <Text style={Styles.cardTitle}>{entry.question}</Text>
            </View>
          </Animated.View>
        );
      })}
    </View>
  );
}
