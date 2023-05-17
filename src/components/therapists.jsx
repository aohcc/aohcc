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
      bio: "Placeholder"
    }
  ]

  const therapistCard = therapists.map(therapist =>
    <div>
        <div className="card mx-auto col-8 mb-3">
            <div className="card-body">
                <h5 className="card-title">{therapist.name}</h5>
                <h6 className="card-subtitle">{therapist.title}</h6>
                <p className="card-text">{therapist.bio}</p>
            </div>
        </div>
        <button className="btn btn-primary mb-3" type="button" data-bs-toggle="collapse" data-bs-target={"#" + therapist.id} aria-expanded="false" aria-controls={therapist.id}>
          {therapist.firstName}'s bio
        </button>
        <div className="collapse mx-auto col-8" id={therapist.id}>
            <div className="card card-body">
                Placeholder
            </div>
        </div>
    </div>
  )

  return (
    <>
        <h2 className="card mx-auto col-md-4 p-2 mb-5">Therapists</h2>
        <div className="row-cols-2 d-flex justify-content-around mb-5" id="therapists">
            {therapistCard}
        </div>
    </>
  )
}
