import { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import userIcon from '../../images/user-icon.png'
import './Avatar.css'


const Avatar = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <img 
                src={userIcon} 
                alt='User Icon' 
                className='user border rounded-circle mt-3' 
                onClick={handleShow}
            />

            <Modal show={show} onHide={handleClose}>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Restaurants
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Log Out
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Avatar