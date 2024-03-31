export const diagnose = (symptoms, duration) => {
    console.log(symptoms, duration)
    if (symptoms.includes('Чувствую себя хорошо')) {
        if (duration === 'Примерно день') {
            return 'Легкая простуда';
        } else if (duration === 'Около недели') {
            return 'Грипп';
        } else if (duration === 'Больше недели') {
            return 'Гастроэнтерит';
        } else if (duration === 'Около месяца') {
            return 'Аллергия';
        } else if (duration === 'Больше месяца') {
            return 'Хронический стресс';
        } else {
            return 'Неизвестный диагноз';
        }
    } else if (symptoms.includes('Чувствую себя плохо')) {
        if (symptoms.includes('Насморк') || symptoms.includes('Кашель') || symptoms.includes('Лихорадка')) {
            if (duration === 'Примерно день') {
                return 'Легкая простуда';
            } else if (duration === 'Около недели') {
                return 'Простуда';
            } else if (duration === 'Больше недели') {
                return 'Бронхит';
            } else if (duration === 'Около месяца') {
                return 'Грипп';
            } else if (duration === 'Больше месяца') {
                return 'Пневмония';
            } else {
                return 'Неизвестный диагноз';
            }
        } else if (symptoms.includes('Лихорадка') || symptoms.includes('Тошнота') || symptoms.includes('Повышенная температура')) {
            if (duration === 'Примерно день') {
                return 'Легкий грипп';
            } else if (duration === 'Около недели') {
                return 'Грипп';
            } else if (duration === 'Больше недели') {
                return 'Вирусное заболевание';
            } else if (duration === 'Около месяца') {
                return 'Средний грипп';
            } else if (duration === 'Больше месяца') {
                return 'Пневмония';
            } else {
                return 'Неизвестный диагноз';
            }
        } else if (symptoms.includes('Зуд в глазах') || symptoms.includes('Заложенность носа')) {
            if (duration === 'Примерно день') {
                return 'Аллергия';
            } else if (duration === 'Около недели') {
                return 'Аллергический ринит';
            } else if (duration === 'Больше недели') {
                return 'Хронический насморк';
            } else if (duration === 'Около месяца') {
                return 'Аллергическая реакция';
            } else if (duration === 'Больше месяца') {
                return 'Поллиноз';
            } else {
                return 'Неизвестный диагноз';
            }
        } else {
            return 'Неизвестный диагноз';
        }
    } else if (symptoms.includes('Ужасное состояние')) {
        if (symptoms.includes('Болит голова') || symptoms.includes('Боли в теле') || symptoms.includes('Кашель') || symptoms.includes('Насморк')) {
            if (duration === 'Примерно день') {
                return 'Мигрень';
            } else if (duration === 'Около недели') {
                return 'Грипп';
            } else if (duration === 'Больше недели') {
                return 'Менингит';
            } else if (duration === 'Около месяца') {
                return 'Грипп';
            } else if (duration === 'Больше месяца') {
                return 'Хроническая мигрень';
            } else {
                return 'Неизвестный диагноз';
            }
        } else if (symptoms.includes('Стресс') || symptoms.includes('Усталость')) {
            if (duration === 'Примерно день') {
                return 'Обычный стресс';
            } else if (duration === 'Около недели') {
                return 'Сильный стресс';
            } else if (duration === 'Больше недели') {
                return 'Депрессия';
            } else if (duration === 'Около месяца') {
                return 'Хронический стресс';
            } else if (duration === 'Больше месяца') {
                return 'Биполярное расстройство';
            }
        } else {
            return 'Неизвестный диагноз';
        }
    } else {
        return 'Неизвестный диагноз';
    }
}
