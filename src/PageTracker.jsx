import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const pageData = {
  "/": { event: "homePageView", pageTitle: "Home Page" },
  "/cart-editor": { event: "cartEditorPageView", pageTitle: "Cart Editor Page" },
  "/sticky-cart": { event: "stickyCartPageView", pageTitle: "Sticky Cart Page" },
  "/abandoned-cart": { event: "abandonedCartPageView", pageTitle: "Abandoned Cart Page" },
  "/cart-templates": { event: "cartTemplatesPageView", pageTitle: "Cart Templates Page" },
  "/about": { event: "aboutPageView", pageTitle: "About Page" },
  "/contact": { event: "contactPageView", pageTitle: "Contact Page" },
  "/blog": { event: "blogPageView", pageTitle: "Blog Page" }
};

export default function PageTracker() {
  const location = useLocation();

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    const page = pageData[location.pathname];

    if (page) {
      window.dataLayer.push({
        event: page.event,
        pagePath: window.location.href,
        pageTitle: page.pageTitle,
        visitorType: "customer"
      });
    }
  }, [location]);

  return null;
}
