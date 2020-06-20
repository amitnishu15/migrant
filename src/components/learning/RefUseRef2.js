import React,{useRef,useEffect} from 'react'

function RefUseRef2() {
    const myheading = useRef(null)
    const myinput = useRef(null)

    useEffect(()=> {
        console.log(myheading.current);
        myinput.current.focus();
    },[])
    return (
        <div>
        <h3 ref={myheading}>Functional component</h3>
        <input type="text" ref={myinput} />     
        </div>
    )
}

export default RefUseRef2;
