import format from 'date-fns/format';

export const dateFormat = 'dd/MM/yyyy';

export const formatDate = (date: string | undefined, dFormat = dateFormat) => {
    return date && format(new Date(date || ''), dFormat);
}