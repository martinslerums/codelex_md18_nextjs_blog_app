import styles from "./Button.module.css"

type ButtonProps = {
    type: "submit" | "reset" | "button"
    label: string
    onClick?: () => void
}

const Button = ({type, label, onClick}: ButtonProps) => {
    return ( 
        <div className={styles.wrapper} >
            <button 
                className={styles.button}
                type={type}
                onClick={onClick}
            >
                {label}
            </button>
        </div> 
     );
}
 
export default Button;