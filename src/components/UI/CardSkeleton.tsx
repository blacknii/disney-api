import { Card, CardContent, Typography, Skeleton } from "@mui/material";

const CardSkeleton = () => {
  return (
    <Card
      sx={{
        width: 250,
        margin: 2,
      }}
      elevation={2}
    >
      <Skeleton variant="rectangular" height={250} />
      <CardContent>
        <Typography
          variant="h5"
          component="div"
          sx={{
            marginBottom: 3,
          }}
        >
          <Skeleton />
        </Typography>
        <Typography variant="subtitle1">
          <Skeleton />
        </Typography>
        <Typography variant="subtitle1">
          <Skeleton />
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardSkeleton;
