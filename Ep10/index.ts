const database = [
    {
        email: 'user@gmail.com',
        password: 'loveyou3000'
    }
]

function register(email: string, password: string) {
    if (email.includes('@') && email.lastIndexOf('@') !== email.length) {
        if (password.length > 8 && password.length < 16) {
            const userObject = {
                email: email,
                password: password
            }
            database.push(userObject)
            alert('สมัครสมาชิกแล้ว ยินดีต้อนรับ คุณ' + email)
        }else {
        alert('รหัสผ่านต้องมากกว่า 8 ตัว และไม่เกิน 16')
    } 
    } else {
        alert('Email ไม่ถูกต้อง')
    }
}

register('chew@mail.com','123456แปด')