import React, { Component } from "react";
import Header from "./Header";

let baseURL = process.env.REACT_APP_BASEURL;
if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:3003";
} else {
  baseURL = "heroku or other backend url here";
}

class MainContent extends Component {
  render() {
    return (
      <div>
        <Header />
        <main>
          <h1 className="AppName">CalDoc</h1>
          <img />
          <section className="intro">
            <h2>Meet Our Team</h2>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                vel gravida nisi. Vestibulum ac consequat lorem. In in mi massa.
                Donec ut tellus sit amet sem ornare fermentum at et nunc.
                Pellentesque ac elementum metus. Praesent non venenatis lacus.
                In sagittis urna in nulla sagittis mattis.
              </p>
            </div>
          </section>

          <section>
            <h2>Our Mission</h2>
            <div>
              <p>
                Integer sit amet venenatis erat. Cras elementum tortor odio, sit
                amet euismod nunc cursus ut. Donec sollicitudin orci sed enim
                volutpat, volutpat rutrum magna semper. Fusce leo lacus,
                pulvinar sit amet dignissim in, consectetur eget nulla. Etiam ac
                turpis augue. Sed tincidunt pulvinar tincidunt. Integer ac
                blandit magna. Nulla dapibus convallis luctus.
              </p>
              <p>
                Ut elementum urna sit amet elit egestas hendrerit. Vivamus quis
                sem fringilla, tincidunt nisi non, congue libero. Etiam cursus
                nulla quis sapien varius, eget accumsan augue mattis. Cras
                accumsan sapien nulla, eu eleifend odio tempus sit amet.
                Suspendisse gravida hendrerit sapien, ut molestie mi
                pellentesque eget. Aliquam eleifend velit vel libero elementum,
                vitae consectetur nisl sollicitudin. Suspendisse volutpat
                fringilla vehicula.
              </p>
            </div>
          </section>

          <section>
            <h2>Contact Us</h2>
          </section>
        </main>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default MainContent;
