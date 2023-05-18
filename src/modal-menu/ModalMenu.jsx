import { useState } from 'react';
// import { createPortal } from 'react-dom';
// import ModalContent from './ModalContent.js';
import Modal from "react-modal";
import HamburgerMenuButton from './NewHamburgerMenuButton';


Modal.setAppElement('#main-menu');

export default function ModalMenu() {
    const [isOpen, setIsOpen] = useState(true);

    function toggleModal(e) {
        setIsOpen(!isOpen);
        e.preventDefault();
    }

    return(
        <>
        <HamburgerMenuButton onClick={toggleModal} isOpen={isOpen} setIsOpen={setIsOpen} />
        <div>
        <button className='menu-icon' onClick={toggleModal}>Trigger Modal</button>
        </div>
        <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        // contentLabel="My dialog"
        className="mymodal"
        // overlayClassName="myoverlay"
        // closeTimeoutMS={500}
        >
        <button onClick={toggleModal}>Close Modal</button>
        </Modal>
            </>
    );
}
    


//     export default function PortalExample() {
//   const [showModal, setShowModal] = useState(false);
//   return (
//     <>
//       <button onClick={() => setShowModal(true)}>
//         Show modal using a portal
//       </button>
//       {showModal && createPortal(
//         <ModalContent onClose={() => setShowModal(false)} />,
//         document.body
//       )}
//     </>
//   );
// }
