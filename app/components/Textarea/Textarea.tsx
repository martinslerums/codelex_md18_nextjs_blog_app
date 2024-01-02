import styles from "./Textarea.module.css"

type TextareaProps = {
    placeholder: string,
    name: string,
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
    required: boolean,
    value: string
    label?: string,
}

const Textarea = ({label, onChange, value, placeholder, name, required}: TextareaProps) => {
    return (
        <div>
            {/* <label>{label}</label> */}
            <textarea
                className={styles.textarea}
                placeholder={placeholder}
                name={name}
                onChange={onChange}
                value={value}
                required={required}
            />
        </div> 
    );
}
 
export default Textarea;