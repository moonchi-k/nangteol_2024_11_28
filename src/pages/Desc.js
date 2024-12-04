import { Box } from "@chakra-ui/react";
import BgImg from "../components/bgImg.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Typed } from "react-typed";

const Desc = () => {
  const navigate = useNavigate(); // useNavigate 훅을 사용하여 페이지 이동

  // useEffect(() => {
  //   // 3초 후에 페이지 리디렉션
  //   const timer = setTimeout(() => {
  //     navigate("/options"); // '/new-page'로 이동
  //   }, 3000); // 3초 (3000ms) 후에 리디렉션

  //   // 컴포넌트가 언마운트될 때 타이머를 정리
  //   return () => clearTimeout(timer);
  // }, [navigate]);

  const [isMounted, setIsMounted] = useState(false);

  // useEffect(() => {
  //   setIsMounted(true); // 컴포넌트가 마운트된 후 상태 업데이트
  // }, []);

  const typedRef = useRef(null);
  const typedRefSecond = useRef(null);
  const [showSecondTyped, setShowSecondTyped] = useState(false);

  useEffect(() => {
    // Typed가 초기화되지 않으면 ref를 통해 초기화
    if (typedRef.current) {
      new Typed(typedRef.current, {
        strings: [
          "며칠 째 굶주린 당신은 지금 흑백아파트 화단에 서 있습니다. 지금 가장 먹고 싶은 음식은 까르보나라입니다. 까르보나라를 해먹기 위해서는 계란, 우유, 치즈, 베이컨이 필요합니다. 문제는 ... 당신은 지갑에 먼지만 가득한 빈털터리라는 것입니다.",
        ],
        typeSpeed: 50,
        loop: false,
        showCursor: false,
        onComplete: () => {
          setShowSecondTyped(true);
        },
      });
    }
  }, []);

  useEffect(() => {
    // 두 번째 Typed 컴포넌트 초기화
    if (showSecondTyped && typedRefSecond.current) {
      new Typed(typedRefSecond.current, {
        strings: [
          "아! 그 순간 당신의 뇌리 속에 친하게 지내던 이웃의 집이 비어있단 사실이 스쳐갑니다. 절박한 당신은 망설임 없이 까르보나라의 재료를 훔치기 위해 이웃의 집으로 향해야 합니다. 잊지마세요! 기회는 단 한 번, 지금 뿐입니다!",
        ],
        typeSpeed: 50,
        loop: false,
        showCursor: false, // 커서 숨기기
        onComplete: () => {
          setTimeout(() => {
            navigate("/options");
          }, 3000);
        },
      });
    }
  }, [showSecondTyped]); // 첫 번째 타이핑이 끝난 후 두 번째 타이핑 시작

  return (
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
        w={"90%"}
        border={"1px solid black"}
        backgroundColor={"white"}
        p={"10px"}
        borderRadius={"10px"}
        borderBottom={"3px solid black"}
        marginTop={"20px"}
      >
        <Box
          border={"1px solid black"}
          backgroundColor={"white"}
          p={"15px"}
          textAlign={"center"}
          borderRadius={"10px"}
          borderTop={"3px solid black"}
          fontSize={"14px"}
        >
          <Box fontSize="xl" color="teal.500" fontWeight="bold">
            <div ref={typedRef}></div>
          </Box>
        </Box>
      </Box>

      {showSecondTyped && (
        <Box
          w={"90%"}
          border={"1px solid black"}
          backgroundColor={"white"}
          p={"10px"}
          borderRadius={"10px"}
          borderBottom={"3px solid black"}
          marginTop={"10px"}
        >
          <Box
            border={"1px solid black"}
            backgroundColor={"white"}
            p={"15px"}
            textAlign={"center"}
            borderRadius={"10px"}
            borderTop={"3px solid black"}
            fontSize={"14px"}
          >
            <Box fontSize="xl" color="teal.500" fontWeight="bold">
              <div ref={typedRefSecond}></div>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Desc;
