

export const fetchData = () => {
    return dispatch => {
        fetch('http://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(posts => dispatch({
                type: "GET_DATA",
                payload: posts
            }));
    }

};
export const postData = (data) => {
    console.log("data", data)
    return {
        type: "POST_DATA",
        payload: data

    }

}