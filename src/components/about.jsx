import photo from '../AOH-Logo_1200px.png'
import '../index.css'

export default function About() {
  return (
    <>
      <div className="container-fluid mx-auto row">
        <div className="col col-md-10 rounded bg-white mx-auto mb-5 p-3 p-md-5" id="about">
          <img className="img-thumbnail col-md-4 mx-auto mb-2 p-0" src={photo} />
          <h1 className="text-center mb-3">About Us</h1>
          <p className="text-center col-md-10 col-lg-8 mx-auto">Located in Charleston, SC, Anchors of Hope Counseling Center is a collection of
          therapists who have come together with a shared vision for supporting the mental health needs of families,
            couples, and individuals in the Lowcountry. While our counseling center is new, our experienced therapists
          bring their clinical expertise, forged through years of training and counseling experience, and combine it with a passion for promoting the flourishing of
            all who come through our doors.</p>
        </div>
      </div>
    </>
  )
}
