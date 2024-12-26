import React from 'react'
import './Dev.scss'
const Developer = () => {
  return (
    <div className="Dev-container">
        <div className="parent">
        <div className="abt">
            <h1>  ABOUT THE DEVELOPER </h1>
            <p><span>ABOUT ME</span><br />
   - Name: Shubham Desale</p>
   <p>- Role: Third-year BCA student at Pratap College, Amalner (Autonomous)</p>
   <p>- Motivation: Passionate about web development and creating useful tools</p>
  <p> - Objective: Developed this app to help students easily access resources</p>
        </div>
        <div className="tech">
            <h1>TECHNOLOGIES USED</h1>
            <p> 
   - Frontend: React.js, SASS.</p>
 
  <p> - Hosting: Vercel.</p>
        </div>
        <div className="cnt">
            <h1>CONTACT INFORMATION</h1>
            <p> 
   - Email: <a href="mailto:shubhamhanumantpatil@gmail.com">E-mail</a></p>
<p>   - GitHub: <a href="https://github.com/shubhamdesale2003">GitHub-Link</a></p>
   <p>- Portfolio: [?]</p>
        </div>
</div>
    </div>
  )
}

export default Developer