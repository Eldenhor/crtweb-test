import React, { useEffect } from "react";
import { useAppSelector } from "../../hooks/useAppSelector";
import API from "../../services/api";
import { ApartmentsCard } from "../../components/apartmentsCard";
import {
  StyledGridContainer,
  StyledContainer,
} from "./styled";

export const HomePage = () => {
  const apartmentsData = useAppSelector(state => state.Apartments);

  useEffect(() => {
    API.getApartmentsData();
  }, []);

  if (!apartmentsData) {
    return <h1>loading</h1>;
  }

  return (
    <>
      <StyledContainer>
          <StyledGridContainer>
            {
              Object.keys(apartmentsData).map((id) => <ApartmentsCard key={id} cardId={id} apartmentCard={apartmentsData[id]}/>)
            }
          </StyledGridContainer>
      </StyledContainer>
    </>
  );
};
