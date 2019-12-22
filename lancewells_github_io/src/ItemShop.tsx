import './css/ItemShop.css';
import React from 'react';

import { ShopItem } from './ShopItem';
import { Modal, Button } from 'react-bootstrap';
import { SourceTypes } from './SourceTypes';
import { ItemDetails } from './ItemDetails';

interface IItemShopProps {
};

interface IItemShopState {
    showItemDialog: boolean;
    itemDetails: ItemDetails;
};

export class ItemShop extends React.Component<IItemShopProps, IItemShopState> {
    constructor (props: IItemShopProps) {
        super(props);
        this.state = {
            showItemDialog: false,
            itemDetails: {
                title: '',
                body: '',
                iconSource: '',
                itemCost: 0,
                source: SourceTypes.homebrew
            }
        };
    }

    setModalVisiblity(show: boolean)
    {
        this.setState({
            showItemDialog: show
        });
    }

    onItemClick(item: ItemDetails)
    {
        this.setState({
            itemDetails: item,
        });
        
        this.setModalVisiblity(true);
    }

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

    render()
    {
        /* Keep these as consts because if we were to use a function callback when closing the Modal,
         * that would result in an exception (because we're then in a state that doesn't recognize)
         * ItemShop as 'this'. */
        const hideModal = () => this.setModalVisiblity(false);
        const showModal = () => this.setModalVisiblity(true);
        
        const redRing: ItemDetails = {
            title: 'Ring Jewel Red',
            body: 'Bacon ipsum dolor amet buffalo salami meatball, ribeye sirloin tri-tip pancetta. Doner capicola shankle porchetta drumstick. Chuck tail rump ham buffalo. Leberkas turkey pork loin, pig cow doner kevin landjaeger capicola shankle pork belly flank. Sirloin turkey tenderloin chislic tail spare ribs kielbasa short loin shank burgdoggen. Frankfurter hamburger venison, boudin pork loin turkey salami doner chicken tongue. Turkey ball tip buffalo, ribeye bacon leberkas sirloin cupim short loin venison.',
            iconSource: './images/Item_Shop/Items/Rings/Ring Jewel Red.png',
            source: SourceTypes.official,
            itemCost: 100
        };

        const greenRing: ItemDetails = {
            title: 'Silver Ring with a Green Jewel',
            body: 'Bacon ipsum dolor amet bacon jowl venison, picanha porchetta salami boudin chicken. Bresaola cow chuck sirloin turducken salami ground round pancetta. Sausage alcatra chislic shankle leberkas bresaola. T-bone venison strip steak corned beef brisket, salami turkey. Kielbasa hamburger brisket pastrami bresaola, beef tail pork chop pork.',
            iconSource: './images/Item_Shop/Items/Rings/Ring Silver Jewel Green.png',
            source: SourceTypes.homebrew,
            itemCost: 1000
        };


        return (
            <div className="ItemShop">
                <h1>Item Shop</h1>
                <div className='shopkeeper-area'>
                    <img src='./images/Item_Shop/brazier-lit.gif' />
                    <img src='./images/Item_Shop/shopkeeper.gif' />
                    <img src='./images/Item_Shop/brazier-lit.gif' />
                </div>
                <div className='bazaar-area'>
                    <div className='shop-rug green-rug'>
                        <ShopItem 
                            itemDetails={redRing}
                            floatDelay= {0}
                            onItemClick={(itemDetails: ItemDetails) => this.onItemClick(itemDetails)}
                        />
                        <ShopItem
                            itemDetails={greenRing}
                            floatDelay={0}
                            onItemClick={(itemDetails: ItemDetails) => this.onItemClick(itemDetails)}
                        />
                    </div>
                    <div className='shop-rug red-rug'>
                        <ShopItem
                            itemDetails={redRing}
                            floatDelay={0}
                            onItemClick={(itemDetails: ItemDetails) => this.onItemClick(itemDetails)}
                        />
                        <ShopItem
                            itemDetails={greenRing}
                            floatDelay={0}
                            onItemClick={(itemDetails: ItemDetails) => this.onItemClick(itemDetails)}
                        />
                    </div>
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
                            <img src={this.state.itemDetails.iconSource} width={128} height={128} />
                        </div>
                        <hr className='white-hr' />
                        <div className='item-details pixel-font'>
                            <div className='item-tag'>
                                {this.getSourceText(this.state.itemDetails.source)}
                            </div>
                            <div className='item-tag'>
                                {`${this.state.itemDetails.itemCost}x`}
                            </div>
                        </div>
                        <hr className='white-hr' />
                        {this.state.itemDetails.body}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='dark' onClick={hideModal}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}
