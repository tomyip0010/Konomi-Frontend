import { statusCode } from "../types/assets";

export const statusCodeMap: Record<number, statusCode> = {
  0: "terminated",
  1: "active",
  2: "suspended",
};

export const statusColors = {
  active: "#76FCB3",
  terminated: "#FF007A",
  suspended: "#FFE500",
};
