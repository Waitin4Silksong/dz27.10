import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const choices = [
  { label: "🗿", value: "Камінь" },
  { label: "✂", value: "Ножиці" },
  { label: "📃", value: "Папір" },
];

const RockPaperScissors = () => {
  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");

  const playGame = (userPick) => {
    const computerPick = choices[Math.floor(Math.random() * choices.length)].value;
    setUserChoice(userPick);
    setComputerChoice(computerPick);
    determineWinner(userPick, computerPick);
  };

  const determineWinner = (user, computer) => {
    if (user === computer) {
      setResult("Нічия!");
    }
    else if ((user === "Камінь" && computer === "Ножиці") || (user === "Ножиці" && computer === "Папір") || (user === "Папір" && computer === "Камінь")) {
      setResult("Ви виграли!");
    }
    else {
      setResult("Ви програли");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Камінь, Ножиці, Папір</Text>
      <View style={styles.choices}>
        {choices.map((choice) => (
          <TouchableOpacity
            key={choice.value}
            style={styles.button}
            onPress={() => playGame(choice.value)}
          >
            <Text style={styles.buttonText}>{choice.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {userChoice && computerChoice && (
        <Text style={styles.result}>
          Ви вибрали: {userChoice}{"\n"}Комп'ютер вибрав: {computerChoice}{"\n"}
          {result}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f0e1", 
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: "#7a5c4c", 
  },
  choices: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  button: {
    backgroundColor: "#d8c8b6", 
    padding: 15,
    borderRadius: 5,
    margin: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2, 
  },
  buttonText: {
    color: "#4f3b2c",
    fontSize: 22,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    textAlign: "center",
    color: "#4f3b2c", 
  },
});

export default RockPaperScissors;
