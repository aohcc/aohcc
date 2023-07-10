
const faqs = [
  {
    item: "q1",
    question: "How long does therapy take?",
    answer: (
      <div className="col-10 p-3 mx-auto">
        <p>The answer is: it depends. The length of therapy can vary greatly and depends on a number of factors. Some factors of those factors include: how significant the presenting issues are, how longstanding the presenting issues are, how much a person is able to invest in the therapeutic process, as well as what supports and resources the person has access to. Additionally, some people come to therapy, accomplish their initial therapeutic goals, but decide to stay in therapy longer-term because they see a benefit to staying in therapy for their overall health and well-being.
        </p>
        <p>With all of that said, what you can initially expect in therapy is that your therapist will thoroughly assess your presenting difficulties, a process that typically takes 1-4 sessions. After the assessment, your therapist will clarify what your initial therapeutic goals are, collaborate with you in developing a personalized treatment plan, and give a timeframe (typically 8-12 sessions) of when you and your therapist can check-back in to reassess your progress in therapy and reformulate therapeutic goals as needed.
        </p>
        <p>Of course, if you would like to end therapy for any reason, you can do so at anytime. If you are having concerns about your progress in therapy or about the direction of therapy, we would encourage you to share your concerns with your therapist. This provides your therapist the opportunity to hear your questions and concerns and change the approach to your therapy if needed. Additionally, it provides you and your therapist an opportunity to explore whether a referral for additional or alternative services would be beneficial to you.
        </p>
      </div>
    )
  },
  {
      item: "q2",
      question: "Is therapy effective?",
      answer: (
        <>
          <div className="col-10 mx-auto p-3">
            <p>Research has consistently shown that the majority of those who participate in therapy experience at least some improvement in symptoms. With that said, a number of factors can contribute to the effectiveness (or lack thereof) of therapy. Some of these factors include how long-standing and complex a particular issue is and whether there are evidenced-based treatments for that particular concern. Additionally, most therapies require the active engagement and participation on the part of the client. This participation often includes taking skills and strategies learned in therapy to practice outside of therapy. Research has identified a set of factors, called, "common factors," that also impact the effectiveness of therapy. Some "common factors" include how comfortable, safe, and understood you feel with your therapist, the ability of you and your therapist to develop an agreed upon conceptualization of your difficulties, how clear and specific the goals you and your therapist establish for therapy are, as well what resources and supports you have available (such as social support, community supports, financial support, etc.).
            </p>
            <p>In short, there are a lot of variables that go into whether any specific course of therapy will be effective and while most people experience at least some benefits from therapy, unfortunately we cannot guarantee that you personally will benefit from therapy. What we can promis is that each therapist at AOHCC will support you, collaborate with you, and use their clinical expertise to try and find solutions that work for you. Additionally, if your therapist feels you would be better served by a different type of treatment or service, your therapist will discuss this with you and will seek to connect you with any such service that could be beneficial to you.
            </p>
              </div>
                    </>
  )
  },
  {
    item: "q3",
    question: "How much does therapy cost?",
    answer: (
      <div className="p-3">
        <h6 className="mb-3">Our rates for sessions are as follows:</h6>
        <div className="d-flex flex-column flex-md-row justify-content-around">
          <div className="card mb-3">
            <div className="card-header">
            <h5 className="card-title">Fully licensed therapists</h5>
            </div>
            <div className="card-body">
              <p className="card-text">Individual psychotherapy, 55 minutes: $140</p>
              <p className="card-text">Couples psychotherapy, 55 mintues: $170</p>
              <p className="card-text">Family psychotherapy*, 55 minutes: $170</p>
            </div>
          </div>
          <div className="card mb-3">
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
        <div className="col-10 mx-auto">
          <p>Payment is due at the start of your appointment. To simplify billing for yourself and your therapist, we will, with your consent, obtain a credit card to keep on file that will be charged for your appointments.</p>
          <p>*Please note that all appointments with persons under the age of 18 are billed at the family psychotherapy rate.</p>
        </div>
      </div>
    )
  },
  {
    item: "q4",
    question: "What are appointments like?",
    answer: (
      <>
        <div className="containter-fluid p-3">
        <p className="text-left col-10 mx-auto">This will vary, depending on what your therapeutic goals are and what treatment approach your therapist employs. In general, here are some of the things you can expect to happen during appointments:</p>
          <ol className="list-group list-group-numbered">
            <li className="col-10 mx-auto list-group-item d-flex justify-content-between align-items-start ">
             <div className="ms-2 me-auto">To explore your thoughts, feelings, and behaviors in response to past, present, or upcoming challenges in your life. By exploring your thoughts, feelings, and behaviors, you can gain insight into what is most troublesome to you, what is hindering your efforts to resolve what is troubling you, and how you might more effectively respond to what is troubling you.</div>
            </li>
            <li className="col-10 mx-auto list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">Your therapist may introduce or review information that is relevant to the achievement of your therapetic goals. This informaiton could relate to a particular diagnosis, to common factors that contribute to a specific problem or experience, information about a specific treatment approach that oculd be beneficial, and strategies to implement that could help you make progress toward your therapeutic goals.</div>
            </li>
            <li className="col-10 mx-auto list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">Your therapist may guide you through specific exercises that could be helpful to you.</div>
            </li>
            <li className="col-10 mx-auto list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">You and your therapist may revifew and build upon exercises you were given to do outside of your appointment. While a lot of progress can be made in your therapy appointments, the bulk of your therapeutic progress will be based on the work you do outside of therapy. A major goal of therapy is to further empower you to effectively navigate the challenges that come up in life.</div>
            </li>

          </ol>
        </div>
      </>
            )
  },
  {
    item: "q5",
    question: "What can I expect in my relationship to my therapist?",
    answer: (
      <>
        <div className="col-10 mx-auto p-3">
          <p>You can expect a personal, warm, but professional relationship with your therapist. This means that during appointments, you can expect to feel heard, understood, respected, and safe with your therapist, even when your therapist if offering feedback to you. You can also expect that the primary focus of the relationship will be on you and on your goals. This means that while your therapist may share personal information, that information will be shared with a therapeutic goal in mind.
          </p>
          <p>Additionally, it is important to know that all of our therapists operate according to the ethical guidelines set for by their respective professional organizations, such as the American Psychological Association (APA), the American Counseling Association (ACA), and the National Association of Social Workers (NASW). These organizations set guidelines for relationships with clients in order to protect clients and ensure the safety of therapeutic relationships. According to these guidelines, therapists cannot have any social interactions with a client for at least 2 years after the termination of treatment. Additionally, under no circumstances can therapists engage in a romantic and/or sexual relationship with any current or past client.
          </p>
          <p>Of course, the Lowcountry can be a small community and you may on occasion run into your therapist while out in the community. If this happens, your therapist will not initiate contact with you. This is done in order to protect your confidentiality, as it could be awkward or uncomfortable for a friend or family member to ask how you know your therapist. You are of course free to initiate contact with your therapist and introduce your therapist to anyone you want to. But please know that any such interactions with your therapist will be kept brief and that your therapist will not engage in any therapeutic conversations (including discussing therapy-related matters) during such encounters in the community.
          </p>
          <p>You can also expect that your therapist will continue to pursue additional training and supervision in order to further develop and grow as a therapist. Some trainings require that a participating therapist record sessions with some clients so that the therapist can receive feedback on the implementation of the specific therapeutic approach or technique. Should your therapist engage in (or already be engaged in) such a training and want to record some sessions with you, your therapist will discuss this with you, provide you with information about how any recordings will be used, stored, and destroyed, and will answer any questions or concerns you may have. Your therapist will not record any session, in any way (audio or video) without your express written consent. Should you provide such written consent, you can withdraw your consent at any time by talking to your therapist about your desire to withdraw your consent to record sessions and by providing a written notice thereof. We also ask that you agree to not record sessions in any way (audio or video) without your therapist's express written consent.
          </p>
          <p>All of these boundaries and structures are meant to promote a sense of safety and comfort for both you and your therapist, so that therapy can remain focused on your goals and can be as effective as possible.
          </p>
        </div>
      </>
    )
  },
  {
    item: "q6",
    question: "How can I contact my therapist between appointments?",
      answer: (
        <>
          <div className="col-10 mx-auto p-3">
            <p>You can call your therapist at the work number your therapist provides you or you may call the main office at (843) 377-5322. Please note that our therapists at Anchors of Hope Counseling Center do not provide emergency or crisis related services. If you are experiencing an emergency or crisis, please call 911 or go to your nearest Emergency Room. If you are experiencing suicidal thoughts, feelings, and/or urges, you may also call the National Suicide Prevention Lifeline by dialing 988.
            </p>
            <p>Your therapist will check their voicemail during regular office hours, Monday through Friday and will attempt to return your call within 1 business day. Phone calls between you and your therapist that go beyond scheduling related matters may be charged a phone consultation fee, which is $35 per 15-minutes.
            </p>
            <p>You can also send your therapist a message through our secure client portal. Please note that email is not a secure medium for contacting your therapist and as such, we strongly encourage you to message your therapist through the client portal. If you do decide to email your therapist, please only do so for scheduling purposes; do not share any information through email that you want kept confidential.
            </p>
          </div>
        </>
      )
  },
  {
    item: "q7",
    question: "What do I do if I am experiencing an emergency or crisis?",
    answer: (
      <>
        <div className="col-10 mx-auto p-3">
          <p>Anchors of Hope Counseling Center does not provide emergency or crisis related services. If you are experiencing an emergency or crisis, please call 911 or go to your nearest Emergency Room. If you are experiencing suicidal thoughts, feelings, and/or urges, you may also call the National Suicide Prevention Lifeline by dialing 988.
          </p>
        </div>
      </>
    )
  },
  {
    item: "q7",
    question: "Will what I say in therapy stay confidential?",
    answer: (
      <>
        <div className="col-10 mx-auto p-3">
          <p>In general the answer is yes. Therapy works best when there is trust that you can share (if you choose) the most private of your thoughts and feelings without worrying that someone else will learn about them. It is both a priority for our therapists as well as the professional organizations we belong to, to strictly guard and protect client confidentiality.
          </p>
          <p>But it is important for you to know that there are some circumstances where confidentiality can or must be broken. Most of these circumstances involve situations where another person may be in physical danger and we as therapists are required, by law, to report the potential danger so that law enforcement and other state agencies can do their work of keeping others safe.
          </p>
          <p>Because we want you to have a clear sense of what information will remain confidential and what information we need to report, we have created a handout on confidentiality that you can download below. This handout will also be included in your intake paperwork if you choose to seek services with us, but we include it on our website so that if you ever forget what is on there, you can reference it here. Please read it over carefully and if you have any further questions about confidentiality in therapy, please do not hesitate to speak to your therapist or call our office.
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
        <div className="accordion container-fluid mx-auto mb-5 col col-md-10">
          {faqAccordion}
        </div>
      </div>
    </>
  )
}
