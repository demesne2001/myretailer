import React from 'react'

function Footer() {
  return (
    // <div>
    <footer class="content-footer footer bg-footer-theme">
      {/* <button id="notifyButton">Send Notification</button> */}
      <div class="container-xxl flex-wrap justify-content-between py-2 flex-md-row flex-column">
        <div class="mb-2 mb-md-0">
          ©
          {/* <script>document.write(new Date().getFullYear())</script> */}
          Design & Develop by <a href="https://www.alphaebarcode.com/" target="_blank"
            class="footer-link fw-semibold">
            Alpha-e Barcode Solutions Pvt. Ltd.
          </a>
        </div>
      </div>
    </footer>
    // </div>
  )
}

export default Footer
