const pubsubFactory = () => {
    const listeners = {}

    const _isString = (eventName) =>  {
        typeof eventName && eventName === 'string'
    }
    
    const _isFunction = (handler) => typeof handler === 'function'

    const _isNotRegistered = (eventName) => !listeners.hasOwnProperty(eventName)

    const _isValidEvent = (eventName, handler) => {
        return _isString(eventName) && _isNotRegistered(eventName) && _isFunction(handler)
    }

    const subscribe = (eventName, handler) => { 
        if(_isValidEvent(eventName, handler)) listeners[eventName] = handler
    }



    const emit = (eventName, payload) => {
        if (_isFunction(listeners[eventName])) listeners[eventName](payload)
    }

    return {
        subscribe,
        emit
    }
}

export { pubsubFactory }