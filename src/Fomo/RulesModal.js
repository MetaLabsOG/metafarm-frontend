import React from 'react'
import Modal from 'react-awesome-modal';

export function RulesModal({ isModalOpen, setIsModalOpen }) {
    return (
        <Modal
            visible={isModalOpen}
            width="400"
            height="220"
            effect="fadeInUp"
            style={{ backgroundColor: 'black' }}
            onClickAway={() => setIsModalOpen(false)}
        >
            <div style={{ margin: '10px', color: 'black' }}>
                <h1>
                    Rules. <br /> Rules. <br /> Rules.
                </h1>
            </div>
        </Modal>
    );
}