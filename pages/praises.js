import React from 'react';
import Layout from '../containers/layout';
import { server } from '../config';
const fetch = require('node-fetch').default;

const Praises = ({ records }) => {
    const { records: praises } = records;
    return (
        <Layout title="Praises">
            <h1 className="dawn-new-day text-center">Praises</h1>
            {praises &&
                praises.length > 0 &&
                praises.map((q, i) => {
                    return (
                        <div className="card m-2" key={i}>
                            <div className="card-body">
                                <h5 className="font-cinzel">
                                    {q.fields.Praise}
                                </h5>
                                <small className="card-text font-cinzel ">
                                    -<i>{q.fields.PraiserName} {q.fields.DateOfPraise && `, ${q.fields.DateOfPraise}`}</i>
                                </small>
                            </div>
                        </div>
                    );
                })}
            {(!praises || praises.length == 0) && (
                <p className="font-cinzel text-center">Please contact me if you would like to leave a review</p>
            )}
        </Layout>
    );
};

Praises.getInitialProps = async ({ req }) => {
  
    const res = await fetch(server + '/.netlify/functions/praises');
    const json = await res.json();

    return { records: json };
};
export default Praises;
