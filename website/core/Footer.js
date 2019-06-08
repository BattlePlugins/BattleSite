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
                width="66"
                height="66"
              />
            )}
          </a>
          <div>
            <h5>Docs:</h5>
            <a href={this.docUrl('doc1.html', this.props.language)}>
              Getting Started (or other categories)
            </a>
            <a href={this.docUrl('doc2.html', this.props.language)}>
              Guides (or other categories)
            </a>
            <a href={this.docUrl('doc3.html', this.props.language)}>
              API Reference (or other categories)
            </a>
          </div>
          <div>
            <h5>Organization:</h5>
            <a href="https://discord.gg/tMVPVJf">Discord Support</a>
            <a href="https://github.org/BattlePlugins">Github Org</a>
            <a href="https://battleplugins.org/">Website</a>
            <a href="https://wiki.battleplugins.org/">Legacy Wiki</a>
          </div>
          <div>
            <h5>About the Docs:</h5>
            <a href="https://github.com/BattlePlugins/BattleDocs">Contribute Today</a>
            <a href="http://ci.battleplugins.org/jobs/BattleDocs">Build Status: <img alt="Jenkins" src="https://img.shields.io/jenkins/build/http/s14.cl6.us:8080/job/BattleDocs.svg?style=flat-square"/></a>
            <a href="https://github.com/BattlePlugins/BattleDocs">Doc Size: <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/battleplugins/battledocs.svg?style=flat-square"/></a>
            <a href="https://github.com/BattlePlugins/BattleDocs/pulls">Pending Updates: <img alt="GitHub pull requests" src="https://img.shields.io/github/issues-pr/battleplugins/battledocs.svg?style=flat-square"/></a>
            <br></br>
            <img alt="GitHub followers" src="https://img.shields.io/github/followers/battleplugins.svg?label=Follow&style=social"/> | <img alt="GitHub stars" src="https://img.shields.io/github/stars/battleplugins/battledocs.svg?style=social"/> | <img alt="GitHub watchers" src="https://img.shields.io/github/watchers/battleplugins/battledocs.svg?label=Watch&style=social"/>
          </div>
        </section>
		<center><h4>Hosted By:</h4></center>
        <a
          href="https://cl6web.com"
          target="_blank"
          rel="noreferrer noopener"
          className="fbOpenSource">
          <img src={`${this.props.config.baseUrl}img/cl6.png`} alt="CL6 Hosting" height="70"/>
        </a>
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
