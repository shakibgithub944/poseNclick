import { useEffect } from "react"

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title} Pose-N-Click`;
    }, [title])
}

export default useTitle;