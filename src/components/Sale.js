import React, { useState } from "react";
// import { ToastContainer } from "react-toastify";
import "./sale.css";

const Sale = () => {
  const [inputSalary, setInputSalary] = useState("");
  const [data, setData] = useState([]);
  const totalMonths = 12;
  const [taxOnSalary, setTaxOnSalary] = useState(0); // Initialize tax state
  const [cleared, setCleared] = useState(false);

  // Handle tax calculation based on the given rate
  const calculateTax = (rate) => {
    const tax = (rate / 100) * inputSalary;
    setTaxOnSalary(tax);
  };

  // Handle input change
  const handleChange = (e) => {
    const salaryValue = e.target.value;

    setInputSalary(salaryValue);
  };

  // Calculate and handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (cleared) {
      setData([]);
      setTaxOnSalary(0);
    } else {
      const calculatedData = {
        salary: inputSalary,
        tax: taxOnSalary,
      };
      setData([...data, calculatedData]);
    }

    setInputSalary("");
    setCleared(!cleared);
  };

  // Button label
  let calcu = cleared ? "Clear" : "Calculate";

  return (
    <div>
      <div className="btn-parent">
        <button
          onClick={() => calculateTax(2.5)}
          className="onCursor two-point-five"
        >
          From 600,000 pkr To 1,200,000 pkr
        </button>
        <button
          onClick={() => calculateTax(12.5)}
          className="onCursor twelve-point-five"
        >
          From 1,200,000 pkr to 2,400,000 pkr
        </button>
        <button
          onClick={() => calculateTax(22.5)}
          className="onCursor twentytwo-point-five"
        >
          from 2,400,000 pkr To 3,600,000 pkr
        </button>
        <button
          onClick={() => calculateTax(27.5)}
          className="onCursor twentyseven-point-five"
        >
          3,600,000 pkr To 6,000,000
        </button>
        <button
          onClick={() => calculateTax(35)}
          className="onCursor thirtyfive"
        >
          Exceeds From 6,000,000 pkr
        </button>
      </div>
      <div className="parent-div">
        <div className="child-one">
          <form onSubmit={handleSubmit}>
            <div>
              <input
                value={inputSalary}
                id="Date.now()"
                onChange={handleChange}
                className="salary-input"
                type="number"
                placeholder="Enter Your Salary Here"
              />
            </div>
            <button className="calculate-btn" type="submit">
              {calcu}
            </button>
          </form>

          <div className="child-one-child">
            <div className="monthly">
              <div className="monthly-border">
                <h5>Monthly Salary</h5>
                <p className="success">
                  {data.map((detail, index) => (
                    <small key={index}>{detail.salary}</small>
                  ))}
                </p>
              </div>
              <div className="border-tax">
                <h5>Monthly Tax</h5>
                <p className="red">
                  {data.map((detail, index) => (
                    <small key={index}>{detail.tax}</small>
                  ))}
                </p>
              </div>
              <div>
                <h5>Salary After Tax</h5>
                <p className="yellow">
                  {data.map((detail, index) => (
                    <small key={index}>{detail.salary - detail.tax}</small>
                  ))}
                </p>
              </div>
            </div>
            <hr />
            <div className="yearly">
              <div className="border">
                <h5>Yearly Salary</h5>
                <p className="success seven-sixty-eight special-yearly-margin">
                  {data.map((detail, index) => (
                    <small className="small-sevenEightySix" key={index}>
                      {detail.salary * totalMonths}
                    </small>
                  ))}
                </p>
              </div>
              <div className="yearly-tax border-special-tax border-tax">
                <h5>Yearly Tax</h5>
                <p className="red ">
                  {data.map((detail, index) => (
                    <small className="small-two" key={index}>
                      {detail.tax * totalMonths}
                    </small>
                  ))}
                </p>
              </div>
              <div className="yearly-salary">
                <h5 className="after-tax">Salary After Tax</h5>
                <p className="yellow">
                  {data.map((detail, index) => (
                    <small className="responsive-fourEighty" key={index}>
                      {detail.salary * totalMonths - detail.tax * totalMonths}
                    </small>
                  ))}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="child-two">
          <div className="second-child-position">
            <span>
              {/* <label for="cars">Choose a car:</label> */}
              <select className="tax-list" id="cars" name="cars">
                {/* Sale of Goods */}

                <optgroup label="Sale Of Goods">
                  <option value="company">By Company</option>
                  <option value="fiat">By Individual and AOP</option>
                </optgroup>
                {/* Services */}
                <optgroup label="Services">
                  <option value="company">By Company</option>
                  <option value="fiat">By Individual and AOP</option>
                  <option value="">Export Services</option>
                  <option value="">Advertisement Services</option>
                  <option value="">Transport Services</option>
                  <option value="">Freight Forward Services</option>
                  <option value="">Air Cargo Services</option>
                  <option value="">Courier Services</option>
                  <option value="">Manpower Outsource Services</option>
                  <option value="">Hotel Services</option>
                  <option value="">Security Guard Services</option>
                  <option value="">Software Development Services</option>
                  <option value="">IT Services Services</option>
                  <option value="">Tracking Services</option>
                  <option value="">Share Registered Services</option>
                  <option value="">Engineering Services</option>
                  <option value="">Car Rental Services</option>
                  <option value="">Building Maintenance Services</option>
                  <option value="">Inspection Services</option>
                  <option value="">Certification Services</option>
                  <option value="">Testing Services</option>
                  <option value="">Training Services</option>
                  <option value="">Warehouse Services</option>
                  <option value="">Assests Management Services</option>
                  <option value="">Data Services</option>
                  <option value="">Telecommunication Services</option>
                </optgroup>
              </select>
            </span>
            <span>
              <input
                className="second-input"
                type="text"
                placeholder="Enter Taxable Amount"
              />
            </span>
          </div>
          <div className="second-child-first-component first">
            <div className="same-classname classname-one first ">
              <small>Amount of WHT</small>
            </div>
            <div className="same-classname classname-second second">
              <span className="filer">Filer</span>
              <span className="non-filer">Non-Filer</span>
            </div>
          </div>
          <div className="second-child-second-component">
            <div className="same-classname classname-one third">
              <small>Payment After Tax</small>
            </div>
            <div className="same-classname classname-second fourth">
              <span className="filer">Filer</span>
              <span className="non-filer">Non-Filer</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sale;
