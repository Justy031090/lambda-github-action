exports.handler = async (event) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hi, this comes from github push'),
    };
    return response;
};
