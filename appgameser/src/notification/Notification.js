import { useState, createContext } from "react"

const Notification = ({ message, severity }) => {

    const noticeStyle = {
        position: 'absolute',
        top: 100,
        right: 5,
        width: 'auto',
        height: 'auto',
        backgroundColor: severity === 'error' ? 'red' : 'green',
        color: 'black',
        padding: '10px 20px 10px 20px',
        borderRadius: '10px'
    }

    return (
        <div style={noticeStyle}>
            { message }
        </div>
    )
}

const NoticeContext = createContext();

export const NoticeProvider = ({ children }) => {

    const [msgConfig, setMsgConfig] = useState ({
        severity: 'success',
        message: 'Mensaje'
    })

    const setNotice = (sev, msg) => {
        setMsgConfig({ severity: sev, message: msg })
        setTimeout(() => {
            setMsgConfig({ ...msgConfig, message: '' })
        }, 3000)
    }

    return(
        <NoticeContext.Provider value = { setNotice }  >
            { msgConfig.message !== '' && <Notification message = { msgConfig.message } severity = { msgConfig.severity }/> }
            { children }
        </NoticeContext.Provider>
    )
}

export default NoticeContext