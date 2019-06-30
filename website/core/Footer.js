/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="44"
                height="44"
              />
            )}
          </a>
          <div align="left">
            <h5>Organization Info:</h5>
            <a href="https://battleplugins.org/"><img src="https://battleplugins.org/img/night.ico" alt="Icon" height="15"/> BattlePlugins Site</a>
            <a href="https://discord.gg/tMVPVJf"><img src="https://battleplugins.org/img/discord.ico" alt="Icon" height="15"/>  Discord Server</a>
            <a href="https://github.org/BattlePlugins"><img src="https://battleplugins.org/img/black.ico" alt="Icon" height="15"/> Github Repos</a>
            <a href="https://ci.battleplugins.org/"><img src="https://battleplugins.org/img/jenkins.ico" alt="Icon" height="15"/> Jenkins CI</a>
            <a href="https://repo.battleplugins.org/"><img src="https://battleplugins.org/img/repo.ico" alt="Icon" height="15"/> Public Repo</a>
          </div>
          <div align="left">
            <h5>Docs Quick Start:</h5>
            <a href="https://docs.battleplugins.org/docs/"><i class="fas icon-white fa-desktop"/> Docs Home</a>
            <a href="https://docs.battleplugins.org/docs/ba"><i class="fas icon-white fa-border-style"/> BattleArena Docs</a>
            <a href="https://docs.battleplugins.org/docs/bt"><i class="fas icon-white fa-chart-area"/> BattleTracker Docs</a>
            <a href="https://docs.battleplugins.org/docs/vp"><i class="fas icon-white fa-user-friends"/> VirtualPlayer Docs</a>
            <a href="https://wiki.battleplugins.org/"><i class="fas icon-white fa-scroll"/> Legacy Wiki</a>
          </div>
          <div align="left">
            <h5>Website Info:</h5>
            <table cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td>Github Repo</td>
                <td><img alt="Jenkins" src="https://img.shields.io/jenkins/build/http/s14.cl6.us:8080/job/BattleDocs.svg?style=flat-square"/></td>
              </tr>
              <tr>
                <td>Build Status</td>
                <td><img alt="Jenkins" src="https://img.shields.io/jenkins/build/http/s14.cl6.us:8080/job/BattleDocs.svg?style=flat-square"/></td>
              </tr>
              <tr>
                <td>Site Size</td>
                <td><img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/battleplugins/battledocs.svg?style=flat-square"/></td>
              </tr>
              <tr>
                <td>Update History</td>
                <td><img alt="GitHub pull requests" src="https://img.shields.io/github/issues-pr/battleplugins/battledocs.svg?style=flat-square"/></td>
              </tr>
              <tr>
                <td>5</td>
                <td>10</td>
              </tr>
            </table>
          </div>
        </section>
		<div>
			<center>
        <img alt="GitHub followers" src="https://img.shields.io/github/followers/battleplugins.svg?label=Follow&style=social"/> | <img alt="GitHub stars" src="https://img.shields.io/github/stars/battleplugins/battledocs.svg?style=social"/> | <img alt="GitHub watchers" src="https://img.shields.io/github/watchers/battleplugins/battledocs.svg?label=Watch&style=social"/>
        <br></br>
			     <h5 className="footer-slogan">Hosted By:</h5>
           <a href="https://cl6web.com" className="footer-slogan"><img src={`${this.props.config.baseUrl}img/cl6.png`} alt="CL6 Hosting" height="60"/></a>
      </center>
    </div>
    <section className="copyright">{this.props.config.copyright}</section>
  </footer>
    );
  }
}

module.exports = Footer;
