import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'; // eslint-disable-line
import { Provider } from 'react-redux'; // eslint-disable-line
import { addLocaleData, IntlProvider } from 'react-intl';
import appLocaleDataEn from 'react-intl/locale-data/en';
import enMessages from './../../Locale/en.json'; //custom text
import Main from '../Main';


class IntlProviderWrapper extends Component {

    constructor(...args) {
        super(...args);

        this.state = {
            messages: null,
            locale: null,
            data: null
        };
    }

    componentWillMount() {
        this.onChangeLanguage();
    }

    onChangeLanguage = () => {
        switch ("en") {
        default:
            this.setState({
                messages: {
                    ...enMessages
                },
                locale: "en",
                data: appLocaleDataEn
            }, addLocaleData(appLocaleDataEn));
        };
    };

    render() {
        //set translated Ant Design, React and Custom text
        const { locale, messages } = this.state;
        return (
                <IntlProvider locale={locale} messages={messages}>
                   <BrowserRouter>
                        <Main onChangeLanguage={this.onChangeLanguage}/>
                    </BrowserRouter>
                </IntlProvider>
        );
    }
}

export default IntlProviderWrapper;
