import {Box} from "@mui/material";
import AppBar from "./AppBar";

import {Children, ReactNode, useEffect} from "react";
interface Props {
  children?: ReactNode;
}

const layout = ({children}: Props) => {
  return (
    <Box>
      <AppBar />
    </Box>
  );
};

export default layout;
