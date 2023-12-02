export function formatValue(value: number) {
    let formattedValue = "";
    if (value < 1e3) {
        formattedValue = `${value.toFixed(2).replace(/\.?0+$/, "")}`;
    } else if (value <= 1e6) {
        formattedValue = `${(value / 1e3).toFixed(2).replace(/\.?0+$/, "")}K`;
    } else {
        formattedValue = `${(value / 1e6).toFixed(2).replace(/\.?0+$/, "")}M`;
    }
    return formattedValue;
}
