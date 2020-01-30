const name = 'Andrew'
const userAge = 27

const user = {
    name,
    age: userAge,
    location: 'philadephia'
}

// Object Distructuring
const {
    name: id,
    age,
    location: address
} = user

// end of object Destructuring..
console.log(address)
console.log(id)
console.log(age)

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4.2
}
const transaction = (type, {
    label,
    stock
}) => {
    console.log(type, label, stock)
}

transaction('order', product)