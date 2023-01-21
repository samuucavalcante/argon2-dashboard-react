import React from "react";
import { Menu } from "../components/Menu";
import { Row, Col } from "antd";
import { AppBar } from "../components/Appbar";
import { ListAtomCardDashboard } from "../components/dashboard/ListAtomCardDashboard";

export const DashboardPage = () => {
  return (
    <Row gutter={24}>
      <Col xl={4} span={0}>
        <Menu />
      </Col>
      <Col xl={20} span={24}>
        <AppBar />
        <ListAtomCardDashboard />
      </Col>
    </Row>
  );
};
