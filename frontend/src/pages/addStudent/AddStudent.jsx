import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Calendar } from "react-calendar";
import { useNavigate } from "react-router-dom";
import "./addStudent.css";

export const AddStudent = () => {
  const [name, setName] = useState("");
  const [contactnumber, setContactnumber] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [calDate, setCalDate] = useState(new Date());

  const navigate = useNavigate();
  function sendData(e) {
    e.preventDefault();

    const newStudent = {
      name,
      contactnumber,
      address,
      gender,
      dob,
    };
    console.log(newStudent);
    axios
      .post("http://localhost:8800/api/students/add", newStudent)
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        alert(err);
      });
  }
  //   function onChange (calDate) {
  //     // change results based on calendar date click
  //     setCalDate(calDate)
  // }

  return (
    <div className="containerdiv">
      <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded">
        <div>
          <h5 style={{ textAlign: "center" }}>Add New Student here...</h5>
        </div>

        <div className="homediv">
          <form onSubmit={sendData} className="formcontainer">
            <div class="mb-3">
              <label for="name">Student Name</label>
              <input
                type="text"
                class="form-control"
                id="fullname"
                placeholder="Enter Student Name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div class="mb-3">
              <label for="address">Contact Number</label>
              <input
                type="text"
                class="form-control"
                id="address"
                placeholder="Enter Contact Number"
                onChange={(e) => {
                  setContactnumber(e.target.value);
                }}
              />
            </div>
            <div class="mb-3">
              <label for="address">Address</label>
              <input
                type="text"
                class="form-control"
                id="address"
                placeholder="Enter Address"
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
            </div>

            <div class="mb-3">
              <label for="gender">Select Student Gender</label>
              <select
                onChange={(e) => {
                  setGender(e.target.value);
                }}
                class="form-control"
              >
                <option value="none" selected disabled hidden>
                  Select an Option
                </option>
                <option value="Male" class="form-control">
                  Male
                </option>
                <option value="Female" class="form-control">
                  Female
                </option>
              </select>
            </div>

            <div class="mb-3">
              <label for="dob">Age</label>
              <input
                type="text"
                class="form-control"
                id="dob"
                placeholder="Enter Age"
                onChange={(e) => {
                  setDob(e.target.value);
                }}
              />
            </div>

            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
