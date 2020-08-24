import { Component, createRef, createElement, Fragment } from "react";

import Loader from "./Loader";

import "../styles/components/Form.scss";

const Fields = {
  Name: {
    placeholder: "Imię i Nazwisko",
    match: /^[a-zA-Z]+[\s|-]?[a-zA-Z]+[\s|-]?[a-zA-Z]+$/,
    required: true,
    type: "input",
  },
  Email: {
    placeholder: "Adres E-Mail",
    match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    required: false,
    type: "input",
  },
  Phone: {
    placeholder: "Numer telefonu",
    match: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/,
    required: false,
    type: "input",
  },
  Message: {
    match: /./,
    placeholder: "Wiadomość ...",
    required: true,
    type: "textarea",
  },
};

const FieldKeys = Object.keys(Fields);

/**
 * Convert long number of bytes to short formatted number
 * @license Unlicense SO Community
 * @param {numer} bytes
 * @param {number} decimals
 */
const formatBytes = (bytes, decimals) => {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
};

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      loaderVisible: false,
      formVisible: true,
      errorMessage: false,
      errorMessageText: false,
      success: false,
    };

    FieldKeys.forEach((field) => {
      this.state[`field${field}`] = "";
      this.state[`validate${field}`] = true;
    });

    this.files = [];
    this.filesRef = createRef();
  }

  componentDidMount() {
    // can't define FormData on server
    this.toSend = new FormData();
  }

  updateField = (e) => {
    this.validateOnInput(e);
    this.setState({
      [`field${e.target.name}`]: e.target.value,
      errorMessage: false,
    });
  };

  preSubmit = () => {
    this.setState({ loaderVisible: true, formVisible: false });
  };

  Submit = async () => {
    this.preSubmit();
    try {
      FieldKeys.forEach((field) => {
        if (!this.validate(field, this.state[`field${field}`]))
          throw `Sprawdź ${field}`;
      });

      FieldKeys.forEach((field) =>
        this.toSend.append(field, this.state[`field${field}`])
      );

      const req = await fetch("/api/kontakt", this.toSend);
      const data = await req.json();

      if (!data.success) throw "Nie mogliśmy otrzymać twojej wiadomości";

      this.setState({
        success: true,
        loaderVisible: false,
        formVisible: false,
      });
    } catch (e) {
      this.setState({
        errorMessage: true,
        errorMessageText: e,
        formVisible: true,
        loaderVisible: false,
      });
    }
  };

  validate = (name, value) => {
    // First check if required, if not and is empty return true
    if (!Fields[name].required && value === "") return true;
    // Then check regex match
    return value.search(Fields[name].match) > -1;
  };

  validateOnInput = (e) => {
    const { name, value } = e.target;
    this.setState({ [`validate${name}`]: this.validate(name, value) });
  };

  fileHandler = (e) => {
    for (let file = 0; file < e.target.files.length; file++) {
      let id = parseInt(Math.random() * 10e10).toString(36);
      const { name, size, type } = e.target.files[file];
      this.files.push({ name, size, type, id });
      this.toSend.append(id, e.target.files[file], name);
    }
    this.setState({});
  };

  removeFile = (e) => {
    const { id } = e.target;
    this.toSend.delete(id);
    this.files.forEach((file, index) => {
      if (file.id === id) {
        this.files.splice(index, 1);
      }
    });
    this.setState({});
  };

  render() {
    return (
      <div id="Form">
        <div className="row header">
          <h1>Skontaktuj się z nami!</h1>
        </div>
        {this.state.loaderVisible ? <Loader /> : null}
        {this.state.errorMessage ? (
          <div className="error-message">
            <div className="e-mark">!</div>
            <div className="message">Coś poszło nie tak!</div>
            {this.state.errorMessageText ? (
              <div className="message">{this.state.errorMessageText}</div>
            ) : null}
          </div>
        ) : null}
        {this.state.success ? (
          <div className="row success">
            <h5>Dziękujemy! Wkrótce się odezwiemy.</h5>
          </div>
        ) : null}
        <div
          className={`form-wrapper ${
            this.state.formVisible ? "" : "hide-form"
          }`}
        >
          <div className="row form">
            {FieldKeys.map((field) => (
              <Fragment key={field}>
                {createElement(Fields[field].type, {
                  name: field,
                  placeholder: Fields[field].placeholder,
                  onChange: this.updateField,
                  value: this.state[`field${field}`],
                  className: !this.state[`validate${field}`]
                    ? "input-error"
                    : "",
                })}
                {this.state[`validate${field}`] ? null : (
                  <p className="error">Sprawdż {field} jeszcze raz</p>
                )}
              </Fragment>
            ))}
          </div>
          <div className="row buttons">
            <button onClick={() => this.filesRef.current.click()}>
              Załącz Plik
            </button>
            <button onClick={this.Submit}>Wyślij</button>
          </div>
          <div className="row files">
            <input
              type="file"
              ref={this.filesRef}
              onChange={this.fileHandler}
              multiple
            />
            <div className="col">
              {this.files.map((file) => (
                <div className="row no-gutters single-file">
                  <div className="col">{file.name}</div>
                  <div className="col-2">{formatBytes(file.size)}</div>
                  <div className="col-2">
                    <button
                      id={file.id}
                      className="remove-button"
                      onClick={this.removeFile}
                    >
                      X
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
