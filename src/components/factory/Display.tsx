import styled from 'styled-components';
import {Tilt, tiltOptions} from '../../components/layout/common';
import { ITrait } from '../../constants';
import { calculateRarityScore } from '../../helpers';
import { NumberAnimated } from '../../components/layout/common';
import { MintButton as Button, RainbowButton } from '../../sections/MintSection';
import { useMemo } from 'react';
import { PinDropSharp } from '@material-ui/icons';

const DisplaySection = styled.div`
`

const BuildABear = styled.div`
    display: flex;
    width: 500px;
    height: 500px;
    box-shadow: var(--shadow-xl);
`
interface LayerProps {
    layer: number
}

const Layer = styled.img<LayerProps>`
    z-index: ${props => props.layer};
    position: absolute;
    width: 500px;
    height: 500px;
`

const DisplayActions = styled.div`
    display: flex;
    margin-top: 1.5rem;
    align-items: center;
    justify-content: space-evenly;
`

interface DisplayProps {
    imageLayers : (ITrait | null)[]
    generateRandomAvatar: () => void
    clearCanvas: () => void
}

const RarityScore = styled.div`
    font-size: 1.4rem;
    font-weight: 600;
`

const Display = ({imageLayers, generateRandomAvatar, clearCanvas} : DisplayProps) => {
    // const rarityScore = useMemo(() => calculateRarityScore(imageLayers), [imageLayers]);

    return (
        <DisplaySection>
            <Tilt options={tiltOptions}>
                <BuildABear>
                    {(imageLayers).map((trait: ITrait | null, index: number) => {
                        if (trait) {
                            return <Layer layer={index} src={trait.path}/>
                        } 
                    })}
                </BuildABear>
            </Tilt>
            
            <DisplayActions>
                <RarityScore>
                    <NumberAnimated newTarget={calculateRarityScore(imageLayers)} />
                    
                </RarityScore>
                <RainbowButton onClick={generateRandomAvatar}>
                    Random Avatar
                </RainbowButton>
                
                
                <Button size="small" color='red' background="black" onClick={clearCanvas}>
                    Clear
                </Button>
            </DisplayActions>
        </DisplaySection>
    )
}

export default Display;