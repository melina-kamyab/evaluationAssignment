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
  const [year, setYear] = useState('')
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
  // const handleDate = (e) => {
  //   setMonth(e.target.value);
  //   setExpiry(e.target.value);
  // };
  // const handleExpiry = (e) => {
  //   setExpiry(month.concat(e.target.value));
  // };

  const submit = () => {
    setNumber('');
    setName('');
    setExpiry('');
    setCvc('');
    setFocus('');
  };

  React.useEffect (()=>{
      setExpiry(month.concat(year))
  }, [year, month]) 


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
              onChange={(e)=> setMonth(e.target.value)}
              value={month}
              required
            >
              <option value=" ">Month</option>
              <option value="01">Jan</option>
              <option value="02">Feb</option>
              <option value="03">Mar</option>
              <option value="04">April</option>
              <option value="05">May</option>
              <option value="06">June</option>
              <option value="07">July</option>
              <option value="08">Aug</option>
              <option value="09">Sep</option>
              <option value="10">Oct</option>
              <option value="11">Nov</option>
              <option value="12">Dec</option>
            </select>

            <select
              className="form-control"
              name="expiry-year"
              data-testid="year-id"
              onChange={(e)=>setYear(e.target.value)}
              value={year}
            >
              <option value=" ">Year</option>
              <option value="22">2022</option>
              <option value="23">2023</option>
              <option value="24">2024</option>
              <option value="25">2025</option>
              <option value="26">2026</option>
              <option value="27">2027</option>
              <option value="28">2028</option>
              <option value="29">2029</option>
              <option value="30">2030</option>
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
