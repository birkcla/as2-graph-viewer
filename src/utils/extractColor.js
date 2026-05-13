import { mapColor } from "./mapColor.js";

export async function extractColor(file) {
    const text = await file.text();
    //console.log("text: ", text)
    const match = text.match(/^`?category:\s*(.+?)`?$/mi);
    const category = match ? match[1].trim() : null;
    return mapColor(category) ?? "#444444";
}