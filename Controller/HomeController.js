const getHomePage = (req, res) => {
  res.render("layout/main", {
    data: {
      title: "Home Page",
      page: "home",
    },
  });
};

export { getHomePage };
