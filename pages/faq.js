import React, { useState, useEffect } from 'react';
import Layout from '../containers/layout';
const fetch = require('node-fetch').default;

const Faq = ({ records }) => {
    const { records: faqs } = records;

    return (
        <Layout title="FAQS">
            <h1 className="dawn-new-day text-center">FAQs</h1>

            {faqs &&
                faqs.length > 0 &&
                faqs.map(q => {
                    return (
                        <div className="card m-2" key={q.fields.QuestionNumber}>
                            <div className="card-header font-cinzel">
                                {q.fields.Question}
                            </div>
                            <div className="card-body">
                                <p className="card-text font-cinzel">
                                    {q.fields.Answer}
                                </p>
                            </div>
                        </div>
                    );
                })}
            {(!faqs || faqs.length == 0) && (
                <p className="font-cinzel text-center">Please contact me if you have questions</p>
            )}
        </Layout>
    );
};

Faq.getInitialProps = async ({ req }) => {
    const baseUrl =
        process.env.NODE_ENV === 'development'
            ? 'http://localhost:3000'
            : 'https://normaavalosphotography.netlify.com';

    const res = await fetch(baseUrl + '/.netlify/functions/faq');
    const json = await res.json();

    return { records: json };
};

export default Faq;
