import React from "react";
import { getCompanyJobs } from "@/lib/api/jobs";
import RecruiterJob from "@/components/dashboard/RecruiterJob";
import { getLoggedInRecruiterCompany } from '@/lib/api/companies';

const RecruiterJobPage = async () => {
    const companyId = "company_123";
    const jobs = await getCompanyJobs(companyId) || [];

    return (
        <div className="p-6 max-w-7xl mx-auto space-y-4">
            <div className="flex flex-col gap-1">
                <h2 className="text-2xl font-bold tracking-tight">
                    Manage All Jobs
                </h2>
                <p className="text-sm text-default-500">
                    View, update, and manage your current job postings.
                </p>
            </div>
            <RecruiterJob jobs={jobs} />
        </div>
    );
};

export default RecruiterJobPage;
