import styled from "styled-components";

const Main = styled.main`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${(props) => (props.blue ? "#0070f3" : "black")};
`;

export default function MainComponent({ children }) {
  return <Main>{children}</Main>;
}
