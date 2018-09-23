import * as React from 'react';
import {Link} from 'react-router-dom';

type TTestState = {};

export default class Test extends React.Component<{}, TTestState> {

    render() {
        return (
            <React.Fragment>
                <h1>Hello Test Page</h1>
                <Link to={''}>
                    Test Link
                </Link>
            </React.Fragment>
        );
    }
}