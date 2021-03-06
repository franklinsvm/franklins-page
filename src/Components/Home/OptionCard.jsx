import React from 'react'

const OptionCard = (props) => {
  return (

    <li className="slide-content">
      <div className="dev-image-wrap">
        <img src={props.src} alt="Developer" className="dev-image" />
      </div>
      <div className="dev-content">
        <h3 className="dev-name">{props.name}</h3>
        <ul className="option-list">
          <li className="option-att">
            <span>Developer Education</span>
            <div className={"progress-bar pb" + props.progressBar.academic}>
              <div></div>
            </div>
          </li>
          <li className="option-att">
            <span>Professional Experience</span>
            <div className={"progress-bar pb" + props.progressBar.profExp}>
              <div></div>
            </div>
          </li>
          <li className="option-att">
            <span>Creativity</span>
            <div className={"progress-bar pb" + props.progressBar.creativity}>
              <div></div>
            </div>
          </li>
          <li className="option-att">
            <span>Communication Skills</span>
            <div className={"progress-bar pb" + props.progressBar.communication}>
              <div></div>
            </div>
          </li>
          <li className="option-att">
            <span>Ethics</span>
            <div className={"progress-bar pb" + props.progressBar.ethic}>
              <div></div>
            </div>
          </li>
          <li className="option-att">
            <span>Fast Learner</span>
            <div className={"progress-bar pb" + props.progressBar.learning}>
              <div></div>
            </div>
          </li>
          <li className="option-att">
            <span>Dream Maker Skills</span>
            <div className={"progress-bar pb" + props.progressBar.skills}>
              <div></div>
            </div>
          </li>
          <li className="option-att">
            <span>Potential</span>
            <div className={"progress-bar pb" + props.progressBar.potential}>
              <div></div>
            </div>
          </li>
        </ul>
      </div>
    </li>

  )
}

export default OptionCard



