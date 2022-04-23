import styles from "./style.module.scss";
import { local } from "../../localization";

// voteCount
// rate
// best_coupon

export const Card = ({ backgroundImage, logo, title, description, deliveryFee, best_coupon, rate, voteCount }) => {
    return (
        <div className={styles.card}>
            <figure className={styles.card_header}>
                <img className={styles.card_header_logo} src={backgroundImage} alt={title} />
                <figcaption className={best_coupon ? styles.card_header_caption : styles.none}>{best_coupon}</figcaption>
            </figure>
            <figure className={styles.card_mask}>
                <img className={styles.mask_logo} src={logo} alt={title} />
            </figure>
            <section className={styles.card_content}>
                <section className={styles.card_content_header}>
                    <h4 className={styles.header_title}>{title}</h4>
                    <div className={styles.header_content}>
                        <span className={styles.header_content_rate}>{rate}</span>
                        <span className={styles.header_content_voteCount}>({voteCount})</span>
                    </div>
                </section>
                <h5 className={styles.card_content_description}>{description}</h5>
                <span className={styles.card_content_price}>
                    {local.vendor.card.sendExpress} : <span className={styles.card_content_price_light}>{deliveryFee}</span>
                </span>
            </section>
        </div>
    );
};
