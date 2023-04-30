import React from 'react'
import ContactCard from '../components/ContactCard'
import styles from './contact.module.css'
import ContactForm from '../components/ContactForm'

const Contact = () => {
    return (
        <div className={styles.containe}>
            <h1>
                Contact Us
            </h1>
            <ContactCard />
            <section className={styles.contact_section}>
                <ContactForm />
            </section>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.103277098411!2d72.63615587524139!3d23.239328579022462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2b933477ba9f%3A0xe440409e66bea08a!2sLDRP%20Institute%20of%20Technology%20and%20Research!5e0!3m2!1sen!2sin!4v1682857507302!5m2!1sen!2sin"
                width={50} height={450} style={{ }} allowFullScreen="" loading="lazy" className={styles.mapping}
                referrerPolicy="no-referrer-when-downgrade"></iframe>

            
        </div>
    )
}

export default Contact
