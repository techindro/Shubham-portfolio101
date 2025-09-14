import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/profile')
      .then(res => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  if (!data) return <div className="text-center py-10">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="p-6 text-center border-b border-gray-700">
        <h1 className="text-4xl font-bold">{data.name}</h1>
        <p className="text-xl">{data.headline}</p>
        {data.photo && <img src={data.photo} alt="Profile" className="rounded-full h-32 w-32 mx-auto mt-4" />}
        {data.logo && <img src={data.logo} alt="Logo" className="h-16 mx-auto mt-2" />}
      </header>
      <main className="max-w-4xl mx-auto p-6">
        <section className="mb-10">
          <h2 className="text-3xl font-bold mb-4 border-b-2 border-blue-500 pb-2">About</h2>
          <p>{data.about}</p>
        </section>
        <section className="mb-10">
          <h2 className="text-3xl font-bold mb-4 border-b-2 border-blue-500 pb-2">Experience</h2>
          {data.experience.map((exp, i) => (
            <div key={i} className="mb-6">
              <h3 className="text-2xl font-semibold">{exp.title} at {exp.company}</h3>
              <p className="text-gray-400">{exp.dates}</p>
              <p>{exp.description}</p>
            </div>
          ))}
        </section>
        <section className="mb-10">
          <h2 className="text-3xl font-bold mb-4 border-b-2 border-blue-500 pb-2">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {data.skills.map((skill, i) => (
              <span key={i} className="bg-blue-700 px-4 py-2 rounded-full">{skill}</span>
            ))}
          </div>
        </section>
        <section className="mb-10">
          <h2 className="text-3xl font-bold mb-4 border-b-2 border-blue-500 pb-2">Certificates</h2>
          {data.certificates.map((cert, i) => (
            <div key={i} className="mb-4">
              <h3 className="text-xl font-semibold">{cert.name}</h3>
              <p className="text-gray-400">Issuer: {cert.issuer} | Date: {cert.date}</p>
            </div>
          ))}
        </section>
        <section>
          <h2 className="text-3xl font-bold mb-4 border-b-2 border-blue-500 pb-2">Education</h2>
          {data.education.map((edu, i) => (
            <div key={i}>
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <p className="text-gray-400">{edu.institution} | {edu.dates}</p>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;
