import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './store/reducers/auth';
/* loading translation & internationalization */
import antdEn from 'antd/lib/locale-provider/en_US';
import antdHi from 'antd/lib/locale-provider/hi_IN';
import appLocaleDataEn from 'react-intl/locale-data/en';
import appLocaleDataHi from 'react-intl/locale-data/hi';
import hiMessages from './Locale/hi.json';//custom text
import enMessages from './Locale/en.json';//custom text
import { IntlProvider, addLocaleData } from 'react-intl';
import { ConfigProvider } from 'antd';
//import { firebase } from './Firebase/index';

import Main from './Containers/Main';
import './Style/eduveda.css';
import 'bootstrap';
import '@popperjs/core';


///first check saved language in Browser local storage, if not then check for passed parameter lang in url
//we can pass fr or en
const url = window.location.href; // or window.location.href for current url
const capturedUrlLang = /lang=([^&]+)/.exec(url); // Value is in [1]
const capturedStorageLang = window.localStorage.language;

const getCapturedLocale = (captured) => {
    let locale;
    switch (captured) {
        case 'hi':
            locale = 'hi_IN';
            break;
        default:
            locale = 'en-US';
    }
    return locale;
};

//stored browser data if priority then valid lang in URL, default is English
const locale =  capturedStorageLang ? capturedStorageLang : (capturedUrlLang ? getCapturedLocale(capturedUrlLang[1]) : 'en-US' );

//store it in browser storage for when the user comes back
window.localStorage.setItem("language", locale);

//set global var in case we need it.
window.lang = locale.substring(0, 2);// hi or en

//set translated Ant Design, React and Custom text
let appLocale;
switch(locale) {
    case 'hi-IN':
        appLocale = {
            messages: {
                ...hiMessages,
            },
            antd: antdHi,
            locale: 'hi-IN',
            data: appLocaleDataHi
        };
        break;
    default:
        appLocale = {
            messages: {
                ...enMessages,
            },
            antd: antdEn,
            locale: 'en-US',
            data: appLocaleDataEn
        };
};

addLocaleData(appLocale.data);


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    auth: authReducer
});

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));

ReactDOM.render(
  <Provider store={store}>
  <ConfigProvider locale={appLocale.antd}>
    <IntlProvider locale={appLocale.locale} messages={appLocale.messages}>
      <Main />
    </IntlProvider>
  </ConfigProvider>
  </Provider>,
  document.getElementById('root')
);
