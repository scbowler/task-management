export function formatTime(ms){
    const secs = ms / 1000;
    const oneMinute = 60;
    const oneHour = 60 * oneMinute;

    const hours = Math.floor(secs / oneHour);
    const minutes = Math.floor((secs - (oneHour * hours)) / oneMinute);
    const seconds = Math.floor(secs % oneMinute);

    return `${hours ? `${hours}` : '0'}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}

const addLinks = text => text && text.replace(/(https?:\/\/[a-z0-9.\/\-_]*)/gi, url => `<a onclick="event.stopPropagation()" href="${url}" target="_blank">${url}</a>`);
const removeScripts = text => text && text.replace(/(<script>[\s\S]*<\/script>)/gi, () => '');

export function enhanceText(text, options = {}){
    const modifiers = {
        addLinks,
        removeScripts,
        ...options
    }

    let enhancedText = text;

    for(let [, action] of Object.entries(modifiers)){
        if(typeof action === 'function'){
            enhancedText = action(enhancedText);
        }
    }

    return enhancedText;
}
