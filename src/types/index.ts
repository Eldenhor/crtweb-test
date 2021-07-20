export type ApartmentCardType = {
  image: string
  like: boolean
  type: string
  id: string
  attributes: {
    title: string
    rooms: string
    address: {
      city: string
      street: string
      house: string
      room: string
    },
    area: string
    unit: string
  },
  relationships: {
    type: string
    id: string
    attributes: {
      first_name: string
      last_name: string
      middle_name: string
    }
  }
}

export type ApartmentsDataType = ApartmentCardType[]

export type RootStateType = {
  Apartments: { [key: string]: ApartmentCardType }
}
