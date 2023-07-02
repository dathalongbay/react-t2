import { useState } from 'react';

function Mytabs() {
    const [tabIndex, setTabIndex] = useState(0);

    const handleTab = (paramTabIndex) => {

        // thay đổi state tabIndex
        setTabIndex(paramTabIndex);
    }

    return (
        <>
            <div className="tab">
                <button className="tablinks" onClick={() => handleTab(0)}>London</button>
                <button className="tablinks" onClick={() => handleTab(1)}>Paris</button>
                <button className="tablinks" onClick={() => handleTab(2)}>Tokyo</button>
                <button className="tablinks" onClick={() => handleTab(3)}>Hanoi</button>
            </div>
            <div className="tab-content">
                {tabIndex == 0 && <div>
                    <h3>London city</h3>
                    <p>London is the capital city of England.</p>
                </div>}

                {tabIndex == 1 && <div>
                    <h3>Paris city</h3>
                    <p>Paris is the capital city of France.</p>
                </div>}

                {tabIndex == 2 && <div>
                    <h3>Tokyo city</h3>
                    <p>Tokyo is the capital city of Japan.</p>
                </div>}

                {tabIndex == 3 && <div>
                    <h3>Hanoi city</h3>
                    <p>Hanoi is the capital city of VN.</p>
                </div>}
            </div>

        </>
    );

}

export default Mytabs;