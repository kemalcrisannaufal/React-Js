import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className="flex flex-col min-h-screen justify-center items-center">
            <h1 className="font-bold text-3xl my-3">Ooops</h1>
            <p className="font-semibold text-2xl my-2 text-slate-800">Sorry, an unexpected error has occurred.</p>
            <p className="font-semibold text-xl my-2 text-slate-800">
                {error.statusText || error.message}
            </p>
        </div>
    )
}

export default ErrorPage;