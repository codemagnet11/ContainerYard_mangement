import { useState } from "react";
import styles from "./CreateNewCompany.module.css";

export default function CreateNewCompany() {
  const [formData, setFormData] = useState({
    company_id: "",
    company_name: "",
    registration_no: "",
    established_year: "",
    address: "",
    status: "Active",
    created_at: "",
    updated_at: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleReset = () => {
    setFormData({
      company_id: "",
      company_name: "",
      registration_no: "",
      established_year: "",
      address: "",
      status: "Active",
      created_at: "",
      updated_at: "",
    });
  };

  const handleCancel = () => {
    console.log("Navigate back to company list");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.title}>Create New Company</h2>

      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Basic Info</legend>
        <div className={styles.row}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="company_name">
              Company Name*
            </label>
            <input
              type="text"
              id="company_name"
              name="company_name"
              value={formData.company_name}
              onChange={handleChange}
              className={styles.input}
              maxLength={150}
              required
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="company_id">
              Company ID*
            </label>
            <input
              type="number"
              id="company_id"
              name="company_id"
              value={formData.company_id}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="registration_no">
              Registration No
            </label>
            <input
              type="text"
              id="registration_no"
              name="registration_no"
              value={formData.registration_no}
              onChange={handleChange}
              className={styles.input}
              maxLength={50}
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="established_year">
              Established Year
            </label>
            <input
              type="number"
              id="established_year"
              name="established_year"
              value={formData.established_year}
              onChange={handleChange}
              className={styles.input}
              min="1800"
              max="9999"
            />
          </div>
        </div>
      </fieldset>

      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Address</legend>
        <div className={styles.row}>
          <div className={styles.fieldFull}>
            <label className={styles.label} htmlFor="address">
              Address
            </label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className={styles.textarea}
              rows="3"
            />
          </div>
        </div>
      </fieldset>

      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Status & Timestamps</legend>
        <div className={styles.row}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="status">
              Status
            </label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              className={styles.select}
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="created_at">
              Created At
            </label>
            <input
              type="datetime-local"
              id="created_at"
              name="created_at"
              value={formData.created_at}
              onChange={handleChange}
              className={styles.input}
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="updated_at">
              Updated At
            </label>
            <input
              type="datetime-local"
              id="updated_at"
              name="updated_at"
              value={formData.updated_at}
              onChange={handleChange}
              className={styles.input}
            />
          </div>
        </div>
      </fieldset>

      <div className={styles.actions}>
        <button
          type="button"
          className={styles.buttonSecondary}
          onClick={handleReset}
        >
          Reset Form
        </button>
        <button
          type="button"
          className={styles.buttonTertiary}
          onClick={handleCancel}
        >
          Cancel / Back
        </button>
        <button type="submit" className={styles.buttonPrimary}>
          Create Company
        </button>
      </div>
    </form>
  );
}
