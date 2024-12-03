import { Box } from "@chakra-ui/react";
import BgImg from "../components/bgImg.png";

const Success = () => {
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
          요리중
        </Box>
      </Box>
    </Box>
  );
};

export default Success;
