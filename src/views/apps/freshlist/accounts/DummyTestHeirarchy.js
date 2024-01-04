import React, { useState } from "react";
import { Col, Input, Row } from "reactstrap";

const testPage = () => {
  const [formValues, setFormValues] = useState([{ Parent: "", Child: "" }]);

  let handleChange = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  };

  let addFormFields = () => {
    setFormValues([...formValues, { Parent: "", Child: "" }]);
  };

  let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(formValues));
  };

  return (
    <form onSubmit={handleSubmit}>
      {formValues.map((element, index) => (
        <Row>
          <Col>
            <label>Primary</label>
            <Input
              type="text"
              name="Parent"
              value={element.Parent}
              onChange={(e) => handleChange(index, e)}
            />
          </Col>
          <Col>
            <label>secondary</label>
            <Input
              type="text"
              name="Child"
              value={element.Child}
              onChange={(e) => handleChange(index, e)}
            />
          </Col>
          <Col>
            {index ? (
              <button
                type="button"
                className="button remove"
                onClick={() => removeFormFields(index)}>
                Remove
              </button>
            ) : null}
            <div className="button-section">
              <button
                className="button add"
                type="button"
                onClick={() => addFormFields()}>
                Add
              </button>
              <button className="button submit" type="submit">
                Submit
              </button>
            </div>
          </Col>
          <div className="form-inline" key={index}></div>
        </Row>
      ))}
    </form>
  );
};

export default testPage;
