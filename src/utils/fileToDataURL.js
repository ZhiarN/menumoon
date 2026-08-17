export function fileToDataURL(file) {
    return new Promise((resolve, reject) => {
        if (!file) return;
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file)
    });
}