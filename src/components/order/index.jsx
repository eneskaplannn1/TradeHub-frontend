import { styled } from "styled-components";
import OrderHead from "./OrderHead.jsx";
import OrderFooter from "./OrderFooter.jsx";

const StyledOrder = styled.div`
  margin-bottom: 2rem;
`;

function Order() {
  return (
    <StyledOrder>
      <OrderHead />
      <OrderFooter />
    </StyledOrder>
  );
}

export default Order;
