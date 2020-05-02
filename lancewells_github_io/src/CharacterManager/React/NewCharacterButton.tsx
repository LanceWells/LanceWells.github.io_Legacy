import React from 'react';

export interface INewCharacterButtonProps {
    onClick: () => void;
}

export interface INewCharacterButtonState {
}

export class NewCharacterButton extends React.Component<INewCharacterButtonProps, INewCharacterButtonState> {
    public constructor(props: INewCharacterButtonProps) {
        super(props);
        this.state = {
        };
    }

    public render() {
        return (
            <div className="character-selector-container">
                <button className="new-character-button" onClick={this.props.onClick}>
                    +
                </button>
                <span className="character-selection-name">
                    New Character
                </span>
            </div>
        )
    }
}
