import { Box } from "@chakra-ui/react";
import BgImg from "../components/bgImg.png";

import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Failure = () => {
  const location = useLocation();

  console.log(location);

  const index = location.state.index;
  console.log(index);

  const [showCompleted, setShowCompleted] = useState(false);

  // 5초 뒤에 상태를 변경하여 화면을 새로 렌더링
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCompleted(true); // 5초 후에 완료 화면으로 전환
    }, 2000);

    // 컴포넌트가 unmount 될 때 타이머를 정리
    return () => clearTimeout(timer);
  }, []);

  const arrest = () => {
    switch (index) {
      case 1:
      case 4:
      case 6:
      case 7:
        return "당신은 체포되었습니다.";

      case 2:
      case 3:
        return "당신은 절뚝이가 되었습니다.";

      case 8:
        return "당신은 사망하였습니다.";
    }
  };

  const reason = () => {
    switch (index) {
      case 1:
      case 4:
      case 6:
      case 7:
        return "수상함을 감지한 이웃에게 신고당함.";

      case 2:
        return "숨어있던 반려견에 물림.";

      case 3:
        return "장애물에 걸려 넘어짐.";
      case 8:
        return "추락사.";
    }
  };
  return (
    <>
      {showCompleted ? (
        <Box
          maxW={"450px"}
          // p={"20px"}
          maxH={"900px"}
          h={"100vh"}
          bgImage={`url(${BgImg})`}
          bgRepeat={"no-repeat"}
          bgPosition={"center"}
          m={"0 auto"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <Box
            width={"90%"}
            border={"1px solid black"}
            backgroundColor={"white"}
            p={"10px"}
            borderRadius={"10px"}
            borderBottom={"3px solid black"}
            marginTop={"50px"}
          >
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              border={"1px solid black"}
              backgroundColor={"white"}
              p={"20px"}
              textAlign={"center"}
              borderRadius={"10px"}
              borderTop={"3px solid black"}
              fontSize={"20px"}
              fontWeight={"500"}
            >
              <Box w={"100%"}>{arrest()}</Box>
              <Box w={"100%"} fontSize={"14px"} marginTop={"40px"}>
                사유 : {reason()}
              </Box>
            </Box>
          </Box>
          <Link to={"/"}>
            <Box w={"100%"} as="h4" fontSize={"20px"} marginTop={"15px"}>
              다시하기
            </Box>
          </Link>
        </Box>
      ) : (
        <></>
      )}
    </>
  );
};

export default Failure;
