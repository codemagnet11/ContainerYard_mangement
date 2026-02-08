import { useState } from "react";
import styles from "./Party.module.css";

export default function Party() {
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    party_name: "",
    print_name: "",
    opening_balance: "0.00",
    opening_bal_type: "DR",
    address_line1: "",
    address_line2: "",
    city: "",
    pincode: "",
    state: "",
    state_code: "",
    country: "India",
    contact_person: "",
    contact_no: "",
    email_id: "",
    gstin: "",
    pan: "",
    tds_applicable: false,
    tds_percent: "0.00",
    credit_limit: "0.00",
    credit_days: "0",
    is_active: true,
  });

  const isFormValid = formData.party_name.trim() !== "" && formData.is_active;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form submitted:", formData);
    setIsLoading(false);
  };

  const handleNew = () => {
    setFormData({
      party_name: "",
      print_name: "",
      opening_balance: "0.00",
      opening_bal_type: "DR",
      address_line1: "",
      address_line2: "",
      city: "",
      pincode: "",
      state: "",
      state_code: "",
      country: "India",
      contact_person: "",
      contact_no: "",
      email_id: "",
      gstin: "",
      pan: "",
      tds_applicable: false,
      tds_percent: "0.00",
      credit_limit: "0.00",
      credit_days: "0",
      is_active: true,
    });
  };

  const handleClose = () => {
    console.log("Close form");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.title}>Party Master</h2>

      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Basic Info</legend>
        <div className={styles.row}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="party_name">
              Party Name*
            </label>
            <input
              type="text"
              id="party_name"
              name="party_name"
              value={formData.party_name}
              onChange={handleChange}
              className={styles.input}
              maxLength={150}
              required
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="print_name">
              Print Name
            </label>
            <input
              type="text"
              id="print_name"
              name="print_name"
              value={formData.print_name}
              onChange={handleChange}
              className={styles.input}
              maxLength={150}
            />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="opening_balance">
              Opening Balance
            </label>
            <input
              type="number"
              id="opening_balance"
              name="opening_balance"
              value={formData.opening_balance}
              onChange={handleChange}
              className={styles.input}
              step="0.01"
              min="0"
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="opening_bal_type">
              Opening Balance Type
            </label>
            <select
              id="opening_bal_type"
              name="opening_bal_type"
              value={formData.opening_bal_type}
              onChange={handleChange}
              className={styles.select}
            >
              <option value="DR">Debit</option>
              <option value="CR">Credit</option>
            </select>
          </div>
        </div>
      </fieldset>

      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Address</legend>
        <div className={styles.row}>
          <div className={styles.fieldFull}>
            <label className={styles.label} htmlFor="address_line1">
              Address Line 1
            </label>
            <input
              type="text"
              id="address_line1"
              name="address_line1"
              value={formData.address_line1}
              onChange={handleChange}
              className={styles.input}
              maxLength={200}
            />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.fieldFull}>
            <label className={styles.label} htmlFor="address_line2">
              Address Line 2
            </label>
            <input
              type="text"
              id="address_line2"
              name="address_line2"
              value={formData.address_line2}
              onChange={handleChange}
              className={styles.input}
              maxLength={200}
            />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="city">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className={styles.input}
              maxLength={100}
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="pincode">
              Pin Code
            </label>
            <input
              type="text"
              id="pincode"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              className={styles.input}
              maxLength={10}
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="state">
              State
            </label>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className={styles.input}
              maxLength={100}
            />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="state_code">
              State Code
            </label>
            <input
              type="text"
              id="state_code"
              name="state_code"
              value={formData.state_code}
              onChange={handleChange}
              className={styles.input}
              maxLength={5}
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="country">
              Country
            </label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className={styles.input}
              maxLength={100}
            />
          </div>
        </div>
      </fieldset>

      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Tax & Legal</legend>
        <div className={styles.row}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="contact_person">
              Contact Person
            </label>
            <input
              type="text"
              id="contact_person"
              name="contact_person"
              value={formData.contact_person}
              onChange={handleChange}
              className={styles.input}
              maxLength={100}
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="contact_no">
              Contact No
            </label>
            <input
              type="tel"
              id="contact_no"
              name="contact_no"
              value={formData.contact_no}
              onChange={handleChange}
              className={styles.input}
              maxLength={15}
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="email_id">
              Email ID
            </label>
            <input
              type="email"
              id="email_id"
              name="email_id"
              value={formData.email_id}
              onChange={handleChange}
              className={styles.input}
              maxLength={150}
            />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="gstin">
              GSTIN
            </label>
            <input
              type="text"
              id="gstin"
              name="gstin"
              value={formData.gstin}
              onChange={handleChange}
              className={styles.input}
              maxLength={15}
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="pan">
              PAN
            </label>
            <input
              type="text"
              id="pan"
              name="pan"
              value={formData.pan}
              onChange={handleChange}
              className={styles.input}
              maxLength={10}
            />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.fieldCheckbox}>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                id="tds_applicable"
                name="tds_applicable"
                checked={formData.tds_applicable}
                onChange={handleChange}
                className={styles.checkbox}
              />
              <span className={styles.checkboxText}>TDS Applicable</span>
            </label>
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="tds_percent">
              TDS Percentage
            </label>
            <input
              type="number"
              id="tds_percent"
              name="tds_percent"
              value={formData.tds_percent}
              onChange={handleChange}
              className={styles.input}
              step="0.01"
              min="0"
            />
          </div>
        </div>
      </fieldset>

      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Credit & Status</legend>
        <div className={styles.row}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="credit_limit">
              Credit Limit
            </label>
            <input
              type="number"
              id="credit_limit"
              name="credit_limit"
              value={formData.credit_limit}
              onChange={handleChange}
              className={styles.input}
              step="0.01"
              min="0"
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="credit_days">
              Credit Days
            </label>
            <input
              type="number"
              id="credit_days"
              name="credit_days"
              value={formData.credit_days}
              onChange={handleChange}
              className={styles.input}
              min="0"
            />
          </div>
          <div className={styles.fieldCheckbox}>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                id="is_active"
                name="is_active"
                checked={formData.is_active}
                onChange={handleChange}
                className={styles.checkbox}
              />
              <span className={styles.checkboxText}>Is Active*</span>
            </label>
          </div>
        </div>
      </fieldset>

      <div className={styles.actions}>
        <button type="button" className={styles.buttonNew} onClick={handleNew}>
          New
        </button>
        <button
          type="button"
          className={styles.buttonClose}
          onClick={handleClose}
        >
          Close
        </button>
        <button
          type="submit"
          className={styles.buttonSave}
          disabled={!isFormValid || isLoading}
        >
          {isLoading ? (
            <>
              <span className={styles.spinner} />
              Saving...
            </>
          ) : (
            "Save"
          )}
        </button>
      </div>
    </form>
  );
}
