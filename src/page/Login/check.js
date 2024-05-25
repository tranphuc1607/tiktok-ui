

function Check(values) {
    const errors = {}
    const regexCheckEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    const regexCheckName = /([a-zA-Z0-9_\s]+)/
    const regexTestFirstPassWord = /^[A-Z]/
    const regexTestPassword = /^.{8,}$/

    if(values.name === '') {
        errors.name = "vui lòng nhập trường này "
    }
    else if(!regexCheckName.test(values.name)) {
        errors.name = "tên không phù hợp"
    }

    if(values.useName === '') {
        errors.useName = "vui lòng nhập trường này "
    }
    else if(!regexCheckName.test(values.useName)) {
        errors.useName = "tên không phù hợp"
    }

    if(!regexCheckEmail.test(values.email)) {
        errors.email = "đây không phải là email"
    }

    if(values.password === '') {
        errors.password = "vui lòng nhập mật khẩu"
    }
    else { 
        if(!regexTestFirstPassWord.test(values.password)) {
            errors.password = "chữ cái đầu phải là chữ cái in hoa và mật khẩu phải nhiều hơn 7 chữ cái"
        }
        else { 
            if(!regexTestPassword.test(values.password)) {
                errors.password = "mật khẩu của bạn phải nhiều hơn 7 chữ cái"
            }
        }
    }

    if(values.passwordConfirm === '')  {
        errors.passwordConfirm = "vui lòng nhập trường này"
    }
    else if(values.passwordConfirm !== values.password) {
        errors.passwordConfirm = " mật khẩu nhập lại không chính xác"
    }

     return errors
    
}

export default Check;