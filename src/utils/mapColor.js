export function mapColor(type) {
    const colors = {
        term: "#ffaa00",
        concept:  "#ff4444",
        calculation:   "#aaaaaa",
        theory: "#00ff00",
        default: "#aaaaaa",
    };
    return colors[type] || colors.default;
}