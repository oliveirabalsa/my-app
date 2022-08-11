import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { ThemeContext } from "../../context/ThemeContext"

export default function DarkContext () {
    const navigate = useNavigate()
    const { dark, toggleDark }  = useContext(ThemeContext)
    return <>
            <button onClick={() => toggleDark && toggleDark()}>change Dark</button> <br />
            <p>current Theme: {String(dark)}</p>
            <button onClick={() => navigate('/')}>Go Home</button>
    </>
}