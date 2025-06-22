import Breadcrumb from "../breadcrumb/Breadcrumb";
import SmallBanner from "../common/SmallBanner";

const Banner = () => {
  return (
    <SmallBanner titile="Micro ATM" cls="personal-loan">
      <Breadcrumb
        breadcrumbs={[
          ["Home", ""],
          ["Products", ""],
          ["Micro ATM", "/"],
        //   ["Business Loans", ""],
        ]}
      />
    </SmallBanner>
  );
};

export default Banner;
