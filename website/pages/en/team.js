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
            <h1>BattlePlugins Staff and Team Members</h1>
            <p>These are all the individuals who have made BattlePlugins what it is today. Without the help of those listed on this page and those to come, this community wouldn't be what it is today!</p>
            <div className="prose">
              <h2>Active / Current BattlePlugins Staff</h2>
            </div>
            <Showcase users={bpActiveStaff} />
              <div className="prose">
                <h2>Retired / Past BattlePlugins Staff</h2>
              </div>
            <Showcase users={restToShowcase} />
            <br></br>
            <div className="prose">
              <h4>Interested in Contributing?</h4>
              <a href="https://docs.battleplugins.org/docs/guidelines" className="button">Contribute Today</a><br></br>
            </div>
            <a href="https://github.com/BattlePlugins/BattleSite/blob/master/website/data/users.js" className="button">Update Page / Users</a>
          </div>
        </Container>
      </div>
    );
  }
}

Users.title = 'BattlePlugins Team - Past and Present';

module.exports = Users;
