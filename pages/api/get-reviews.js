const handler = async (req, res) => {
    try {
        const place_id = JSON.parse(req.body).place_id
        const key = process.env.GOOGLE_API_KEY
        const respose = await fetch(
          `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place_id}&fields=reviews&key=${key}`
        );

        const response = await respose.json();
        return res.status(200).json({data: response})
    } catch (error) {
        console.log('Error: ', error);
        return res.status(400).json({error: error})
    }
    
}

export default handler