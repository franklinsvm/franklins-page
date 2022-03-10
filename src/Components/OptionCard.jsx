import React from 'react'

const OptionCard = () => {
  return (
    <>
        <div className="swiper-slide">
            <div className="img-opt">
                <img className="img-dev"src="/" alt="/" />
            </div>
            <div className="option-title">
                <p>Dev</p>
            </div>

        <div class="div-opt">
         <ul class="option-list">
         <li class="option-at">
           <span>Academic Education</span>
           <div class="progress-bar pb9">
             <div></div>
           </div>
         </li>
         <li class="option-at">
           <span>Professional Experience</span>
           <div class="progress-bar pb10">
             <div></div>
           </div>
         </li>
         <li class="option-at">
           <span>Creativity</span>
           <div class="progress-bar pb11">
             <div></div>
           </div>
         </li>
         <li class="option-at">
           <span>Communication Skills</span>
           <div class="progress-bar pb12">
             <div></div>
           </div>
         </li>
         <li class="option-at">
           <span>Ethics</span>
           <div class="progress-bar pb13">
             <div></div>
           </div>
         </li>
         <li class="option-at">
           <span>Fast Learner</span>
           <div class="progress-bar pb14">
             <div></div>
           </div>
         </li>
         <li class="option-at">
           <span>Dream Maker Skills</span>
           <div class="progress-bar pb15">
             <div></div>
           </div>
         </li>
         <li class="option-at">
           <span>Potential</span>
           <div class="progress-bar pb16">
             <div></div>
           </div>
         </li>
       </ul>
     </div>
        </div>
    </>
  )
}

export default OptionCard

{/* <>
        <li className="expertise-item">
            <div className="expertise-item-pic-wrap">
            <img className="expertise-item-img" src={props.src} alt="Expertise" />
            </div>
            <div className="expertise-item-info">
                <h5 className="expertise-item-text">{props.text}</h5>
            </div>
        </li>
    </> */}

