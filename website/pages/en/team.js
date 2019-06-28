const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;

class Users extends React.Component {
  render() {
    const {config: siteConfig} = this.props;
    const fbUsersToShowcase = siteConfig.users.filter(
      user => user.bpActive,
    );
    const restToShowcase = siteConfig.users.filter(user => !user.bpActive);

    return (
      <div className="mainContainer">
        <Container padding={['bottom']}>
          <div className="showcaseSection">
            <div className="prose">
              <h1>
                <translate>Who is using Docusaurus?</translate>
              </h1>
              <p>
                Docusaurus powers some of Facebook&apos;s popular{' '}
                <a href="https://opensource.facebook.com/">
                  open source projects
                </a>
                .
              </p>
            </div>
            <Showcase users={fbUsersToShowcase} />
            <div className="prose">
              <p>
                <translate>
                  Docusaurus is also used by open source projects of all sizes.
                </translate>
              </p>
            </div>
            <Showcase users={restToShowcase} />
            <div className="prose">
              <p>
                <translate>Is your project using Docusaurus?</translate>
              </p>
              <p>
                Edit this page with a{' '}
                <a href="https://github.com/facebook/docusaurus/edit/master/website-1.x/data/users.js">
                  Pull Request
                </a>{' '}
                to add your logo.
              </p>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

Users.title = 'Users';

module.exports = Users;
