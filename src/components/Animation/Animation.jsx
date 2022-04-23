import styles from "./style.module.scss";

export const Animation = () => {
    return (
        <div className={styles.loop_wrapper}>
            <div className={styles.mountain}></div>
            <div className={styles.hill}></div>
            <div className={styles.tree}></div>
            <div className={styles.tree}></div>
            <div className={styles.tree}></div>
            <div className={styles.rock}></div>
            <div className={styles.truck}></div>
            <div className={styles.wheels}></div>
        </div>
    );
};
