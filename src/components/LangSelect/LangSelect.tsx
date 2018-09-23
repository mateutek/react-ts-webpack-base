import * as React from 'react';
import ILangSelect from './ILangSelect';
import './LangSelect.scss';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router';
type State = {};

class LangSelect extends React.Component<ILangSelect, State> {
    state: State = {};
    render() {
        const {selectedLang} = this.props;
        return (
            <div>
                <span>
                    {selectedLang}
                </span>
                <Link to={`/en`} >
                    EN
                </Link>
                <Link to={`/pl`} >
                    PL
                </Link>
                <Link to={`/de`} >
                    DE
                </Link>
            </div>
        );
    }
}

export default withRouter(LangSelect);