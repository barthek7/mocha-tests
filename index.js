const formatDate = (timeInSeconds) => {
    if (timeInSeconds === 0 || !timeInSeconds) {
        return `${0}s`;
    }
    if (timeInSeconds > 3600) {
        let hours = Math.floor((timeInSeconds / 3600));
        let minutes = Math.floor(((timeInSeconds % 3600) / 60));
        let seconds = Math.floor(((timeInSeconds % 3600) % 60));
        if (minutes === 0 && seconds === 0) {
            return `${hours}h`
        }
        if (seconds === 0) {
            return `${hours}h ${minutes}m`;
        }
        if (minutes === 0) {
            return `${hours}h ${seconds}s`;
        }
        return `${hours}h ${minutes}m ${seconds}s`;

    }
    if (timeInSeconds > 60 && timeInSeconds < 3600) {
        let minutes = Math.floor((timeInSeconds / 60));
        let seconds = Math.floor((timeInSeconds % 60));
        if (seconds === 0) {
            return `${minutes}m`;
        }
        return `${minutes}m ${seconds}s`;
    }
    if (timeInSeconds < 60) {
        return `${timeInSeconds}s`;
    }
}

module.exports = formatDate;