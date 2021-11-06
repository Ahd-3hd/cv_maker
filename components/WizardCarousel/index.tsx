import React, { useRef, useEffect, useState } from "react";
import { Animated, View, Text } from "react-native";
import Styles from "./index.style";
import { useWindowDimensions } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Input from "../InputField";
import { setUserInputs } from "../../redux/slices/cvSlice";

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

//TODO: something wrong with the shadow

export default function WizardCarousel() {
  const dispatch = useDispatch();
  const [counter] = useCounter();
  const { width } = useWindowDimensions();
  const { progress, questions, userInputs } = useSelector(
    (state: RootState) => state.cv
  );
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

  const handleInputChange = (val: string, id: string) => {
    dispatch(setUserInputs({ ...userInputs, [id]: val }));
  };

  return (
    <View style={Styles.container}>
      {questions.map((entry) => {
        return (
          <Animated.View
            key={entry.id}
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
              <Input
                placeholder="eg; John Doe"
                onChangeText={(val) => handleInputChange(val, entry.id)}
              />
            </View>
          </Animated.View>
        );
      })}
    </View>
  );
}
