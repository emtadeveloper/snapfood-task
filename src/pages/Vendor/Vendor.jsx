import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVendors } from "../../redux/action";
import { Card } from "../../components";
import styles from "./style.module.scss";

export const Vendor = () => {
    //
    const dispatch = useDispatch();
    const state = useSelector((state) => state.reducer);
    const [pageNumber, setPageNumber] = useState(0);
    const [lastElement, setLastElement] = useState(null);
    //
    const observer = useRef(
        new IntersectionObserver((entries) => {
            const firstItem = entries[0];
            if (firstItem.isIntersecting) {
                setPageNumber((pageNumberPrev) => pageNumberPrev + 1);
            }
        })
    );

    useEffect(() => {
        dispatch(fetchVendors(pageNumber));
    }, [pageNumber]);

    useEffect(() => {
        const currentElement = lastElement;
        const currentObserver = observer.current;
        if (currentElement) currentObserver.observe(currentElement);
        return () => {
            if (currentElement) currentObserver.unobserve(currentElement);
        };
    }, [lastElement]);
    return (
        <>
            {Object.keys(state.entities).map((item) => {
                console.log(state.entities[item]);
                return (
                    <div className={styles.constainer} key={item} ref={setLastElement}>
                        <Card {...state.entities[item]} />
                    </div>
                );
            })}
        </>
    );
};
