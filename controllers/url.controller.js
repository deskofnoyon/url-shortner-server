const { generateShortUrl, getURLService } = require("../services/url.service")

exports.createShortURl = async (req, res) => {
    try {
        const { longURL } = req.body;
        const result = await generateShortUrl(longURL);
        res.status(200).json(result)
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: "fail",
            error,
        });
    }
}


exports.getUrl = async (req, res) => {
    try {
        const { urlShortId } = req.params;
        const result = await getURLService(urlShortId)
        if (!result) {
            res.status(404).json({
                status: false,
                message: "URL not found!"
            })
        }
        res.status(200).json(result)
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: "fail",
            error,
        });

    }
}