import { useNavigate } from 'react-router-dom' 

export function Contact() {
    const navigate = useNavigate()


    const handleAlert = () => {
        navigate("/")
    }

    return (
        <>
            <div>contact</div> 
            <div>
                <button onClick={handleAlert} >voltar</button>
            </div>
        </>
    )
} 