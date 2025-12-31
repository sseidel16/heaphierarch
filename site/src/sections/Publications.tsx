import React from 'react';

export default function Publications() {
    return (
        <div className="space-y-6 text-gray-300">
            <div>
                <h3 className="text-xl font-semibold text-gray-100">Research Papers</h3>
                <p className="text-gray-400">Primary Author • Arizona State University</p>
                <p className="mt-2">
                    Published 3 peer-reviewed papers on network optimization and combinatorial algorithms during 
                    undergraduate and graduate studies. Research focused on locating arrays with applications to 
                    software testing and network systems validation.
                </p>
            </div>
            <div>
                <h3 className="text-xl font-semibold text-gray-100">Master's Thesis</h3>
                <p className="text-gray-400">December 2018</p>
                <p className="mt-2">
                    <span className="font-semibold text-gray-100">Title:</span> "Locating Arrays: Construction, Analysis and Robustness"
                </p>
                <p className="mt-2">
                    Conducted comprehensive research on algorithmic optimization and testing methodologies. 
                    Performed hardware experiments validating novel approaches to network system testing and analysis.
                </p>
            </div>
        </div>
    );
}
