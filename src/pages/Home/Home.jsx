// package

import { useNavigate } from "react-router";

// component

import { Animation, Button } from "../../components";
import styles from "./style.module.scss";

// localization

import { local } from "../../localization";

export const Home = () => {
    //
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
