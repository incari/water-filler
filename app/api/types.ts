// Type to be extendable to more stations and volumes.
export type StationsPrices = {
  stationsPrices: GasPrices[];
};

export type GasPrices = {
  [stationName: string]: BottleSizes;
};

export type BottleSizes = {
  [volume: string]: number;
};
