const faqs = [
  {
    item: "q1",
    question: "How long does therapy take?",
    answer: "Placeholder"
  },
  {
    item: "q2",
    question: "How much does therapy cost?",
    answer: "Placeholder"
  },
  {
    item: "q3",
    question: "What is therapy like?",
    answer: "Placeholder"
  }
]

const faqAccordion = faqs.map(faq =>
    <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button" data-bs-toggle="collapse" data-bs-target={"#" + faq.item} aria-expanded="true" aria-controls={faq.item}>
            {faq.question}
        </button>
        </h2>
      <div id={faq.item} className="accordion-collapse collapse" data-bs-parent={faq.item}>
            {faq.answer}
        </div>
    </div>
)

export default function Faq() {
  return (
    <>
      <div id="faq" className="accordion container-fluid mx-auto col col-md-10 mb-4">
        {faqAccordion}
      </div>
    </>
  )
}
