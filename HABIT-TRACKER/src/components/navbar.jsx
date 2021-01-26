import React, { PureComponent } from 'react'

export default class navbar extends PureComponent {
    render() {
        return (
            <nav className="navbar">
                <i className="navbar-logo fas fa fa-leaf"></i>
                <span>Habit Tracker</span>
                <span className="navbar-count">{this.props.totalCount}</span>
            </nav>
        )
    }
}
