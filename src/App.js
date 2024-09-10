/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from "react";
import "./App.css";
import {
    CircleLoader,
    PulseLoader,
    SpinnerLoader,
    DotLoader,
    RingLoader,
    WaveLoader,
    BounceLoader,
    SquareLoader,
    HeartbeatLoader,
    GlowLoader,
    OrbitLoader,
} from "./loaders";
import { Analytics } from "@vercel/analytics/react";

function App() {
    const [activeLoader, setActiveLoader] = useState("circle");
    const [copied, setCopied] = useState(false);

    const toggleLoader = (loaderType) => {
        setActiveLoader(loaderType);
    };

    const getFormattedCode = (type) => {
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
        };
        const loaderName = loaderMap[type];

        return (
            <>
                <span className="code-keyword">import</span> {"{ "}
                <span className="code-function">{loaderName}</span> {"} "}
                <span className="code-keyword">from</span>{" "}
                <span className="code-string">'react-loaders-ui'</span>;
                {"\n\n"}
                <span className="code-keyword">const</span>{" "}
                <span className="code-function">MyComponent</span> = () =&gt; (
                {"\n  "}
                <span className="code-tag">&lt;{loaderName}</span>{" "}
                {"\n    "}
                <span className="code-attribute">size</span>={"{60}"}{" "}
                {"\n    "}
                <span className="code-attribute">color</span>=
                <span className="code-string">"#cba6f7"</span>{" "}
                {"\n  "}
                <span className="code-tag">/&gt;</span>
                {"\n"});
            </>
        );
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(getFormattedCode(activeLoader));
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const loaderComponents = {
        circle: CircleLoader,
        pulse: PulseLoader,
        spinner: SpinnerLoader,
        dot: DotLoader,
        ring: RingLoader,
        wave: WaveLoader,
        bounce: BounceLoader,
        square: SquareLoader,
        heartbeat: HeartbeatLoader,
        glow: GlowLoader,
        orbit: OrbitLoader,
    };

    return (
        <div className="App">
            <div className="content">
                <header className="app-header">
                    <h1>React Loaders UI</h1>
                    <p>A collection of beautiful and customizable loading animations</p>
                </header>
                <div className="loader-showcase">
                    <div className="loader-container">
                        {Object.entries(loaderComponents).map(([loaderType, LoaderComponent]) => (
                            <div 
                                key={loaderType} 
                                className={`loader-item ${activeLoader === loaderType ? 'active' : ''}`}
                                onClick={() => toggleLoader(loaderType)}
                            >
                                <LoaderComponent size={60} color="#cba6f7" />
                                <div className="toggle-button">
                                    {loaderType.charAt(0).toUpperCase() + loaderType.slice(1)}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="code-showcase">
                    <h2>Implementation Guide</h2>
                    <div className="code-container">
                        <pre>
                            <code>{getFormattedCode(activeLoader)}</code>
                        </pre>
                        <button className="copy-button" onClick={copyToClipboard}>
                            {copied ? "Copied!" : "Copy"}
                        </button>
                    </div>
                </div>
            </div>
            <Analytics />
        </div>
    );
}

export default App;
