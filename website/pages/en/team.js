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
      <div className="mainContainer">
        <Container padding={['bottom']}>
          <div className="showcaseSection">
            <div className="prose">
              <h1>Current BattlePlugins Team</h1>
              <p>Current active support, developers, and team members.</p>
            </div>
            <Showcase users={bpUsersToShowcase} />
            <div className="prose">
              <h1>Past BattlePlugins Team</h1>
              <p>Past members who've made BattlePlugins what it is today!</p>
            </div>
            <Showcase users={restToShowcase} />
            <div className="prose">
                <p>Interested in Contributing?</p>
                <a href={editUrl} className="button">
                Get Started Today
                </a>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

module.exports = Users;
