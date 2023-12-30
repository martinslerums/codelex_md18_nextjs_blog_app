type TextareaProps = {
    placeholder: string,
    name: string,
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
    required: boolean,
    label: string,
    value: string
}

const Textarea = ({label, onChange, value, placeholder, name, required}: TextareaProps) => {
    return (
        <div>
            <label>{label}</label>
            <textarea 
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