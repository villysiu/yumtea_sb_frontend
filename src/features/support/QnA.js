import {useEffect, useRef, useState} from "react";

const QnA = () =>{

    const [show, setShow] = useState(null)
    const arr = [
        [
            "I need help creating an account.",
            "Create an Account page by clicking on this link. Fill up the boxes to sign up for an account."
        ],
        [
            "I want to order in bulk",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        ],
        [
            "I want to change/cancel my order",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."]

    ]

    const ref = useRef();
    const handleClick = (idx) =>{
        if(show === null || show!==idx)
            setShow(idx);
        else if(show === idx)
            setShow(null);
    }
    useEffect(()=>{
        const closeAns = (e) =>{
            if(ref && ref.current && !ref.current.contains(e.target))
                setShow(null)
        }

        document.addEventListener('click', closeAns)

        return () => {
            document.removeEventListener('click', closeAns);
        };
    }, [ref])
    return(
        <>
            <div className="support_title">Support</div>
        <div ref={ref} className="qnas mb-4" >
            {arr.map( (qqq,idx)=>{
                const [q,a] = qqq
                return (
                    <div key={idx}>
                        <div className="qna" onClick={()=>handleClick(idx)}>{q}</div>
                        {show!==null && show === idx && <div className="ans">{a}</div>}

                    </div>
                )

            })}
        </div>
    </>
    )


}
export default QnA