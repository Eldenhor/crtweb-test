export type ApartmentCardType = {
  id: string
  title: string
  description: string
  image: string
  liked: boolean
}

export type ApartmentsDataType = ApartmentCardType[]

export type RootStateType = {
  Apartments: { [key: string]: ApartmentCardType }
}
