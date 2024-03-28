import React from "react";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
`;
const Pane = styled.div`
  flex: ${(props) => props.weight};
`;
const SplitScreen = ({ children, leftLen = 1, rightLen = 1 }) => {
  const [left, right] = children;
  return (
    <Container>
      <Pane weight={leftLen}>{left}</Pane>

      <Pane weight={rightLen}>
        {right}
        {right}
      </Pane>
    </Container>
  );
};

export default SplitScreen;
