import Calculator from '../Calculator';
import './calcPage.css';

function CalcPage() {
  return (
    <section className="calculator--container">
      <div className="calculator--title">
        <h1>Let&apos;s do some Math!</h1>
      </div>
      <div>
        <Calculator />
      </div>
    </section>
  );
}

export default CalcPage;
