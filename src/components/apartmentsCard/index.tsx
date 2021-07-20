import React from "react";
import {
  StyledContainer,
  StyledTitle,
  StyledDescription,
  StyledImage,
  StyledLikeStar
} from "./styled";
import { ApartmentCardType } from "../../types";
import { Star } from "../star";
import API from "../../services/api"
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { UpdateApartmentLike } from "../../store/actions/apartments";

type ApartmentsCardType = {
  apartmentCard: ApartmentCardType,
  cardId: string
}
export const ApartmentsCard = ({apartmentCard, cardId}: ApartmentsCardType) => {
  console.log(cardId)
  const dispatch = useAppDispatch();

  const likeHandle = () => {
    dispatch(UpdateApartmentLike(apartmentCard.id, !apartmentCard.liked))
    API.likeApartment(cardId, true)
  }

  return (
    <StyledContainer>
      <StyledLikeStar>
        <button onClick={likeHandle}>
          <Star liked={apartmentCard.liked}/>
        </button>
      </StyledLikeStar>
      <StyledTitle>
        {apartmentCard.title}
      </StyledTitle>
      <StyledDescription>
        {apartmentCard.description}
      </StyledDescription>
      <StyledImage src={apartmentCard.image}/>
    </StyledContainer>
  );
};
