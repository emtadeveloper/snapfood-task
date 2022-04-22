import styles from "./style.module.scss";
import { local } from "../../localization";
import { Animation, Button } from "../../components";
import { useNavigate } from "react-router";

export const Home = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/vendor");
    };

    return (
        <div className={styles.container}>
            <Animation />
            <Button name={local.Home.btn} handleClick={handleClick} />
        </div>
    );
};
