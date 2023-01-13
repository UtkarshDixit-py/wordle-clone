// import {useRef,useEffect} from "react";

// function useKey(key,cb){
//     const callbackRef = useRef(cb);
//     useEffect(()=>{
//       callbackRef.current = cb
//     })
//     useEffect(()=>{
//       function handle(e){
//         if(e.key === key ){
//           callbackRef.current(e)
//         }
//       }
//       document.addEventListener("keydown",handle);
//       return ()=> document.addEventListener("keydown",handle)
  
//     },[key])
//   }

//   export default useKey;


import {useRef,useEffect} from "react";

function useKey(key,cb,cbParam){
    const callbackRef = useRef(cb);
    const callbackParamRef = useRef(cbParam);
    useEffect(()=>{
      callbackRef.current = cb;
      callbackParamRef.current = cbParam;
    },[cb,cbParam])
    useEffect(()=>{
      function handle(e){
        if(e.key === key ){
          callbackRef.current(callbackParamRef.current,e)
        }
      }
    //   document.addEventListener("keydown",handle);
      return ()=> document.addEventListener("keydown",handle)
    },[key])
}

export default useKey;
