import { createContext, useEffect, useState } from 'react'
import { Cookies } from 'react-cookie'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import { useRouter } from 'next/router'

export const AuthContext = createContext('unknow')
const AuthProvider = (props) => {
    const [username, setUsername] = useState('John Smith')
    const [user, setUser] = useState(null)
    const [loggedIn, setLoggedIn] = useState(null)

    const Router = useRouter()

    const getUser = () => {
        var cookies = new Cookies()

        if (!cookies.get('_login_user')) {
            setUser({
                id: 1,
                fullName: 'Enterance does not establish',
                roles: ['ROLES_USER', 'ROLES_ADMIN'],
                email: 'mail@mail.com'
            })
        } else {
            console.log(cookies.get('_login_user'))
        }
    }

    const isLoggedIn = () => {
        let cookies = new Cookies()
        const storedJWT = cookies.get('_aybekler_token')

        if (storedJWT === 'none' || !storedJWT || storedJWT === 'undefined') {
            setLoggedIn(false)
            getUser()
        } else {
            let decodedToken = jwt_decode(storedJWT, { header: true })
            let currentDate = new Date()

            if (decodedToken.exp * 1000 < currentDate.getTime()) {
                cookies.set('_aybekler_token', 'none')
                cookies.set('_login_user', '')
                setUser(null)
                setLoggedIn(false)
                getUser()
                Router.push('/login')
            }
        }
    }

    useEffect(() => {
        isLoggedIn()

        const handleLogOut = (e) => {
            if (e.key === 'LS_LOGIN') {
                if (e.newValue === 'true') {
                    isLoggedIn()
                } else {
                    logOut()
                }
            }
        }
        window.addEventListener('storage', handleLogOut)
        return function cleanUp() {
            window.removeEventListener('storage', handleLogOut)
        }
    })

    const signIn = (data) => {
        console.log('data: ', data)

        let cookies = new Cookies()

        const options = {
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json',
                'Access-Control-Allow': '*'
            }
        }
        axios
            .post('http://localhost:8080/api/auth/signin', data, options)
            .then(async (r) => {
                if (r?.status === 200 || r?.status === 201) {
                    let user = {
                        id: r?.data?.id,
                        email: r?.data?.username,
                        roles: r?.data?.roles
                    }
                    setUser(user)
                    setLoggedIn(true)
                    cookies.set('_login_user', JSON.stringify(user))
                    cookies.set('_aybekler_token', r?.data?.token, { path: '/' })
                    localStorage.setItem('LS_LOGIN', 'true')
                    Router.push('/')
                }
            })
    }

    const logOut = () => {
        let cookies = new Cookies()
        cookies.set('_aybekler_token', 'none')
        setUser(null)
        localStorage.removeItem('LS_LOGIN')
        isLoggedIn()
    }

    return (
        <AuthContext.Provider value={{ username, signIn }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;