'use client'
import React, {useEffect, useReducer} from 'react'
import {sendContactForm} from "@/lib/api";

const enum REDUCER_ACTION_TYPE {
    SET_NAME,
    SET_EMAIL,
    SET_PHONE,
    SET_MSG,
    CLEAR
}


type ReducerAction = {
    type: REDUCER_ACTION_TYPE
    payload: string
}

const Input = ({name, label, required, placeholder, value, onChange, invalid, input, setTouched}: {
    name: string,
    label: string,
    required?: boolean,
    placeholder?: string
    onChange: (e: string) => void
    value: string
    invalid: boolean
    input: 'input' | 'textarea'
    setTouched: (name: (prev: any) => any) => void
}) => {
    const onBlur = () => {
        setTouched(prev => ({...prev, [name]: true}))
    }

    return (
        <div className={'my-4'}>
            <label aria-required={required} htmlFor={name}>{label}
                {required && <sup className={'text-red-400 m-1 mt-3 '}>*</sup>}
            </label>

            {input === 'input' ?
                <input onChange={(e) => onChange(e.target.value)} name={name} id={name}
                       value={value} onBlur={onBlur}
                       className={'bg-transparent my-1 py-2 rounded px-4 w-full border border-gray-400 focus:border-teal-600 focus:outline-none'}
                       type="text"
                       placeholder={placeholder}/>

                : <textarea onBlur={onBlur} value={value} rows={5}
                            name={name} id={name}
                            onChange={(e) => onChange(e.target.value)}
                            className={'bg-transparent my-1 py-2 rounded px-4 w-full border border-gray-400 focus:border-teal-600 focus:outline-none'}
                            placeholder={placeholder}/>

            }

            {invalid && <span className={'text-red-400 text-sm'}>
                {required && 'To pole jest wymagane'}
            </span>}
        </div>
    )
}


const ContactForm = () => {
    const [loading, setLoading] = React.useState(false)
    const [touched, setTouched] = React.useState({
        name: false,
        email: false,
        phone: false,
        msg: false
    })
    const [sent, setSent] = React.useState(false)

    const initState = {
        name: '',
        email: '',
        phone: '',
        msg: ''
    }
    const reducer = (state: typeof initState, action: ReducerAction): typeof initState => {
        switch (action.type) {
            case REDUCER_ACTION_TYPE.SET_NAME:
                return {...state, name: action.payload}
            case REDUCER_ACTION_TYPE.SET_EMAIL:
                return {...state, email: action.payload}
            case REDUCER_ACTION_TYPE.SET_PHONE:
                return {...state, phone: action.payload}
            case REDUCER_ACTION_TYPE.SET_MSG:
                return {...state, msg: action.payload}
            case REDUCER_ACTION_TYPE.CLEAR:
                return initState
            default:
                throw new Error('Unknown action type')
        }
    }

    const [state, dispatch] = useReducer(reducer, initState)
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        const post = await sendContactForm(state)
        if (post.ok) {
            dispatch({type: REDUCER_ACTION_TYPE.CLEAR, payload: ''})
            setTouched({
                name: false,
                email: false,
                phone: false,
                msg: false
            })
            setLoading(false)
            setSent(true)
        }
        setLoading(false)
    }

    useEffect(
        () => {
            if (sent) {
                setTimeout(() => {
                    setSent(false)
                }, 3000)
            }
            //remove timeout when unmounting
            return () => {
                clearTimeout(1)
            }
        }
        , [sent]
    )

    return (
        <div className={'w-fullm-auto'}>
            {sent &&
                <div
                    className={'text-center text-2xl bg-teal-700 py-2 rounded my-3 transition-all max-h-screen max-h-0'}>Wiadomość
                    wysłano,
                    dzięki!!!</div>}
            <form onSubmit={handleSubmit}>
                <h3 className={'text-3xl font-bold'}>Formularz kontaktowy</h3>
                <Input setTouched={setTouched} invalid={!state.name && touched?.name} input={'input'}
                       onChange={(e) => dispatch({
                           type: REDUCER_ACTION_TYPE.SET_NAME,
                           payload: e
                       })} label={'Imię'} name={'name'}
                       value={state.name}
                       placeholder={'podaj imię'}
                       required={true}/>

                <Input setTouched={setTouched} invalid={!state.email && touched?.email} input={'input'} onChange={
                    (e) => dispatch({
                        type: REDUCER_ACTION_TYPE.SET_EMAIL,
                        payload: e
                    })
                } value={state.email} label={'Email'} name={'email'} placeholder={'podaj email'} required={true}/>

                <Input setTouched={setTouched} invalid={!state.phone && touched?.phone} input={'input'} onChange={
                    (e) => dispatch({
                        type: REDUCER_ACTION_TYPE.SET_PHONE,
                        payload: e
                    })
                } value={state.phone} label={'Telefon'} name={'phone'} placeholder={'podaj telefon'} required={true}/>

                <Input setTouched={setTouched} invalid={!state.msg && touched?.msg} input={'textarea'} onChange={
                    (e) => dispatch({
                        type: REDUCER_ACTION_TYPE.SET_MSG,
                        payload: e
                    })
                } value={state.msg} name={'msg'} label={'Wiadomość'} placeholder={'wpisz wiadomość'} required={true}/>

                <button
                    disabled={!state.name || !state.email || !state.phone || !state.msg}
                    className={'w-full text-white font-semibold px-6 py-3 bg-teal-700 rounded hover:bg-teal-600'}
                    type={'submit'}>{loading ? 'Wysyłanie...' : 'Wyślij'}
                </button>
            </form>
        </div>
    )
}
export default ContactForm