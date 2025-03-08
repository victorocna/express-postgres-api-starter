const inWhitelist = (origin, whitelist) => {
  try {
    for (const domain of whitelist) {
      // Match URL starting with protocol
      if (origin.indexOf(domain) === 0) {
        return true;
      }
    }

    return false;
  } catch {
    return false;
  }
};

export default inWhitelist;
