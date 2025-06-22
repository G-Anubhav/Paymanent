import Breadcrumb from "../breadcrumb/Breadcrumb";
import SmallBanner from "../common/SmallBanner";

const Banner = () => {
  return (
    <SmallBanner titile="Travel Booking" cls="personal-loan">
      <Breadcrumb
        breadcrumbs={[
          ["Home", ""],
          ["Products", ""],
          ["Travel Booking", "/"],
        //   ["Business Loans", ""],
        ]}
      />
    </SmallBanner>
  );
};

export default Banner;
