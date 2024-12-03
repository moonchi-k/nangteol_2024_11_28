import { Box, Text } from "@chakra-ui/react";
import BgImg from "../components/bgImg.png";
import { questions } from "../components/questions";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Options = () => {
  const [question, setQuestions] = useState(questions);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const navigate = useNavigate();
  const currentQuestion = question[currentQuestionIndex];
  const questionContent = currentQuestion.q;
  const firstAnswerContent = currentQuestion.a[0].text;
  const secondAnswerContent = currentQuestion.a[1].text;

  const clickHandler = () => {
    if (currentQuestionIndex < question.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
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
      <Text marginTop={"90px"} fontSize={"36px"}>
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
          onClick={clickHandler}
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
          onClick={clickHandler}
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
