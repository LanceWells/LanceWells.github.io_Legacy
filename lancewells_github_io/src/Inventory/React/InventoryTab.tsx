import React from 'react';
import { IItem } from '../../ItemData/Interfaces/IItem';
import { ItemType } from '../../ItemData/Enums/ItemType';
import { ItemClick } from '../../ItemData/Types/CardButtonCallbackTypes/ItemClick';
import { AttackClick } from '../../ItemData/Types/CardButtonCallbackTypes/AttackClick';
import { ItemCard } from '../../ItemData/React/ItemCard';
import { CardInteractions } from '../../ItemData/Enums/CardInteractions';
import { RemoveClick } from '../../ItemData/Types/CardButtonCallbackTypes/RemoveClick';

interface IInventoryTabProps {
    items: IItem[];
    itemType: ItemType;
    itemClick: ItemClick;
    attackClick: AttackClick;
    removeClick: RemoveClick;
}

interface IInventoryTabState {
}

export class InventoryTab extends React.Component<IInventoryTabProps, IInventoryTabState> {
    public constructor(props: IInventoryTabProps) {
        super(props);
        this.state = {
        }
    }

    public render() {
        let itemCards: JSX.Element[] = this.props.items.map(i => {
            return (
                <ItemCard
                    itemDetails={i}
                    onItemClick={this.props.itemClick}
                    onAttackButton={this.props.attackClick}
                    onPurchaseButton={undefined}
                    onRemoveButton={this.props.removeClick}
                    onAddButton={undefined}
                    cardInteractions={[
                        CardInteractions.Use,
                        CardInteractions.Remove
                    ]}
                    showCardCost={false}
                    availablePlayerCopper={undefined}
                />
            )
        });

        return (
            <div className="inventory-tab">
                {itemCards}
            </div>
        )
    }
}
