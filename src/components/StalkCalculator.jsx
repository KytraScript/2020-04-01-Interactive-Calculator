import React, {useState, useEffect} from 'react';

const StalkCalculator = () => {

    //set state variables and values
    const [bellsOnHand, updateOnHand] = useState(0);
    const [stalkSellingPrice, updateSellingPrice] = useState(100);
    const [stalkInventory, updateInventory] = useState(0);
    const [daisyPrice, updateDaisyPrice] = useState(100);
    const [inventoryValue, updateInventoryValue] = useState(0);
    const [totalProfit, updateProfit] = useState(0);

    //updates the total of turnips you can purchase (on page load and when dependency values change
    useEffect(() => {
        updateInventory(Math.floor(bellsOnHand / daisyPrice));
    }, [bellsOnHand, daisyPrice]);

    //updates the possible profits obtainable and total inventory value based on current selling price and total stock
    useEffect(() => {
        updateInventoryValue(stalkInventory * stalkSellingPrice);
        updateProfit((stalkSellingPrice - daisyPrice) * stalkInventory);
    }, [stalkInventory, stalkSellingPrice]);

    return (
        <div className={'calc-container'}>
            <div className={'calc-input'}>
                <div className={'player column'}>
                    <img src={'../img/player.png'} alt={'Player PNG'}/>
                    <label htmlFor={'playerBells'}>Bells to Spend</label>
                    <input type={'number'} name={'playerBells'} min={'0'} defaultValue={bellsOnHand} onChange={(e) => updateOnHand(e.target.value)}/>
                </div>
                <div className={'daisy column'}>
                    <img src={'../img/dm_transparent.png'} alt={'Daisy Mae PNG'}/>
                    <label htmlFor={'daisyPrice'}>Cost of Turnips</label>
                    <input type={'number'} name={'daisyPrice'} min={'0'} defaultValue={daisyPrice} onChange={(e) => updateDaisyPrice(e.target.value)}/>
                </div>
                <div className={'nooklings column'}>
                    <img src={'../img/nooklings.png'} alt={'Nooklings PNG'}/>
                    <label htmlFor={'nooklingPrice'}>Nookling's Offer Price</label>
                    <input type={'number'} name={'nooklingPrice'} min={'0'} defaultValue={stalkSellingPrice} onChange={(e) => updateSellingPrice(e.target.value)}/>
                </div>
            </div>
            <div className={'calc-info'}>
                <img src={'../img/bells.png'} alt={'Bells PNG'}/>
                <div className={'stalk-inventory column'}>Total Turnips Purchasable: <span className={'info-value'}>{stalkInventory.toString()} Turnips</span></div>
                <div className={'stalk-sales-total column'}>Total Sale Value:  <span className={'info-value'}>{inventoryValue.toString()} Bells</span></div>
                <div className={'stalk-profits column'}>Total Profit:  <span className={'info-value'}>{totalProfit.toString()} Bells</span></div>
            </div>
        </div>
    );
};

export default StalkCalculator;
