import Calculator from "../Calculator";

const CalcPage = () => {
  return (
    <section>
      <div className="calculator--title">
        <h1>Let&apos;s do some Math!</h1>
      </div>
      <div className="calculator--body">
        <Calculator />
      </div>
    </section>
  );
};

export default CalcPage;
