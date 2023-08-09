import { Typography, Stack } from "@mui/material";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <Stack
      sx={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h5">ERROR 404</Typography>
      <Typography variant="h6">
        go back to{" "}
        <Link style={{ color: "#3f50b5" }} to="/">
          home page
        </Link>
      </Typography>
    </Stack>
  );
};

export default Error;
