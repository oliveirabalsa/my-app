import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ThemeContext } from '../../context/ThemeContext';
import { Container, Button } from './style'

export function Home() {
    const { dark } = useContext(ThemeContext)
    const navigate = useNavigate();
    const [storageContent, setStorageContent] = useState<string | null>("")
    useEffect(() => {
        const storageItem = localStorage.getItem('token')
        setStorageContent(storageItem)
    }, [])

    const handleClearStorage = () => {
        localStorage.clear()
        setStorageContent("")

    }
    const handleSetItemToStorage = (key: string, value: string) => {
        localStorage.setItem(key, value)
        setStorageContent(value)
    }

    return (
            <>
                <Container dark={dark}>
                    <Button onClick={() => handleSetItemToStorage("token", "123")}>Set Local Storage Token</Button>
                    <Button onClick={handleClearStorage}>Clear Storage</Button>
                    <Button onClick={() => navigate('/dark')}>Go to Dark selector</Button>
                </Container>
                <Container dark={dark} style={{ marginLeft: "10px" }}>
                    <div>Local Storage Token: {storageContent}</div>
                </Container>
            </>
            
    )
} 