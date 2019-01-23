export function formatTime(ms){
    const secs = ms / 1000;
    const oneMinute = 60;
    const oneHour = 60 * oneMinute;

    const hours = Math.floor(secs / oneHour);
    const minutes = Math.floor((secs - (oneHour * hours)) / oneMinute);
    const seconds = Math.floor(secs % oneMinute);

    return `${hours ? `${hours}` : '0'}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}
