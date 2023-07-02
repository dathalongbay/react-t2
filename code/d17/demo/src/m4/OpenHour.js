import {useState} from 'react';


const OpenHour = () => {

    const [hour, setHour] = useState(8);

    return (
        <>
        { hour >= 8 ? 'giờ làm việc' : 'giờ nghỉ ngơi' }
        </>
    );

}

export default OpenHour;