import React from 'react'
import Diamond from '../../layout/Diamond';
import { counterAre, counterBody } from './CounterData';


export default function Homecounter() {
  return (
    <>      
      <div className="three-section home_counter pd-30">
            <div className="container">
                <div className="heading text-center mb-4">
                    <h2 className='ttl' dangerouslySetInnerHTML={{__html:counterBody.title}}></h2>
                    <p dangerouslySetInnerHTML={{__html:counterBody.text}}></p>
                    <Diamond />
                </div>
                <div className="row">
                    {counterAre.map((counterwe) => {
                        return (
                            <>
                                <div className="col-lg-3 col-md-6 col-sm-6 d-flex">
                                    <div className="learn-box text-center">
                                        <div className="img-box">
                                            <img src={counterwe.image} width="70" height="70" className='img-fluid'/>
                                        </div>
                                        <div className="detail-box box_data">
                                            <h2>{counterwe.count}</h2>
                                            <p>{counterwe.text}</p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        );
                    })}
                </div>
            </div>
        </div> 
    </>
  )
}
