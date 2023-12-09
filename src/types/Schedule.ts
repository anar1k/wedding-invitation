export type TCoordinates = [number, number];

export interface IAddress {
  text: string,
  coordinates: TCoordinates
}

export interface ISchedule {
  time: `${string}:${string}`,
  title: string,
  description?: string,
  address?: IAddress
}
