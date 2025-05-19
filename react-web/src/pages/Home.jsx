import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Tutors from "../components/Tutors"
import Partners from "../components/Partners"
import Contact from "../components/Contact"

import {homeSection} from '../data/HomeSection'
import {coursesSection} from '../data/CoursesSection'
import {tutorsSection, tutorsList} from '../data/TutorsSection'
import {partnersSection, partnersList} from '../data/PartnersSection'

import parse from 'html-react-parser'

import '../styles/Home.css'
import '../styles/Footer.css'
import '../styles/Tutors.css'
import { contacSection } from "../data/ContactSection"

function Home() {
  return (
    <>
    <Navbar />
    <div className="wrapper">
      {/* home */}
        <section id="home">
            <img src={homeSection.image}/>
            <div className="kolom">
                {parse(homeSection.content)}
                <h2>Tetap Sehat, Tetap Semangat</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, nobis.</p>
                <p><a href="" className="tbl-pink">Pelajari Lebih Lanjut</a></p>
            </div>
        </section>
        {/* online courses */}

        <section id="courses">
            <div className="kolom">
               {parse(coursesSection.content)}
            </div>
            <img src={parse(coursesSection.image)} />
        </section>
        {/* Tutors */}

        <section id="tutors">
            <div className="tengah">
                <div className="kolom">
                  {parse(tutorsSection.content)}
                     </div>

                <Tutors tutorsList={tutorsList} />
            </div>
        </section>
        
        {/* Partners */}

         <section id="partners">
            <div className="tengah">
                {parse(partnersSection.title)}
            </div>
            <Partners partnersList={partnersList} />
          </section>
    </div>
    {/* Contact */}
    <Contact contactSection={contacSection}/>
    <Footer />
    </>
  )
}

export default Home
