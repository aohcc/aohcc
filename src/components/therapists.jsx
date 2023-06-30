import breanne from '../photos/breanne.jpg'
import carol from '../photos/carol.jpg'
import chris from '../photos/chris.jpg'
import jacquie from '../photos/jacquie.jpg'
import ryan from '../photos/ryan.jpg'

const bios = {
  jacquie: `Jacquie is a licensed professional counselor who holds a Master of Science degree in Clinical Mental Health Counseling – Psychology and a Bachelor of Science degree in Human Services,  both from Evangel University in Springfield, MO.

Jacquie specializes in attachment-based work with teens, families, individuals, and marriages.

Jacquie began her clinical work in 2013 and worked with children within the foster system, supporting foster children, their birth parents, and their foster families.  In walking alongside children and their biological and foster families, Jacquie saw the deep impact that trauma has on families. At the same time, she got to witness firsthand how facilitating healthy attachments for children, teens, and adults could bring significant healing into individuals and family-systems.

In October of 2020, Jacquie began pursuing advanced training in Emotionally Focused Therapy (EFT).  Jacquie utilizes EFT and other evidence-based approaches to help families grow closer together and heal from trauma.

Jacquie is a wife and mother of two adult sons.  In her spare time she enjoys traveling, reading and learning.`,
  chris: `Chris is a Licensed Professional Counselor Associate in South Carolina, who earned his Master of Arts in Clinical Mental Health from Liberty University. He also holds a B.S. in Business Aministration from Charleston Southern University. Prior to entering the mental health field, Chris enjoyed a long career in the automotive industry. Through his own struggles with mental health, marital difficulties, and personal challenges, Chris has found not only personal healing, but also a passion for seeing lives and marriages restored.

Chris has worked with a variety of life concerns including anxiety, depression, trauma, relationship issues, sexual performance, sexuality, and spirituality.  He is trained in Emotionally Focused Therapy and the Unified Protocol for the Transdiagnostic Treatment of Emotional disorders.  He is also a co-facilitator of Created for Connection marriage workshops.

Chris is a native Charlestonian, living here with his wife Sandi of seventeen years and their three boys.  He enjoys the time they spend together, whether it is watching or coaching kids sporting events, gatherings with neighbors and friends, or traveling to new and exciting places. Chris and Sandi also lead a church small group in their home.`,
  ryan: `Ryan is a Clinical Psychologist who earned his doctorate in clinical psychology in 2016 from George Fox University in Newberg, Oregon. Prior to starting Anchors of Hope Counseling, LLC, in 2023 with his colleague Jacquie Atkins, LPC, he served as the Clinical Director of Life Resources in Mount Pleasant, SC.

Ryan's graduate training provided him the opportunity to start working with clients in 2012 and since that time he has had the honor and pleasure of assisting individuals with a breadth of personal concerns, including depression, anxiety, PTSD and other trauma-related difficulties, insomnia, panic attacks, men's issues, identity issues, and relationship problems. He has additional training in EMDR, which is an evidence-based treatment for PTSD and other trauma-related difficulties.

Ryan's therapeutic approach is warm, empathic, and highly relational. He has been heavily influenced by Emotion-Focused Therapy, an evidence-based treatment that emphasizes empathic attunement to a person's emotions and needs. While Ryan incorporates a number of different treatment approaches into his therapy (such as CBT, ACT, and EMDR), his primary goal is ensure that each individual he sees feels heard, understood, and respected throughout the therapy process.

Ryan has been in the Charleston region since 2017. He grew up in the San Francisco Bay area and prior to moving to South Carolina, also lived in Oregon and Washington state. He loves quiet evenings spent reading and drinking tea and is an avid sports fan, especially of the San Francisco 49ers and the Golden State Warriors. When moving to South Carolina, he made a personal commitment to remain like Switzerland when it comes to the USC and Clemson rivalry; he is happy to say he has kept that commitment.

Ryan and his wife Chelsea have been married for 12 years and have an ever expanding flock of young children. As such, he has no quiet evenings to read and drink tea.`
}

export default function Therapist() {

 const therapists = [
    {
      id: "jacquie",
      name: "Jacquie Atkins, MS, LPC",
      firstName: "Jacquie",
      title: "Co-owner",
      bio: bios.jacquie,
      photo: jacquie,
    },
    {
      id: "carol",
      name: "Carol Conway, LISW-CP",
      firstName: "Carol",
      title: "Therapist",
      bio: "Placeholder",
      photo: carol,
    },
    {
      id: "ryan",
      name: "Ryan O'Farrell, Psy.D.",
      firstName: "Ryan",
      title: "Co-owner",
      bio: bios.ryan,
      photo: ryan,
    },
    {
      id: "breanne",
      name: "Breanne Stevens, LPC",
      firstName: "Breanne",
      title: "Therapist",
      bio: "Placeholder",
      photo: breanne,
    },
    {
      id: "chris",
      name: "Chris Wells, LPC-A",
      firstName: "Chris",
      title: "Therapist",
      bio: bios.chris,
      photo: chris,
    },
  ]

  const therapistCard = therapists.map(therapist =>
    <div>
        <div className="card col-10 mx-auto mb-5">
          <img src={therapist.photo} className="photo" />
            <div className="card-body">
                <h5 className="card-title">{therapist.name}</h5>
                <h6 className="card-subtitle">{therapist.title}</h6>
                <button className="btn custom-btn mt-3" type="button" data-bs-toggle="collapse" data-bs-target={"#" + therapist.id} aria-expanded="false" aria-controls={therapist.id}>
                  {therapist.firstName}'s bio
                </button>
            </div>
        </div>
        <div className="collapse mx-auto col col-md-10" id={therapist.id}>
          <div className="card-color card card-body mb-3 display-linebreak">
                {therapist.bio}
            </div>
        </div>
    </div>
  )

  return (
    <>
      <div className="anchor" id="therapists"></div>
      <div className="therapist-section">
        <h2 className="mx-auto col-8 col-md-4 p-2 my-4" id="therapist-header">Therapists</h2>
        <div className="container-fluid mx-auto">
          <div className="row row-cols-1 row-cols-lg-3">
              {therapistCard}
          </div>
        </div>
      </div>
    </>
  )
}
