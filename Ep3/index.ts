function helloworld() {
    console.log("สวัสดี")
}

้helloworld()

function helloname(name:string) {
    console.log(name)
}

helloname('chew')

function getPi(){
    return 3.14
}

console.log (getPi)

function st(fname: string, sname: string) {
    if (fname ==='mix'|| sname ==='zane'){
        console.log('เริ่มสอน')
    } else {
        console.log('ไม่สอน')
    }   
}

st('mix','zane')

function cls(mname: string, zname: string, foname: string) {
    if (mname ==='mix' && zname ==='zane' || foname ==='forth'){
        console.log('พร้อมเรียน')
    }else {
        console.log('ยังไม่พร้อม')
    }
}

cls('mix','zane','forth')

function criterion(gender: string,height: number, weight: number) {
    if (gender ==='male' && height > 170 || (weight >50 && weight <= 110 )) {
        console.log('จับใบดำใบแดง')
    }else {
        console.log('ไม่เข้าเกณฑ์')
    }
}

criterion('male',175,99)

function  pay(age: number, salary: number, deposit: number) {
    if (age > 16 && salary < 70000 && deposit < 500000) {
        console.log('รับ10000บาท')
    }else {
        console.log('อด....')
    }
}

pay(17,12000,120000)