


const Cities = () => {

    let cities = ["hà nội", "hải phòng", "đà nẵng", "cần thơ", "hồ chí minh"];


    return (
        <>
            <ul>
                {cities.map( (city,idx) => <li key={idx}>{idx}.{city}</li>)}
            </ul>
        </>
    );


}

export default Cities;