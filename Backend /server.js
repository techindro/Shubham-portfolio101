
const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const profileData = {
  name: "Shubham Patel",
  headline: "B.E. CSE | Social Media Influencer | Startup Enthusiast",
  about: "Passionate tech innovator with experience in AI/ML, coding, and video editing. Founder at Techindro.",
  experience: [
    { title: "Founder", company: "Techindro", dates: "2020 - Present", description: "Building innovative tech solutions and influencing social media." }
  ],
  skills: ["AI/ML", "Coding", "Video Editing", "React.js", "Node.js", "Startup Management", "Social Media"],
  certificates: [{ name: "AI Fundamentals", issuer: "Google", date: "2023" }],
  education: [{ degree: "B.E. in Computer Science Engineering", institution: "Dr. Bhimrao Ambedkar University Agra", dates: "2016 - 2020" }]
};

app.get('/api/profile', (req, res) => res.json(profileData));

app.listen(port, () => console.log(`Server running on port ${port}`));
