import React, { Component } from 'react';

export default class PostStatusFilter extends Component {
    constructor(props) {
        super(props);
        this.buttons = [
            {name: 'all', label: 'Все'},
            {name: 'like', label: 'Понравилось'}
        ]
    }
    render() {
        const buttons = this.buttons.map(({name, label}: any) => {
            const {filter, onFilterChange}: any = this.props;
            const active = filter === name;
            const activeClass = active ? 'border-blue text-blue' : 'border-sub text-sub';
            return (
                <button key={name} type="button" className={`p-5 border rounded ${activeClass}`} onClick={() => onFilterChange(name)}>{ label }</button>
            )
        })
        return (
            <div className="flex border-black rounded">
                {buttons}
            </div>
        )
    }
}
