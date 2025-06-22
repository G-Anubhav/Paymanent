import Breadcrumb from "../breadcrumb/Breadcrumb";
import SmallBanner from "../common/SmallBanner";

const Banner = () => {
  return (
    <SmallBanner titile="Utility Payment" cls="personal-loan">
      <Breadcrumb
        breadcrumbs={[
          ["Home", ""],
          ["Products", ""],
          ["Utility Payment", "/"],
        //   ["Business Loans", ""],
        ]}
      />
    </SmallBanner>
  );
};

export default Banner;
