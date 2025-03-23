import { useRouteError } from "react-router-dom";
import Navbar from "./components/Navbar";

const ErrorPage = () => {
    const error = useRouteError()
    
    return (
        <>
            <Navbar />
            <div className="error-frame">
                <h1>Une erreur est survenue</h1>
                <p>
                    {error?.error?.toString() ?? error?.toString()}
                </p>
            </div>
        </>
    )
}

export default ErrorPage;