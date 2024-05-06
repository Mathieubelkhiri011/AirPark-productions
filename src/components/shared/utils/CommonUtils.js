import {DayOfWeekEnums} from '@/components/shared/enums/DayOfWeekEnums'
export function getCurrentyDay() {
    const dateActuelle = new Date();
    const numeroJour = dateActuelle.getDay();

    // Tableau des jours de la semaine
    const joursSemaine = [
        DayOfWeekEnums.Sunday,
        DayOfWeekEnums.Monday,
        DayOfWeekEnums.Tuesday,
        DayOfWeekEnums.Wednesday,
        DayOfWeekEnums.Thursday,
        DayOfWeekEnums.Friday,
        DayOfWeekEnums.Saturday,
    ];

    return joursSemaine[numeroJour];
}
