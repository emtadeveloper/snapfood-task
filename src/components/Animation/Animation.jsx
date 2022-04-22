import styles from "./style.module.scss";

export const Animation = () => {
    return (
        <div class={styles.loop_wrapper}>
            <div class={styles.mountain}></div>
            <div class={styles.hill}></div>
            <div class={styles.tree}></div>
            <div class={styles.tree}></div>
            <div class={styles.tree}></div>
            <div class={styles.rock}></div>
            <div class={styles.truck}></div>
            <div class={styles.wheels}></div>
        </div>
    );
};
