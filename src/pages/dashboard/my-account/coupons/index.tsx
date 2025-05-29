import CCouponCard from "../../../../components/atoms/c-couponcard";
import { Col, Row } from "antd";
import DashboardLayout from "../../../../components/layouts/dashboard-layout";
import Cbutton from "../../../../components/atoms/c-button";

const CouponsPage = () => {
  return (
    <DashboardLayout>
      <div className="bg-white p-4">
        <div className="!flex !justify-end  mb-2 ">
          <Cbutton label="Add Coupons" className="!w-1/8 !py-5" />
        </div>
        <div>
          <Row className=" flex justify-center space-x-3">
            <Col className="!flex !flex-col !space-y-4">
              <CCouponCard
                code="WPMK42201"
                discount="Off $45.00"
                expiry="Tuesday, Sep 24"
              />
              <CCouponCard
                code="WPMK42201"
                discount="Off $45.00"
                expiry="Tuesday, Sep 24"
              />
            </Col>
            <Col className="!flex !flex-col !space-y-3">
              <CCouponCard
                code="WPMK42201"
                discount="Off $45.00"
                expiry="Tuesday, Sep 24"
              />
              <CCouponCard
                code="WPMK42201"
                discount="Off $45.00"
                expiry="Tuesday, Sep 24"
              />
            </Col>

            <Col className="!flex !flex-col !space-y-3">
              <CCouponCard
                code="WPMK42201"
                discount="Off $45.00"
                expiry="Tuesday, Sep 24"
              />
              <CCouponCard
                code="WPMK42201"
                discount="Off $45.00"
                expiry="Tuesday, Sep 24"
              />
            </Col>
          </Row>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CouponsPage;
