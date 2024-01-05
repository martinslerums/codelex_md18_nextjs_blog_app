import styles from "./Input.module.css"

type InputProps = {
    type: HTMLInputElement['type'],
    placeholder?: string,
    name: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    value: string,
    required: boolean
    label?: string
}

const Input = ({value,label, name, onChange, placeholder, type, required, }: InputProps ) => {
    return ( 
    <div className={styles.wrapper}>
        <label>{label}</label>
        <input 
            className={styles.input}
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