/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState, useEffect } from "react";
import "./App.css";
import {
    CircleLoader,
    PulseLoader,
    SpinnerLoader,
    DotLoader,
    FullScreenLoader,
    RingLoader,
    WaveLoader,
    BounceLoader,
    SquareLoader,
    HeartbeatLoader,
    GlowLoader,
    OrbitLoader,
} from "./loaders";
import { FaChevronDown } from "react-icons/fa";
import { Analytics } from "@vercel/analytics/react";

function App() {
    const [activeLoader, setActiveLoader] = useState("circle");
    const [showFullScreenLoader, setShowFullScreenLoader] = useState(false);

    const toggleLoader = (loaderType) => {
        setActiveLoader(loaderType);
    };

    const toggleFullScreenLoader = () => {
        setShowFullScreenLoader((prevState) => !prevState);
    };

    const closeFullScreenLoader = () => {
        setShowFullScreenLoader(false);
    };

    const getLoaderCode = (type) => {
        const loaderMap = {
            circle: "CircleLoader",
            pulse: "PulseLoader",
            spinner: "SpinnerLoader",
            dot: "DotLoader",
            ring: "RingLoader",
            wave: "WaveLoader",
            bounce: "BounceLoader",
            square: "SquareLoader",
            heartbeat: "HeartbeatLoader",
            glow: "GlowLoader",
            orbit: "OrbitLoader",
            fullscreen: "FullScreenLoader",
        };
        const loaderName = loaderMap[type];

        if (type === "fullscreen") {
            return (
                <>
                    <span className="code-keyword">import</span>{" "}
                    {"{ FullScreenLoader }"}{" "}
                    <span className="code-keyword">from</span>{" "}
                    <span className="code-string">'react-loaders-ui'</span>;
                    {"\n"}
                    <span className="code-comment">
                        // Use the FullScreenLoader component
                    </span>
                    {"\n"}
                    &lt;FullScreenLoader
                    {"\n  "}
                    <span className="code-keyword">color</span>=
                    <span className="code-string">"#cba6f7"</span>
                    {"\n  "}
                    <span className="code-keyword">loading</span>=
                    {"{isLoading}"}
                    {"\n  "}
                    <span className="code-keyword">loaderType</span>=
                    <span className="code-string">"{activeLoader}"</span>
                    {"\n"}/&gt;
                </>
            );
        } else {
            return (
                <>
                    <span className="code-keyword">import</span>{" "}
                    {"{ " + loaderName + " }"}{" "}
                    <span className="code-keyword">from</span>{" "}
                    <span className="code-string">'react-loaders-ui'</span>;
                    {"\n"}
                    <span className="code-comment">
                        // Use the {loaderName} component
                    </span>
                    {"\n"}
                    &lt;{loaderName}
                    {"\n  "}
                    <span className="code-keyword">size</span>={"{60}"}
                    {"\n  "}
                    <span className="code-keyword">color</span>=
                    <span className="code-string">"#cba6f7"</span>
                    {"\n"}/&gt;
                </>
            );
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const wrapper = document.querySelector(".loader-container-wrapper");
            if (wrapper) {
                const { scrollTop, scrollHeight, clientHeight } = wrapper;
                const isScrolledToBottom =
                    scrollTop + clientHeight >= scrollHeight - 10; // 10px threshold
                wrapper.classList.toggle(
                    "scrolled-to-bottom",
                    isScrolledToBottom
                );
            }
        };

        const wrapper = document.querySelector(".loader-container-wrapper");
        if (wrapper) {
            wrapper.addEventListener("scroll", handleScroll);
        }

        return () => {
            if (wrapper) {
                wrapper.removeEventListener("scroll", handleScroll);
            }
        };
    }, []);

    return (
        <div className="App">
            {showFullScreenLoader && (
                <div className="full-screen-loader">
                    <div className="full-screen-loader-content">
                        <div className="loader-wrapper">
                            <FullScreenLoader
                                color="#cba6f7"
                                loaderType={activeLoader}
                                isLoading={true}
                                size={100} // Increase size for better visibility
                            />
                        </div>
                        <button
                            className="close-fullscreen-button"
                            onClick={closeFullScreenLoader}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
            <div className="content">
                <h1>UI Loaders</h1>
                <div className="loader-showcase">
                    <button
                        onClick={toggleFullScreenLoader}
                        className={`toggle-button full-screen-button ${
                            showFullScreenLoader ? "active" : ""
                        }`}
                    >
                        {showFullScreenLoader ? "Close" : "Open"} Full Screen
                        Loader
                    </button>
                    <div className="loader-container-wrapper">
                        <div className="loader-container">
                            {/* Update color for all loaders */}
                            <div className="loader-item">
                                <CircleLoader size={60} color="#cba6f7" />
                                <button
                                    onClick={() => toggleLoader("circle")}
                                    className={`toggle-button ${
                                        activeLoader === "circle"
                                            ? "active"
                                            : ""
                                    }`}
                                >
                                    Circle Loader
                                </button>
                            </div>
                            <div className="loader-item">
                                <PulseLoader size={60} color="#cba6f7" />
                                <button
                                    onClick={() => toggleLoader("pulse")}
                                    className={`toggle-button ${
                                        activeLoader === "pulse" ? "active" : ""
                                    }`}
                                >
                                    Pulse Loader
                                </button>
                            </div>
                            <div className="loader-item">
                                <SpinnerLoader size={60} color="#cba6f7" />
                                <button
                                    onClick={() => toggleLoader("spinner")}
                                    className={`toggle-button ${
                                        activeLoader === "spinner"
                                            ? "active"
                                            : ""
                                    }`}
                                >
                                    Spinner Loader
                                </button>
                            </div>
                            <div className="loader-item">
                                <DotLoader size={60} color="#cba6f7" />
                                <button
                                    onClick={() => toggleLoader("dot")}
                                    className={`toggle-button ${
                                        activeLoader === "dot" ? "active" : ""
                                    }`}
                                >
                                    Dot Loader
                                </button>
                            </div>
                            <div className="loader-item">
                                <RingLoader size={60} color="#cba6f7" />
                                <button
                                    onClick={() => toggleLoader("ring")}
                                    className={`toggle-button ${
                                        activeLoader === "ring" ? "active" : ""
                                    }`}
                                >
                                    Ring Loader
                                </button>
                            </div>
                            <div className="loader-item">
                                <WaveLoader size={60} color="#cba6f7" />
                                <button
                                    onClick={() => toggleLoader("wave")}
                                    className={`toggle-button ${
                                        activeLoader === "wave" ? "active" : ""
                                    }`}
                                >
                                    Wave Loader
                                </button>
                            </div>
                            <div className="loader-item">
                                <BounceLoader size={60} color="#cba6f7" />
                                <button
                                    onClick={() => toggleLoader("bounce")}
                                    className={`toggle-button ${
                                        activeLoader === "bounce"
                                            ? "active"
                                            : ""
                                    }`}
                                >
                                    Bounce Loader
                                </button>
                            </div>
                            <div className="loader-item">
                                <SquareLoader size={60} color="#cba6f7" />
                                <button
                                    onClick={() => toggleLoader("square")}
                                    className={`toggle-button ${
                                        activeLoader === "square"
                                            ? "active"
                                            : ""
                                    }`}
                                >
                                    Square Loader
                                </button>
                            </div>
                            <div className="loader-item">
                                <HeartbeatLoader size={60} color="#cba6f7" />
                                <button
                                    onClick={() => toggleLoader("heartbeat")}
                                    className={`toggle-button ${
                                        activeLoader === "heartbeat"
                                            ? "active"
                                            : ""
                                    }`}
                                >
                                    Heartbeat Loader
                                </button>
                            </div>
                            <div className="loader-item">
                                <GlowLoader size={60} color="#cba6f7" />
                                <button
                                    onClick={() => toggleLoader("glow")}
                                    className={`toggle-button ${
                                        activeLoader === "glow" ? "active" : ""
                                    }`}
                                >
                                    Glow Loader
                                </button>
                            </div>
                            <div className="loader-item">
                                <OrbitLoader size={60} color="#cba6f7" />
                                <button
                                    onClick={() => toggleLoader("orbit")}
                                    className={`toggle-button ${
                                        activeLoader === "orbit" ? "active" : ""
                                    }`}
                                >
                                    Orbit Loader
                                </button>
                            </div>
                        </div>
                        <div className="scroll-indicator">
                            <FaChevronDown />
                        </div>
                    </div>
                </div>
                <div className="code-showcase">
                    <h2>Implementation Guide</h2>
                    <pre>
                        <code>{getLoaderCode(activeLoader)}</code>
                    </pre>
                </div>
            </div>
            <Analytics />
        </div>
    );
}

export default App;
