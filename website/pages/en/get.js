const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;

const GetShowcase = require(`${process.cwd()}/core/GetShowcase.js`);

class Plugin extends React.Component {
  render() {
    const {config: siteConfig} = this.props;
    const stablePlugins = siteConfig.pluginList.filter(
      plugin => plugin.isStable,
    );

    const unstablePlugins = siteConfig.pluginList.filter(
      plugin => !plugin.isStable,
    );

    return (
      <div className="mainContainer">
        <Container padding={['bottom']}>
          <div className="showcaseSection">
            <h1>Download Latest BattlePlugins</h1>
            <p>Latest Downloads for All BP Maintained Plugins</p>
            <div className="prose">
              <h2>Stable Plugins:</h2>
            </div>
            <GetShowcase Plugin={stablePlugins} />
              <div className="prose">
                <h2>Unstable / Testing Plugins</h2>
              </div>
            <GetShowcase Plugin={unstablePlugins} />
          </div>
        </Container>
      </div>
    );
  }
}

Get.title = 'Download Latest BattlePlugins';

module.exports = Get;
