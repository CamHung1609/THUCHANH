const getAboutPage = (req, res) => {
  res.render("layout/main", {
    data: {
      title: "About Page",
      page: "about",
    },
  });
};

export { getAboutPage };
