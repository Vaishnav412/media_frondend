import axios from "axios";

// define commonRequest function

export const commonRequest = async (method, url, body) => {

    // api request configuration

    let reqConfig = {
        method,
        url,
        data: body,
        Headers: {
            "content-type": "application/json"
        }
    }

    // api calling using axios


    return await axios(reqConfig).then((Response) => {


        return Response
    }).catch((err) => {

        return err
    })

}