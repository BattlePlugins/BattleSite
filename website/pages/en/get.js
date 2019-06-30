const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;

const Showcase = require(`${process.cwd()}/core/Plugins.js`);

class Users extends React.Component {
  render() {
    const {config: siteConfig} = this.props;
    const stablePlugins = siteConfig.users.filter(
      plugin => plugin.isStable,
    );
    const unstablePlugins = siteConfig.plugin.filter(plugin => !plugin.isStable);

    return (
      <div className="mainContainer">
        <Container padding={['bottom']}>
          <div className="showcaseSection">
            <h1>Download Latest BattlePlugins</h1>
            <p>Latest Downloads for All BP Maintained Plugins</p>
            <div className="prose">
              <h2>Stable Plugins:</h2>
            </div>
            <Showcase users={stablePlugins} />
              <div className="prose">
                <h2>Unstable / Testing Plugins</h2>
              </div>
            <Showcase users={unstablePlugins} />
            <br></br>
          </div>
        </Container>
      </div>
    );
  }
}

Users.title = 'Download Latest BattlePlugins';

module.exports = Plugins;
