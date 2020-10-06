import { storeFactory } from 'r9x_js'

const store = storeFactory({
    vehicle:{
        list:[],
        filtered: []
    },
    place: { 
        isVisible: false,
        list: []          
    },
    range: { 
        isVisible: false,
        value:'',
        list: [
            { value: '10 km', id: 1 },
            { value: '25 km', id: 2 },
            { value: '50 km', id: 3 },
            { value: '80 km', id: 4 },
            { value: '100 km', id: 5 },
        ]          
    },
    brand: {
        value:'',
        isVisible: false,
        list: [],
        selected: {id:null, value:''}     
    },
    model: { 
        value:'',
        isVisible: false,
        list: [],
        selected: { id: null, value: '' }         
    },
    year: { 
        value:'',
        isVisible: false,
        list: [],
        selected: { id: null, value: '' }          
    },
    price: { 
        value:'',
        isVisible: false,
        list: [],
        selected: { id: null, value: '' }          
    },
    priceRange: { 
        value: '',
        isVisible: false,
        list: [],
        selected: { id: null, value: '' }              
    },
    version: { 
        value: '',
        isVisible: false,
        list: [],
        selected: { id: null, value: '' }          
    },
})



export { store }