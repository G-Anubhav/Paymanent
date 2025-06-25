import LoanCounter from "../common/LoanCounter";

const Counter = () => {
  return (
    <LoanCounter
      title=" We believe you are more than a number."
      btnText="Apply for Payment Gateway"
      link="/contact"
      loans_given={500}
      customers_served={2000}
      countries={95}
    />
  );
};

export default Counter;
