const notFound = (req, res) => {
  res.status(404).json({
    name: 'Error',
    message: 'Not found',
  });
};

export default notFound;
