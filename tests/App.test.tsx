import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as TestUtils from 'react-dom/test-utils';
import App from '../src/App';
import {browserHistory} from '../src/features/store';
import {Router} from 'react-router';

it('App is rendered', () => {
    // Render App in the document
    const appElement: App = TestUtils.renderIntoDocument(
<Router history={browserHistory} >
            <App/>
        </Router>
    );

    const appNode = ReactDOM.findDOMNode(appElement);

    // Verify text content
    expect(appNode.textContent).toEqual('Hello Homepage');
});
