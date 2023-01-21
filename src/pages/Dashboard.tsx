import React from "react";
import { Menu } from "../components/Menu";
import { Row, Col, Space } from "antd";
import { AppBar } from "../components/Appbar";
import { ListAtomCardDashboard } from "../components/dashboard/ListAtomCardDashboard";
import { SalesOverview } from "../components/dashboard/SalesOverview";
import { Slider } from "../components/Slider";
import { SliderAntd } from "../components/Slider/SliderAntd";

export const DashboardPage = () => {
  return (
    <Row gutter={24}>
      <Col xl={4} span={0}>
        <div className=" fixed min-w-[15.5vw] min-h-full ">
          <Menu />
        </div>
      </Col>
      <Col xl={20} span={24} style={{ marginBottom: 100 }}>
        <Space className="w-full" direction="vertical" size="large">
          <AppBar />
          <ListAtomCardDashboard />
          <Row gutter={[24, 24]}>
            <Col xl={13} lg={24} md={24} span={24}>
              <SalesOverview />
            </Col>
            <Col xl={11} lg={24} span={24}>
              <SliderAntd />
            </Col>
          </Row>
        </Space>
      </Col>
    </Row>
  );
};
