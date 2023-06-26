
const faqs = [
  {
    item: "q1",
    question: "How long does therapy take?",
    answer: (
      <div className="col-10 p-3 mx-auto">
        <p>Unfortunately there is no way to provide a set answer to this question as it varies greatly. Some factors that contribute to the length of therapy include: how significant the presenting issues are, how longstanding the presenting issues are, how much a client is able to invest in the therapeutic process, as well as what supports and resources client has access to. Additionally, some people come to therapy, accomplish their initial therapeutic goals, but decide to stay in therapy longer-term because they see a benefit to being in therapy in general.</p>
        <p>With all of that said, your therapist will thoroughly assess your presenting difficulties, a process that typically takes 1-4 sessions. After the assessment, your therapist will clarify what your initial therapeutic goals are, collaborate with you in developing a personalized treatment plan, and give a timetable (typically 8-12 sessions) of when you and your therapist can check-back in to reassess your progress in therapy and reformulate therapeutic goals as needed.</p>
      </div>
    )
  },
  {
    item: "q2",
    question: "How much does therapy cost?",
    answer: (
      <div className="p-3">
        <h5 className="mb-3">Our rates for sessions are as follows:</h5>
        <div className="d-flex flex-column flex-md-row justify-content-around">
          <div className="card">
            <div className="card-header">
            <h5 className="card-title">Fully licensed therapists</h5>
            </div>
            <div className="card-body">
              <p className="card-text">Individual psychotherapy, 55 minutes: $140</p>
              <p className="card-text">Couples psychotherapy, 55 mintues: $170</p>
              <p className="card-text">Family psychotherapy*, 55 minutes: $170</p>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Associate level therapists</h5>
            </div>
            <div className="card-body">
              <p className="card-text">Individual psychotherapy, 55 minutes: $125</p>
              <p className="card-text">Couples psychotherapy, 55 mintues: $145</p>
              <p className="card-text">Family psychotherapy*, 55 minutes: $145</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    item: "q3",
    question: "What are appointments like?",
    answer: (
      <>
        <div className="containter-fluid p-3">
        <p className="text-left col-10 mx-auto">This will vary, depending on what your therapeutic goals are and what treatment approach your therapist employs. In general, here are some of the things you can expect to happen during appointments:</p>
          <ul className="list-group list-group-flush">
            <li className="list-group-item col-10 mx-auto">To explore your thoughts, feelings, and behaviors in response to past, present, or upcoming challenges in your life. By exploring your thoughts, feelings, and behaviors, you can gain insight into what is most troublesome to you, what is hindering your efforts to resolve what is troubling you, and how you might more effectively respond to what is troubling you.</li>
            <li className="list-group-item col-10 mx-auto">Your therapist may introduce or review information that is relevant to the achievement of your therapetic goals. This informaiton could relate to a particular diagnosis, to common factors that contribute to a specific problem or experience, information about a specific treatment approach that oculd be beneficial, and strategies to implement that could help you make progress toward your therapeutic goals.</li>
            <li className="list-group-item col-10 mx-auto">Your therapist may guide you through specific exercises that could be helpful to you.</li>
            <li className="list-group-item col-10 mx-auto">You and your therapist may revifew and build upon exercises you were given to do outside of your appointment. While a lot of progress can be made in your therapy appointments, the bulk of your therapeutic progress will be based on the work you do outside of therapy. A major goal of therapy is to further empower you to effectively navigate the challenges that come up in life.</li>
          </ul>
        </div>
      </>
            )
  },
  {
    item: "q4",
    question: "Is therapy effective?",
    answer: (
      <>
        <div className="col-10 mx-auto p-3">
          <p>Research has consistently shown that the majority of those who participate in therapy experience at least some improvement in symptoms. With that said, a number of factors can contribute to the effectiveness (or lack thereof) of therapy. Some of these factors include how long-standing and complex a particular issue is and whether there are evidenced-based treatments for that particular concern. Additionally, most therapies require the active engagement and participation on the part of the client. This participation often includes taking skills and strategies learned in therapy to practice outside of therapy. Research has identified a set of factors, called, "common factors," that also impact the effectiveness of therapy. Some "common factors" include how comfortable, safe, and understood you feel with your therapist, the ability of you and your therapist to develop an agreed upon conceptualization of your difficulties, how clear and specific the goals you and your therapist establish for therapy are, as well what resources and supports you have available (such as social support, community supports, financial support, etc.).
</p>
          <p>In short, there are a lot of variables that go into whether any specific course of therapy will be effective and while most people experience at least some benefits from therapy, unfortunately we cannot guarantee that you personally will benefit from therapy. What we can promis is that each therapist at AOHCC will support you, collaborate with you, and use their clinical expertise to try and find solutions that work for you. Additionally, if your therapist feels you would be better served by a different type of treatment or service, your therapist will discuss this with you and will seek to connect you with any such service that could be beneficial to you.`
</p>
            </div>
                  </>
)
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
      <div className="anchor" id="faq"></div>
      <div className="faq-section">
        <h2 className="my-4" id="faq-header">FAQ</h2>
        <div className="accordion container-fluid mx-auto mb-4 col col-md-10">
          {faqAccordion}
        </div>
      </div>
    </>
  )
}
