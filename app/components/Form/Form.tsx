import { FormEvent, ReactNode } from "react";
import styles from "./Form.module.css"

type FormProps = {
    onSubmit: (event: FormEvent) => void
    label: string
    children: ReactNode;
}

const Form = ({onSubmit, label, children}: FormProps ) => {
    return ( 
        <form
            className={styles.form}
            onSubmit={onSubmit}
        >
            <h6>{label}</h6>
            <div className={styles.wrapper}>
                {children}
            </div>
        </form>
     );
}
 
export default Form;