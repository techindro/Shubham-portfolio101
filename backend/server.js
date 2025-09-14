const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Data from your LinkedIn
const profileData = {
  name: "Shubham Patel",
  headline: "B.E. CSE | Social Media Influencer | Startup Enthusiast",
  photo: "https://media.licdn.com/dms/image/v2/D5603AQG4i1tXj1Ky6Q/profile-displayphoto-shrink_800_800/0/1717067488141?e=1733356800&v=beta&t=8ZbPpq7sq4m6wD1dN5G1F3H7B2q0Y9J5c0nF2U4ZqPI", // Your actual LinkedIn photo URL
  logo: "https://example.com/techindro-logo.png", // Replace with Techindro logo URL if available
  about: "Passionate tech innovator with experience in AI/ML, coding, and video editing. Founder at Techindro. Focused on startups and social media influence.",
  experience: [
    {
      title: "Founder",
      company: "Techindro",
      dates: "2020 - Present",
      description: "Building innovative tech solutions, managing social media influence, and driving startup initiatives."
    }
    // Add more experiences if any
  ],
  skills: ["AI/ML", "Coding", "Video Editing", "React.js", "Node.js", "Startup Management", "Social Media"],
  certificates: [
    {
      name: "AI Fundamentals",
      issuer: "Google",
      date: "2023"
    }
    // Add more certificates from LinkedIn
  ],
  education: [
    {
      degree: "B.E. in Computer Science Engineering",
      institution: "Dr. Bhimrao Ambedkar University Agra",
      dates: "2016 - 2020"
    }
  ]
};

app.get('/api/profile', (req, res) => {
  res.json(profileData);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
