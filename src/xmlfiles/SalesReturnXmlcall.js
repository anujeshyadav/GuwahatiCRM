import React from "react";

const SalesManagerxml = () => {
  return `<?xml version="1.0"?>
  <SalesReturn>
  <MyDropDown>
      <dropdown>
          <label>Order Id</label>
          <name>category</name>
          <option value="001">001</option>
          <option value="002">002</option>
          <option value="003">003</option>
      </dropdown>
  </MyDropDown>
      
      <input>
          <label>ProductName</label>
          <Readonly>yes</Readonly>
          <type type="text"></type>
          <name>ProductName</name>
          <placeholder>Product Name</placeholder>
      </input>
  
      <input>
          <label>Product Price</label>
          <Readonly>yes</Readonly>
          <type type="number"></type>
          <name>Product_Price</name>
          <placeholder>Product Price</placeholder>
      </input>
  
      <input>
          <label>Quantity Purchased</label>
          <type type="number"></type>
          <name>Qty_Purchased</name>
          <placeholder>Enter Quantity</placeholder>
      </input>
  
      <input>
          <label>Return Quantity</label>
          <type type="number"></type>
          <number>yes</number>
          <name>Qty_Return</name>
          <placeholder>Enter Mobile Number</placeholder>
      </input>
  
    <input>
          <label>Mobile No.</label>
          <type type="text"></type>
          <number>yes</number>
          
          <name>mobileNumber</name>
          <placeholder>Enter Mobile Number</placeholder>
      </input>
      
       <input>
          <label>Email id</label>
          <type type="email"></type>
          <name>email</name>
          <placeholder>Enter Email id</placeholder>
      </input>
  
      <input>
          <label>Amount to be Return</label>
          <type type="number"></type>
          <number>yes</number>
          <name>Return_amount</name>
          <placeholder>Total Return Amount</placeholder>
      </input>
  
  
  </SalesReturn>
  
  `;
};
export default SalesManagerxml;
