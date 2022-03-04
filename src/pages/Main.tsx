import { Container, Grid } from "@mui/material";
import _ from "lodash";
import { useCallback, useEffect, useState } from "react";
import samples from "../backend/data";
import Card from "./components/Card";
import { Asset } from "../types/assets";
import defaultCoinIcon from "../assets/DefaultCoin.svg";
import { statusCodeMap } from "../enums/StatusColors";

// API Mock Up
const fetchApiMock: () => Promise<Asset[]> = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      return resolve(samples);
    }, 3000);
  });
const getCoinPrice: (subscriptionId: number) => Promise<number> = (
  subscriptionId
) =>
  new Promise((resolve) => {
    setTimeout(() => {
      return resolve(3412025.12);
    }, 2000);
  });

const getCoinLogo: (subscriptionId: number) => Promise<string> = (
  subscriptionId
) =>
  new Promise((resolve) => {
    setTimeout(() => {
      return resolve(defaultCoinIcon);
    }, 2000);
  });

const Main = () => {
  const defaultData = _.range(0, 8).map(() => ({}));
  const [data, setData] = useState(defaultData as Asset[]);
  const [selected, setSelected] = useState(null as number | null);

  const fetchApi = useCallback(async () => {
    const response = await fetchApiMock();
    const dataWithPriceAndLogo = await Promise.all(
      response.map(async (item) => {
        const { subscriptionId } = item;
        const [price, logo] = await Promise.all([
          getCoinPrice(subscriptionId),
          getCoinLogo(subscriptionId),
        ]);
        return {
          ...item,
          price,
          logo,
        };
      })
    );
    setData(dataWithPriceAndLogo);
  }, []);

  useEffect(() => {
    fetchApi();
  }, []);

  const getExpiryDate = ({
    blockNumber,
    leaseEnd,
    createdTimestamp,
  }: {
    blockNumber: number;
    leaseEnd: number;
    createdTimestamp: string;
  }) => {
    if (!createdTimestamp || !leaseEnd || !blockNumber) return "";
    const date = new Date(createdTimestamp);
    date.setSeconds(date.getSeconds() + 3 * (leaseEnd - blockNumber));

    const day = date.toLocaleDateString("en-US", { day: "2-digit" });
    const month = date.toLocaleDateString("en-US", { month: "short" });
    const year = date.toLocaleDateString("en-US", { year: "numeric" });
    const hour = `${date.getHours()}`.padStart(2, "0");
    const minute = `${date.getMinutes()}`.padStart(2, "0");
    return `${day}/${month}/${year} ${hour}:${minute}`;
  };

  return (
    <Container>
      <Grid container spacing={2}>
        {data.map((item, key) => {
          const {
            symbol,
            createdTimestamp,
            leaseEnd,
            blockNumber,
            logo,
            price,
            status,
          } = item;
          const expiryDate = getExpiryDate({
            createdTimestamp,
            leaseEnd,
            blockNumber,
          });

          return (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={item.id || key}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Card
                coinName={symbol}
                logo={logo}
                expiryDate={expiryDate}
                price={price}
                status={statusCodeMap[status]}
                isActive={selected === item.id}
                handleOnClick={() => setSelected(item.id)}
              />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Main;
