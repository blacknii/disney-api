import { Typography, Stack } from "@mui/material";
import { Link } from "react-router-dom";

interface ErrorProps {
  errorType: "404" | "500";
}

const Error = ({ errorType }: ErrorProps) => {
  if (errorType === "404") {
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
  } else if (errorType === "500") {
    return (
      <Stack
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h5">ERROR 500</Typography>
        <Typography variant="h6">
          The{" "}
          <Link style={{ color: "#3f50b5" }} to="https://disneyapi.dev/">
            Disney API
          </Link>{" "}
          is currently unavailable
        </Typography>
        <Typography variant="h6">
          Please check the{" "}
          <Link style={{ color: "#3f50b5" }} to="https://status.disneyapi.dev/">
            Server Status
          </Link>{" "}
          or try again later
        </Typography>
      </Stack>
    );
  }
};

export default Error;
