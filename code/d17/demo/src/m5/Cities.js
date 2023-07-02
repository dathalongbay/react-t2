


const Cities = () => {

    let cities = ["hà nội", "hải phòng", "đà nẵng", "cần thơ", "hồ chí minh"];


    return (
        <>
            <ul>
                {cities.map(city => <li>{city}</li>)}
            </ul>
        </>
    );


}

export default Cities;