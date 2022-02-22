import React, {useState} from 'react';
import './css/creditCardForm.css';
import './css/creditCard.css';
import Cards from 'react-credit-cards';
import {formatCreditCardNumber, formatCVC} from './cardUtils';

const CreditCardForm = () => {
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [month, setMonth] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [focus, setFocus] = useState('');

  const removeSpecial = (e) => {
    let invalidChars = ['-', '+', ' ', '.'];
    if (invalidChars.includes(e.key)) {
      e.preventDefault();
    }
  };

  const addSpace = (e) => {
    const {value, id} = e.target;
    let ele = document.getElementById(id);
    if (value.length === 4 || value.length === 9 || value.length === 14)
      ele.value = ele.value.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ');
  };

  const handleDate = (e) => {
    setMonth(e.target.value);
    setExpiry(e.target.value);
  };

  const handleExpiry = (e) => {
    setExpiry(month.concat(e.target.value));
  };

  const submit = (e) => {
    setNumber('');
    setName('');
    setExpiry('');
    setCvc('');
    setFocus('');
  };

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
              placeholder="Card Number"
              maxlength="19"
              onChange={(e) => {
                setNumber(e.target.value);
              }}
              onFocus={(e) => setFocus(e.target.name)}
              onKeyDown={removeSpecial}
              onKeyPress={addSpace}
              format={formatCreditCardNumber}
            />
            <label htmlFor="name">Card Holder</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
              onFocus={(e) => setFocus(e.target.name)}
            />
            <label htmlFor="month">Expiration Date</label>
            <select
              className="form-control"
              name="expiry"
              onChange={handleDate}
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
              name="expiry"
              onChange={handleExpiry}
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
              placeholder="CVC"
              maxlength="3"
              onChange={(e) => {
                setCvc(e.target.value);
              }}
              onFocus={(e) => setFocus(e.target.name)}
              onKeyDown={removeSpecial}
              format={formatCVC}
            />
            <button
              className="btn btn-primary btn-lg btn-block"
              onClick={submit}
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
