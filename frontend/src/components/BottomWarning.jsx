import { Link } from "react-router-dom";

export function BottomWarning({label, to, buttonText}){
    return(
        <div className="py-2 px-4 text-sm flex justify-center">
            <div>
                {label}
            </div>
            <Link className="pointer underline pl-2 cursor-pointer" to={to}>
                {buttonText}
            </Link>            
        </div>
    )
}