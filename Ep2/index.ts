function add(a: number, b: number) {
    return a + b
}


console.log (add(3,4))
function Lob(a: number, b: number) {
    return a - b
}


console.log (Lob(5,3))
function kun(a: number, b: number, c: number, d: number) {
    return a * b * c * d
}


console.log (kun(20,23,25,27))
function หิว(หิวจริงไหม: boolean){
    if (หิว === true) {
        console.log('หิวโว้ย')
    } else {
        console.log('ไม่หิว')
    }
}

function grade(homework: number, midterm: number, final: number) {
    let scroe: number = homework + midterm + final

    if (scroe < 50) {
        return 'สอบตก'
    }else {
        return 'สอบตก'
    }
}

console.log(grade(8,20,30))
function grade(homework: number, midterm: number, final: number) {
    let scroe: number = homework + midterm + final

    if (scroe < 50) {
        return 'เกรด F'
    }else if (scroe < 60) {
        return 'เกรด D'
    }else if (scroe <70) {
        return 'เกรดC'
    }else if (scroe <80) {
        return 'เกรดB'
    }else {
        return 'เกรดA'
    }
 }

console.log(grade(20,20,30))
