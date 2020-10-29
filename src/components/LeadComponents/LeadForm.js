import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import FieldInput from '../HelperComponents/FieldInput';

import { NavLink } from "react-router-dom";


export const LeadForm = ({ handleSubmit, pristine, reset, submitting, heading,  handleSave, handleCancel }) => {
    return (
        <div>
          <NavLink to='/'>  <button
                type="button"
                className="btn btn-primary"
                style={{textAlign:'start',borderRadius: '25px',padding: '10 15px 10 17px',margin: '30px'}}
            >
               <i class="fa fa-arrow-circle-left" aria-hidden="true">Back</i>  
            </button>
            </NavLink>
            <form onSubmit={handleSubmit(handleSave)}>


                <Field
                    type="text"
                    name="name"
                    label="Name"
                    placeholder="please enter name"
                    component={FieldInput}
                />
                <Field
                    type="text"
                    name="project"
                    label="Project"
                    placeholder="please enter name of project"
                    component={FieldInput}
                />
                <Field
                    type='text'
                    name="activity_score"
                    label="Activity Score"
                    placeholder="please enter Activity Score"

                    component={FieldInput}
                />

                <Field
                    type="text"
                    name="activity_status"
                    label="Activity Status"
                    placeholder="Category of the course"
                    component={FieldInput}
                />

                <Field
                    type="text"
                    name="leads_assigned_to"
                    label="Leads Assigned To"
                    placeholder="please enter name of Leads Assigned To"
                    component={FieldInput}
                />

                <div>
                    <button type="submit" disabled={submitting} className="btn btn-primary"><i className="fa fa-paper-plane-o" aria-hidden="true" /> Save Change</button>

                    {heading === 'Add' && <button type="button" disabled={pristine || submitting} onClick={reset} className="btn btn-default btn-space">Clear Values</button>}

                    <button type="button" className="btn btn-default btn-space" onClick={handleCancel}>Cancel</button>
                </div>
            </form>
        </div>
    );
};





const validate = values => {
    const errors = {};

    if (!values.title) {
        errors.title = 'Required';
    }

    if (!values.category) {
        errors.category = 'Required';
    }

    if (!values.length) {
        errors.length = 'Required';
    }

    if (!values.authorId) {
        errors.authorId = 'Required';
    }

    return errors;
};



LeadForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    pristine: PropTypes.bool.isRequired,
    reset: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
    heading: PropTypes.string.isRequired,
    authors: PropTypes.array.isRequired,
    handleSave: PropTypes.func.isRequired,
    handleCancel: PropTypes.func.isRequired
};



export default reduxForm({
    form: 'LeadForm',
    validate
})(LeadForm);
