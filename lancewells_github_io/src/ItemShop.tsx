import './css/ItemShop.css';
import React from 'react';

import { Modal, Button } from 'react-bootstrap';
import { SourceTypes } from './enums/SourceTypes';
import { IItemDetails } from './interfaces/IItemDetails';
import { ItemType } from './enums/ItemType';
import { BazaarCarpet } from './BazaarCarpet';
import { CarpetMaps } from './CarpetMap';

/**
 * @description
 * Describes the properties that are passed into this class.
 */
interface IItemShopProps {
};

/**
 * @description Describes the state that is maintained by this object.
 * @param showItemDialog A boolean value to describe whether the item dialog (modal) is displayed at any
 * given point.
 * @param itemDetails A set of details that describe the currently selected item. This is used to populate
 * the modal that appears.
 */
interface IItemShopState {
    showItemDialog: boolean;
    itemDetails: IItemDetails;
};

/**
 * @description
 * Represents an item shop! This is a full-screen application that is used to 'browse' some digital items.
 */
export class ItemShop extends React.Component<IItemShopProps, IItemShopState> {
    /**
     * @description Creates a new instance of @see ItemShop .
     * @param props The properties required to instantiate this class.
     */
    constructor (props: IItemShopProps) {
        super(props);
        this.state = {
            showItemDialog: false,
            itemDetails: {
                title: '',
                body: '',
                iconSource: '',
                itemCost: 0,
                source: SourceTypes.homebrew,
                type: ItemType.wondrous,
            }
        };
    }

    /**
     * @description
     * Shows or hides the item details modal.
     * @param show If true, show the modal; otherwise false.
     */
    setModalVisiblity(show: boolean)
    {
        this.setState({
            showItemDialog: show
        });
    }

    /**
     * @description Handles an item click event.
     * @param item The item details that are provided as a result of the click event (this is a set of
     * properties that represent the item that was clicked).
     */
    onItemClick(item: IItemDetails)
    {
        this.setState({
            itemDetails: item,
        });

        // this.getFormattedItemDescription(item.body);
        
        this.setModalVisiblity(true);
    }

    /**
     * @description Performs an enum-<p> lookup to get something nice and pixelated to represent the source
     * of the item that is being displayed.
     * @param source The source to lookup and return a <p> element that represents it.
     */
    getSourceText(source: SourceTypes)
    {
        switch(source)
        {
            case SourceTypes.official:
            {
                return (<p style={{color: 'rgb(255, 200, 37)'}}>Official</p>);
            }
            case SourceTypes.homebrew:
            {
                return (<p style={{color: 'rgb(147, 56, 143)'}}>Homebrew</p>);
            }
        };
    }

    /**
     * @description Performs an enum-<p> lookup to get something nice and pixelated to represent the type
     * of the item that is being displayed.
     * @param type The type to lookup and return a <p> element that represents it.
     */
    getTypeText(type: ItemType) {
        switch (type) {
            case ItemType.weapon:
            {
                return (<p style={{ color: 'rgb(199, 207, 221)' }}>Weapon</p>);
            }
            case ItemType.armor:
            {
                return (<p style={{ color: 'rgb(148, 253, 255)' }}>Armor</p>);
            }
            case ItemType.potion:
            {
                return (<p style={{ color: 'rgb(253, 210, 237)' }}>Potion</p>);
            }
            case ItemType.wondrous:
            {
                return (<p style={{ color: 'rgb(255, 235, 87)' }}>Wondrous Item</p>);
            }
        };
    }

    /**
     * @description Gets a list of bazaar carpets for display.
     * @param onItemClick The click event-handler for item clicks.
     */
    getBazaarCarpets(onItemClick: Function) {
        return CarpetMaps.map((carpet) => {
            return (
                <BazaarCarpet
                    rugBorderSource={carpet.rugBorderSource}
                    itemDetails={carpet.itemDetails}
                    onItemClick={onItemClick}
                />
            );
        });
    }

