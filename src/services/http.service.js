const http = () => {

    const host = 'http://desafioonline.webmotors.com.br'

    const api = {
        make: 'api/OnlineChallenge/Make',
        model: 'api/OnlineChallenge/Model',
        version: 'api/OnlineChallenge/Version',
        vehicles: 'api/OnlineChallenge/Vehicles',
    }


    const get = async ({endPoint, query, value}) => {
        const uri = query && value ?
            `${host}/${api[endPoint]}?${query}=${value}` :
            `${host}/${api[endPoint]}`

        const response = await fetch(uri)

        if (response.ok) {
            return await response.json()
        }

        throw new Error(`The request failed: ${response.status}`)
    }

    return {
        get
    }
}

export { http }