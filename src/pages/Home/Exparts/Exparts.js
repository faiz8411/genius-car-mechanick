import React from 'react';
import mechanic1 from '../../../images/mechanic/mechanick1.jpg'
import mechanick2 from '../../../images/mechanic/mechanic2.jpg'
import mechanick3 from '../../../images/mechanic/mechanick3.jpg'
import mechanick4 from '../../../images/mechanic/mechanick4.jpg'
import mechanick5 from '../../../images/mechanic/mechanic5.jpg'
import Expart from '../Expart/Expart';


const exparts = [
    {
        name: 'steven smith',
        img: mechanic1,
        expertize: 'engine expert'
    },
    {
        name: 'anderson ole',
        img: mechanick2,
        expertize: 'tire expert'
    },
    {
        name: 'lan pont',
        img: mechanick3,
        expertize: 'motor bike expert'
    },
    {
        name: 'lan pont',
        img: mechanick4,
        expertize: ' bike expert'
    },
    {
        name: 'lan pont',
        img: mechanick5,
        expertize: ' oil change expert'
    },
]
const Exparts = () => {
    return (
        <div className="container">
            <h2 className="text-primary mt-5 mb-3 ">our exparts</h2>

            <div className="row">

                {
                    exparts.map(expart => <Expart
                        key={expart.name}
                        expart={expart}
                    ></Expart>)
                }

            </div>
        </div>
    );
};

export default Exparts;