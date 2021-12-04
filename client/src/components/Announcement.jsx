import styled from "styled-components";

const Container = styled.div`
  background-color: teal;
  color: white;
  font-size: 16px;
  height: 30px;
  padding: 6px;
  display: flex;
  text-align: center;
  justify-content: center;
  font-weight: 200;
`;

const Announcement = () => {
  return <Container>Super Deals! Free shopping on orders Over $50</Container>;
};

export default Announcement;
