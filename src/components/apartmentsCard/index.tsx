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
  const dispatch = useAppDispatch();

  const likeHandle = () => {
    dispatch(UpdateApartmentLike(apartmentCard.id, !apartmentCard.like))
    API.likeApartment(cardId, !apartmentCard.like)
  }

  return (
    <StyledContainer>
      <StyledLikeStar>
        <button onClick={likeHandle}>
          <Star liked={apartmentCard.like}/>
        </button>
      </StyledLikeStar>
      <StyledTitle>
        {apartmentCard.attributes.title}
      </StyledTitle>
      <StyledDescription>
        {apartmentCard.relationships.attributes.first_name}
      </StyledDescription>
      <StyledImage src={apartmentCard.image}/>
    </StyledContainer>
  );
};
