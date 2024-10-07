//medtod
//.pop เอาตัวหลังออก
//.push ต่อหลัง
//.shift เอาตัวหน้าออก
//.unshift ใส่ข้างหน้า
//.sort เรียงจาก A-Z
//.reverse เรียงจากZ-A
//.split ตัดตัวออก
const person = {
    firstName: 'tawanchai',
    lastName: 'boonprasert',
    age: 20,
    isMale: true,
    sister: {
        firstName: 'chanthra',
        lastName: 'boonprasert',
        age: 16,
        isFemale: true
    }


}

console.log(person.sister.firstName)

for (let i = 0; i <= 10; i++) {
    console.log(i)
}


const peoples = [
    { name: "tawan", age: 25 },
    { name: "caca", age: 18 },
    { name: "haha", age: 30 }
];

const people: {
    name: string;
    age: number;
}[] = [];

for (let i = 0; i < peoples.length; i++) {
    if (peoples[i].age > 20) {
        people.push(peoples[i])
    }
}


const products = [
    { name: "laptop", price: 30000, stock: 10 },
    { name: "mouse", price: 500, stock: 50 },
    { name: "keyboard", price: 1000, stock: 0 },
    { name: "monitor", price: 7000, stock: 5 },
    { name: "headphone", price: 1500, stock: 0 }
];

const product: {
    name: string,
    price: number,
    stock: number
}[] = [];

for (let i = 0; i < products.length; i++) {
    if(products[i].stock > 0) {
        product.push(products[i])
    }
}

console.log(products)


const productsData = [
    {price: 100 },
    {price: 200 },
    {price: 150 },
    {price: 300 },
    {price: 250 },
];
//for loop
function updatePrice(
    products: {
        price: number
    }[]
) {
    const m: {
        price: number;
    }[] = [];

    for (let i = 0; i < products.length; i++) {
        if (products[i].price > 150) {
            m.push(products[i]);
        }
    }

    for (let i = 0; i < m.length; i++) {
        m[i].price = m[i].price * 1.1;
    }
    return m;
}

console.log(updatePrice(productsData))
//filter and map
function updatedPrice(products: {
    price: number;
}[]) {
    return products.filter(function (element, index) {
        return element.price > 150
    }).map(function (element, index) {
        return ({
            price: element.price * 1.1
        })
    })
} 
console.log(updatedPrice(productsData))


//เปลี่ยนnumberเป็นstring

//ท่ายาก
const number = [1,2,3,4,5,6,7,8]

function covertToArrayString(array: number[]) {
    const result: string[] = [];

    for (let i = 0; i < array.length; i++) {
        result.push(array[i].toString())
    }

    return result
}

console.log(covertToArrayString(number))

//ท่าง่าย
function covertToArrayStringwith(array: number[]) {
    return array.map(function(element, index) {
        return element.toString()
    })
}

console.log(covertToArrayStringwith(number))


const names = ["John Doe", "Jane Smith", "Jack Brown"];

function cutNamewithMap(array: string[]) {
    return array.map(function(element, index) {
        const cutName = element.split(" ")
        return {
            firstName: cutName[0],
            lastName: cutName[1]
        }
    })
}

console.log(cutNamewithMap(names))


const inventory = {
    name: 'Laptop Store',
    quantity: 5,
    isAvailable: function () {
        return this.quantity > 0
    }
}

//console.log(inventory.isAvailable())

const account = {
    name: 'ออมกับข้าว',
    balance: 0,
    desposiit: function(amount: number) {
        if (amount < 0) {
            console.log('กรุณาระบุจำนวนเงิน')
            return
        }
        this.balance = this.balance + amount
        console.log('ฝากเงินจำนวน' + amount + 'ยอดคงเหลือ' +this.balance)
    },
    withdraw: function(amount: number) {
        if (amount > this.balance) {
            console.log('เงินไม่พอ คุณมียอดคงเหลือ' + this.balance)
            return
        }

        this.balance = this.balance - amount
        console.log('ถอนเงิน' + amount + 'ยอดคงเหลือ' +this.balance)
    }
}

account.desposiit(699)
account.withdraw(500)