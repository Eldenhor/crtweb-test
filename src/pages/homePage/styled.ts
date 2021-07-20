import styled from "styled-components";

export const StyledContainer = styled.div(props => ({
  display: "flex",
  justifyContent: "center",
  padding: "2rem",
  backgroundColor: props.theme.colors.color_lightgray,
  minHeight: "100vh",
  paddingTop: "4rem"
}));
export const StyledGridContainer = styled.div({
  display: "grid",
  gridGap: "2rem",
  gridTemplateColumns: "repeat(auto-fit, minmax(28rem, max-content))",
  maxWidth: "100%",
  height: "100%"
});

