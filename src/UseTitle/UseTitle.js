import { useEffect } from "react"


const useTitle = (title)=>{
    useEffect(()=>{
        document.title = `${title} - SportsCar`
    },[title])
};

export default useTitle;

