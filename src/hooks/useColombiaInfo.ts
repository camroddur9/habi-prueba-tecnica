import {useState, useEffect } from 'react'

const useColombiaInfo = (url: string) => {
    const [colombiaInfo, setColombiaInfo] = useState([])

    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(data => {
            setColombiaInfo(data)
        })
    }, [url])

    return colombiaInfo
}

export default useColombiaInfo