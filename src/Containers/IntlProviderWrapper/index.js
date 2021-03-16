import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom"; // eslint-disable-line
import { addLocaleData, IntlProvider } from "react-intl";
import appLocaleDataEn from "react-intl/locale-data/en";
import enMessages from "./../../Locale/en.json"; //custom text
import Main from "../Main";

class IntlProviderWrapper extends Component {
  constructor(...args) {
    super(...args);

    this.state = {
      languages: ["ENG", "HIN"],
      messages: null,
      locale: null,
      data: null,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.locale});
  }

  componentWillMount() {
    this.onChangeLanguage();
  }

  onChangeLanguage = () => {
    switch ("en") {
      default:
        this.setState(
          {
            messages: {
              ...enMessages,
            },
            locale: "ENG",
            data: appLocaleDataEn,
          },
          addLocaleData(appLocaleDataEn)
        );
    }
  };

  render() {
    //set translated Ant Design, React and Custom text
    const { locale, messages } = this.state;
    return (
      <IntlProvider locale={locale} messages={messages}>
        <BrowserRouter>
          <Main language={locale} />
        </BrowserRouter>
      </IntlProvider>
    );
  }
}

export default IntlProviderWrapper;
