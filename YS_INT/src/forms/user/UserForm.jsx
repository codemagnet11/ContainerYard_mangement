import { useState } from "react";
import styles from "./UserForm.module.css";

export default function UserForm({ userData }) {
  const [formData, setFormData] = useState({
    user_id: userData?.user_id || "",
    user_name: userData?.user_name || "",
    password_hash: userData?.password_hash || "",
    user_type: userData?.user_type || "",
    branch: userData?.branch || "",
    first_name: userData?.first_name || "",
    last_name: userData?.last_name || "",
    gender: userData?.gender || "",
    birth_date: userData?.birth_date || "",
    address: userData?.address || "",
    pin_code: userData?.pin_code || "",
    contact_no: userData?.contact_no || "",
    email_id: userData?.email_id || "",
    is_active: userData?.is_active ?? true,
    created_date: userData?.created_date || "",
    updated_date: userData?.updated_date || "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.title}>Edit User</h2>

      <div className={styles.readonlySection}>
        <div className={styles.field}>
          <label className={styles.label}>User ID</label>
          <input
            type="text"
            value={formData.user_id}
            className={styles.input}
            readOnly
          />
        </div>
        <div className={styles.field}>
          <label className={styles.label}>Created Date</label>
          <input
            type="text"
            value={formData.created_date}
            className={styles.input}
            readOnly
          />
        </div>
        <div className={styles.field}>
          <label className={styles.label}>Updated Date</label>
          <input
            type="text"
            value={formData.updated_date}
            className={styles.input}
            readOnly
          />
        </div>
      </div>

      <input type="hidden" name="user_id" value={formData.user_id} />

      <div className={styles.row}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="user_name">
            User Name*
          </label>
          <input
            type="text"
            id="user_name"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="password_hash">
            Password*
          </label>
          <input
            type="password"
            id="password_hash"
            name="password_hash"
            value={formData.password_hash}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="user_type">
            User Type*
          </label>
          <select
            id="user_type"
            name="user_type"
            value={formData.user_type}
            onChange={handleChange}
            className={styles.select}
            required
          >
            <option value="">Select User Type</option>
            <option value="Admin">Admin</option>
            <option value="Staff">Staff</option>
          </select>
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="branch">
            Branch*
          </label>
          <input
            type="text"
            id="branch"
            name="branch"
            value={formData.branch}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="first_name">
            First Name*
          </label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="last_name">
            Last Name
          </label>
          <input
            type="text"
            id="last_name"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            className={styles.input}
          />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="gender">
            Gender
          </label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className={styles.select}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="birth_date">
            Birth Date
          </label>
          <input
            type="date"
            id="birth_date"
            name="birth_date"
            value={formData.birth_date}
            onChange={handleChange}
            className={styles.input}
          />
        </div>
      </div>

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

      <div className={styles.row}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="pin_code">
            Pin Code
          </label>
          <input
            type="text"
            id="pin_code"
            name="pin_code"
            value={formData.pin_code}
            onChange={handleChange}
            className={styles.input}
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="contact_no">
            Contact No*
          </label>
          <input
            type="tel"
            id="contact_no"
            name="contact_no"
            value={formData.contact_no}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>
      </div>

      <div className={styles.row}>
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
          />
        </div>

        <div className={styles.field}>
          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              name="is_active"
              checked={formData.is_active}
              onChange={handleChange}
              className={styles.checkbox}
            />
            Active
          </label>
        </div>
      </div>

      <div className={styles.actions}>
        <button type="submit" className={styles.submitButton}>
          Update User
        </button>
      </div>
    </form>
  );
}
