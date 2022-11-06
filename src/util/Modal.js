import React from 'react';
import '../App';
import './Modal.css';

// 도연 작업 완료! (조원들 공동으로 사용하면 됩니다.)

const Modal = (props) => {
    const { open, close, header } = props; // 필요 시 confirm 넣어서 쓰세요!
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
export default Modal;