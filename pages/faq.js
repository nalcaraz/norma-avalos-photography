import React, { useState, useEffect } from 'react';
import Layout from '../containers/layout';
import {server} from "../config"

const fetch = require('node-fetch').default;
const Faq = ({ records }) => {
    const { records: faqs } = records;

    return (
        <Layout title="FAQS">
            <h1 className="primary-font text-center">FAQs</h1>

            {faqs &&
                faqs.length > 0 &&
                faqs.map(q => {
                    return (
                        <div className="card m-2" key={q.fields.QuestionNumber}>
                            <div className="card-header primary-font">
                                {q.fields.Question}
                            </div>
                            <div className="card-body">
                                <p className="card-text primary-font">
                                    {q.fields.Answer}
                                </p>
                            </div>
                        </div>
                    );
                })}
            {(!faqs || faqs.length == 0) && (
                <p className="primary-font text-center">Please contact me if you have questions</p>
            )}
        </Layout>
    );
};

Faq.getInitialProps = async ({ req }) => {
   
    const res = await fetch(server + '/.netlify/functions/faq');
    const json = await res.json();

    return { records: json };
};

export default Faq;
