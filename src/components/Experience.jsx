import React from 'react';

const Experience = () => {

    const experienceData = [
        {
            title: "Frontend Developer Intern",
            company: "Auxentios Technologies",
            description: [
                "Developed responsive user interfaces using React.js, enhancing cross-device compatibility.",
                "Utilized Bootstrap 4 for layout design.",
                "Integrated Lucide icons to improve UI clarity and user experience.",
                "Collaborated with senior developers to debug and optimize React components.",
                "Followed clean code practices and participated in regular code reviews."
              ],
            duration: "1st Feb 2025 - Present",
        },
        {
            title: "GO AI Associate",
            company: "Amazon",
            description: [
                "Sharpened attention to detail, data analysis, and quality verification.",
                "Enhanced time management and teamwork skills.",
                "Maintained high accuracy standards and process efficiency.",
                "Developed critical thinking and problem-solving abilities.",
                "Adapted to fast-paced, high-volume workflows."
            ],
            duration: "25th Oct 2023 - 16th Mar 2024",
        },
    ];

    return (
        <div
            id="experience-section"
            className="d-flex flex-column justify-content-center align-items-center min-vh-100 bg-primary text-white p-4"
        >
            <h1 className="mb-4">Experience</h1>
            <div className="row justify-content-center w-100">
                {experienceData.map((exp, index) => (
                    <div
                        key={index}
                        className="col-md-5 col-sm-10 m-3 d-flex align-items-stretch"
                    >
                        <div className="card card-bg text-white shadow w-100">
                            <div className="card-body d-flex flex-column">
                                <h4 className="card-title">{exp.title}</h4>
                                <h6 className="card-subtitle mb-2 text-right text-info">{exp.company}</h6>
                                <ul className="card-text ml-4">
                                    {exp.description.map((point, idx) => (
                                        <li key={idx}>{point}</li>
                                    ))}
                                </ul>
                                <h5 className="mt-auto mb-0 text-right">
                                    <small className="text-muted">{exp.duration}</small>
                                </h5>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
