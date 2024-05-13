import { useEffect } from "react";

const useConsole = (logName, logText) => {
    useEffect(() => {
        console.log(`${logName}:`, logText)
    }, [logName, logText])
}

export default useConsole;