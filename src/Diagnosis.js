export const diagnose = (symptoms) => {
    if (symptoms.includes('Насморк') && symptoms.includes('Чихание') && symptoms.includes('Кашель')) {
        return 'Обычная простуда';
    }
}