import React, { useEffect } from "react";
import { Button } from "antd";
import L from 'leaflet'
import '@mapSDK/static/libs/cdn/zondyclient/webclient-leaflet-plugin.js'
function Home() {
    useEffect(() => {
        // 创建一个新的 script 元素
        const script = document.createElement("script");
        script.src = "D://Dowloads//mapSDK//static//libs//include-leaflet-local.js"; // 替换为实际的脚本路径
        script.type = "text/javascript";
        script.async = true;

        // 在脚本加载完成后，执行地图初始化
        script.onload = () => {
            initMap();
        };

        // 将 script 元素添加到 DOM 中
        document.head.appendChild(script);

        // 组件卸载时执行清理操作
        return () => {
            document.head.removeChild(script);
        };
    }, []); // 仅在组件挂载时执行

    function initMap() {
        let map;
        map = L.map("Map", {
            zoomControl: true,
            crs: window.L.CRS.EPSG4326,
            center: [(29.0125822276524 + 33.2932017737021) / 2, (108.34341 + 116.150939561213) / 2],
            maxZoom: 10,
        });
        let layer =
        // 在这里可以继续添加其他地图初始化操作，例如添加图层、标记等
    }

    return (
        <div id="Map" className="Map" style={{ width: "100%", height: "100vh", background: "transparent" }}>
            <Button onClick={initMap}>Initialize Map</Button>
        </div>
    );
}

export default Home;
