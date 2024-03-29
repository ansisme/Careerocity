import React from 'react';

function Predict(props) {
  const { jobs } = props;

  return (
    <div>
      <h2 className="text-gradient text-center text-4xl font-bold mb-10">
        Your Recommended Job
      </h2>

      <div className="bg-white rounded-md shadow-md p-6 m-6">
        <h4 className="text-2xl font-bold mb-4">
          {jobs.map((job, index) => (
            <div key={index}>
              <span>{job}</span>
              <br />
            </div>
          ))}
        </h4>
      </div>

      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-6"
        onClick={() => window.location.reload()}
      >
        Go AGAIN
      </button>
    </div>
  );
}

export default Predict;