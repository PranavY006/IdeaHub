import React from 'react'
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-2.svg';
import Icon3 from '../../images/svg-3.svg';
import { 
  DiffContainer,DiffH1, DiffWrapper, DiffCard, DiffIcon, DiffH2, DiffP } from './DiffElements';

const Diff3 = () => {
  return (
    <DiffContainer id="diff3">
        <DiffH1>
          Difficulties levels
        </DiffH1>
        <DiffWrapper>
          <DiffCard>
            <DiffIcon src={Icon1} />
            <DiffH2>Begineer</DiffH2>
            <DiffP>We help to reduce the search and give you latest information about latest Tech </DiffP>
          </DiffCard>
          <DiffCard>
            <DiffIcon src={Icon2} />
            <DiffH2>Intermidaiate</DiffH2>
            <DiffP>We help to reduce the search and give you latest information about latest Tech </DiffP>
          </DiffCard>
          <DiffCard>
            <DiffIcon src={Icon3} />
            <DiffH2>Expert</DiffH2>
            <DiffP>We help to reduce the search and give you latest information about latest Tech </DiffP>
          </DiffCard>
        </DiffWrapper>
    </DiffContainer>
  )
}

export default Diff3