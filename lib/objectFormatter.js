const objectFormatter = (data) => {
    const newArray = []
    Object.keys(data).forEach(function(key) {
        let obj = {
            url: data[key].url,
            width: data[key].width,
            height: data[key].height,
            alt: data[key].alt
        }

        newArray.push(obj)
    })
    return newArray

}

export default objectFormatter