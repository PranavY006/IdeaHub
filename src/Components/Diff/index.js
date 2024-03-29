import React from 'react'
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-2.svg';
import Icon3 from '../../images/svg-3.svg';
import { 
  DiffContainer,DiffH1, DiffWrapper, DiffCard, DiffIcon, DiffH2, DiffP } from './DiffElements';

const Diff = () => {
  return (
    <DiffContainer id="diff">
        <DiffH1>
          Different types of Projects.
        </DiffH1>
        <DiffWrapper>
          <DiffCard>
            <DiffIcon src={Icon1} />
            <DiffH2>Software</DiffH2>
            <DiffP>We help to reduce the search and give you latest information about latest Software Tech Projects</DiffP>
          </DiffCard>
          <DiffCard>
            <DiffIcon src={Icon2} />
            <DiffH2>Hardware</DiffH2>
            <DiffP>We help to reduce the search and give you latest information about latest Hardware Tech Projects </DiffP>
          </DiffCard>
          <DiffCard>
            <DiffIcon src={Icon3} />
            <DiffH2>IOT</DiffH2>
            <DiffP>We help to reduce the search and give you latest information about latest IOT Projects </DiffP>
          </DiffCard>
        </DiffWrapper>
    </DiffContainer>
  )
}

export default Diff