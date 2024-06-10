export default function retrieveSavedSuggestion() {
    const saved = localStorage.getItem("suggestion");
    if (!saved) return [];
    return JSON.parse(saved)
}

export function saveSuggestion(arraySuggestion) {
    const json = JSON.stringify(arraySuggestion);
    localStorage.setItem("suggestion", json);
}