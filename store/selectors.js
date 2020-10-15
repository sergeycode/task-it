export const FILTERS = {
    ALL: 'ALL',
    ACTIVE: 'ACTIVE',
    COMPLETED: 'COMPLETED',
};

export function filterCompleted(todos) {
    return todos.filter(todo => todo.completed);
}

export function filtertNotCompleted(todos) {
    return todos.filter(todo => !todo.completed);
}

export function filterVisible(todos, filter) {
    switch (filter) {
        case FILTERS.ALL:
            return [...todos];
        case FILTERS.COMPLETED:
            return filterCompleted(todos);
        case FILTERS.ACTIVE:
            return filtertNotCompleted(todos);
        default:
            return [...todos];
    }
}
