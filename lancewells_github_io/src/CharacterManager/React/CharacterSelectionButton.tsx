import React from 'react';
import { PlayerCharacterData } from '../../FirebaseAuth/Types/PlayerCharacterData';
import { SelectedCharacterCallback } from '../Types/SelectedCharacterCallback';
import { CharacterImageCanvas } from '../../CharacterImage/React/CharacterImageCanvas';
import { CharImageLayout } from '../../CharacterImage/Classes/CharImageLayout';

export interface ICharacterSelectionButtonProps {
    characterData: PlayerCharacterData;
    characterSelectedCallback: SelectedCharacterCallback;
}

export interface ICharacterSelectionButtonState {
}

export class CharacterSelectionButton extends React.Component<ICharacterSelectionButtonProps, ICharacterSelectionButtonState> {
    public constructor(props: ICharacterSelectionButtonProps) {
        super(props);
        this.state = {
        };
    }

    public render() {
        return (
            <button
                className="character-selection-button"
                onClick={() => this.props.characterSelectedCallback(this.props.characterData)}>
                <CharacterImageCanvas
                    charScaleFactor={1}
                    showLoadingSpinner={false}
                    imagesToRender={this.props.characterData.CharLayout.GetImages()}
                    borderColor={this.props.characterData.BorderColor}
                />
                {this.props.characterData.Name}
            </button>
        )
    }
}
