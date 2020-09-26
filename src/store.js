import { storeFactory } from 'r9x_js'

const store = storeFactory({
    place: { 
        isVisible: false,
        list: [
            { value: 'val 1', id: 1 },
            { value: 'val 2', id: 2 },
            { value: 'val 3', id: 3 },
            { value: 'val 4', id: 4 },
            { value: 'val 5', id: 5 },
        ]          
    },
    range: { 
        isVisible: false,
        list: [
            { value: '10 km', id: 1 },
            { value: '25 km', id: 2 },
            { value: '50 km', id: 3 },
            { value: '80 km', id: 4 },
            { value: '100 km', id: 5 },
        ]          
    },
    brand: { 
        isVisible: false,
        list: [
            { value: 'val 1', id: 1 },
            { value: 'val 2', id: 2 },
            { value: 'val 3', id: 3 },
            { value: 'val 4', id: 4 },
            { value: 'val 5', id: 5 },
        ]          
    },
    model: { 
        isVisible: false,
        list: [
            { value: 'val 1', id: 1 },
            { value: 'val 2', id: 2 },
            { value: 'val 3', id: 3 },
            { value: 'val 4', id: 4 },
            { value: 'val 5', id: 5 },
        ]          
    },
    year: { 
        isVisible: false,
        list: [
            { value: 'val 1', id: 1 },
            { value: 'val 2', id: 2 },
            { value: 'val 3', id: 3 },
            { value: 'val 4', id: 4 },
            { value: 'val 5', id: 5 },
        ]          
    },
    priceRange: { 
        isVisible: false,
        list: [
            { value: 'val 1', id: 1 },
            { value: 'val 2', id: 2 },
            { value: 'val 3', id: 3 },
            { value: 'val 4', id: 4 },
            { value: 'val 5', id: 5 },
        ]          
    },
    version: { 
        isVisible: false,
        list: [
            { value: 'val 1', id: 1 },
            { value: 'val 2', id: 2 },
            { value: 'val 3', id: 3 },
            { value: 'val 4', id: 4 },
            { value: 'val 5', id: 5 },
        ]          
    },
})



export { store }