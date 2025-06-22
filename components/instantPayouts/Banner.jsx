import Breadcrumb from "../breadcrumb/Breadcrumb";
import SmallBanner from "../common/SmallBanner";

const Banner = () => {
  return (
    <SmallBanner titile="Instant Payouts" cls="business-loan">
      <Breadcrumb
        breadcrumbs={[
          ["Home", ""],
          ["Products", ""],
          ["Instant Payouts", "/"],
        //   ["Business Loans", ""],
        ]}
      />
    </SmallBanner>
  );
};

export default Banner;
