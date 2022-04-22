import styles from "./style.module.scss";

export const Button = ({ name, handleClick }) => {
    return (
        <button className={styles.button} onClick={handleClick}>
            {name}
        </button>
    );
};
