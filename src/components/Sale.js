import React, { useState } from "react";
// import { ToastContainer } from "react-toastify";
import "./sale.css";
import { withholdingTaxData } from "./data";

const Sale = () => {
  const [inputSalary, setInputSalary] = useState("");
  const [data, setData] = useState([]);
  const totalMonths = 12;
  const [taxOnSalary, setTaxOnSalary] = useState(0); // Initialize tax state
  const [cleared, setCleared] = useState(false);
  // const [taxValue, setTaxValue] = useState(null);
  // const [service, setService] = useState();
  const [withholdingTax, setWithholdingTax] = useState(0);
  const [amountForWht, setAmountForWht] = useState(0);

  console.log(amountForWht);

  // Handle tax calculation based on the given rate
  const calculateTax = (rate) => {
    const tax = (rate / 100) * inputSalary;
    setTaxOnSalary(tax);
  };

  // Service Tax

  // const calculateServiceTax = (e) => {
  // const taxByServices = (e / 100) * taxValue;
  // setTaxOnSalary(taxByServices);
  // }

  const calculateWithholdingTax = (selectedOption) => {
    const taxPercentage = withholdingTaxData[selectedOption];
    setWithholdingTax(taxPercentage);
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
              <select
                className="tax-list"
                id="cars"
                name="cars"
                onChange={(e) => calculateWithholdingTax(e.target.value)}
              >
                {/* Sale of Goods */}

                <optgroup key={1} label="Sale Of Goods">
                  <option value="saleOfGoodsByCompany">By Company</option>
                  <option value="saleOfGoodsbyIndividualAndAop">
                    By Individual and AOP
                  </option>
                </optgroup>
                {/* Services */}
                <optgroup key={2} label="Services">
                  <option value="servicesByCompany">By Company</option>
                  <option value="servicesbyIndividualAndAop">
                    By Individual and AOP
                  </option>
                  <option value="servicesByExportServices">
                    Export Services
                  </option>
                  <option value="servicesByAdvertisementServices">
                    Advertisement Services
                  </option>
                  <option value="servicesByTransportServices">
                    Transport Services
                  </option>
                  <option value="servicesByFreightForwardServices">
                    Freight Forward Services
                  </option>
                  <option value="servicesByAirCargoServices">
                    Air Cargo Services
                  </option>
                  <option value="servicesByCourierServices">
                    Courier Services
                  </option>
                  <option value="servicesByManPowerOutsourceServices">
                    Manpower Outsource Services
                  </option>
                  <option value="servicesByHotelServices">
                    Hotel Services
                  </option>
                  <option value="servicesBySecurityServices">
                    Security Guard Services
                  </option>
                  <option value="servicesBySoftwareDevelopmentServices">
                    Software Development Services
                  </option>
                  <option value="servicesByItServicesServices">
                    IT Services Services
                  </option>
                  <option value="servicesByTrackingServices">
                    Tracking Services
                  </option>
                  <option value="servicesByShareRegisterdServices">
                    Share Registered Services
                  </option>
                  <option value="servicesByEngineeringServices">
                    Engineering Services
                  </option>
                  <option value="servicesByCarRentalServices">
                    Car Rental Services
                  </option>
                  <option value="servicesByBuildingMaintenanceServices">
                    Building Maintenance Services
                  </option>
                  <option value="servicesByInspectionServices">
                    Inspection Services
                  </option>
                  <option value="servicesByCertificationServices">
                    Certification Services
                  </option>
                  <option value="servicesByTestingServices">
                    Testing Services
                  </option>
                  <option value="servicesByTrainingServices">
                    Training Services
                  </option>
                  <option value="servicesByWarehouseServices">
                    Warehouse Services
                  </option>
                  <option value="servicesByAssestsManagementServices">
                    Assests Management Services
                  </option>
                  <option value="servicesByDataServices">Data Services</option>
                  <option value="servicesByTelecommunicationServices">
                    Telecommunication Services
                  </option>
                </optgroup>
                <optgroup label="Contracts">
                  <option value="contractsByCompany">By Company</option>
                  <option value="contractsByIndividualAndAop">
                    By Individual and AOP
                  </option>
                </optgroup>
                <optgroup label="Brokerage and Commission">
                  <option value="brokerageAndComissionByAdvertisementAgent">
                    Advertisement Agent
                  </option>
                  <option value="brokerageAndComissionByLifeInsuranceAgent">
                    Life Insurance Agent
                  </option>
                  <option value="brokerageAndComissionByOtherCases">
                    Other Cases
                  </option>
                </optgroup>
                <optgroup label="Profit On Debts">
                  <option value="profitOnDebtByInAllCases">In all Cases</option>
                </optgroup>
                <optgroup label="Dividend">
                  <option value="dividendByReceivedFromMutualFundsAndOthers">
                    Received From Mutual Funds & Others
                  </option>
                  <option value="dividendByReceivedFromCompanies">
                    Received From Companies
                  </option>
                </optgroup>
                <optgroup label="Immovable Property">
                  <option value="immovablePropertyByAdvanceTaxOnBuyer">
                    Advance Tax On Buyer
                  </option>
                  <option value="immovablePropertyByAdvanceTaxOnSellerHoldingPeriodWithin4Years">
                    Advance Tax On Seller Holding Period Within 4 Years
                  </option>
                  <option value="immovablePropertyByAdvanceTaxOnSellerHoldingPeriodAfter4Years">
                    Advance Tax On Seller Holding Period After 4 Years
                  </option>
                </optgroup>
                <optgroup label="Rent For Immovable Property Of Individual & AOP's (Rental Income)">
                  <option value="rentForImmovablePropertyUpto300000">
                    Up To 300,000
                  </option>
                  <option value="rentForImmovablePropertyUpto300000To600000">
                    300,001 To 600,000
                  </option>
                  <option value="rentForImmovablePropertyUpto600000To2000000">
                    600,000 To 2,000,000
                  </option>
                  <option value="rentForImmovablePropertyUptoAbove2000000">
                    Above 2,000,000
                  </option>
                </optgroup>
                <optgroup label="Rent For Immovable Property (Companies)">
                  <option value="rentForImmovablePropertyCompanies">
                    Rent For Immovable Property
                  </option>
                </optgroup>
                <optgroup label="Purchase Of Air Tickets">
                  <option value="purchaseOfAirTicketsByDomesticAirTickets">
                    Domestic Air Tickets
                  </option>
                </optgroup>
                <optgroup label="International Air Tickets">
                  <option value="internationalAirTicketsByEconomicClass">
                    Economic Class
                  </option>
                  <option value="internationalAirTicketsByExecutiveFirstClass">
                    Executive / First Class
                  </option>
                  <option value="internationalAirTicketsByOthersExcludingEconomy">
                    Others (Excluding Economy)
                  </option>
                </optgroup>
                <optgroup label="CNG Business">
                  <option value="CngBusiness">CNG Business</option>
                </optgroup>
                <optgroup label="Prized & Winning">
                  <option value="prizeAndWiningsByOnPrizeBonds">
                    On Prize Bonds
                  </option>
                  <option value="prizeAndWiningsByRaffle">
                    Raffle, Lottery, Quiz, prize on a sale promotion by a
                    company
                  </option>
                </optgroup>
                <optgroup label="Petroleum Products">
                  <option value="petroleumProducts">Petroleum Products</option>
                </optgroup>
              </select>
            </span>
            <span>
              <input
                className="second-input"
                type="text"
                placeholder="Enter Taxable Amount"
                onChange={(e) => setAmountForWht(e.target.value)}
                // value={handleValue}
              />
            </span>
          </div>
          <div className="second-child-first-component first">
            <div className="same-classname classname-one first ">
              <small>Amount of WHT</small>
              <div>
                <small>{amountForWht}</small>
              </div>
            </div>
            <div className="same-classname classname-second second">
              <span className="filer">Filer</span>
              <span> {amountForWht / 100 * withholdingTax}</span>
              <span className="non-filer">Non-Filer {amountForWht / 100 * (withholdingTax * 2)}</span>
            </div>
          </div>
          <div className="second-child-second-component">
            <div className="same-classname classname-one third">
              <small>Payment After Tax</small>

            </div>
            <div className="same-classname classname-second fourth">
              <span className="filer">
                Filer:
                <small>{amountForWht - (amountForWht / 100 * withholdingTax)}</small>
              </span>
              <span className="non-filer">Non-Filer</span>
              <small>{amountForWht - (amountForWht / 100 * (withholdingTax * 2) )}</small>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sale;
