import { useState , useEffect, use } from "react";

function useLocalStorage(key,initialValue){
    const [value , setValue] = useState(()=>{
        const savedValue = useLocalStorage.getItem(key)

        return savedValue ? JSON.parse(savedValue) : initialValue
    })

    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(value))
    },[key,value])

    return [value,setValue]
}


