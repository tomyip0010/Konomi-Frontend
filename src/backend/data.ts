import _ from "lodash";
import { Asset } from "../types/assets";
import { randomDate } from "../util/utilities";

const sample: Asset = {
  id: 71,
  blockNumber: 12297450,
  transactionIndex: 6,
  sources: [0, 1, 2, 3],
  symbol: "eth",
  slug: "ethereum",
  leaseEnd: 12499050,
  subscriptionId: 7,
  networkId: 0,
  aggregationStrategy: 1,
  reportingStrategy: 0,
  status: 1,
  client: {
    clientType: 0,
    connectionInfo: {
      contractAddress: "0x0F9dfd6043965B02e74D01188c13936fBE71D688",
      networkId: 0,
    },
  },
  createdTimestamp: "2021-09-12T08:36:26.555",
  updatedTimestamp: "2021-09-12T08:39:16.526",
  display: true,
};

const samples: Asset[] = _.range(0, 8).map((i) => {
  const createDate = randomDate(new Date(2021, 9, 12), new Date());
  const updateDate = randomDate(createDate, new Date());
  return {
    ...sample,
    id: i,
    createdTimestamp: createDate.toISOString(),
    updatedTimestamp: updateDate.toISOString(),
  };
});

export default samples;
