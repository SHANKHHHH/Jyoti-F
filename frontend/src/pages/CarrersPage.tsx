import React from "react";

interface Job {
    title: string;
    responsibilities: string[];
    qualifications: string[];
    experience: string;
    salary: string;
    location: string;
    company: string;
    address: string;
    contact1: string[];
    contact2: string[];
}

const jobs: Job[] = [
    {
        title: "Driver",
        responsibilities: [
            "Driving the company’s vehicle safely",
            "Managing deliveries and pickups in Bengaluru",
            "Maintaining vehicle cleanliness and upkeep"
        ],
        qualifications: [
            "Valid driver's licence with minimum of 2 years of experience"
        ],
        experience: "2+ Years",
        salary: "Rs 20,000 to Rs 25,000 pm + Overtime",
        location: "Bengaluru",
        company: "Jyoti Enterprises",
        address: "46/2, Kaveri Layout, 1st Cross near Tirumala Dhaba, Yelahanka Hobli, Bengaluru - 560097",
        contact1: ["+91-7022253301"],
        contact2: ["+91-9900022300"]
    },
    {
        title: "AC Technician",
        responsibilities: [
            "Installation, servicing & repairs of air conditioning system",
            "Preventive maintenance at client location across Bengaluru",
            "Troubleshooting electrical/mechanical issues and gas charge"
        ],
        qualifications: [
            "ITI/Diploma in refrigeration & air conditioning",
            "Must own basic tools (preferred)",
            "Field mobility within the city required"
        ],
        experience: "1+ Years (Split/Ductable/Vrv)",
        salary: "Rs 20,000 to Rs 30,000 pm + Travel allowance, bonus & overtime",
        location: "Bengaluru",
        company: "Jyoti Enterprises",
        address: "46/2, Kaveri Layout, 1st Cross near Tirumala Dhaba, Yelahanka Hobli, Bengaluru - 560097",
        contact1: ["+91-7022253301"],
        contact2: ["+91-9900022300"]
    }
];

const JobCard: React.FC<{ job: Job }> = ({ job }) => (
    <div style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "22px",
        margin: "18px 0",
        background: "#fafafa",
        boxShadow: "0 1px 4px #eee",
        position: "relative"
    }}>
        <h2 style={{ color: "#c12a2a" }}>{job.title}</h2>
        <h3>Responsibilities</h3>
        <ul>
            {job.responsibilities.map((r, i) => <li key={i}>{r}</li>)}
        </ul>
        <h3>Qualifications</h3>
        <ul>
            {job.qualifications.map((q, i) => <li key={i}>{q}</li>)}
        </ul>
        <p><strong>Experience:</strong> {job.experience}</p>
        <p><strong>Salary:</strong> {job.salary}</p>
        <p><strong>Location:</strong> {job.location}</p>
        <p><strong>Company:</strong> {job.company}</p>
        <p><strong>Address:</strong> {job.address}</p>
        <p><strong>Contact:</strong> {job.contact1.join(", ")}</p>
        <div style={{
            marginTop: "16px",
            display: "flex",
            justifyContent: "flex-end"
        }}>
            <button
                style={{
                    background: "#007bff",
                    color: "#fff",
                    padding: "10px 24px",
                    borderRadius: "5px",
                    border: "none",
                    fontWeight: "bold",
                    cursor: "pointer"
                }}
                onClick={() => window.location.href = `tel:${job.contact1}`}
            >
                Apply Now
            </button>
        </div>
    </div>
);

const CarrersPage: React.FC = () => (
    <div style={{ maxWidth: "700px", margin: "0 auto", padding: "32px 16px" }}>
        <h1 style={{ textAlign: "center", marginBottom: "30px" }}>Job Openings at Jyoti Enterprises</h1>
        {jobs.map((job, idx) => (
            <JobCard job={job} key={idx} />
        ))}
    </div>
);

export default CarrersPage;
