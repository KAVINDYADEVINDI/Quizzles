import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  FlatList,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Quiz = ({ navigation }) => {
  const [questions, setQuestions] = useState([]);

  const getQuiz = async () => {
    const url = "https://opentdb.com/api.php?amount=10";
    const res = await fetch(url);
    const data = await res.json();
    // console.log(res);
    //console.log(data.results[0]);

    //create array for question
    const newQuestion = [
      {
        questionText: data.results[0].question,
        answerOptions: [
          { answerText: data.results[0].correct_answer, isCorrect: true },
          {
            answerText: data.results[0].incorrect_answers[0],
            isCorrect: false,
          },
          {
            answerText: data.results[0].incorrect_answers[1],
            isCorrect: false,
          },
          {
            answerText: data.results[0].incorrect_answers[2],
            isCorrect: false,
          },
        ],
      },
      {
        questionText: data.results[1].question,
        answerOptions: [
          {
            answerText: data.results[1].incorrect_answers[1],
            isCorrect: false,
          },
          {
            answerText: data.results[1].incorrect_answers[0],
            isCorrect: false,
          },
          {
            answerText: data.results[1].correct_answer,
            isCorrect: true,
          },
          {
            answerText: data.results[1].incorrect_answers[2],
            isCorrect: false,
          },
        ],
      },
      {
        questionText: data.results[2].question,
        answerOptions: [
          {
            answerText: data.results[2].incorrect_answers[0],
            isCorrect: false,
          },
          {
            answerText: data.results[2].correct_answer,
            isCorrect: true,
          },
          {
            answerText: data.results[2].incorrect_answers[1],
            isCorrect: false,
          },

          {
            answerText: data.results[2].incorrect_answers[2],
            isCorrect: false,
          },
        ],
      },
      {
        questionText: data.results[3].question,
        answerOptions: [
          {
            answerText: data.results[3].incorrect_answers[0],
            isCorrect: false,
          },

          {
            answerText: data.results[3].incorrect_answers[1],
            isCorrect: false,
          },

          {
            answerText: data.results[3].incorrect_answers[2],
            isCorrect: false,
          },
          {
            answerText: data.results[3].correct_answer,
            isCorrect: true,
          },
        ],
      },
      {
        questionText: data.results[4].question,
        answerOptions: [
          {
            answerText: data.results[4].incorrect_answers[0],
            isCorrect: false,
          },

          {
            answerText: data.results[4].incorrect_answers[1],
            isCorrect: false,
          },
          {
            answerText: data.results[4].correct_answer,
            isCorrect: true,
          },

          {
            answerText: data.results[4].incorrect_answers[2],
            isCorrect: false,
          },
        ],
      },
    ];
    setQuestions(newQuestion);
  };

  useEffect(() => {
    getQuiz();
  }, []);
  console.log(questions[0]);
  //  console.log(Setquestions.questionText);

  return (
    <View style={{ width: "100%", height: "100%" }}>
      {/* <FlatList
        data={questions}
        renderItem={(item) => {
          item.questionText
        }}
      /> */}
      <LinearGradient
        colors={["rgba(101, 48, 186,1)", "rgba(160, 57, 219,1)"]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 0 }}
      >
        <View style={styles.container}>
          <View style={styles.bannerContainer}>
            <Image
              source={require("../assets/images/wel.png")}
              style={styles.banner}
              resizeMode="contain"
            />
          </View>

          <View style={styles.top}>
            <Text style={styles.topText}>Question 1/5</Text>
          </View>

          <View style={styles.question}>
            <Text style={styles.questionText}>{questions[0].questionText}</Text>
          </View>
          <View style={styles.options}>
            <TouchableOpacity style={styles.option}>
              <Text style={styles.optionText}>Seoul</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
              <Text style={styles.optionText}>Senegal</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
              <Text style={styles.optionText}>Colarado</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
              <Text style={styles.optionText}>California</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.bottom}>
            {/* <TouchableOpacity style={styles.button}>
              <LinearGradient
                colors={["rgba(30,201,76,1)", "rgba(20,99,41,1)"]}
                start={{ x: 1, y: 0 }}
                end={{ x: 0, y: 0 }}
                style={styles.button}
              >
                <Text style={styles.buttonText}>SKIP</Text>
              </LinearGradient>
            </TouchableOpacity> */}
            <TouchableOpacity style={styles.button}>
              <LinearGradient
                colors={["rgba(30,201,76,1)", "rgba(20,99,41,1)"]}
                start={{ x: 1, y: 0 }}
                end={{ x: 0, y: 0 }}
                style={styles.button}
              >
                <Text style={styles.buttonText}>NEXT</Text>
              </LinearGradient>
            </TouchableOpacity>
            {/* <TouchableOpacity onPress={() => navigation.navigate("Result")}>
              <Text>END</Text>
            </TouchableOpacity> */}
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    padding: 12,
    width: "100%",
    height: "100%",
  },
  banner: {
    height: 300,
    width: 300,
  },
  bannerContainer: {
    justifyContent: "center",
    alignItems: "center",
  },

  top: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 16,
  },
  topText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  question: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  questionText: {
    fontSize: 18,
  },
  options: {
    paddingHorizontal: 20,
    marginVertical: 16,
  },
  option: {
    paddingVertical: 12,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#af46eb",
  },
  optionText: {
    fontSize: 16,
  },
  bottom: {
    marginBottom: 12,
    paddingHorizontal: 26,
    paddingVertical: 26,
    justifyContent: "center",
  },
  button: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    borderRadius: 10,
  },
  buttonText: {
    paddingHorizontal: 20,
    paddingVertical: 7,
  },
  parent: {
    height: "100%",
  },
});
