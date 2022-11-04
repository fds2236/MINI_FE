import React from 'react';
import '../App';
import './Modal.css';

// 도연 작업 완료! (조원들 공동으로 사용하면 됨)

const Modal = (props) => {
    const { open, confirm, close, header } = props; //
    return (
        <div className={open ? 'openModal modal' : 'modal'}>
            {open && 
                <section>
                    <header>
                        {header}
                        <button onClick={close}>
                            &times;
                        </button>
                    </header>
                    <main>{props.children}</main>
                    <footer>
                        <button className='close' onClick={close}>close</button>
                    </footer>
                </section>
            }
        </div>
    );
};
// 구조분해 props.children으로 바꿔서 띄워주기!
export default Modal;