
export const fetchAPI = function(date) {
    let result = [];

    for(let i = 17; i <= 23; i++) {
        let random = Math.random();
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        else {
            result.push(i + ':30');
        }
    }
    return result;
};
export const submitAPI = function(formData) {
    return true;
};