const bios = {
  jacquie: `Jacquie is a licensed professional counselor who holds a Master of Science degree in Clinical Mental Health Counseling – Psychology and a Bachelor of Science degree in Human Services,  both from Evangel University in Springfield, MO.

Jacquie specializes in attachment-based work with teens, families, individuals, and marriages.

Jacquie began her clinical work in 2013 and worked with children within the foster system, supporting foster children, their birth parents, and their foster families.  In walking alongside children and their biological and foster families, Jacquie saw the deep impact that trauma has on families. At the same time, she got to witness firsthand how facilitating healthy attachments for children, teens, and adults could bring significant healing into individuals and family-systems.

In October of 2020, Jacquie began pursuing advanced training in Emotionally Focused Therapy (EFT).  Jacquie utilizes EFT and other evidence-based approaches to help families grow closer together and heal from trauma.

Jacquie is a wife and mother of two adult sons.  In her spare time she enjoys traveling, reading and learning.`,
  chris: `Chris is a Licensed Professional Counselor Associate in South Carolina, who earned his Master of Arts in Clinical Mental Health from Liberty University. He also holds a B.S. in Business Aministration from Charleston Southern University. Prior to entering the mental health field, Chris enjoyed a long career in the automotive industry. Through his own struggles with mental health, marital difficulties, and personal challenges, Chris has found not only personal healing, but also a passion for seeing lives and marriages restored.

Chris has worked with a variety of life concerns including anxiety, depression, trauma, relationship issues, sexual performance, sexuality, and spirituality.  He is trained in Emotionally Focused Therapy and the Unified Protocol for the Transdiagnostic Treatment of Emotional disorders.  He is also a co-facilitator of Created for Connection marriage workshops.

Chris is a native Charlestonian, living here with his wife Sandi of seventeen years and their three boys.  He enjoys the time they spend together, whether it is watching or coaching kids sporting events, gatherings with neighbors and friends, or traveling to new and exciting places. Chris and Sandi also lead a church small group in their home.`
}

export default function Therapist() {

 const therapists = [
    {
      id: "breanne",
      name: "Breanne Stevens, LPC",
      firstName: "Breanne",
      title: "Therapist",
      bio: "Placeholder"
    },
    {
      id: "carol",
      name: "Carol Conway, LISW-CP",
      firstName: "Carol",
      title: "Therapist",
      bio: "Placeholder"
    },
    {
      id: "chris",
      name: "Chris Wells, LPC-A",
      firstName: "Chris",
      title: "Therapist",
      bio: bios.chris
    },
    {
      id: "jacquie",
      name: "Jacquie Atkins, MS, LPC",
      firstName: "Jacquie",
      title: "Co-owner and Licensed Professional Counselor",
      bio: bios.jacquie
    },
    {
      id: "ryan",
      name: "Ryan O'Farrell, Psy.D.",
      firstName: "Ryan",
      title: "Co-owner and Psychologist",
      bio: "Placeholder"
    },
  ]

  const therapistCard = therapists.map(therapist =>
    <div>
        <div className="card mx-auto col col-md-10 mb-3">
            <div className="card-body">
                <h5 className="card-title">{therapist.name}</h5>
                <h6 className="card-subtitle">{therapist.title}</h6>
            </div>
        </div>
        <button className="btn btn-primary mb-3" type="button" data-bs-toggle="collapse" data-bs-target={"#" + therapist.id} aria-expanded="false" aria-controls={therapist.id}>
          {therapist.firstName}'s bio
        </button>
        <div className="collapse mx-auto col col-md-10" id={therapist.id}>
          <div className="card card-body mb-3 display-linebreak">
                {therapist.bio}
            </div>
        </div>
    </div>
  )

  return (
    <>
        <h2 className="card mx-auto col-6 col-md-4 p-2 mb-5" id="therapists">Therapists</h2>
        <div className="container-fluid mx-auto">
          <div className="row row-cols-1 row-cols-lg-2 mb-3">
              {therapistCard}
          </div>
        </div>
    </>
  )
}
