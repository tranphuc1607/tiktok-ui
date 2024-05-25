import classNames from 'classnames/bind'
import style from './Login.module.scss'
import { useState ,useRef} from 'react';
import Check from './check';

const cx = classNames.bind(style)

function Login() {
    const [values , setValues] = useState({
        name : '',
        useName : '',
        emai : '',
        password:'',
        passwordConfirm : ''

    })
    const [errorsItem , setErrorsItem] = useState({
        name : '',
        useName : '',
        email : '',
        password:'',
        passwordConfirm : ''

    })
    const [errorsSubMit , setErrorsSubMit] = useState({})
    const [isSubmit , setIsSubmit] = useState(true)
    const [isOnInput , setIsOnInput] = useState({
        name : true,
        useName:true,
        email :true,
        password:true,
        passwordConfirm:true
    })
    // const [check,setCheck] = useState('')
    const name  = useRef()
    const useName  = useRef()
    const email  = useRef()
    const password  = useRef()
    const passwordConfirm  = useRef()


    const handlInputValues = (e) => {
        const newValues = {...values , [e.target.name] : e.target.value}
        setValues(newValues)
    }

    const handlSubmit = (e) => {
        setIsSubmit(false)
        setIsOnInput({
        name : true,
        useName:true,
        email :true,
        password:true,
        passwordConfirm:true
    })
       return setErrorsSubMit(Check(values))
    }
    const handlBlur = (input) => {
        const id = input.name
        const newErrors = {...errorsItem, [id] : Check(values)[id]}
        setErrorsItem(newErrors)
    }

    const hanlOnInput = (input) => {
        const id = input.name
        const newErrors = {...errorsItem, [id] : ''}
        setErrorsItem(newErrors)
        const checkOnInput = {...isOnInput,[id] : false}
        setIsOnInput(checkOnInput)
    }


    return ( 
        <div>
            <div>
                <label >ho</label>
                <input
                     ref = {name} 
                     type="text" 
                     name='name'
                     onChange={handlInputValues} 
                     onBlur={() => handlBlur(name.current)} 
                     onFocus={() => hanlOnInput(name.current)}
                />
                {(errorsSubMit.name && isOnInput.name)?<p>{errorsSubMit.name}</p>:undefined}
                {(errorsItem.name && isSubmit)?<p>{errorsItem.name}</p>:undefined}

            </div>
            <div>
                <label>ten</label>
                <input 
                ref={useName} 
                type="text" 
                name='useName' 
                onChange={handlInputValues} 
                onBlur={() => handlBlur(useName.current)}
                onFocus={() => hanlOnInput(useName.current)}
                />
                {(errorsSubMit.useName && isOnInput.useName)?<p>{errorsSubMit.useName}</p>:undefined}
                {(errorsItem.useName && isSubmit)?<p>{errorsItem.useName}</p>:undefined}
            </div>
            <div>
                <label>email</label>
                <input 
                ref={email} 
                type="email" 
                name='email' 
                onChange={handlInputValues} 
                onBlur={() => handlBlur(email.current)}
                onFocus={() => hanlOnInput(email.current)}
                />
                {(errorsSubMit.email && isOnInput.email)? <p>{errorsSubMit.email}</p>:undefined}
                {(errorsItem.email && isSubmit)?<p>{errorsItem.email}</p>:undefined}
            </div>
            <div>
                <label>password</label>
                <input 
                ref={password} 
                type="password" 
                name='password' 
                onChange={handlInputValues}
                onBlur={() => handlBlur(password.current)}
                onFocus={() => hanlOnInput(password.current)}
                />
                {(errorsSubMit.password && isOnInput.password)? <p>{errorsSubMit.password}</p>:undefined}
                {(errorsItem.password && isSubmit)?<p>{errorsItem.password}</p>:undefined}
            </div>
            <div>
                <label>password confirm</label>
                <input 
                ref={passwordConfirm} 
                type="password" 
                name='passwordConfirm' 
                onChange={handlInputValues}
                onBlur={() => handlBlur(passwordConfirm.current)}
                onFocus={() => hanlOnInput(passwordConfirm.current)}
                />
                {(errorsSubMit.passwordConfirm && isOnInput.passwordConfirm)? <p>{errorsSubMit.passwordConfirm}</p>:undefined}
                {(errorsItem.passwordConfirm && isSubmit)?<p>{errorsItem.passwordConfirm}</p>:undefined}
            </div>
            <button onClick={handlSubmit}>Login</button>
        </div>
     );
}

export default Login;