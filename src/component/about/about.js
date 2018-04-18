import React, {Component} from 'react';
import './about.css'

export default class About extends Component {
    render() {
        return (
            <div className={'component_about'}>
                <p>
                    React makes it painless to create interactive UIs. Design simple views for each state in your
                    application, and React will efficiently update and render just the right components when your data
                    changes.
                </p>
            </div>
        );
    }
}
