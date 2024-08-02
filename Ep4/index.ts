function sayHi(dayOfWeek: number) {
    if (dayOfWeek === 1) {
        console.log('สวัสดีวันจันทร์')
    }else if (dayOfWeek === 2) {
        console.log('สวัสดีวันอังคาร')
    }else if (dayOfWeek === 3) {
        console.log('สวัสดีวันพุธ')
    }else if (dayOfWeek === 4) {
        console.log('สวัสดีวันพฤหัสบดี')
    }else if (dayOfWeek === 5) {
        console.log('สวัสดีวันศุกร์')
    }else if (dayOfWeek === 6) {
        console.log('สวัสดีวันเสาร์')
    }else if (dayOfWeek === 7) {
        console.log('สวัสดีวันอาทิตย์')
    }
}
sayHi


function SayyHi(DayOfWeekk: number) {
    switch (DayOfWeekk) {
        case 1:
            console.log('วัสดีวันจันทร์')
            break
        case 2:
            console.log('วัสดีวันอังคาร')
            break
        case 3:
            console.log('วัสดีวันพุธ')
            break
        case 4:
            console.log('วัสดีวันพฤหัสบดี')
            break
        case 5:
            console.log('วัสดีวันศุกร์')
            break
        case 6:
            console.log('วัสดีวันเสาร์')
            break
        case 7:
            console.log('วัสดีวันอาทิตย์')
            break
            default:
                console.log('Error')
                break
    }
}
SayyHi(3)

function dateaoeng(size: string) {
    switch (size) {
        case 's':
            console.log('ผอม')
            break
        case 'm':
            console.log('ผอม')
            break
        case 'l':
            console.log('ท้วม')
            break
        case 'xl':
            console.log('อ้วน')
            break
        case '2xl':
            console.log('อ้วน')
            break
            default:
                console.log('Error')
                break
    }
}
dateaoeng('xl')

function fixedDecimal(n: number, digit: number) {
    const x = n.toFixed(digit)
    return x
}

console.log(fixedDecimal(40.50, 7))

function termtos(n: number) {
    let y = n.toLocaleString()
    return y
}

console.log(termtos(1000))
    

function checkStringLength(str: string) {
    console.log(str.length)
}

checkStringLength('Rraiwa')

function getCharByIndex(msg: string, index: number) {
    const x = msg.charAt(index)
    return x
}

console.log(getCharByIndex('หิวห้้าว',3))

function checkStrInDex(msg: string, index: string) {
    if  (msg.includes(index)) {
        console.log(msg.indexOf(index))
    }else {
        console.log('ไม่พบคำที่ค้นหา')
    }
}

checkStrInDex('โอร่าราบาหาฮาHome','บา')
