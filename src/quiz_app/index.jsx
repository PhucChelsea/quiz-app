import React from "react";
import { Row, Col } from "antd";
import ListQuestion from "./components/listQuestion";

const HomePage = () => {
  return (
    <Row>
      <Col span={24}>
        <ListQuestion />
      </Col>
    </Row>
  );
};
export default React.memo(HomePage);
