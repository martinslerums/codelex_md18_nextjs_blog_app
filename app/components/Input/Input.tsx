type InputProps = {
    type: HTMLInputElement['type'],
    placeholder: string,
    name: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    value: string,
    required: boolean
    label: string
}

const Input = ({value, name, onChange, placeholder, type, required, label}: InputProps ) => {
    return ( 
    <div>
        <label>{label}</label>
        <input 
            type={type}
            placeholder={placeholder}
            name={name}
            onChange={onChange}
            value={value}
            required={required}
        />
    </div>
     );
}
 
export default Input;