    /**
     * @description Gets the color association for a given damage type.
     * @param damageDesc The snippet from the description associated with the damage type.
     */
    getDamageColor(damageDesc: string) : string
    {
        if (/acid/.test(damageDesc)) {
            return 'rgb(153, 230, 95)';
        }
        if (/bludgeoning/.test(damageDesc)) {
            return 'rgb(137, 30, 43)';
        }
        if (/cold/.test(damageDesc)) {
            return 'rgb(12, 241, 255)';
        }
        if (/fire/.test(damageDesc)) {
            return 'rgb(237, 118, 20)';
        }
        if (/force/.test(damageDesc)) {
            return 'rgb(3, 25, 63)';
        }
        if (/lightning/.test(damageDesc)) {
            return 'rgb(255, 200, 37)';
        }
        if (/necrotic/.test(damageDesc)) {
            return 'rgb(66, 76, 110)';
        }
        if (/piercing/.test(damageDesc)) {
            return 'rgb(234, 50, 60)';
        }
        if (/poison/.test(damageDesc)) {
            return 'rgb(30, 111, 80)';
        }
        if (/psychic/.test(damageDesc)) {
            return 'rgb(246, 129, 135)';
        }
        if (/radiant/.test(damageDesc)) {
            return 'rgb(255, 235, 87)';
        }
        if (/slashing/.test(damageDesc)) {
            return 'rgb(101, 115, 146)';
        }
        if (/thunder/.test(damageDesc)) {
            return 'rgb(249, 230, 207)';
        }

        return 'rgb(255, 255, 255)';
    }

    /**
     * @description Gets the description for an item as a set of elements.
     * @param description The description that will be represented as a series of elements.
     */
    getFormattedItemDescription(description: string)
    {
        // https://regex101.com/r/PneEIz/2
        // https://github.com/facebook/react/issues/3386
        var splitDesc: string[];
        splitDesc = description.split(/(\b\d+d\d+\s(?:acid|bludgeoning|cold|fire|force|lightning|necrotic|piercing|poison|psychic|radiant|slashing|thunder)\b)/gi);

        return (splitDesc.map((desc, index) =>{
            if (index % 2 === 0)
            {
                return <span>{desc}</span>
            }
            else
            {
                return(
                    <span
                        style={{
                            fontWeight: 'bolder',
                            color: this.getDamageColor(desc)
                        }}>
                        {desc}
                    </span>
                );
            }
        }));
    }

    /**
     * @description Renders an instance of this class.
     */
    render()
    {
        /* Keep these as consts because if we were to use a function callback when closing the Modal,
         * that would result in an exception (because we're then in a state that doesn't recognize)
         * ItemShop as 'this'. */
        const hideModal = () => this.setModalVisiblity(false);
        const handleItemClick = (itemDetails: IItemDetails) => this.onItemClick(itemDetails);

        return (
            <div className="ItemShop">
                <h1>Item Shop</h1>
                <div className='shopkeeper-area'>
                    <img src='./images/Item_Shop/brazier-lit.gif' alt="animated left brazier" />
                    <img src='./images/Item_Shop/shopkeeper.gif' alt="shopkeeper"/>
                    <img src='./images/Item_Shop/brazier-lit.gif' alt="animated left brazier" />
                </div>
                <div className='bazaar-area'>
                    {this.getBazaarCarpets(handleItemClick)}
                </div>
                <Modal
                    size="lg"
                    show={this.state.showItemDialog}
                    onHide={hideModal}
                    centered={true}>
                    <Modal.Header>
                        <Modal.Title className='pixel-font'>
                            {this.state.itemDetails.title}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='item-preview'>
                            <img src={this.state.itemDetails.iconSource} width={128} height={128} alt="item preview" />
                        </div>
                        <hr className='white-hr' />
                        <div className='item-details pixel-font'>
                            <div className='item-tag'>
                                {this.getSourceText(this.state.itemDetails.source)}
                            </div>
                            <div className='item-tag'>
                                {`${this.state.itemDetails.itemCost}x`}
                                <img src='./images/Item_Shop/itemCoin.gif' alt="animated coin icon"/>
                            </div>
                            <div className='item-tag'>
                                {this.getTypeText(this.state.itemDetails.type)}
                            </div>
                        </div>
                        <hr className='white-hr' />
                        {this.getFormattedItemDescription(this.state.itemDetails.body)}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='dark' onClick={hideModal}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}
