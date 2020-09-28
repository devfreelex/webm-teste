const http = () => {

    const api = {
        make: 'GET /api/OnlineChallenge/Make',
        model: 'GET /api/OnlineChallenge/Model',
        version: 'GET /api/OnlineChallenge/Version',
        vehicles: 'GET /api/OnlineChallenge/Vehicles',
    }


    const get = async (endPoint) => {
        const result = await fetch(endPoint)
        console.log(result)
    }

    return {
        get
    }
}

export { http }