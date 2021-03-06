import Calculator from '../Calculator';
import '../styles/calcPage.css';

function CalcPage() {
  return (
    <section className="calculator--container">
      <div className="calculator--title">
        <h1>
          Let&apos;s do
          {' '}
          <br />
          {' '}
          some Math!
        </h1>
      </div>
      <div>
        <Calculator />
      </div>
    </section>
  );
}

export default CalcPage;
