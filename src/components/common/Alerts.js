import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Animated } from "react-animated-css";
const Alerts = () => {
  const alerts = useSelector((state) => state.alerts.alerts);

  return (
    <>
      {alerts != null &&
        alerts.length !== 0 &&
        alerts.map((alert, index) => (
          <AnimatedWrapper
            key={alert.id}
            animationIn="bounceInUp"
            animationOut="bounceOutDown"
            isVisible={alert.visible}
            style={{
              bottom: (index + 1) * 30,
              marginBottom: index === 0 ? "0" : 35 * index,
            }}
          >
            <AlertWrapper id={alert.id} type={alert.type}>
              <p>{alert.message}</p>
            </AlertWrapper>
          </AnimatedWrapper>
        ))}
    </>
  );
};

export default Alerts;

const AnimatedWrapper = styled(Animated)`
  position: fixed;

  left: 45%;
  z-index: 9999;
  //   transform: translate(-50%, 50%) !important;
`;

const AlertWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  width: 300px;
  height: 50px;
  background-color: ${(props) =>
    props.type === "success" ? "#35c587" : "#e1002d"};

  p {
    color: #fff;
    text-align: center;
    font-size: 1.2em;
    letter-spacing: 1.2px;
  }
`;
