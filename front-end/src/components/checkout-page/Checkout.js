import './Checkout.css';
import HeaderTab from '../header-tab/HeaderTab';
import Billitem from '../bill-item/Billitem';

const Checkout = (props) => {
    return (

        <div className='Checkout'>
            <HeaderTab pageTitle='Check Out' returnPath = "/menu"/>
            <div className='heading'>
                <h2>Order Confirmation</h2>
            </div>
            

            <div className='Items'> 
                <Billitem quantity='3' itemName='Beef Burger' price='5.99'/>
                <Billitem quantity='1' itemName='Chicken Burger' price='4.77'/>
                <Billitem quantity='2' itemName='French Fries - L' price='3.99'/>
            </div>

        </div>
    );
}

export default Checkout;