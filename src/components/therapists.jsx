const bios = {
  jacquie: `Jacquie is a licensed professional counselor who holds a Master of Science degree in Clinical Mental Health Counseling – Psychology and a Bachelor of Science degree in Human Services,  both from Evangel University in Springfield, MO.

Jacquie specializes in attachment-based work with teens, families, individuals, and marriages.

Jacquie began her clinical work in 2013 and worked with children within the foster system, supporting foster children, their birth parents, and their foster families.  In walking alongside children and their biological and foster families, Jacquie saw the deep impact that trauma has on families. At the same time, she got to witness firsthand how facilitating healthy attachments for children, teens, and adults could bring significant healing into individuals and family-systems.

In October of 2020, Jacquie began pursuing advanced training in Emotionally Focused Therapy (EFT).  Jacquie utilizes EFT and other evidence-based approaches to help families grow closer together and heal from trauma.

Jacquie is a wife and mother of two adult sons.  In her spare time she enjoys traveling, reading and learning.`
}

export default function Therapist() {

 const therapists = [
    {
      id: "ryan",
      name: "Dr. Ryan O'Farrell, Psy.D.",
      firstName: "Ryan",
      title: "Co-owner and Psychologist",
      bio: "Placeholder"
    },
    {
      id: "jacquie",
      name: "Jacquie Atkins, MS, LPC",
      firstName: "Jacquie",
      title: "Co-owner and Licensed Professional Counselor",
      bio: bios.jacquie
    }
  ]

  const therapistCard = therapists.map(therapist =>
    <div>
        <div className="card mx-auto col col-md-10 mb-3">
            <div className="card-body">
                <h5 className="card-title">{therapist.name}</h5>
                <h6 className="card-subtitle">{therapist.title}</h6>
              <p className="card-text">Placeholder</p>
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
        <h2 className="card mx-auto col-6 col-md-4 p-2 mb-5">Therapists</h2>
        <div className="container-fluid mx-auto">
          <div className="row row-cols-1 row-cols-lg-2 mb-5" id="therapists">
              {therapistCard}
          </div>
        </div>
    </>
  )
}
