import React from 'react';

const Card = ({ name, email, id }) => {
    // const { name, email, id } = props;
    return (
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src={`https://robohash.org/${id}?set=set3`} alt='robots'/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
        // <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
        //     <div className='overflow-auto'>
        //         <table className='f6 w-100 mw8 center' cellSpacing='0'>
        //             <thead>
        //                 <tr>
        //                     <th className='fw6 bb b--black-20 tl pb3 pr3'>
        //                         Photo
        //                     </th>
        //                     <th className='fw6 bb b--black-20 tl pb3 pr3'>
        //                         Name
        //                     </th>
        //                     <th className='fw6 bb b--black-20 tl pb3 pr3'>
        //                         Email
        //                     </th>
        //                 </tr>
        //             </thead>
        //             <tbody className='lh-copy'>
        //                 <tr>
        //                     <td className='pv3 pr3 bb b--black-20' key={id}><img src={`https://robohash.org/${id}`} alt='robots'/></td>
        //                     <td className='pv3 pr3 bb b--black-20' key={name}>{name}</td>
        //                     <td className='pv3 pr3 bb b--black-20' key={email}>{email}</td>
        //                 </tr>
        //             </tbody>
        //         </table>
        //     </div>
        // </div>
    );
}


//this will be exported to Cardlist Component
export default Card;