import React, { Component } from 'react';
import _ from 'lodash';
import openAnimationFactory from './openAnimationFactory.js';
import Animate from 'rc-animate';
import classnames from 'classnames';
import PanelContent from './PanelContent';
import './index.less';

export class Panel extends Component {
    
    constructor(props,context) {
        super(props)
        this.state = {
            collabrate: false,
            openAnimation: openAnimationFactory('rc-collapse')
        }
        this.collabrate = this.collabrate.bind(this)
    }

    collabrate() {
        this.setState({
            collabrate: !this.state.collabrate,
        })
    }

    componentWillUpdate() {
        
    }

    render() {
        let prefixCls = "rc-collapse";
        const headerCls = classnames(`${prefixCls}-header`);
        const itemCls = classnames({
            [`${prefixCls}-item`]: true,
            [`${prefixCls}-item-active`]: this.state.collabrate,
            [`${prefixCls}-item-disabled`]: false,
        });
        const contentCls = classnames({
            [`${prefixCls}-content`]: true,
            [`${prefixCls}-content-active`]: this.state.collabrate,
            [`${prefixCls}-content-inactive`]: !this.state.collabrate,
        });

        return (
            <div className={itemCls} id={this.props.header}>
                <div className={headerCls} onClick={this.collabrate}>{this.props.header}</div>
                <Animate
                    showProp="isActive"
                    exclusive
                    component=""
                    animation={this.state.openAnimation}
                >
                <PanelContent
                    prefixCls={prefixCls}
                    isActive={this.state.collabrate}
                >
                {this.props.children}
              </PanelContent>
                </Animate>
            </div>
        )
    }
}

class Collapse extends Component {

    constructor(props,context) {
        super(props)
    }

    render() {
        return (
            <div className="rc-collapse">
                {this.props.children}
            </div>
        )
    }
}

export default Collapse
