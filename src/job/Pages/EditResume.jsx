import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function EditResume() {
  return (
    <div>
      <Header page={"editResume"} />

      <section className=" job-bg ad-details-page">
        <div className="container">
          <div className="breadcrumb-section">
            <ol className="breadcrumb">
              <li>
                <a href="/">Home</a>
              </li>
              <li>Edit Resume</li>
            </ol>
            <h2 className="title">Edit Resume</h2>
          </div>
          <div className="adpost-details post-resume">
            <div className="row">
              <div className="col-lg-8 clearfix">
                <form action="#">
                  <fieldset>
                    <div className="section express-yourself">
                      <h4>Express Yourself</h4>
                      <div className="row form-group">
                        <label className="col-md-4 label-title">
                          Full Name
                        </label>
                        <div className="col-md-8">
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="ex Jhon Doe"
                          />
                        </div>
                      </div>
                      <div className="row form-group additional-information">
                        <label className="col-md-4 label-title">
                          Additional Information
                        </label>
                        <div className="col-md-8">
                          <textarea
                            className="form-control"
                            placeholder="Address: 123 West 12th Street, Suite 456 New York, NY 123456\n Phone: +012 345 678 910 \n Email: itsme@surzilegeek.com*"
                          ></textarea>
                        </div>
                      </div>
                      <div className="row form-group photos-resume">
                        <label className="col-md-4 label-title">
                          Photos for your Resume
                        </label>
                        <div className="col-md-8 ">
                          <label
                            className="upload-image left"
                            for="upload-image-one"
                          >
                            Type: JPG, PNG Size: 3.5 x 4.5 cm
                          </label>
                          <label
                            className="upload-image"
                            for="upload-image-two"
                          >
                            Upload Photo
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="section career-objective">
                      <h4>Career Objective</h4>
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          placeholder="Write few lines about your career objective"
                          rows="8"
                        ></textarea>
                      </div>
                      <span>5000 characters left</span>
                    </div>
                    <div className="section">
                      <h4>Work History</h4>
                      <div className="row form-group">
                        <label className="col-md-3 label-title">
                          Compnay Name
                        </label>
                        <div className="col-md-9">
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Name"
                          />
                        </div>
                      </div>
                      <div className="row form-group">
                        <label className="col-md-3 label-title">
                          Designation
                        </label>
                        <div className="col-md-9">
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Human Resource Manager"
                          />
                        </div>
                      </div>
                      <div className="row form-group time-period">
                        <label className="col-md-3 label-title">
                          Time Period
                        </label>
                        <div className="col-md-9">
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="dd/mm/yy"
                          />
                          <span>-</span>
                          <input
                            type="text"
                            name="name"
                            className="form-control pull-right"
                            placeholder="dd/mm/yy"
                          />
                        </div>
                      </div>
                      <div className="row form-group job-description">
                        <label className="col-md-3 label-title">
                          Job Description
                        </label>
                        <div className="col-md-9">
                          <textarea
                            className="form-control"
                            placeholder
                            rows="8"
                          ></textarea>
                        </div>
                      </div>
                      <div className="buttons pull-right">
                        <a href="#" className="btn">
                          Add New Exprience
                        </a>
                        <a href="#" className="btn delete">
                          Delete
                        </a>
                      </div>
                    </div>
                    <div className="section education-background">
                      <h4>Education Background</h4>
                      <div className="row form-group">
                        <label className="col-md-3 label-title">
                          Institute Name
                        </label>
                        <div className="col-md-9">
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="ropbox"
                          />
                        </div>
                      </div>
                      <div className="row form-group">
                        <label className="col-md-3 label-title">Degree</label>
                        <div className="col-md-9">
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Human Resource Manager"
                          />
                        </div>
                      </div>
                      <div className="row form-group time-period">
                        <label className="col-md-3 label-title">
                          Time Period
                        </label>
                        <div className="col-md-9">
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="dd/mm/yy"
                          />
                          <span>-</span>
                          <input
                            type="text"
                            name="name"
                            className="form-control pull-right"
                            placeholder="dd/mm/yy"
                          />
                        </div>
                      </div>
                      <div className="row form-group job-description">
                        <label className="col-md-3 label-title">
                          Description
                        </label>
                        <div className="col-md-9">
                          <textarea
                            className="form-control"
                            placeholder
                            rows="8"
                          ></textarea>
                        </div>
                      </div>
                      <div className="buttons pull-right">
                        <a href="#" className="btn">
                          Add New Education
                        </a>
                        <a href="#" className="btn delete">
                          Delete
                        </a>
                      </div>
                    </div>
                    <div className="section special-qualification">
                      <h4>Special Qualification</h4>
                      <div className="form-group item-description">
                        <textarea
                          className="form-control"
                          placeholder="Write few lines about your special qualification"
                          rows="8"
                        ></textarea>
                      </div>
                    </div>
                    <div className="section language-proficiency">
                      <h4>Language Proficiency:</h4>
                      <div className="row form-group">
                        <label className="col-md-3 label-title">
                          Language Name
                        </label>
                        <div className="col-md-9">
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="English"
                          />
                        </div>
                      </div>
                      <div className="buttons pull-right">
                        <a href="#" className="btn">
                          Add New Language
                        </a>
                        <a href="#" className="btn delete">
                          Delete
                        </a>
                      </div>
                    </div>
                    <div className="section company-information">
                      <h4>Personal Deatils</h4>
                      <div className="row form-group">
                        <label className="col-md-3 label-title">
                          Full Name
                        </label>
                        <div className="col-md-9">
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Jhon Doe"
                          />
                        </div>
                      </div>
                      <div className="row form-group">
                        <label className="col-md-3 label-title">
                          Father's Name
                        </label>
                        <div className="col-md-9">
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Robert Doe"
                          />
                        </div>
                      </div>
                      <div className="row form-group">
                        <label className="col-md-3 label-title">
                          Mother's Name
                        </label>
                        <div className="col-md-9">
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Imdatic Roderos Doe"
                          />
                        </div>
                      </div>
                      <div className="row form-group">
                        <label className="col-md-3 label-title">
                          Date of Birth
                        </label>
                        <div className="col-md-9">
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="26/01/1982"
                          />
                        </div>
                      </div>
                      <div className="row form-group">
                        <label className="col-md-3 label-title">
                          Birth Place
                        </label>
                        <div className="col-md-9">
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="United State of America"
                          />
                        </div>
                      </div>
                      <div className="row form-group">
                        <label className="col-md-3 label-title">
                          Nationality
                        </label>
                        <div className="col-md-9">
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Canadian"
                          />
                        </div>
                      </div>
                      <div className="row form-group">
                        <label className="col-md-3 label-title">Sex</label>
                        <div className="col-md-9">
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Male"
                          />
                        </div>
                      </div>
                      <div className="row form-group">
                        <label className="col-md-3 label-title">Address</label>
                        <div className="col-md-9">
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="121 King Street, Melbourne Victoria, 1200 USA"
                          />
                        </div>
                      </div>
                      <div className="buttons pull-right">
                        <a href="#" className="btn">
                          Add New Feild
                        </a>
                      </div>
                    </div>
                    <div className="section special-qualification">
                      <h4>Declaration</h4>
                      <div className="form-group item-description">
                        <textarea
                          className="form-control"
                          placeholder
                          rows="8"
                        ></textarea>
                      </div>
                    </div>
                  </fieldset>
                </form>
                <div className="buttons">
                  <a href="#" className="btn">
                    Update Profile
                  </a>
                  <a href="#" className="btn cancle">
                    Cancle
                  </a>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="section quick-rules">
                  <h4>Quick rules</h4>
                  <p className="lead">
                    Posting an ad on <a href="#">jobs.com</a> is free! However,
                    all ads must follow our rules:
                  </p>
                  <ul>
                    <li>Make sure you post in the correct category.</li>
                    <li>
                      Do not post the same ad more than once or repost an ad
                      within 48 hours.
                    </li>
                    <li>Do not upload pictures with watermarks.</li>
                    <li>
                      Do not post ads containing multiple items unless it's a
                      package deal.
                    </li>
                    <li>
                      Do not put your email or phone numbers in the title or
                      description.
                    </li>
                    <li>Make sure you post in the correct category.</li>
                    <li>
                      Do not post the same ad more than once or repost an ad
                      within 48 hours.
                    </li>
                    <li>Do not upload pictures with watermarks.</li>
                    <li>
                      Do not post ads containing multiple items unless it's a
                      package deal.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default EditResume;
