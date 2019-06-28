const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;

const Showcase = require(`${process.cwd()}/core/Showcase.js`);

class Users extends React.Component {
  render() {
    const {config: siteConfig} = this.props;
    const bpActiveStaff = siteConfig.users.filter(
      user => user.bpActive,
    );
    const restToShowcase = siteConfig.users.filter(user => !user.bpActive);

    return (
      <div className="mainContainer">
        <Container padding={['bottom']}>
          <div className="showcaseSection">
            <div className="prose">
              <h1>Active BattlePlugins Staff</h1>
              <p>Current active members of the BattlePlugins team.</p>
            </div>
            <Showcase users={bpActiveStaff} />
              <div className="prose">
                <h1>Retired BattlePlugins Staff</h1>
                <p>Past and Vetern members of the BattlePlugins team who are no longer active.</p>
              </div>
            <Showcase users={restToShowcase} />
            <br><br>
            <div className="prose">
              <h4>Interested in Contributing?</h4>
              <a href="https://docs.battleplugins.org/docs/guidelines" className="button">
              Get Started Today
              </a>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

Users.title = 'Users';

module.exports = Users;
