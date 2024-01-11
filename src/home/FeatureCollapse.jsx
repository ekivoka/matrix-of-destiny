import { useCallback, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./FeatureCollapse.scss";
import arrowIcon from "../assets/imgs/arrow-icon.svg";
import PropTypes from "prop-types";

function FeatureCollapse({ children, title }) {
    const [isOpen, setIsOpen] = useState(false);

    const onClick = useCallback(() => {
        setIsOpen((isOpen)=>!isOpen)
    },[])

    return (
        <motion.div initial={false} className="feature-collapse" onClick={onClick}>
            <div className="feature-collapse__header">
                <div className="feature-collapse__header-title">{title}</div>
                <div className="feature-collapse__header-icons">
                    <ProBadge />
                    <ArrowIcon isOpen={isOpen} />
                </div>
            </div>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                            open: { opacity: 1, height: "auto" },
                            collapsed: { opacity: 0, height: 0 },
                        }}
                        transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="feature-collapse__content">
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

FeatureCollapse.propTypes = {
    title: PropTypes.string.isRequired,
};

function ProBadge() {
    return <div className="pro-badge">PRO</div>;
}

function ArrowIcon({ isOpen }) {
    return (
        <div className={`arrow-icon${isOpen ? " open" : ""}`}>
            <img src={arrowIcon} alt="" />
        </div>
    );
}

export default FeatureCollapse;
