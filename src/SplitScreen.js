import React from "react";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
`;
const Pane = styled.div`
  flex: ${(props) => props.weight};
`;
const SplitScreen = ({ children, leftLen = 1, rightLen = 1 }) => {
  const [left, rightHome, right1About] = children;
  return (
    <Container>
      <Pane weight={leftLen}>{left}</Pane>

      <Pane weight={rightLen}>
        {rightHome}
        {right1About}
      </Pane>
    </Container>
  );
};

export default SplitScreen;
