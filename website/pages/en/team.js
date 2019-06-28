/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;

class Users extends React.Component {
  render() {
    const {config: siteConfig} = this.props;
    if ((siteConfig.users || []).length === 0) {
      return null;
    }

class Users extends React.Component {
  render() {
    const {config: siteConfig} = this.props;
    const bpUsersToShowcase = siteConfig.users.filter(
        user => user.bpActive,
    );
    const restToShowcase = siteConfig.users.filter(user => !user.bpActive);

    return (
      Hello World
    );
  }
}

module.exports = Users;
