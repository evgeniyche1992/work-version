import React from "react";
import settings from "./Settings.module.css";

const Settings = () => {
    return (
        <div>
            <div className={settings.mainSettings}>Settings</div>
            <div className={settings.all}>
                <div><div className={settings.privacy}>Privacy and Security</div></div>
                <div><div className={settings.storage}>Data and Storage</div></div>
                <div><div className={settings.chat}>Chat settings</div></div>
                <div><div className={settings.devices}>Devices</div></div>
            </div>
        </div>
    )
}
export default Settings;