const score = [10,23,26,30,33]

let sum: number = 0

for(let i = 0; i < score.length; i ++) {
    sum = sum + score[i]
}

let avg = sum / score.length
console.log("Total:", sum)
console.log("Avg:", avg)

const myStudents: string = "เซน,แทน,เวฟ,รุ้ง,เท็ก,สร"

const myStudentsArray: string[] = myStudents.split(',')

console.log(myStudents)
console.log(myStudentsArray)

const fullname: string = 'สุดสวย สวยสุด'

console.log(fullname.split(' ')[0])

console.log(fullname.slice(0, fullname.indexOf(' ')))

const animal1: string = 'หมา*แมว*กระต่าย*กระรอก'

const likeAnimal1: string[] = animal1.split('*')

console.log(animal1)
console.log(likeAnimal1)

const animal: string = 'หมา*แมว*กระต่าย*กระรอก'

const likeAnimal: string[] = animal.split('*')

console.log("ตั้งต้น: ", likeAnimal)

likeAnimal.pop() //เอาตัวสุดท้ายออก

console.log("เอาตัวสุดท้ายออก: ", likeAnimal)

likeAnimal.push('หมาป่า') //ใส่ต่อท้าย

console.log("ใส่ต่อท้าย: ", likeAnimal)

likeAnimal.shift() //เอาตัวหน้าออก

console.log("เอาตัวหน้าออก: ", likeAnimal)

likeAnimal.unshift('หมูกรอบ') //ใส่ตัวหน้า

console.log("ใส่ตัวหน้า: ",likeAnimal)

const friend: string = "เนม,หมู,เต้,นิส,กาก"

const myFriend: string[] = friend.split(',')

myFriend.sort()

console.log(myFriend)

myFriend.reverse()

console.log(myFriend)

const me = {
    firstName: 'Tawanchay',
    lastName: 'Boonprasert',
    age: 20,
    phonenumber: 1150,
    height:300,
    weight:2000,
    gender:'male'
}

// ประวัติส่วนตัว

// ชื่อ: Tawanchay
// นามสกุล:Boonprasert
// อายุ:20
// เบอร์โทร:1150
// ส่วนสูง:300
// น้ำหนัก:2000
// เพศ:male