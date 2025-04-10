export function InputBox({type, label,placeholder, onChange}){
    return(
        <div>
            <div className="text-sm font-medium text-left py-2">
                {label}
            </div>
            <input onChange={onChange} type={type} placeholder={placeholder} className="w-full px-2 py-1 border border-slate-200 rounded"></input>
        </div>
    )
}