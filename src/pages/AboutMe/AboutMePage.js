import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Header from '../../common/Header/Header';
import Section from '../../common/Section/Section';

import './AboutMePage.css';

import ProfilePhoto from '../../assets/images/girona.jpg';

export default function AboutMePage() {
  return (
    <>
      <div>
        <Container className='about-header-container'>
          <Header text={'About Me'} type='lg' className='about-header'/>
        </Container>
      </div>
      <div className='about-preamble-container'>
        <Container>
          <Section 
            header_type='none'
            body_text="I'm Rajeev Parmasar and I love solving cool problems in innovative ways. Along my journey, I've curated my critical thinking skills to become adept at data science, software engineering, mathematics, and entrepreneurship.<br/><br/>I'm originally from the beautiful pair of islands, Trinidad and Tobago 🇹🇹, and migrated to Canada to attend the University of Waterloo. Outside of my work, I like strength programming, various video games, going down youtube + wikipedia rabbit holes, and seeing new places."
            img_name={ProfilePhoto}
            img_desc={"Rajeev sitting on a castle wall in Girona"}
            use_static_img
          />
        </Container>
      </div>
      <div className='about-content-container'>
        <Container className='about-header-container'>
          <Header text={'The Journey So Far'} type='md' />
          <Row className='text-container'>
            <p><i>"The master has failed more times than the beginner has even tried." - Stephen McCranie</i></p>
            <p>That's my main philosphy because it shows us that failure is natural on the path to excellence.</p>
            <p>Over my journey, I've dabbled in many things from <b>math heavy topics</b> like Machine Learning (ML) & Artificial Intelligence (AI), <b>creative spaces</b> like User Interface/User Experience (UI/UX) Design & Front-end Web Development, and <b>team-oriented activities</b> like case competitions, impactathons and public speaking.</p>
            <p>Professionally, I mostly spent my time in a MLOps role on an analytics team focused on <b>fraud detection</b> in insurance.</p>
          </Row>
        </Container>
        <Container>
          <Section 
            header_type='sm'
            header_text='First Steps'
            img_name='images/section-images/first-steps.png' 
            img_desc="A finger pushing a power button."
            body_text={
              "My first co-op was at the Faculty of Arts' help desk and I was tasked to dynamically generate an HTML page of all our printers. The first question I had was 'what is HTML?'. The entire thing felt overwhelming at first, but everytime is hard the first time. I started the task, failed a bit but then got a small win. This motivated me to continue and it happened the same way, a bunch of failures then a win. Before you know it, you've solved the problem and then some. I remember the joy I felt when I saw how much my solution reduced the team's workload. We were able handle almost all printer tickets by pointing the client to the site, where they could locate their printer and get instructions on how to install it.<br/><br/>I fell head over heels with making life easier using technology and I was eager to learn how to solve bigger problems."
            }
          />
          <Section 
            header_type='sm'
            header_text='Building My First Website'
            img_name='images/section-images/first-website.png'
            img_desc='A laptop with angle brackets and a light bulb at the top right.'
            reverse 
            body_text={
              "One day, I was fascinated by the seemingly random movement of snow in the wind. After my first co-op, I'd learned the basics of HTML, CSS and JavaScript (JS) so I set out on my new task, building a resume website that included that visual somehow. I was taking Calculus 3 at the time and so I began learning about describing level curves using parametric equations. Then I found out about the <code>canvas</code> HTML tag and learnt that I can create procedural animations using JS. Thus I brought the visual to life by animating particles with JS and describing their motion with parametric equations.<br/><br/>The ability to describe this random process in a simple mathematical form sparked my interest in Statistics."
            }
          />
          <Section 
            header_type='sm'
            header_text='Monte Carlo Simulations'
            img_name='images/section-images/monte-carlo-sim.png'
            img_desc='A series of failures until a success'
            body_text={
              "In 2nd year, I took STAT 340 - Simulation of Complex Systems. For me, this was a mind-blowing course because of 2 topics: Copulas & Monte-Carlo Simulations. The mathematical knowledge to handle these objects was a huge jump in difficulty from any other course I had taken at the time and was very counter-intuitive. That made me want to learn about it even more. We mainly used R to run those simulations and I loved that RStudio included a console for rapid prototyping.<br/><br/>I could not wait to delve more into probability theory and explore more scripting languages like R and Python."
            }
          />
          <Section 
            header_type='sm'
            header_text='What is an API?'
            img_name='images/section-images/api.png'
            img_desc='Two computers linked together with a dotted line.'
            reverse
            body_text={
              "Following this, my friends and I started a small marketing startup aimed at helping realtors acquire more clients by automating their lead generation and screening. But before we automate, we needed to figure out how it worked manually. This was a critical step because I learned a bit of graphic design and how to communicate professionally as it involved designing Facebook Ads and many hours of cold-calling. Once we got the hang of it, we moved onto using tools like Zapier, MailChimp and Twilio. This was my first experience developing in the backend and leveraging APIs to create a web interface for texting clients (after several failed builds on Heroku).<br/><br/>Working on the backend was scary but it revealed a broader horizon of problems I have the potential to solve."
            }
          />
          <Section 
            header_type='sm'
            header_text='Trying Python'
            img_name='images/section-images/forecast.png'
            img_desc='A graph with a question mark over the rightmost bar'
            body_text={
              "I initially tried doing an analysis on a FIFA dataset after 'learning' Python and pandas on Kaggle. I gave up after about a week or so. However, the balance between Python's simple syntax and its powerful applications convinced me to try again. I figured out how to emulate RStudio's console in VSCode using Juptyer cells. This let me quickly test various commands in Python and through the numerous failures, a skill emerged. During this time, I became involved with another startup born from an impactathon at Cookhouse Labs, CFOai, which aimed to prevent bankruptcy for small and medium restaurants.<br/><br/>I put my new Python skills to the test by writing a script to setup and solve Mixed Integer Linear Programming (MILP) problems, and pondered about building larger applications."
            }
          />
          <Section 
            header_type='sm'
            header_text='Exam P'
            img_name='images/section-images/exam-p.png'
            img_desc='Hands holding a book with a connector symbol at the top'
            reverse
            body_text={
              "I declared my double major in Actuarial Science & Statistics and decided to try my hand at my first actuarial exam, Exam Probability. This forced me to perfect my time management skills and transformed my learning strategy. At first, I spent a lot of time trying to memorize notes but then I discovered the real secret, building intuition. Relearning 'how to learn' was a vital skill that I still use today and it greatly helped me in my upper year courses.<br/><br/>I started thinking about problems in a whole new light and I could not wait to apply this skill in other non-academic areas."
            }
          />
          <Section 
            header_type='sm'
            header_text='Structure is Important'
            img_name='images/section-images/structure.png'
            img_desc='A gear decomposed into elementary parts'
            body_text={
              "With my new mathematical knowledge, I started getting more ambitious in the problems I tried to solve. As I worked more with CFOai, I needed to extend my MILP solver script to include some pre-processing of client data. This lead to serialization (via <code>pickle</code>) as a solution to transport objects between scripts. But this proved to be a band-aid on an open wound as my method of 'thinking in scripts' proved to be very difficult to maintain and extend. So, I started learning how to generalize functionality and how to organize functionality in a way to make developing easier.<br/><br/>I was fascinated by these design patterns and started to combine them with UX principles to solve problems in other domains like optimizing the furniture layout in my room."
            }
          />
          <Section 
            header_type='sm'
            header_text='Writing Less Code'
            img_name='images/section-images/productivity.png'
            img_desc='A clock with a downwards red arrow next to a package with an upwards green arrow.'
            reverse
            body_text={
              "At this point, I thought the problems became more complex. In reality, those problems could be decomposed into smaller problems that I had solved many times before. After recognizing how to think of these problems in a more abstract way, I found myself spending less time on VSCode and leaning more into a pen and paper. The question transformed from 'how to solve a problem' into 'how to represent this problem in terms of the ones I'd seen before.<br/><br/>By separating solution planning and solution implementation, I made significant gains in my productivity by doing a lot less."
            }
          />
          <Section 
            header_type='sm'
            header_text='Improving DevOps' 
            img_name='images/section-images/improving-devops.png' 
            img_desc='Gears turning with 3 upward red arrows.'
            body_text={
              "Eventually, I arrived at a point where solutions were built but no one could access them and they sometimes behaved unexpectedly. I needed to improve my Development Operations (DevOps). Repetitive procedures annoy me, so I figured out to setup a Continuous Integration & Continuous Delivery (CI/CD) pipeline from scratch using Github Actions. This completely changed the game because now I can automatically test my solution, format it for readability, and put it on the internet with one command from my terminal.<br/><br/>I found this absolutely revolutionary so I wanted to figure out how I can automate more of my workflow and also how to choose the tools to do so."
            }
            />
          <Section 
            header_type='sm'
            header_text='A Fuller Stack Developer'
            img_name='images/section-images/full-stack.png'
            img_desc='A person standing infront of a gear that is connected to various shapes representing components.'
            reverse
            body_text={
              "Unfortunately, things that make life easier are often expensive (but the converse is not always true). And sometimes, the tools we rely on break in unexpected ways. This is where my inner actuary began to shine. Problems now began to have financial components, security risks and legal compliance risks which drove me to sharpen my business accumen and acturial skills. Not only that, but it was vital that solutions could scale well and facilitate easy maintenance and extensions.<br/><br/>I was excited to integrate my acturial skills to solve problems on an even grander scale."
            }
          />
          <Section 
            header_type='sm'
            header_text='Looking Forward'
            img_name='images/section-images/looking-forward.png'
            img_desc='A rocket launching towards a star in a circle.'
            body_text={
              "If you've made it this far, thank you for following my journey! It's been an ardous one filled with what appeared to be turmoil at every corner but these were merely directions on how to move forward. Looking forward, I'm interested in solving problems on a larger scale and with more robust solutions thus leaning more into solution architecture. I want to also tie this together with real world applications so I'm exploring more about process optimization because I don't think anyone likes repetitive work.<br/><br/>So why not think differently to figure out how we can improve/automate those and focus on more interesting problems?"
            }
          />
        </Container>
      </div>
    </>
  )
}
