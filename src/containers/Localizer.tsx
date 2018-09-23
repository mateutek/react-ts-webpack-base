import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// import { setUiLocale } from '../services/i18n';
import { switchHtmlLocale, getLocaleFromPath } from '../services/i18n/util';
import { changeLocale, setUiTranslationsLoaded, setUiTranslationsLoading } from '../features/action.app';
import ILocalizer from '../interfaces/ILocalizer';
import {TAppRootReducer} from '../features/index.main';

class Localizer extends React.Component<ILocalizer, {}> {
    constructor(props) {
        super(props);

        this.setLocale(getLocaleFromPath(this.props.location.pathname), true);

        this.props.history.listen(location => {
            this.setLocale(getLocaleFromPath(location.pathname));
        });
    }

    /**
     * Set the lang and dir attributes in the <html> DOM element, and
     * initialize our i18n UI library.
     *
     * @param {string} newLocale
     * @param {bool} force
     */
    setLocale(newLocale, force = false) {
        if (force || newLocale !== this.props.locale) {
            this.props.changeLocale(newLocale);
            switchHtmlLocale(newLocale);
            this.props.setUiTranslationsLoading();
            this.props.setUiTranslationsLoaded(true);
        }
    }

    shouldComponentUpdate() {
        return true;
    }

    render() {
        return this.props.children;
    }
}

const mapStateToProps = (store: TAppRootReducer) => {
    return {
        locale: store.appReducer.locale
    };
};

const mapDispatchToProps = (dispatch: Function) => {
    return {
        changeLocale: (locale: string) => {
            dispatch(changeLocale(locale));
        },
        setUiTranslationsLoading: () => {
            dispatch(setUiTranslationsLoading());
        },
        setUiTranslationsLoaded: (isLoaded: boolean) => {
            dispatch(setUiTranslationsLoaded(isLoaded));
        },
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Localizer));
