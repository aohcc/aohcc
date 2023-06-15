import photo from '../AOH-Logo_White_transparent.png'
import '../index.css'

export default function About() {
  return (
    <>
      <div className="d-flex flex-column align-items-center">
        <div className="d-flex justify-content-center align-items-center background-img">
          <img className="img-fluid w-50 h-50" src={photo}/>
        </div>
        <div className="anchor" id="about"></div>
        <div className="about-section d-flex flex-column justify-content-center p-3">
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
