import React from 'react';
import { getJobById } from '@/lib/api/jobs';

import JobDetails from '@/components/jobs/JobDetails'

const JobDetailsPage = async ({ params }) => {
    const { id } = await params;
    const job = await getJobById(id);

    // Guard clause in case API fails or returns null
    if (!job) {
        return (
            <div className="w-full min-h-screen bg-zinc-950 flex flex-col justify-center items-center text-white p-6">
                <p className="text-zinc-400 text-lg">Job position could not be found or is no longer active.</p>
            </div>
        );
    }

    

    return (
        <JobDetails job={job} id={id}/>
          );
};

export default JobDetailsPage;