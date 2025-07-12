const TrackedLink = ({ href, eventName, pageTitle, children, className }) => {
  const handleClick = () => {
    if (!window.dataLayer) {
      window.dataLayer = [];
    }
    window.dataLayer.push({
      event: eventName,
      pagePath: href,
      pageTitle,
      visitorType: "customer"
    });
  };

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className} onClick={handleClick}>
      {children}
    </a>
  );
};

export default TrackedLink;
