import { Box, Text } from "@chakra-ui/react";
import BgImg from "../components/bgImg.png";
import { questions } from "../components/questions";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Options = () => {
  const navigate = useNavigate();

  const [question, setQuestions] = useState(questions);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = question[currentQuestionIndex];
  const selectedAnswers = useRef();

  const questionContent = currentQuestion.q;
  const firstAnswerContent = currentQuestion.a[0].text;
  const secondAnswerContent = currentQuestion.a[1].text;

  // console.log(question[0].a[0]);

  const FirstclickHandler = (answerIndex) => {
    // console.log(currentQuestion);

    if (!currentQuestion.a || !currentQuestion.a[answerIndex]) {
    }
    const selectedAnswer = currentQuestion.a[answerIndex].text;
    // console.log(selectedAnswer);
    // console.log(answerIndex);
    // console.log(currentQuestionIndex);
    selectedAnswers.current = selectedAnswer;
    // console.log(selectedAnswers);

    // const selectedAnswer = currentQuestion.a[answerIndex];
    if (currentQuestionIndex === 1) {
      console.log(selectedAnswer);
      if (selectedAnswer.includes("주민")) {
        navigate("/failure");
      } else {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }
    } else if (currentQuestionIndex === 0) {
      if (selectedAnswer.includes("계단")) {
        setCurrentQuestionIndex(currentQuestionIndex + 2);
      } else {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }
    }
  };

  const SecondclickHandler = () => {
    if (currentQuestionIndex < question.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      console.log(currentQuestionIndex);
    } else {
      navigate("/success");
    }
  };

  return (
    <Box
      maxW={"450px"}
      maxH={"900px"}
      h={"100vh"}
      bgImage={`url(${BgImg})`}
      bgRepeat={"no-repeat"}
      bgPosition={"center"}
      m={"0 auto"}
      textAlign={"center"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
    >
      <Text
        marginTop={"70px"}
        fontSize={"34px"}
        as={"h5"}
        letterSpacing={"-6px"}
      >
        {questionContent}
      </Text>
      <Box
        w={"280px"}
        h={"78px"}
        marginTop={"30px"}
        backgroundColor={"white"}
        border={"2px solid black"}
        borderBottom={"6px solid black"}
        borderRadius={"50px"}
        p={"5px"}
      >
        <Box
          onClick={() => FirstclickHandler(0)}
          w={"265px"}
          h={"63px"}
          border={"2px solid black"}
          borderTop={"6px solid black"}
          borderRadius={"50px"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          {firstAnswerContent}
        </Box>
      </Box>

      <Box
        w={"280px"}
        h={"78px"}
        marginTop={"15px"}
        backgroundColor={"white"}
        border={"2px solid black"}
        borderBottom={"6px solid black"}
        borderRadius={"50px"}
        p={"5px"}
      >
        <Box
          onClick={() => FirstclickHandler(1)}
          w={"265px"}
          h={"63px"}
          border={"2px solid black"}
          borderTop={"6px solid black"}
          borderRadius={"50px"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          {secondAnswerContent}
        </Box>
      </Box>
    </Box>
  );
};

export default Options;
