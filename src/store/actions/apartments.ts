import * as type from "../reduxTypes";
import { ApartmentsDataType } from "../../types";

export const UpdateApartmentsData = (apartmentsData: ApartmentsDataType) => (
  <const>{
    type: type.UPDATE_APARTMENTS_DATA_SUCCESS,
    apartmentsData: apartmentsData
  }
);

export const UpdateApartmentLike = (id: string, value: boolean) => (
  <const>{
    type: type.UPDATE_APARTMENT_LIKE,
    apartmentId: id,
    likedValue: value
  }
)
