const pubsubFactory = () => {
    const listeners = {}

    const subscribe = (eventName, handler) => { 
        if((eventName in listeners)) return
        listeners[eventName] = handler
        // throw new Error(`This event has already been registered: ${eventName}`)
    }

    const emit = (eventName, payload) => {
        if(!(eventName in listeners) || typeof listeners[eventName] !== 'function') {
            throw new Error(`This event has not been registered: ${eventName}`)
        }
        listeners[eventName](payload)
    }

    return {
        subscribe,
        emit
    }
}

export { pubsubFactory }