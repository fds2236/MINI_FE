// const [write, setWrite] = useState('');
//     const [wrtieDomain, setWriteDomain] = useState('');
//     const [select, setSelect] = useState('');
//     const [final, setFinal] = useState('');

//     const[isSelect,setIsSelect] = useState(false);

//     // 이메일 아이디 작성
//     const writeName = (e) =>{
//         setWrite(e.target.value);
//     }
//     // 선택한 도메인 
//     const  selectDomain = (e) =>{
//         //선택한 도메인을 sel 변수에 담음
//         const sel = e.target.value
//         // sel 변수가 "aa"(직접인경우)
//         if(sel == "@"){
//             setSelect(sel);
//             // IsSelect 는 숨겨져있는 창을 보여주기 위한 용도입니다.
//             // IsSelect 의 기본값은 false 이고, true 가되면 입력창이 화면에 출력됩니다.
//             // 화면출력로직은 아래 있습니다
//             setIsSelect(true);
//         }else{
//             // 선택한 도메인이 직접입력이 아닌경우 , (isselect = false)입력창을 보여주지않고
//             // setSelect 를 이용하여 선택한 이메일을 select 에 담아줍니다.
//             setIsSelect(false);
//             setSelect(sel);
//         }
//     }
//     // 작성한 도메인
//     const domainWrite = (e) =>{
//         // 직접입력되는 값을 받아주는 input 창 입니다.
//         // isSelect 가 false 일경우 화면에 보이지 않습니다.
//         setWriteDomain(e.target.value);
//     }
//     // 최종 확인
//     const sumit = () =>{
//         if(isSelect==false){
//             setFinal(write + select);
//         }else{
//             setFinal(write + wrtieDomain);
//         }
//     }
//     console.log(final);

//     return(
//         <>
//             <input value={write} onChange={writeName}></input>            
//             {/* isSelect && 구문은 isSelect 가 참일경우, {} 안의 input 박스가 화면에 보여집니다 */}
//             {isSelect &&
//                 <span>@<input value={wrtieDomain} onChange={domainWrite}></input></span>
//             }
//             <select value={select} onChange={selectDomain}>
//                 <option >메일을 선택하세요</option>
//                 <option value={"@naver.com"}>naver.com</option>
//                 <option value={"@daum.com"}>daum.com</option>
//                 <option value={"@kakao.com"}>kakao.com</option>
//                 <option value={"@"}>직접입력</option>
//             </select>
//             <button onClick={sumit}></button>
//         </>
//     )
// }
