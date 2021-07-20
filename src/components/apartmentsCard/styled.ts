import styled from "styled-components";

export const StyledContainer = styled.div(props=>({
  ...props.theme.layouts.flex_column_jc_ac,
  backgroundColor: props.theme.colors.color_white,
  borderRadius: "1rem",
  padding: "2rem",
  maxWidth: "28rem"
}));
export const StyledLikeStar = styled.div({
  width: "100%",
  display: "flex",
  justifyContent: "flex-end",
  right: 0
});
export const StyledTitle = styled.h1(props => ({
  ...props.theme.typography.f_roboto_22_26_400
}));
export const StyledDescription = styled.p(props => ({
  ...props.theme.typography.f_roboto_16_18_400,
  color: props.theme.colors.color_darkgray
}));
export const StyledImage = styled.img({
  width: "24rem",
  height: "18rem",
  objectFit: "cover",
  overflow: "hidden"
});
