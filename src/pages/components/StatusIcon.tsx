import { Box } from "@mui/material";
import { statusColors } from "../../enums/StatusColors";
import { statusCode } from "../../types/assets";

const StatusIcon = ({ status = "terminated" }: { status?: statusCode }) => {
  return (
    <Box>
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="9" cy="9" r="6.5" stroke={statusColors[status]} />
        <circle
          opacity="0.5"
          cx="9"
          cy="9"
          r="8.75"
          stroke={statusColors[status]}
          strokeWidth="0.5"
        />
        <circle cx="9" cy="9" r="4" fill={statusColors[status]} />
      </svg>
    </Box>
  );
};

export default StatusIcon;
