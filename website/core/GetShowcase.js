const React = require('react');
const PropTypes = require('prop-types');

const pluginBox = ({plugin, version, updated, githubRelease}) => (
  <div classname="pluginBox">
    <img src={image} alt={plugin} title={plugin} height="120" />
    <h3 text-align="center" className="pluginName">{plugin}</h3>
    <span className="pluginVersion">{version}</span><span className="pluginUpdated">{updated}</span>
    <a className="button" href={githubRelease}>Download Plugin</a>
  </div>
);

pluginBox.propTypes = {
  plugin: PropTypes.string.isRequired,
  version: PropTypes.string.isRequired,
  updated: PropTypes.string.isRequired,
  githubRelease: PropTypes.string.isRequired,
};

const pluginShowcase = ({plugin}) => (
  <div className="pluginShowcase">
    {pluginList.map(plugin => (
      <pluginBox key={plugin.githubRelease} {...plugin} />
    ))}
  </div>
);

pluginShowcase.propTypes = {
  plugin: PropTypes.array.isRequired,
};

module.exports = GetShowcase;
