import { Box, Stack } from "@mui/material";
import CardBg from "../../assets/CardBg.png";
import ActiveCardBg from "../../assets/ActiveCardBg.png";
import { statusColors } from "../../enums/StatusColors";
import StatusIcon from "./StatusIcon";
import { statusCode } from "../../types/assets";
import Skeleton from "./Skeleton";

const Card = ({
  coinName,
  status,
  logo,
  price,
  expiryDate,
  handleOnClick,
  isActive,
}: {
  coinName?: string;
  status?: statusCode;
  logo?: string;
  price?: number;
  expiryDate?: string;
  handleOnClick: () => void;
  isActive: boolean;
}) => {
  return (
    <Stack
      onClick={handleOnClick}
      sx={{
        width: 290,
        height: 138,
        backgroundImage: `url(${isActive ? ActiveCardBg : CardBg})`,
        position: "relative",
        color: "text.primary",
        cursor: "pointer",
        "&:hover, &:focus, &:active": {
          backgroundImage: `url(${ActiveCardBg})`,
        },
      }}
    >
      <Stack direction={`row`}>
        <Box
          sx={{
            width: 132,
            height: 32,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {coinName ? (
            <Box
              sx={{
                textTransform: "uppercase",
                fontWeight: "bold",
                fontSize: 20,
                lineHeight: "33px",
              }}
            >
              {coinName}
            </Box>
          ) : (
            <Skeleton variant="text" width={60} height={20} />
          )}
        </Box>
        <Stack direction="row" spacing={2} alignItems={`center`} ml={`24px`}>
          <StatusIcon status={status} />
          <Box
            sx={{
              color: statusColors[status || "terminated"],
              textTransform: "capitalize",
              fontWeight: 700,
              fontSize: 18,
              lineHeight: "21px",
            }}
          >
            {status}
          </Box>
        </Stack>
      </Stack>
      <Stack width={`100%`} height={`100%`} justifyContent={`center`}>
        <Stack direction={`row`} justifyContent={`center`}>
          {logo ? (
            <Box width={70} height={70}>
              <img src={logo} alt={`${coinName} logo`} width={`100%`} />
            </Box>
          ) : (
            <Skeleton width={70} height={70} variant={`circle`} />
          )}
          <Stack
            sx={{
              ml: "35px",
              textAlign: "right",
              justifyContent: "center",
              fontWeight: 500,
            }}
          >
            <Box
              sx={{
                fontSize: 21,
                lineHeight: "25px",
                mb: "13px",
              }}
            >
              {price ? (
                `$ ${price?.toLocaleString()}`
              ) : (
                <Skeleton width={143} height={21} variant={`text`} />
              )}
            </Box>
            {expiryDate ? (
              <Box sx={{ fontSize: 13, lineHeight: "24px" }}>
                End: {expiryDate}
              </Box>
            ) : (
              <Skeleton width={143} height={13} variant={`text`} />
            )}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Card;
