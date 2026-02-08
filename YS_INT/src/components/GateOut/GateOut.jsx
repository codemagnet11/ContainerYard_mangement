import { useState } from "react";
import styles from "./GateOut.module.css";

export default function GateOut() {
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [formData, setFormData] = useState({
    container_no: "",
    line: "",
    type: "",
    status: "",
    in_date: "",
    depot: "",
    gate_out_date: "",
    gate_out_time: "",
    transporter: "",
    vehicle_no: "",
    cha: "",
    destination: "",
    driver_name: "",
    mobile_no: "",
    driving_licence_no: "",
    out_mode: "",
    booking_do_no: "",
    booking_validity: "",
    seal_no: "",
    receipt_no: "",
    remarks: "",
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

  const handleSearch = () => {
    console.log("Search container:", formData.container_no);
  };

  const handleNew = () => {
    setFormData({
      container_no: "",
      line: "",
      type: "",
      status: "",
      in_date: "",
      depot: "",
      gate_out_date: "",
      gate_out_time: "",
      transporter: "",
      vehicle_no: "",
      cha: "",
      destination: "",
      driver_name: "",
      mobile_no: "",
      driving_licence_no: "",
      out_mode: "",
      booking_do_no: "",
      booking_validity: "",
      seal_no: "",
      receipt_no: "",
      remarks: "",
    });
  };

  const handleDeleteClick = () => {
    setShowDeleteModal(true);
  };

  const handleDeleteConfirm = () => {
    console.log("Delete gate out:", formData);
    setShowDeleteModal(false);
  };

  const handleDeleteCancel = () => {
    setShowDeleteModal(false);
  };

  const handlePrint = () => {
    console.log("Print gate out slip");
  };

  const handleExit = () => {
    console.log("Navigate back to dashboard");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.title}>Gate Out Entry</h2>

      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Container Details</legend>
        <div className={styles.row}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="container_no">
              Container No*
            </label>
            <div className={styles.inputWithButton}>
              <input
                type="text"
                id="container_no"
                name="container_no"
                value={formData.container_no}
                onChange={handleChange}
                className={styles.input}
                maxLength={20}
                required
              />
              <button
                type="button"
                className={styles.iconButton}
                onClick={handleSearch}
                title="Search Container"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
              </button>
            </div>
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="line">
              Line*
            </label>
            <input
              type="text"
              id="line"
              name="line"
              value={formData.line}
              onChange={handleChange}
              className={styles.input}
              maxLength={100}
              required
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="type">
              Type*
            </label>
            <input
              type="text"
              id="type"
              name="type"
              value={formData.type}
              onChange={handleChange}
              className={styles.input}
              maxLength={10}
              required
            />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="status">
              Status*
            </label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              className={styles.select}
              required
            >
              <option value="">Select Status</option>
              <option value="Available">Available</option>
              <option value="InUse">In Use</option>
              <option value="UnderRepair">Under Repair</option>
              <option value="OutOfService">Out of Service</option>
            </select>
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="in_date">
              In Date*
            </label>
            <input
              type="datetime-local"
              id="in_date"
              name="in_date"
              value={formData.in_date}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="depot">
              Depot*
            </label>
            <input
              type="text"
              id="depot"
              name="depot"
              value={formData.depot}
              onChange={handleChange}
              className={styles.input}
              maxLength={50}
              required
            />
          </div>
        </div>
      </fieldset>

      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Gate Out Details</legend>
        <div className={styles.row}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="gate_out_date">
              Gate Out Date*
            </label>
            <input
              type="date"
              id="gate_out_date"
              name="gate_out_date"
              value={formData.gate_out_date}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="gate_out_time">
              Gate Out Time*
            </label>
            <input
              type="time"
              id="gate_out_time"
              name="gate_out_time"
              value={formData.gate_out_time}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="out_mode">
              Out Mode*
            </label>
            <select
              id="out_mode"
              name="out_mode"
              value={formData.out_mode}
              onChange={handleChange}
              className={styles.select}
              required
            >
              <option value="">Select Out Mode</option>
              <option value="Export">Export</option>
              <option value="Import">Import</option>
              <option value="Re-export">Re-export</option>
            </select>
          </div>
        </div>
      </fieldset>

      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Transport Details</legend>
        <div className={styles.row}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="transporter">
              Transporter*
            </label>
            <input
              type="text"
              id="transporter"
              name="transporter"
              value={formData.transporter}
              onChange={handleChange}
              className={styles.input}
              maxLength={100}
              required
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="vehicle_no">
              Vehicle No*
            </label>
            <input
              type="text"
              id="vehicle_no"
              name="vehicle_no"
              value={formData.vehicle_no}
              onChange={handleChange}
              className={styles.input}
              maxLength={20}
              required
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="driver_name">
              Driver Name
            </label>
            <input
              type="text"
              id="driver_name"
              name="driver_name"
              value={formData.driver_name}
              onChange={handleChange}
              className={styles.input}
              maxLength={100}
            />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="mobile_no">
              Mobile No
            </label>
            <input
              type="tel"
              id="mobile_no"
              name="mobile_no"
              value={formData.mobile_no}
              onChange={handleChange}
              className={styles.input}
              maxLength={15}
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="driving_licence_no">
              Driving Licence No
            </label>
            <input
              type="text"
              id="driving_licence_no"
              name="driving_licence_no"
              value={formData.driving_licence_no}
              onChange={handleChange}
              className={styles.input}
              maxLength={50}
            />
          </div>
        </div>
      </fieldset>

      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Booking Details</legend>
        <div className={styles.row}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="booking_do_no">
              Booking/DO No*
            </label>
            <input
              type="text"
              id="booking_do_no"
              name="booking_do_no"
              value={formData.booking_do_no}
              onChange={handleChange}
              className={styles.input}
              maxLength={50}
              required
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="booking_validity">
              Booking Validity
            </label>
            <input
              type="date"
              id="booking_validity"
              name="booking_validity"
              value={formData.booking_validity}
              onChange={handleChange}
              className={styles.input}
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="seal_no">
              Seal No
            </label>
            <input
              type="text"
              id="seal_no"
              name="seal_no"
              value={formData.seal_no}
              onChange={handleChange}
              className={styles.input}
              maxLength={20}
            />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="receipt_no">
              Receipt No
            </label>
            <input
              type="text"
              id="receipt_no"
              name="receipt_no"
              value={formData.receipt_no}
              onChange={handleChange}
              className={styles.input}
              maxLength={30}
            />
          </div>
        </div>
      </fieldset>

      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Additional Information</legend>
        <div className={styles.row}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="cha">
              CHA
            </label>
            <input
              type="text"
              id="cha"
              name="cha"
              value={formData.cha}
              onChange={handleChange}
              className={styles.input}
              maxLength={100}
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="destination">
              Destination
            </label>
            <input
              type="text"
              id="destination"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              className={styles.input}
              maxLength={100}
            />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.fieldFull}>
            <label className={styles.label} htmlFor="remarks">
              Remarks
            </label>
            <textarea
              id="remarks"
              name="remarks"
              value={formData.remarks}
              onChange={handleChange}
              className={styles.textarea}
              rows="3"
            />
          </div>
        </div>
      </fieldset>

      <div className={styles.actions}>
        <button type="button" className={styles.buttonNew} onClick={handleNew}>
          New
        </button>
        <button
          type="button"
          className={styles.buttonDelete}
          onClick={handleDeleteClick}
        >
          Delete
        </button>
        <button
          type="button"
          className={styles.buttonPrint}
          onClick={handlePrint}
        >
          Print
        </button>
        <button
          type="button"
          className={styles.buttonExit}
          onClick={handleExit}
        >
          Exit
        </button>
        <button type="submit" className={styles.buttonSave}>
          Save
        </button>
      </div>

      {showDeleteModal && (
        <div className={styles.modalOverlay} onClick={handleDeleteCancel}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <h3 className={styles.modalTitle}>Confirm Delete</h3>
            <p className={styles.modalMessage}>
              Are you sure you want to delete this Gate Out entry?
            </p>
            <div className={styles.modalButtons}>
              <button
                type="button"
                className={styles.modalButtonCancel}
                onClick={handleDeleteCancel}
              >
                Cancel
              </button>
              <button
                type="button"
                className={styles.modalButtonDelete}
                onClick={handleDeleteConfirm}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </form>
  );
}
