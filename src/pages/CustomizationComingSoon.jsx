import { Link, useParams } from "react-router-dom";

const occasions = {
  "mom-daughter": {
    title: "Mom & Daughter",
    subtitle: "Two generations, one beautiful bond.",
    description: "Thoughtfully coordinated looks for the moments you will treasure together.",
    icon: "bi-hearts",
    number: "01",
  },
  anniversary: {
    title: "Anniversary Special",
    subtitle: "Celebrate every chapter of your story.",
    description: "A special collection for the milestones, memories and moments worth celebrating.",
    icon: "bi-gift",
    number: "02",
  },
  haldi: {
    title: "Haldi Ceremony",
    subtitle: "A little sunshine for your big day.",
    description: "Fresh festive styles for the joyful colours and traditions of your Haldi celebration.",
    icon: "bi-brightness-high",
    number: "03",
  },
  sangeeth: {
    title: "Sangeeth Collection",
    subtitle: "Made for music, movement and memories.",
    description: "Celebrate the night with statement styles made for dancing and togetherness.",
    icon: "bi-music-note-beamed",
    number: "04",
  },
  wedding: {
    title: "Wedding Collection",
    subtitle: "Your special day deserves something special.",
    description: "A curated experience for wedding celebrations, family moments and unforgettable entrances.",
    icon: "bi-stars",
    number: "05",
  },
  birthday: {
    title: "Birthday Special",
    subtitle: "Make your day feel extra beautiful.",
    description: "Festive picks for birthday celebrations, surprises and picture-perfect memories.",
    icon: "bi-balloon-heart",
    number: "06",
  },
  sreemantham: {
    title: "Sreemantham Collection",
    subtitle: "Celebrate a beautiful new beginning.",
    description: "A graceful occasion edit for a day filled with blessings, love and family.",
    icon: "bi-flower1",
    number: "07",
  },
};

export default function CustomizationComingSoon() {
  const { occasion } = useParams();
  const item = occasions[occasion];

  if (!item) {
    return (
      <main className="lvs-custom-page">
        <section className="lvs-custom-shell">
          <div className="lvs-custom-card lvs-custom-not-found">
            <span className="lvs-custom-kicker">JABITA'S CHOICE</span>
            <h1>Occasion not found</h1>
            <p>Please choose an occasion from the Customization menu.</p>
            <Link to="/" className="lvs-custom-home-link">
              <i className="bi bi-arrow-left" /> Back to Home
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="lvs-custom-page">
      <section className="lvs-custom-shell">
        <div className="lvs-custom-breadcrumb">
          <Link to="/">Home</Link>
          <i className="bi bi-chevron-right" />
          <span>Customization</span>
          <i className="bi bi-chevron-right" />
          <strong>{item.title}</strong>
        </div>

        <div className="lvs-custom-card">
          <span className="lvs-custom-orbit lvs-custom-orbit-one" />
          <span className="lvs-custom-orbit lvs-custom-orbit-two" />

          <div className="lvs-custom-card-top">
            <span className="lvs-custom-kicker">JABITA'S CHOICE · PERSONALIZED FOR YOU</span>
            <span className="lvs-custom-number">{item.number} / 07</span>
          </div>

          <div className="lvs-custom-icon-wrap">
            <i className={`bi ${item.icon}`} />
          </div>

          <span className="lvs-custom-coming-label">
            <span className="lvs-custom-live-dot" />
            SOMETHING BEAUTIFUL IS IN THE MAKING
          </span>

          <h1>{item.title}</h1>
          <h2>{item.subtitle}</h2>
          <p>{item.description}</p>

          <div className="lvs-custom-status">
            <span className="lvs-custom-status-line" />
            <span>COMING SOON</span>
            <span className="lvs-custom-status-line" />
          </div>

          <p className="lvs-custom-note">
            We are preparing something special. Stay tuned!
          </p>

          <Link to="/" className="lvs-custom-home-link">
            <i className="bi bi-arrow-left" />
            Explore the store
          </Link>
        </div>

        <div className="lvs-custom-footer-note">
          <i className="bi bi-stars" />
          <span>Every celebration deserves its own special style.</span>
          <i className="bi bi-stars" />
        </div>
      </section>
    </main>
  );
}
