import React, { useState, useEffect } from 'react';
import Layout from '../containers/layout';
//const fetch = require('node-fetch').default;

const Faq = () => {
    const [faqs, setFaqs] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`/.netlify/functions/faq`)
            .then(function(response) {
                if (!response.ok) return Promise.reject(response);
                return response.json();
            })
            .then(resp => {
                setFaqs(resp.records);
                setIsLoading(false);
            })
            .catch(function(error) {
                setIsLoading(false);

                console.log(' error: ', error);
            });
    }, []);

    return (
        <Layout title="FAQS">
            <h1 className="dawn-new-day text-center">FAQs</h1>
            <div id="faqs">
                {!isLoading &&
                    faqs &&
                    faqs.length > 0 &&
                    faqs.map(q => {
                        return (
                            <div className="card" key={q.fields.QuestionNumber}>
                                <div className="card-header">
                                    {q.fields.Question}
                                </div>
                                <div className="card-body">
                                    <p className="card-text">
                                        {q.fields.Answer}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                {!isLoading && (!faqs || faqs.length == 0) && (
                    <p>Please contact me if you have questions</p>
                )}
                {isLoading && (
                    <div className="progress">
                        <div
                            className="progress-bar bg-success progress-bar-striped progress-bar-animated"
                            role="progressbar"
                            aria-valuenow="75"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: '75%' }}
                        ></div>
                    </div>
                )}
            </div>
        </Layout>
    );
};

// Faq.getInitialProps = async ({ req }) => {
//     const baseUrl =
//         process.env.NODE_ENV === 'development'
//             ? 'http://localhost:3000'
//             : 'https://normaavalosphotography.netlify.com';

//     const res = await fetch(baseUrl + '/.netlify/functions/faq');
//     const json = await res.json();

//     return { records: json };
// };

export default Faq;
