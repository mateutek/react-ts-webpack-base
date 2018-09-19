import * as React from 'react';
import IHome from './IHome';

type THomeState = {};

export default class Home extends React.Component<IHome, THomeState> {

    componentDidMount() {
        console.log('Homepage');
    }

    render() {
        return (
            <h1>Hello Homepage</h1>
        );
    }
}