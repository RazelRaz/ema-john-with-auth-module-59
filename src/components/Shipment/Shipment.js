import React, { useState } from "react";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";

const Shipment = () => {

    const [user] = useAuthState(auth)

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    // const navigate = useNavigate();

    const handleNameBlur = event => {
        setName(event.target.value)
    }

    // const handleEmailBlur = event => {
    //     setEmail(event.target.value);
    // }

    const handleAddressBlur = event => {
        setAddress(event.target.value)
    }

    const handlePhoneBlur = event => {
        setPhone(event.target.value)
    }

    const handleCreateUser = event => {
        event.preventDefault();
        const shipping = {name, email, address, phone};
        console.log(shipping);
    }

  return (
    <div className="form_container">
      <div>
        <h2 className="form_title">Shipping Information</h2>
        <form onSubmit={handleCreateUser}>
          <div className="input_group">
            <label htmlFor="name">Name</label>
            <input
              onBlur={handleNameBlur}
              type="text"
              name="name"
              id="name"
              required
            />
          </div>
          <div className="input_group">
            <label htmlFor="email">Email</label>
            <input
              value={user?.email} readOnly
              type="email"
              name="email"
              id="email"
              required
            />
          </div>
          <div className="input_group">
            <label htmlFor="address">Address</label>
            <input
              onBlur={handleAddressBlur}
              type="text"
              name="address"
              id=""
              required
            />
          </div>
          <div className="input_group">
            <label htmlFor="phone">Phone</label>
            <input
              onBlur={handlePhoneBlur}
              type="number"
              name="phone"
              id=""
              required
            />
          </div>
          <p style={{ color: "red" }}>{error}</p>
          <div>
            <input className="form_submit" type="submit" value="Add Shiping" />
          </div>
        </form>
        <div>
        </div>
      </div>
    </div>
  );
};

export default Shipment;
