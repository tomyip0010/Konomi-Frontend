import { Box, keyframes } from "@mui/material";
import { grey } from "@mui/material/colors";

const Skeleton = ({
  width,
  height,
  variant = "rect",
}: {
  variant?: "rect" | "circle" | "text";
  width: number | string;
  height: number | string;
}) => {
  const radiusSetting = {
    rect: 4,
    circle: "50%",
    text: 0,
  };

  const animation = keyframes`
    100% {
      transform: translateX(100%);
    }
  `;

  return (
    <Box
      sx={{
        borderRadius: radiusSetting[variant],
        width,
        height,
        backgroundColor: grey[400],
        position: "relative",
        display: "inline-block",
        overflow: "hidden",
        "&::after": {
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          transform: "translateX(-100%)",
          backgroundImage:
            "linear-gradient(90deg, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0.2) 20%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0))",
          animation: `${animation} 2s infinite`,
          content: '""',
        },
      }}
    />
  );
};

export default Skeleton;
