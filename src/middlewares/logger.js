const logger = (store) => (next) => (action) => {
    console.group(action.type);
    console.log("Action: ", action);
    const returnValue = next(action);
    console.log("State now: ", store.getState());
    console.groupEnd();
    return returnValue;
};

export default logger;