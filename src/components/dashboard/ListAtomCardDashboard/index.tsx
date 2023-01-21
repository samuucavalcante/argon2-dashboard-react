import React from "react";
import { Activity } from "phosphor-react";
import { AtomCardDashboard } from "./AtomCardDashboard";
import { Row, Col } from "antd";

export const ListAtomCardDashboard = () => {
  return (
    <Row gutter={[24, 24]}>
      <Col xl={6} span={12} sm={24} xs={24}>
        <AtomCardDashboard
          title="Today's Money"
          value="$53,000"
          description="+55% since yesterday "
          icon={<Activity />}
        />
      </Col>
      <Col xl={6} span={12} sm={24} xs={24}>
        <AtomCardDashboard
          title="Today's Money"
          value="$53,000"
          description="+55% since yesterday "
          icon={<Activity />}
        />
      </Col>
      <Col xl={6} span={12} sm={24} xs={24}>
        <AtomCardDashboard
          title="Today's Money"
          value="$53,000"
          description="+55% since yesterday "
          icon={<Activity />}
        />
      </Col>
      <Col xl={6} span={12} sm={24} xs={24}>
        <AtomCardDashboard
          title="Today's Money"
          value="$53,000"
          description="+55% since yesterday "
          icon={<Activity />}
        />
      </Col>
    </Row>
  );
};
