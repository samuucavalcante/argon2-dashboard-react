import React, { ChangeEvent, useCallback, useState } from "react";
import { Menu } from "../components/Menu";
import { Row, Col, Space } from "antd";
import { AppBar } from "../components/Appbar";
import { ListAtomCardDashboard } from "../components/dashboard/ListAtomCardDashboard";
import { SalesOverview } from "../components/dashboard/SalesOverview";
import { Slider } from "../components/Slider";
import { SliderAntd } from "../components/Slider/SliderAntd";
import { SalesByCountry } from "../components/dashboard/SalesByCountry";
import { Categories } from "../components/dashboard/Categories";
import { Footer } from "../components/Footer";

export const DashboardPage = () => {
  const [input, setInput] = useState("");

  return (
    <Row gutter={24}>
      <Col xl={4} span={0}>
        <div className=" fixed min-w-[15.5vw] min-h-full ">
          <Menu />
        </div>
      </Col>
      <Col xl={20} span={24}>
        <AppBar />
        <ListAtomCardDashboard />
        <Row style={{ marginTop: 28 }} gutter={[24, 24]}>
          <Col xl={13} lg={24} md={24} span={24}>
            <Row gutter={[24, 24]}>
              <Col span={24}>
                <SalesOverview />
              </Col>
              <Col span={24}>
                <SalesByCountry />
              </Col>
            </Row>
          </Col>
          <Col xl={11} lg={24} span={24}>
            <Row gutter={[24, 24]} >
              <Col span={24}>
                <SliderAntd />
              </Col>
              <Col span={24}>
                <Categories />
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col span={24}>
              <Footer/>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
