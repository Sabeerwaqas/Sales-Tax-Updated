import React, { useState } from "react";
import "./sale.css";
import { withholdingTaxData } from "./data";

const Sale = () => {
  const [inputSalary, setInputSalary] = useState("");
  const [amountForWht, setAmountForWht] = useState(0);
  const [rate, setRate] = useState(0);
  const [data, setData] = useState([]);
  const totalMonths = 12;
  const [cleared, setCleared] = useState(false);
  const [withholdingTax, setWithholdingTax] = useState(0);

  // Handle input change
  const handleChange = (e) => {
    const salaryValue = parseFloat(e.target.value);
    setInputSalary(salaryValue);

    if (salaryValue >= 600000 && salaryValue <= 1200000) {
      setRate(2.5);
    } else if (salaryValue > 1200000 && salaryValue <= 2400000) {
      setRate(12.5);
    } else if (salaryValue > 2400000 && salaryValue <= 3600000) {
      setRate(22.5);
    } else if (salaryValue > 3600000 && salaryValue <= 6000000) {
      setRate(27.5);
    } else if (salaryValue > 6000000) {
      setRate(35);
    }
  };

  // Handle tax calculation based on the given rate
  const calculateTax = () => {
    if (inputSalary) {
      const tax = (rate / 100) * inputSalary;
      setData([{ salary: inputSalary, tax }]);
    }
  };

  // Calculate withholding tax
  const calculateWithholdingTax = (selectedOption) => {
    const taxPercentage = withholdingTaxData[selectedOption];
    setWithholdingTax(taxPercentage);
  };

  // Calculate and handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (cleared) {
      setData([]);
    }

    setInputSalary("");
    setCleared(!cleared);
  };

  // Button label
  const calcu = cleared ? "Clear" : "Calculate";

  return (
    <div>
      <div className="main-heading-parent">
        <h1 className="heading-main">Tax Calculator</h1>
        <div>
          <marquee behavior="" direction="left">
            <span className="marquee-excellence">Excellence Business</span>
            <span className="marquee-slogan">
              We are here to support, assist and help local, small, and medium
              business enterprises.
            </span>
          </marquee>
        </div>
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
            <button
              onClick={calculateTax}
              className="calculate-btn"
              type="submit"
            >
              {calcu}
            </button>
          </form>

          <div className="child-one-child">
            <div className="monthly">
              <div className="monthly-border">
                <h5 className="monthly-salary">Monthly Salary</h5>
                <p>
                  {data.map((detail, index) => (
                    <small
                      className="monthly-yearly-success-one success"
                      key={index}
                    >
                      {detail.salary}
                    </small>
                  ))}
                </p>
              </div>
              <div className="border-tax">
                <h5 className="monthly-tax">Monthly Tax</h5>
                <p className="responsive-monthly">
                  {data.map((detail, index) => (
                    <small className="success success-digit" key={index}>
                      {detail.tax}
                    </small>
                  ))}
                </p>
              </div>
              <div className="responsive-salary-after-tax">
                <h5 className="salary-after-tax">Salary After Tax</h5>
                <p className="responsive-monthly">
                  {data.map((detail, index) => (
                    <small className="success success-digit" key={index}>
                      {detail.salary - detail.tax}
                    </small>
                  ))}
                </p>
              </div>
            </div>
            <hr />
            <div className="yearly">
              <div className="border">
                <h5 className="yearly-salary">Yearly Salary</h5>
                <p>
                  {data.map((detail, index) => (
                    <small
                      className="monthly-yearly-success-two success"
                      key={index}
                    >
                      {detail.salary * totalMonths}
                    </small>
                  ))}
                </p>
              </div>
              <div className="yearly-tax border-special-tax border-tax">
                <h5 className="yearly-tax">Yearly Tax</h5>
                <p>
                  {data.map((detail, index) => (
                    <small className="success  responsive-success" key={index}>
                      {detail.tax * totalMonths}
                    </small>
                  ))}
                </p>
              </div>
              <div className="yearly-salary responsive-yearly-salary">
                <h5 className="after-tax">Salary After Tax</h5>
                <p className="responsive-para">
                  {data.map((detail, index) => (
                    <small className="success yearly-success" key={index}>
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
              <select
                className="tax-list"
                id="cars"
                name="services"
                onChange={(e) => calculateWithholdingTax(e.target.value)}
              >
                {/* Sale of Goods */}

                <option value="">Select Your Service</option>
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
                type="number"
                min="0"
                max="9999999999999"
                placeholder="Enter Taxable Amount"
                onChange={(e) => setAmountForWht(e.target.value)}
              />
            </span>
          </div>

          <div className="second-child-first-component first">
            <div className="same-classname classname-one first ">
              <small className="amount-color">Amount of WHT</small>
              <div>
                <small className="amountForWht ">{amountForWht}</small>
              </div>
            </div>
            <div className="same-classname classname-second second">
              <span className="filer">Filer:</span>
              <span className="amountForFiler">
                {(amountForWht / 100) * withholdingTax}
              </span>
              <div>
                <span className="non-filer">
                  Non-Filer:
                  <span className="non-filer-one amountForNonFiler">
                    {(amountForWht / 100) * (withholdingTax * 2)}
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="second-child-second-component">
            <div className="same-classname classname-one third">
              <small className="amount-color">Payment After Tax</small>
            </div>
            <div className="same-classname classname-second fourth">
              <span className="filer">
                Filer:
                <small className="font-weight amountForFiler">
                  {amountForWht - (amountForWht / 100) * withholdingTax}
                </small>
              </span>
              <span className="non-filer">
                Non-Filer:
                <small className="non-filer-two font-weight amountForNonFiler">
                  {amountForWht - (amountForWht / 100) * (withholdingTax * 2)}
                </small>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default Sale;
