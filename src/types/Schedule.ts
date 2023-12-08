interface IAddress {
  text: string,
  coordinates: string
}

export interface ISchedule {
  time: `${string}:${string}`,
  title: string,
  description?: string,
  address?: IAddress
}
