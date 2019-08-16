import { Field, Form, withFormik } from "formik";
import React from "react";
import { connect } from "react-redux";
import { addToVillage, getSmurf } from "../actions";

const SmurfForm = props => {
  return (
    <div className="smurfForm">
      <Form>
        <button
          className="button"
          type="button"
          onClick={() => props.getSmurf()}
        >
          <span>View Village</span>
        </button>
        <label>
          <h4>Name:</h4>
          <Field type="text" name="name" placeholder="Smurf name" />
        </label>
        <label>
          <h4>Age:</h4>
          <Field type="text" name="age" placeholder="Smurf Age" />
        </label>
        <label>
          <h4> Height:</h4>
          <Field type="text" name="height" placeholder="Smurf Height" />
        </label>
        <br />
        <br />
        <button className="button" type="button" onClick={() => addToVillage()}>
          <span>Add to Village</span>
        </button>
      </Form>
    </div>
  );
};

const SmurfForms = withFormik({
  mapPropsToValue({ name, age, height }) {
    return {
      name: name || "",
      age: age || "",
      height: height || ""
    };
  },

  handleSubmit(values, { props, resetForm, setSubmitting }) {
    props.addToVillage(values);
    resetForm("");
    setSubmitting(false);
  }
})(SmurfForm);

export default connect(
  null,
  { addToVillage, getSmurf }
)(SmurfForms);
