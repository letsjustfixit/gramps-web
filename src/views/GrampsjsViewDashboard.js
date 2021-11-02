import {html, css} from 'lit'

import {GrampsjsView} from './GrampsjsView.js'
import './GrampsjsViewRecentlyChanged.js'
import './GrampsjsViewAnniversaries.js'
import '../components/GrampsjsStatistics.js'

export class GrampsjsViewDashboard extends GrampsjsView {
  static get properties () {
    return {
      dbInfo: {type: Object}
    }
  }

  constructor () {
    super()
    this.dbInfo = {}
  }

  static get styles () {
    return [
      super.styles,
      css`
      .column {
        float: left;
        width: 50%;
        overflow-x: hidden;
      }

      .column > div {
        margin-bottom: 1.5em;
      }

      @media screen and (max-width: 768px) {
        .column {
          width: 100%;
        }
      }
      `
    ]
  }

  renderContent () {
    return html`
    <div class="column">
      <div>
        <grampsjs-view-anniversaries
          ?active=${this.active}
          id="anniversaries"
          .strings="${this.strings}">
        </grampsjs-view-anniversaries>
      </div>
      <div>
        <grampsjs-view-recently-changed
          active
          id="recently-changed"
          .strings="${this.strings}">
        </grampsjs-view-recently-changed>
      </div>
    </div>
    <div class="column">
      <grampsjs-statistics
        .data="${this.dbInfo?.object_counts || {}}"
        id="statistics"
        .strings="${this.strings}">
      </grampsjs-statistics>
    </div>
    `
  }
}

window.customElements.define('grampsjs-view-dashboard', GrampsjsViewDashboard)
