const skInfoCard = `<section class="info-card">
                      <img src="img/sasha-kravets.jpg" alt="Sasha Kravets photo" class="info-card__image">
                      <h2 class="info-card-title">Sasha Kravets</h2>
                      <p class="info-card__description">A promising web developer who wants to work in a great IT company</p>
                      <a href="https://sasha-kravets.github.io/portfolio_071123/cv/Kravets_CV.pdf" target="_blank" class="info-card__link">Download CV</a>
                    </section>`;

const coaxInfoCard = `<section class="info-card">
                        <img src="img/coax-logo.svg" alt="Coax logo" class="info-card__image">
                        <p class="info-card__description">Great IT company for promising developers</p>
                        <a href="https://coaxsoft.com/" target="_blank" class="info-card__link">Website</a>
                      </section>`;

function initMap() {
  // Create new Google Map
  const mapOptions = {
    center: { lat: 49.917626, lng: 24.700375 },
    zoom: 7,
  };
  const map = new google.maps.Map(document.getElementById("map"), mapOptions);

  // Add Markers to Array
  const markerArray = [
    {
      location: { lat: 48.917626, lng: 24.700375 },
      imageIcon: "img/blue-marker.svg",
      content: coaxInfoCard,
    },
    {
      location: { lat: 50.8525, lng: 24.3236 },
      imageIcon: "img/blue-marker.svg",
      content: skInfoCard,
    },
  ];

  // Add Marker Function
  const addMarker = (props) => {
    const { location, imageIcon, content } = props;

    const marker = new google.maps.Marker({
      position: location,
      icon: imageIcon,
      map: map,
    });

    // Check for custom icon
    if (imageIcon) {
      marker.setIcon(imageIcon);
    }

    // Info Window
    if (content) {
      const detailWindow = new google.maps.InfoWindow({
        content: content,
      });
      marker.addListener("mouseover", () => {
        detailWindow.open(map, marker);
      });
      marker.addListener("click", () => {
        detailWindow.open(map, marker);
      });
    }
  };

  // Loop through markers
  markerArray.forEach(addMarker);
}