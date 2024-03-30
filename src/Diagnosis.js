export const diagnose = (symptoms) => {
    if (symptoms.includes('Насморк') && symptoms.includes('Чихание') && symptoms.includes('Кашель') && symptoms.includes('Болит голова')) {
        return 'Обычная простуда';
    } else if (symptoms.includes('Лихорадка') && symptoms.includes('Боли в теле') && symptoms.includes('Усталость')) {
        return 'Грипп';
    } else if (symptoms.includes('Зуд в глазах') && symptoms.includes('Чихание') && symptoms.includes('Заложенность носа') && symptoms.includes('Боли в теле')) {
        return 'Аллергия';
    } else {
        return 'Неизвестный';
    }
};