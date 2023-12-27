import styles from "./CommentsForm.module.css"

const CommentsForm = () => {
    return ( 
        <>
        <form className={styles.form}>  
            <div className={styles.wrapper}>
                <input type="text" placeholder="Author"/>
                <textarea placeholder="Comment"/>
                <button type="submit">Add comment</button>
            </div>
        </form>
        </>
     );
}
 
export default CommentsForm;