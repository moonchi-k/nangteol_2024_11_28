import { Box, Image } from "@chakra-ui/react";
import MainImg from "../components/Main.png";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      <Box
        position={"relative"}
        maxW={"450px"}
        maxH={"900px"}
        h={"100vh"}
        m={"0 auto"}
      >
        <Link to="/desc">
          <Image src={MainImg} />
        </Link>
      </Box>
    </>
  );
};
{
}

export default Main;
