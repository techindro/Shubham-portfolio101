import React, { useEffect, useState } from 'react';
import './App.css';
import ProfileSection from './components/ProfileSection';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/profile') // Change to deployed backend URL later
      .then(res => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  if (!data) return <div className="text-center py-10">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="p-6 flex flex-col items-center border-b border-gray-700">
        <img src={data.logo} alt="Techindro Logo" className="h-20 mb-4" />
        <img src={data.photo} alt="Profile Photo" className="rounded-full h-32 w-32 mb-4 shadow-lg" />
        <h1 className="text-4xl font-bold">{data.name}</h1>
        <p className="text-xl">{data.headline}</p>
      </header>
      <main className="max-w-4xl mx-auto p-6">
        <ProfileSection title="About" content={<p>{data.about}</p>} />
        <ProfileSection title="Experience">
          {data.experience.map((exp, i) => (
            <div key={i} className="mb-6">
              <h3 className="text-2xl font-semibold">{exp.title} at {exp.company}</h3>
              <p className="text-gray-400">{exp.dates}</p>
              <p>{exp.description}</p>
            </div>
          ))}
        </ProfileSection>
        <ProfileSection title="Skills">
          <div className="flex flex-wrap gap-3">
            {data.skills.map((skill, i) => (
              <span key={i} className="bg-blue-700 px-4 py-2 rounded-full">{skill}</span>
            ))}
          </div>
        </ProfileSection>
        <ProfileSection title="Certificates">
          {data.certificates.map((cert, i) => (
            <div key={i} className="mb-4">
              <h3 className="text-xl font-semibold">{cert.name}</h3>
              <p className="text-gray-400">Issuer: {cert.issuer} | Date: {cert.date}</p>
            </div>
          ))}
        </ProfileSection>
        <ProfileSection title="Education">
          {data.education.map((edu, i) => (
            <div key={i}>
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <p className="text-gray-400">{edu.institution} | {edu.dates}</p>
            </div>
          ))}
        </ProfileSection>
      </main>
    </div>
  );
}

export default App;
