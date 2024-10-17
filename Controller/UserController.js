const getUserPage = (req, res) => {
  res.render("layout/main", {
    data: {
      title: "Home Page",
      page: "user",
    },
  });
};

export { getUserPage };
