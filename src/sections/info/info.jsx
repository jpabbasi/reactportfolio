import faqs from './data'
import FAQ from './FAQ'
import './info.css'

const Info = () => {
  return (
    <section id="info">
      <h2>Frequently Asked Questions</h2>
      <p>
        Here are some questions I usually get. Click to toggle the answer, and if you still got doubts, send me a message from the contact section.
      </p>
      <div className="container faqs__container">
        {faqs.map(faq => (
            <FAQ key={faq.id} faq={faq}/>
          ))}
      </div>
    </section>
  )
}

export default Info