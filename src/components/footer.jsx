import npp from '../files/aohcc_notice_of_privacy_practices_v2.pdf'

export default function Footer() {
  return (
  <>
    <footer className="footer-color d-flex flex-column justify-content-center p-3">
        <p className="text-center text-light mt-3">928 Savage Rd.<br/>Charleston, SC 29414<br/>Phone: (843) 377-5322</p>
        <p><a href={npp} target="_blank">AOHCC Notice of Privacy Practices</a></p>
        <p className="text-center text-light">Photo by <a href="https://unsplash.com/@pioneermedia?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Leighton Smith</a> on <a href="https://unsplash.com/photos/NPxkSK-makg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Unsplash</a>
        </p>
    </footer>
  </>
  )
}
