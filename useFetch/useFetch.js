import { useEffect, useState } from "react"

export const useFetch = ( url ) => {

    const [estado, setEstado] = useState({ data: null, loading: true, error:null });

    useEffect(() => {
        setEstado({data: null, loading: true, error: null});
        fetch( url )
        .then(resp =>resp.json())
        .then(data => {

            setEstado({
                loading:false,
                error: null,
                data
            })
        })

    }, [url])

    return estado;
  
}
