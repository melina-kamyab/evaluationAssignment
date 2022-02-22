import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import './css/creditCardForm.css';
import './css/creditCard.css';
import Cards from 'react-credit-cards';
import {addSpace, removeSpecial, removeDigits} from './cardUtils';

const CreditCardForm = () => {
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [month, setMonth] = useState('');
  const [expiry, setExpiry] = useState('');
  const [year, setYear] = useState('');
  const [cvc, setCvc] = useState('');
  const [focus, setFocus] = useState('');

  const handleCardNumber = (e) => {
    const input = e.target.value;
    //const maskedNumber = input.replace(/.(?=\d{3})/g, "#")
    setNumber(input);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleYear = (e) => {
    setYear(e.target.value);
  };
  const handleMonth = (e) => {
    setMonth(e.target.value);
  };

  const submit = () => {
    setNumber('');
    setName('');
    setExpiry('');
    setMonth('');
    setYear('');
    setCvc('');
    setFocus('');
  };

  // const removeSpecial = (e) => {
  //   // let invalidChars = ['-', '+',"e", "E",' ', '.'];
  //   // if (invalidChars.includes(e.key)) {
  //   //   e.preventDefault();
  //   // }
  //   const {id} = e.target;
  //   let ele = '';
  //   ele = document.getElementById(id);
  //   //if user enters any invalid characters it gets replaced
  //   ele.value = ele.value.replace(
  //     /[A-Za-z}"`~_=.\->\]|<?+*/,;\[:{\\!@#\/'$%^&*()]/g,
  //     ''
  //   );
  //   setNumber({number: `${ele.value}`});
  // };

  React.useEffect(() => {
    setExpiry(month.concat(year));
  }, [year, month]);

  const yearsArr = [
    {year: 2022, value: '22'},
    {year: 2023, value: '23'},
    {year: 2024, value: '24'},
    {year: 2025, value: '25'},
    {year: 2026, value: '26'},
    {year: 2027, value: '27'},
    {year: 2028, value: '28'},
    {year: 2029, value: '29'},
    {year: 2030, value: '30'},
  ];
  const monthsArr = [
    {month: 'January', value: '01'},
    {month: 'February', value: '02'},
    {month: 'March', value: '03'},
    {month: 'April', value: '04'},
    {month: 'May', value: '05'},
    {month: 'June', value: '06'},
    {month: 'July', value: '07'},
    {month: 'August', value: '08'},
    {month: 'September', value: '10'},
    {month: 'November', value: '11'},
    {month: 'December', value: '12'},
  ];
  return (
    <>
      <div className="page-container">
        <div className="credit-card rccs__card rccs__card--unknown">
          <Cards
            locale={{valid: 'Expires'}}
            placeholders={{name: 'FULL NAME'}}
            number={number}
            name={name}
            expiry={expiry}
            cvc={cvc}
            focused={focus}
          />
        </div>

        <form>
          <div className="form-group">
            <label htmlFor="name">Card Number</label>
            <input
              type="tel"
              name="number"
              className="form-control"
              id="cardNumber"
              required
              placeholder="Card Number"
              data-testid="credit-card-number-id"
              maxLength="19"
              onChange={handleCardNumber}
              onFocus={(e) => setFocus(e.target.name)}
              onKeyDown={removeSpecial}
              onKeyPress={addSpace}
            />
            <label htmlFor="name">Card Holder</label>
            <input
              type="text"
              name="name"
              className="form-control"
              required
              placeholder="Name"
              data-testid="name-id"
              onChange={handleName}
              onFocus={(e) => setFocus(e.target.name)}
              onKeyDown={removeDigits}
            />
            <label htmlFor="month">Expiration Date</label>
            <select
              className="form-control"
              name="expiry-month"
              data-testid="month-id"
              onChange={handleMonth}
              value={month}
              required
            >
              <option value=" ">Month</option>
              {monthsArr.map((month) => {
                return (
                  <option value={month.value} key={Math.random()}>
                    {month.month}
                  </option>
                );
              })}
            </select>
            <select
              className="form-control"
              name="expiry-year"
              data-testid="year-id"
              onChange={handleYear}
              value={year}
            >
              <option value=" ">Year</option>
              {yearsArr.map((year) => {
                return (
                  <option value={year.value} key={Math.random()}>
                    {year.year}
                  </option>
                );
              })}
            </select>
            <label htmlFor="cvc">CVC</label>
            <input
              type="tel"
              name="cvc"
              data-testid="cvc-id"
              placeholder="CVC"
              className="form-control"
              required
              maxLength="3"
              onChange={(e) => {
                setCvc(e.target.value);
              }}
              onFocus={(e) => setFocus(e.target.name)}
              onKeyDown={removeSpecial}
            />
            <button
              className="btn btn-dark btn-lg btn-block"
              data-testid="button-id"
              onClick={submit}
              disabled={!year || !month || !name || !cvc || !number}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreditCardForm;
