export default function findStyleSheet(name, styleSheets = document.styleSheets) { 
    for (const styleSheet of styleSheets) {
        const splitStyleSheet = styleSheet.href.split("/");
        if (splitStyleSheet[splitStyleSheet.length - 1] === name) return styleSheet
    }
    return undefined;
}

export function findRule(styleSheet, nameRule) {
    for (const rule of styleSheet.rules) {
        if (rule.selectorText === nameRule) return rule
    }
    return undefined;
}