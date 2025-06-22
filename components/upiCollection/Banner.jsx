import Breadcrumb from "../breadcrumb/Breadcrumb";
import SmallBanner from "../common/SmallBanner";

const Banner = () => {
  return (
    <SmallBanner titile="UPI Collection" cls="business-loan">
      <Breadcrumb
        breadcrumbs={[
          ["Home", ""],
          ["Products", ""],
          ["UPI Collection", "/"],
        //   ["Business Loans", ""],
        ]}
      />
    </SmallBanner>
  );
};

export default Banner;
