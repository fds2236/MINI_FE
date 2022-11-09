// import React from 'react';
// import '../App';
// import './DelModal.css';

// // 도연 - 회원 탈퇴 모달


// const DelModal = (props) => {
//     const { open, confirm, close, header } = props; 
//     return (
//         <div className={open ? 'openModal modal' : 'modal'}>
//             {open && 
//                 <section>
//                     <header>
//                         {header}
//                         <button onClick={close}>
//                             &times;
//                         </button>
//                     </header>
//                     <main>{props.children}</main>
//                     <footer>
//                         <button className='close' onClick={close}>아니오</button>
//                         <button className='confirm' onClick={confirm}>예, 탈퇴하겠습니다</button>
//                     </footer>
//                 </section>
//             }
//         </div>
//     );
// };
// export default DelModal;