import React from "react";
import { Menu } from "../components/Menu";
import { Row, Col, Space } from "antd";
import { AppBar } from "../components/Appbar";
import { ListAtomCardDashboard } from "../components/dashboard/ListAtomCardDashboard";
import { SalesOverview } from "../components/dashboard/SalesOverview";

export const DashboardPage = () => {
  return (
    <Row gutter={24}>
      <Col xl={4} span={0}>
        <Menu />
      </Col>
      <Col xl={20} span={24}>
        <Space className="w-full" direction="vertical" size="large">
          <AppBar />
          <ListAtomCardDashboard />
          <Row gutter={24}>
            <Col span={14}>
              <SalesOverview />
            </Col>
            <Col span={10}>
            <SalesOverview />
            </Col>
          </Row>
        </Space>
      </Col>
    </Row>
  );
};
