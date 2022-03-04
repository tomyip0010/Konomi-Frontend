export type statusCode = "active" | "terminated" | "suspended";

export interface Asset {
  id: number;
  blockNumber: number;
  transactionIndex: number;
  sources: number[];
  symbol: string;
  slug: string;
  leaseEnd: number;
  subscriptionId: number;
  networkId: number;
  aggregationStrategy: number;
  reportingStrategy: number;
  status: 0 | 1 | 2;
  client: {
    clientType: number;
    connectionInfo: {
      contractAddress: string;
      networkId: number;
    };
  };
  createdTimestamp: string;
  updatedTimestamp: string;
  display: boolean;
  price?: number;
  logo?: string;
}
