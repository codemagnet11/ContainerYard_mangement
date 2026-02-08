import { useState } from "react";
import styles from "./GateIn.module.css";

export default function GateIn() {
  const [formData, setFormData] = useState({
    container_no: "",
    container_type: "",
    container_size: "",
    container_line: "",
    status: "",
    depot: "",
    gate_in_date: "",
    gate_in_time: "",
    transporter: "",
    vehicle_no: "",
    trans_mode: "",
    gate_in_mode: "",
    mfg_date: "",
    do_no: "",
    do_date: "",
    last_test_date: "",
    next_test_date: "",
    capacity: "",
    last_cargo: "",
    csc: "",
    source: "",
    terminal: "",
    vessel: "",
    tare_wt: "",
    gross_wt: "",
    manufacturer: "",
    sub_line: "",
    cha: "",
    driver_name: "",
    mobile_no: "",
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

  const handleSearchContainer = () => {
    console.log("Search container");
  };

  const handleNewEntry = () => {
    console.log("New entry");
  };

  const handlePrint = () => {
    console.log("Print");
  };

  const handleExit = () => {
    console.log("Exit");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.header}>
        <h2 className={styles.title}>Gate In Entry</h2>
        <div className={styles.navButtons}>
          <button
            type="button"
            className={styles.buttonExit}
            onClick={handleExit}
          >
            Exit
          </button>
        </div>
      </div>

      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Container Details</legend>
        <div className={styles.row}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="container_no">
              Container No*
            </label>
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
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="container_type">
              Container Type*
            </label>
            <input
              type="text"
              id="container_type"
              name="container_type"
              value={formData.container_type}
              onChange={handleChange}
              className={styles.input}
              maxLength={5}
              required
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="container_size">
              Container Size*
            </label>
            <input
              type="text"
              id="container_size"
              name="container_size"
              value={formData.container_size}
              onChange={handleChange}
              className={styles.input}
              maxLength={5}
              required
            />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="container_line">
              Container Line*
            </label>
            <input
              type="text"
              id="container_line"
              name="container_line"
              value={formData.container_line}
              onChange={handleChange}
              className={styles.input}
              maxLength={100}
              required
            />
          </div>
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
              Vehicle No
            </label>
            <input
              type="text"
              id="vehicle_no"
              name="vehicle_no"
              value={formData.vehicle_no}
              onChange={handleChange}
              className={styles.input}
              maxLength={20}
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="trans_mode">
              Trans Mode*
            </label>
            <select
              id="trans_mode"
              name="trans_mode"
              value={formData.trans_mode}
              onChange={handleChange}
              className={styles.select}
              required
            >
              <option value="">Select Transport Mode</option>
              <option value="Road">Road</option>
              <option value="Rail">Rail</option>
              <option value="Sea">Sea</option>
              <option value="Multimodal">Multimodal</option>
            </select>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="gate_in_mode">
              Gate IN Mode*
            </label>
            <select
              id="gate_in_mode"
              name="gate_in_mode"
              value={formData.gate_in_mode}
              onChange={handleChange}
              className={styles.select}
              required
            >
              <option value="">Select Gate In Mode</option>
              <option value="Manual">Manual</option>
              <option value="Automated">Automated</option>
              <option value="Mixed">Mixed</option>
            </select>
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
        </div>
      </fieldset>

      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Date & Time</legend>
        <div className={styles.row}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="gate_in_date">
              Gate In Date*
            </label>
            <input
              type="date"
              id="gate_in_date"
              name="gate_in_date"
              value={formData.gate_in_date}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="gate_in_time">
              Gate In Time*
            </label>
            <input
              type="time"
              id="gate_in_time"
              name="gate_in_time"
              value={formData.gate_in_time}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="mfg_date">
              Mfg Date
            </label>
            <input
              type="date"
              id="mfg_date"
              name="mfg_date"
              value={formData.mfg_date}
              onChange={handleChange}
              className={styles.input}
            />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="do_date">
              DO Date
            </label>
            <input
              type="date"
              id="do_date"
              name="do_date"
              value={formData.do_date}
              onChange={handleChange}
              className={styles.input}
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="last_test_date">
              Last Test Date*
            </label>
            <input
              type="date"
              id="last_test_date"
              name="last_test_date"
              value={formData.last_test_date}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="next_test_date">
              Next Test Date*
            </label>
            <input
              type="date"
              id="next_test_date"
              name="next_test_date"
              value={formData.next_test_date}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>
        </div>
      </fieldset>

      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Container Specifications</legend>
        <div className={styles.row}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="manufacturer">
              Manufacturer*
            </label>
            <input
              type="text"
              id="manufacturer"
              name="manufacturer"
              value={formData.manufacturer}
              onChange={handleChange}
              className={styles.input}
              maxLength={100}
              required
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="capacity">
              Capacity
            </label>
            <input
              type="text"
              id="capacity"
              name="capacity"
              value={formData.capacity}
              onChange={handleChange}
              className={styles.input}
              maxLength={20}
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="tare_wt">
              Tare WT*
            </label>
            <input
              type="number"
              id="tare_wt"
              name="tare_wt"
              value={formData.tare_wt}
              onChange={handleChange}
              className={styles.input}
              step="0.01"
              min="0"
              required
            />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="gross_wt">
              Gross WT*
            </label>
            <input
              type="number"
              id="gross_wt"
              name="gross_wt"
              value={formData.gross_wt}
              onChange={handleChange}
              className={styles.input}
              step="0.01"
              min="0"
              required
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="csc">
              CSC
            </label>
            <input
              type="text"
              id="csc"
              name="csc"
              value={formData.csc}
              onChange={handleChange}
              className={styles.input}
              maxLength={50}
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="last_cargo">
              Last Cargo*
            </label>
            <input
              type="text"
              id="last_cargo"
              name="last_cargo"
              value={formData.last_cargo}
              onChange={handleChange}
              className={styles.input}
              maxLength={100}
              required
            />
          </div>
        </div>
      </fieldset>

      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Location & Vessel</legend>
        <div className={styles.row}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="source">
              Source
            </label>
            <input
              type="text"
              id="source"
              name="source"
              value={formData.source}
              onChange={handleChange}
              className={styles.input}
              maxLength={50}
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="terminal">
              Terminal
            </label>
            <input
              type="text"
              id="terminal"
              name="terminal"
              value={formData.terminal}
              onChange={handleChange}
              className={styles.input}
              maxLength={50}
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="vessel">
              Vessel
            </label>
            <input
              type="text"
              id="vessel"
              name="vessel"
              value={formData.vessel}
              onChange={handleChange}
              className={styles.input}
              maxLength={50}
            />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="sub_line">
              Sub Line
            </label>
            <input
              type="text"
              id="sub_line"
              name="sub_line"
              value={formData.sub_line}
              onChange={handleChange}
              className={styles.input}
              maxLength={100}
            />
          </div>
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
          <div className={styles.field} />
        </div>
      </fieldset>

      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Additional Information</legend>
        <div className={styles.row}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="do_no">
              DO No
            </label>
            <input
              type="text"
              id="do_no"
              name="do_no"
              value={formData.do_no}
              onChange={handleChange}
              className={styles.input}
              maxLength={50}
            />
          </div>
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
        <div className={styles.actionButtons}>
          <button
            type="button"
            className={styles.buttonSearch}
            onClick={handleSearchContainer}
          >
            Search Container
          </button>
          <button
            type="button"
            className={styles.buttonNew}
            onClick={handleNewEntry}
          >
            New Entry
          </button>
          <button
            type="button"
            className={styles.buttonPrint}
            onClick={handlePrint}
          >
            Print
          </button>
          <button type="submit" className={styles.buttonSave}>
            Save Gate In
          </button>
        </div>
      </div>
    </form>
  );
}
