import { Component, createRef } from "react";

import Loader from "./Loader";

import axios from "axios";

import "../styles/Form.c.scss";

import { Validators } from "../site.info";

const formatBytes = (bytes, decimals) => {
  // Source: SO Community
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
      fieldName: "",
      fieldEmail: "",
      fieldPhone: "",
      fieldMessage: "",
      validateName: true,
      validateEmail: true,
      validatePhone: true,
      validateMessage: true,
      loaderVisible: false,
      formVisible: true,
      errorMessage: false,
      errorMessageText: false,
      success: false,
    };

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
      if (
        !this.state.validateName ||
        !this.state.validateEmail ||
        !this.state.validatePhone ||
        !this.state.validateMessage
      ) {
        throw "Sprawdż pola";
      }

      this.toSend.append("name", this.state.fieldName);
      this.toSend.append("email", this.state.fieldEmail);
      this.toSend.append("phone", this.state.fieldPhone);
      this.toSend.append("message", this.state.fieldMessage);

      const { data } = await axios.post("/api/kontakt", this.toSend);

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

  validateOnInput = (e) => {
    const match = e.target.value.search(Validators[e.target.name]);
    const invalid = match > -1 ? false : true;
    this.setState({ [`validate${e.target.name}`]: match > -1 });
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
            <input
              name="Name"
              placeholder="Imię i Nazwisko"
              onChange={this.updateField}
              value={this.state["fieldName"]}
              className={!this.state["validateName"] ? "input-error" : ""}
            />
            {this.state["validateName"] ? null : (
              <p className="error">Nieprawidłowe Imię</p>
            )}
            <input
              name="Email"
              placeholder="Adres mailowy"
              onChange={this.updateField}
              value={this.state["fieldEmail"]}
              className={!this.state["validateEmail"] ? "input-error" : ""}
            />
            {this.state["validateEmail"] ? null : (
              <p className="error">Nieprawidłowy Email</p>
            )}
            <input
              name="Phone"
              placeholder="Numer telefonu"
              onChange={this.updateField}
              value={this.state["fieldPhone"]}
            />
            <textarea
              name="Message"
              placeholder="Wiadomość ..."
              onChange={this.updateField}
              value={this.state["fieldMessage"]}
            />
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
