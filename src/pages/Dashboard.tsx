import React from "react";
import { Menu } from "../components/Menu";
import { Row, Col } from "antd";
import { AppBar } from "../components/Appbar";

export const DashboardPage = () => {
  return (
    <Row gutter={10}>
      <Col lg={4}>
        <Menu />
      </Col>
      <Col lg={20}>
        <AppBar />
      </Col>
    </Row>
  );
};
