import { Component, createRef } from "react";

import axios from "axios";

import "../styles/Form.c.scss";

const validators = {
  Name: /^[a-zA-Z]+[\s|-]?[a-zA-Z]+[\s|-]?[a-zA-Z]+$/,
  Email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
};

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
      formVisible: true,
      errorMessage: false,
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
    this.setState({ [`field${e.target.name}`]: e.target.value });
  };

  Submit = () => {
    this.toSend.append("name", this.state.fieldName);
    this.toSend.append("email", this.state.fieldEmail);
    this.toSend.append("phone", this.state.fieldPhone);
    this.toSend.append("message", this.state.fieldMessage);
    axios.post("/api/kontakt", this.toSend).then();
  };

  validateOnInput = (e) => {
    const match = e.target.value.search(validators[e.target.name]);
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
        {/* <div
          className={`loader ${this.state.formVisible ? "visible" : ""}`}
        ></div> */}
        <div className="row header">
          <h1>Skontaktuj się z nami!</h1>
        </div>
        {this.state.errorMessage ? (
          <div class="error-message">
            <div class="e-mark">!</div>
            <div class="message">Coś poszło nie tak!</div>
          </div>
        ) : null}
        <div
          className={`form-wrapper ${
            !this.state.formVisible ? "hideForm" : ""
          }`}
        >
          <div className="row form">
            <input
              name="Name"
              placeholder="Imię i Nazwisko"
              onChange={this.updateField}
              value={this.state["fieldName"]}
              className={!this.state['validateName'] ? 'input-error' : ''}
            />
            {this.state["validateName"] ? null : (
              <p className="error">Nieprawidłowe Imię</p>
            )}
            <input
              name="Email"
              placeholder="Adres mailowy"
              onChange={this.updateField}
              value={this.state["fieldEmail"]}
              className={!this.state['validateEmail'] ? 'input-error' : ''}
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
            <button onClick={() => this.filesRef.current.click()}>Załącz Plik</button>
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
