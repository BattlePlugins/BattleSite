const React = require('react');
const PropTypes = require('prop-types');

const PluginBox = ({pluginName, version, updated, githubRelease}) => (
  <div classname="link">
    <img src={image} alt={pluginName} title={pluginName} height="120" />
    <h3 text-align="center" className="pluginName">{pluginName}</h3>
    <span className="pluginVersion">{version}</span><span className="pluginUpdated">{updated}</span>
    <a className="button" href={githubRelease}>Download Plugin</a>
  </div>
);

PluginBox.propTypes = {
  pluginName: PropTypes.string.isRequired,
  version: PropTypes.string.isRequired,
  updated: PropTypes.string.isRequired,
  githubRelease: PropTypes.string.isRequired,
};

const GetShowcase = ({plugins}) => (
  <div className="pluginShowcase">
    {plugins.map(plugin => (
      <PluginBox key={plugin.githubRelease} {...plugin} />
    ))}
  </div>
);

GetShowcase.propTypes = {
  plugins: PropTypes.array.isRequired,
};

module.exports = GetShowcase;
