const serviceVariable = require("../services/Service")

exports.gettingResponseFromOpenAPI = async(req, resp) =>{
    try{
        const response = await serviceVariable.gettingResponseFromOpenAPI(req);
        resp.json({
            data: response,
            status: "Posts are generated"
        })
    }
    catch(err) {
        resp.status(500).json({
            error: err.message
        })
    }
}