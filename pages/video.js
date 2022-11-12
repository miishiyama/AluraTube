import React from "react";
import { ColorModeContext } from "../src/components/Menu/components/ColorMode";

export default function video() {
    const contexto = React.useContext(ColorModeContext);
    return (
        <div>
            Vídeo!
            {contexto.mode}
            <button onClick={() => contexto.toggleMode()}>Trocar modo</button>
        </div>
    );
};