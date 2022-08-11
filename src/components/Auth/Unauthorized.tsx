import { useNavigate } from "react-router-dom";
import { Button } from "../Home/style";

export default function Unauthorized() {
    const navigate = useNavigate();
    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <h1 style={{ marginLeft: "10px" }}>Unauthorized</h1>
            <Button onClick={() => navigate(-1)}>Back</Button>
        </div>
    )
}