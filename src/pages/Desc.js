import { Box } from "@chakra-ui/react";
import BgImg from "../components/bgImg.png";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Desc = () => {
  const navigate = useNavigate(); // useNavigate 훅을 사용하여 페이지 이동

  useEffect(() => {
    // 3초 후에 페이지 리디렉션
    const timer = setTimeout(() => {
      navigate("/options"); // '/new-page'로 이동
    }, 3000); // 3초 (3000ms) 후에 리디렉션

    // 컴포넌트가 언마운트될 때 타이머를 정리
    return () => clearTimeout(timer);
  }, [navigate]);
  return (
    <Box
      maxW={"450px"}
      p={"4%"}
      maxH={"900px"}
      h={"100vh"}
      bgImage={`url(${BgImg})`}
      bgRepeat={"no-repeat"}
      bgPosition={"center"}
      m={"0 auto"}
    >
      <Box
        border={"1px solid black"}
        backgroundColor={"white"}
        p={"10px"}
        borderRadius={"10px"}
        borderBottom={"3px solid black"}
        marginTop={"50px"}
      >
        <Box
          border={"1px solid black"}
          backgroundColor={"white"}
          p={"20px"}
          textAlign={"center"}
          borderRadius={"10px"}
          borderTop={"3px solid black"}
          fontSize={"14px"}
        >
          며칠 째 굶주린 당신은 지금 냉털아파트 화단에 서있습니다. 지금 가장
          먹고 싶은 건 까르보나라입니다. 까르보나라를 해먹기 위해서는 계란,
          우유, 파마산치즈, 베이컨이 필요합니다. 문제는... 당신은 지갑에 먼지만
          가득한 빈털터리라는 것입니다.
        </Box>
      </Box>

      <Box
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
          p={"20px"}
          textAlign={"center"}
          borderRadius={"10px"}
          borderTop={"3px solid black"}
          fontSize={"14px"}
        >
          아! 하지만 친하게 지내던 이웃의 집이 비어있다는 사실이 떠올랐습니다.
          절박한 당신은 망설임 없이 까르보나라의 재료를 훔치기 위해 이웃의
          집으로 향해야 합니다. 기회는 지금뿐입니다!
        </Box>
      </Box>
    </Box>
  );
};

export default Desc;
